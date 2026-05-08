import type { AppType } from 'api/client'
import * as Sentry from '@sentry/react'
import { hc } from 'hono/client'
import { createJwtTokenData, JWT_TOKEN_QUERY_KEY } from '~/lib/jwt-utils'
import { getQueryClient } from '~/lib/query-client-singleton'
import { SESSION_QUERY_KEY } from '~/lib/session-query'
import { authClient } from '~/utils/auth'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9999'

async function getJwtToken(): Promise<string | null> {
  try {
    const queryClient = getQueryClient()
    const cached = queryClient.getQueryData([JWT_TOKEN_QUERY_KEY]) as
      | { token: string, expiresAt: number | null }
      | undefined

    if (cached?.token) {
      if (!cached.expiresAt || cached.expiresAt > Date.now()) {
        return cached.token
      }
      queryClient.removeQueries({ queryKey: [JWT_TOKEN_QUERY_KEY] })
    }

    const response = await authClient.token()
    if (!response.error && response.data?.token) {
      const jwtData = createJwtTokenData(response.data.token)
      queryClient.setQueryData([JWT_TOKEN_QUERY_KEY], jwtData)
      return jwtData.token
    }

    const { data: sessionData } = await authClient.getSession({
      fetchOptions: {
        onSuccess: (ctx) => {
          const jwtFromHeader = ctx.response.headers.get('set-auth-jwt')
          if (jwtFromHeader && queryClient) {
            const jwtData = createJwtTokenData(jwtFromHeader)
            queryClient.setQueryData([JWT_TOKEN_QUERY_KEY], jwtData)
          }
        },
      },
    })

    const afterSession = queryClient.getQueryData([JWT_TOKEN_QUERY_KEY]) as
      | { token: string }
      | undefined
    if (afterSession?.token) {
      return afterSession.token
    }

    if (typeof window !== 'undefined' && !sessionData?.session) {
      queryClient.removeQueries({ queryKey: [JWT_TOKEN_QUERY_KEY] })
      queryClient.removeQueries({ queryKey: SESSION_QUERY_KEY })
    }
    return null
  }
  catch (error) {
    Sentry.captureException(error, { extra: { source: 'get_jwt_token' } })
    return null
  }
}

export type Client = ReturnType<typeof hc<AppType>>

export function hcWithType(...args: Parameters<typeof hc>): Client {
  return hc<AppType>(...args)
}

async function globalInterceptorFetch(input: RequestInfo | URL, init?: RequestInit) {
  const response = await fetch(input, init)
  if (!response.ok) {
    const apiRequestId = response.headers.get('X-Request-Id')
    Sentry.addBreadcrumb({
      category: 'api_call',
      message: `API request failed: ${response.status}`,
      level: 'error',
      data: { api_request_id: apiRequestId, url: input.toString(), status: response.status },
    })
  }
  return response
}

async function authenticatedFetch(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const token = await getJwtToken()

  if (!token) {
    if (typeof window === 'undefined') {
      return new Response(
        JSON.stringify({ error: { issues: [{ code: 'auth_unauthorized', message: 'SSR Unauthorized' }] } }),
        { status: 401, headers: { 'Content-Type': 'application/json' } },
      )
    }
    throw new Error('Unauthorized: No valid JWT token available.')
  }

  const headers = new Headers(init?.headers)
  headers.set('Authorization', `Bearer ${token}`)

  return globalInterceptorFetch(input, {
    ...init,
    headers,
  })
}

export function createAuthenticatedFetch(signal?: AbortSignal) {
  if (!signal) {
    return authenticatedFetch
  }
  return (input: RequestInfo | URL, init?: RequestInit) =>
    authenticatedFetch(input, {
      ...init,
      signal,
    })
}

export const apiClient = hcWithType(API_BASE_URL, {
  fetch: globalInterceptorFetch,
})

export const authApiClient = hcWithType(API_BASE_URL, {
  fetch: createAuthenticatedFetch(),
})
