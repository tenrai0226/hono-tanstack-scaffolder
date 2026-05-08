import type { QueryClient } from '@tanstack/react-query'
import * as Sentry from '@sentry/react'
import { queryOptions } from '@tanstack/react-query'
import { CACHE_CONFIG } from '~/lib/cache-config'
import { createJwtTokenData, JWT_TOKEN_QUERY_KEY } from '~/lib/jwt-utils'
import { getServerRequest } from '~/lib/server-request'
import { authClient, BETTER_AUTH_URL } from '~/utils/auth'

export const SESSION_QUERY_KEY = ['session'] as const

export interface SessionData {
  session: any | null
  user: any | null
  jwtToken?: string
}

async function getSessionFromServer(request: Request): Promise<SessionData> {
  try {
    const headers = new Headers()
    const cookie = request.headers.get('Cookie')
    if (cookie)
      headers.set('Cookie', cookie)

    const userAgent = request.headers.get('User-Agent')
    if (userAgent)
      headers.set('User-Agent', userAgent)

    const response = await fetch(`${BETTER_AUTH_URL}/get-session`, {
      method: 'GET',
      headers,
    })

    if (!response.ok) {
      return { session: null, user: null }
    }

    const data = await response.json()
    const jwtFromHeader = response.headers.get('set-auth-jwt')

    return {
      session: data?.session || null,
      user: data?.user || null,
      jwtToken: jwtFromHeader || undefined,
    }
  }
  catch (error) {
    Sentry.captureException(error, { extra: { source: 'ssr_session' } })
    return { session: null, user: null }
  }
}

export function createSessionQuery(queryClient?: QueryClient) {
  return queryOptions<SessionData>({
    queryKey: SESSION_QUERY_KEY,
    throwOnError: false,
    queryFn: async () => {
      const request = getServerRequest()

      if (request) {
        const sessionData = await getSessionFromServer(request)
        if (sessionData.jwtToken && queryClient) {
          const jwtData = createJwtTokenData(sessionData.jwtToken)
          queryClient.setQueryData([JWT_TOKEN_QUERY_KEY], jwtData)
        }
        return sessionData
      }

      let jwtToken: string | null = null
      const { data, error } = await authClient.getSession({
        fetchOptions: {
          onSuccess: (ctx) => {
            const jwtFromHeader = ctx.response.headers.get('set-auth-jwt')
            if (jwtFromHeader) {
              jwtToken = jwtFromHeader
              if (queryClient) {
                const jwtData = createJwtTokenData(jwtFromHeader)
                queryClient.setQueryData([JWT_TOKEN_QUERY_KEY], jwtData)
              }
            }
          },
        },
      })

      if (error) {
        throw new Error(error.message || 'Failed to get session')
      }

      return {
        session: data?.session || null,
        user: data?.user || null,
        jwtToken: jwtToken || undefined,
      }
    },
    staleTime: CACHE_CONFIG.session.staleTime,
    gcTime: CACHE_CONFIG.session.gcTime,
  })
}
