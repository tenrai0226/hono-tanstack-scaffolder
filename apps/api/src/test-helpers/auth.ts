/**
 * 测试认证辅助工具
 * 用于在测试中通过 Better Auth API 创建用户、获取 token 和清理用户数据
 */

import { eq } from 'drizzle-orm'
import { testClient } from 'hono/testing'

import app from '@/app'
import { users } from '@/db/schema'
import { createTestApp } from '@/lib/create-app'
import { USER_ROLES } from '@/lib/types'

import { cleanupUserTestData, createTestDb } from './db'

/**
 * 核心逻辑：为了测试稳定性，认证（创建用户/获取 Token）逻辑始终使用 in-process 客户端。
 * 这样做可以避免 Origin/CSRF 校验失败以及网络延迟，同时由于测试环境和开发服务器共享数据库与密钥，
 * 在进程内生成的 Token 和 Session 依然对真实运行的服务器有效。
 */
const inProcessAppClient = testClient(createTestApp(app as any)) as any

/**
 * 测试用户信息
 */
export interface TestUser {
  userId: string
  email: string
  token: string
  role: string
}

/**
 * 从响应中提取 token
 */
async function extractTokenFromResponse(response: Response): Promise<string | null> {
  // 方法 1: 从 Set-Cookie header 获取 session，然后调用 /api/auth/token
  const setCookie = response.headers.get('set-cookie')
  if (setCookie) {
    try {
      const tokenResponse = await inProcessAppClient.api.auth.token.$get({
        header: {
          cookie: setCookie,
        },
      })

      if (tokenResponse.status === 200) {
        const tokenData = await tokenResponse.json()
        return tokenData.token || tokenData.accessToken || tokenData.jwt || (typeof tokenData === 'string' ? tokenData : null)
      }
    }
    catch {
      // 忽略错误
    }
  }

  // 方法 2: 从响应 body 中获取
  try {
    const data = await response.json()
    return data.token || data.session?.token || data.accessToken || data.jwt || null
  }
  catch {
    // 忽略错误
  }

  return null
}

/**
 * 通过邮箱清理用户及其相关数据
 */
async function cleanupUserByEmail(email: string): Promise<void> {
  const db = createTestDb()
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  if (user) {
    await cleanupUserTestData(user.id)
  }
}

/**
 * 尝试登录并获取用户信息和 token
 */
async function tryLoginAndGetUser(
  email: string,
  password: string,
): Promise<TestUser | null> {
  const loginResponse = await inProcessAppClient.api.auth['sign-in'].email.$post({
    json: {
      email,
      password,
    },
  })

  if (loginResponse.status !== 200) {
    return null
  }

  const token = await extractTokenFromResponse(loginResponse)
  if (!token) {
    return null
  }

  try {
    const userInfo = await getUserInfoFromToken(token)
    return {
      userId: userInfo.id,
      email,
      token,
      role: userInfo.role || USER_ROLES.USER,
    }
  }
  catch {
    const db = createTestDb()
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    })
    if (user) {
      return {
        userId: user.id,
        email,
        token,
        role: user.role || USER_ROLES.USER,
      }
    }
    return null
  }
}

/**
 * 通过 Better Auth API 创建测试用户并获取 JWT token
 */
export async function createTestUserViaAuth(
  email: string,
  password: string = 'test-password-123',
  name?: string,
): Promise<TestUser> {
  const existingUser = await tryLoginAndGetUser(email, password)
  if (existingUser) {
    return existingUser
  }

  await cleanupUserByEmail(email)

  const signUpResponse = await inProcessAppClient.api.auth['sign-up'].email.$post({
    json: {
      email,
      password,
      name: name || `Test User ${email}`,
    },
  })

  if (signUpResponse.status === 200 || signUpResponse.status === 201) {
    const token = await extractTokenFromResponse(signUpResponse)
    if (token) {
      try {
        const userInfo = await getUserInfoFromToken(token)
        return {
          userId: userInfo.id,
          email,
          token,
          role: userInfo.role || USER_ROLES.USER,
        }
      }
      catch (e) {
        console.warn('Failed to get user info from sign-up token, trying login:', e)
      }
    }

    const loginUser = await tryLoginAndGetUser(email, password)
    if (loginUser) {
      return loginUser
    }
  }
  else {
    const errorText = await signUpResponse.text()
    console.error(`Better Auth sign-up failed for ${email}. Status: ${signUpResponse.status}. Error: ${errorText}`)
  }

  throw new Error(`Failed to create test user via Better Auth for ${email} (Status: ${signUpResponse.status})`)
}

/**
 * 从 token 中获取用户信息 (不验证签名)
 */
async function getUserInfoFromToken(token: string): Promise<{ id: string, email: string, role?: string }> {
  try {
    const parts = token.split('.')
    if (parts.length === 3) {
      const base64Url = parts[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join(''),
      )
      const payload = JSON.parse(jsonPayload)

      if (payload.id || payload.sub) {
        return {
          id: payload.id || payload.sub,
          email: payload.email || '',
          role: payload.role,
        }
      }
    }
  }
  catch {
    // 解析失败
  }

  throw new Error('Failed to extract user info from token')
}

/**
 * 更新测试用户的角色
 */
export async function updateTestUserRole(userId: string, role: string): Promise<void> {
  const db = createTestDb()
  await db.update(users).set({ role }).where(eq(users.id, userId))
}

/**
 * 更新测试用户的角色并重新获取 token
 */
export async function updateTestUserRoleAndRefreshToken(
  user: TestUser,
  role: string,
): Promise<TestUser> {
  await updateTestUserRole(user.userId, role)

  const loginResponse = await inProcessAppClient.api.auth['sign-in'].email.$post({
    json: {
      email: user.email,
      password: 'test-password-123',
    },
  })

  if (loginResponse.status === 200) {
    const token = await extractTokenFromResponse(loginResponse)
    if (token) {
      return {
        ...user,
        token,
        role,
      }
    }
  }

  return {
    ...user,
    role,
  }
}

/**
 * 创建测试用的认证头部
 */
export function createAuthHeader(token: string | null | undefined): string {
  if (!token) {
    throw new Error('Token is not available. Make sure to call createTestUserViaAuth in beforeAll.')
  }
  return `Bearer ${token}`
}

/**
 * 创建管理员认证头部
 */
export function createAdminAuthHeader(token: string | null | undefined): string {
  return createAuthHeader(token)
}
