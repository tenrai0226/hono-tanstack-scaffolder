import type { AppBindings, AppContext } from '@/lib/types'
import { createHash, timingSafeEqual } from 'node:crypto'
import { createMiddleware } from 'hono/factory'
import { jwk } from 'hono/jwk'

import * as HttpStatusCodes from 'stoker/http-status-codes'
import env from '@/env'
import { auth } from '@/lib/auth'
import { AuthError, createErrorResponse, ERROR_CODES } from '@/lib/errors'
import { isAdmin } from '@/lib/role'
import { APP_BINDING_KEYS, USER_ROLES } from '@/lib/types'

const apiBase = (env.API_URL || 'http://localhost:9999').replace(/\/+$/, '')
const JWKS_URL = `${apiBase}/api/auth/jwks`

const JWKS_CACHE_TTL_MS = (env.JWKS_CACHE_TTL_SECONDS ?? 300) * 1000
let jwksCache: { keys: any[], expiresAt: number } | null = null

function invalidateJwksCache(): void {
  jwksCache = null
}

async function getJwksKeys(): Promise<any[]> {
  if (jwksCache && jwksCache.expiresAt > Date.now()) {
    return jwksCache.keys
  }
  const response = await fetch(JWKS_URL, { cache: 'default' })
  if (!response.ok) {
    throw new Error(`failed to fetch JWKS from ${JWKS_URL}: ${response.status}`)
  }
  const data = await response.json() as { keys?: any[] }
  if (!data.keys || !Array.isArray(data.keys)) {
    throw new Error('invalid JWKS response: "keys" missing or not an array')
  }
  jwksCache = {
    keys: data.keys,
    expiresAt: Date.now() + JWKS_CACHE_TTL_MS,
  }
  return jwksCache.keys
}

const jwtVerifier = jwk({
  keys: () => getJwksKeys(),
  alg: ['EdDSA', 'ES256', 'ES512', 'PS256', 'RS256'],
})

/**
 * 常量时间比较两个 token 字符串，防止时序侧信道攻击。
 * 通过先 SHA-256 哈希使两侧长度相同，再用 timingSafeEqual 比较。
 */
function safeTokenCompare(a: string, b: string): boolean {
  const bufA = createHash('sha256').update(a).digest()
  const bufB = createHash('sha256').update(b).digest()
  return timingSafeEqual(bufA, bufB)
}

export const authMiddleware = createMiddleware<AppBindings>(async (c, next) => {
  const authHeader = c.req.header('Authorization')
  const token = authHeader?.replace('Bearer ', '')

  const logger = c.get(APP_BINDING_KEYS.LOGGER)

  if (!token) {
    return c.json(
      createErrorResponse(ERROR_CODES.AUTH_UNAUTHORIZED),
      HttpStatusCodes.UNAUTHORIZED,
    )
  }

  // M2M Backend Validation for Scraper/Uploader
  // 使用 timingSafeEqual 防止时序侧信道攻击 (Timing Attack)
  if (env.BEARER_TOKEN && safeTokenCompare(token, env.BEARER_TOKEN)) {
    c.set(APP_BINDING_KEYS.USER_ID, 'system-uploader')
    c.set(APP_BINDING_KEYS.USER_ROLE, USER_ROLES.ADMIN as any)
    c.set(APP_BINDING_KEYS.SESSION_ID, 'system-m2m')
    return await next()
  }

  try {
    await jwtVerifier(c, async () => {
      const payload = (c as any).get('jwtPayload') as unknown as {
        id: string
        email: string
        role?: string
        sessionId?: string
        [key: string]: any
      }
      if (!payload) {
        throw new AuthError(ERROR_CODES.AUTH_INVALID_TOKEN, 'Invalid JWT payload')
      }

      if (!payload.sessionId) {
        throw new AuthError(ERROR_CODES.AUTH_MISSING_SESSION_ID, 'JWT missing sessionId')
      }

      const userRole = payload.role === USER_ROLES.ADMIN
        ? USER_ROLES.ADMIN
        : payload.role === USER_ROLES.PREMIUM ? USER_ROLES.PREMIUM : USER_ROLES.USER

      c.set(APP_BINDING_KEYS.USER_ID, payload.id)
      c.set(APP_BINDING_KEYS.USER_ROLE, userRole as any)
      c.set(APP_BINDING_KEYS.SESSION_ID, payload.sessionId)
    })

    return await next()
  }
  catch (error) {
    if (error instanceof AuthError) {
      return c.json(
        createErrorResponse(error.code, { message: error.message }),
        HttpStatusCodes.UNAUTHORIZED,
      )
    }

    // 回退到 session 检查（针对某些不带 Bearer 的请求）
    try {
      const session = await auth.api.getSession({ headers: c.req.raw.headers })
      if (session && session.user && session.session) {
        const userRole = session.user.role === USER_ROLES.ADMIN ? USER_ROLES.ADMIN : USER_ROLES.USER
        c.set(APP_BINDING_KEYS.USER_ID, session.user.id)
        c.set(APP_BINDING_KEYS.USER_ROLE, userRole as any)
        c.set(APP_BINDING_KEYS.SESSION_ID, session.session.id)
        return await next()
      }
    }
    catch (fallbackError) {
      logger.debug({ fallbackError }, 'Fallback session validation failed')
    }

    invalidateJwksCache()
    return c.json(
      createErrorResponse(ERROR_CODES.AUTH_INVALID_TOKEN, {
        message: error instanceof Error ? error.message : 'Authentication failed',
      }),
      HttpStatusCodes.UNAUTHORIZED,
    )
  }
})

export const adminOnly = createMiddleware<AppBindings>(async (c, next) => {
  if (!isAdmin(c as AppContext)) {
    return c.json(
      createErrorResponse(ERROR_CODES.AUTH_FORBIDDEN),
      HttpStatusCodes.FORBIDDEN,
    )
  }
  await next()
})
