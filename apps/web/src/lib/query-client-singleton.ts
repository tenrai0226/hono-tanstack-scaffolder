import type { SessionData } from '~/lib/session-query'
import * as Sentry from '@sentry/react'
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { AUTH_ROUTES, getAuthRoute } from '~/lib/auth/routes'
import { SESSION_QUERY_KEY } from '~/lib/session-query'
import { CACHE_CONFIG } from './cache-config'

function isUnauthorizedError(error: unknown): boolean {
  if (!error || typeof error !== 'object')
    return false

  if ('message' in error && typeof error.message === 'string') {
    if (error.message.includes('Unauthorized'))
      return true
  }

  if (
    'response' in error
    && error.response
    && typeof error.response === 'object'
    && 'status' in error.response
  ) {
    return Number(error.response.status) === 401
  }

  return false
}

function redirectToSignIn() {
  if (typeof window === 'undefined')
    return

  const signInPath = getAuthRoute(AUTH_ROUTES.signIn)
  if (window.location.pathname.startsWith('/auth'))
    return

  const redirect = encodeURIComponent(window.location.href)
  window.location.assign(`${signInPath}?redirect=${redirect}`)
}

function hasSession(queryClient: QueryClient): boolean {
  const data = queryClient.getQueryData(SESSION_QUERY_KEY) as SessionData | undefined
  return !!data?.session
}

let queryClientInstance: QueryClient | null = null

export function getQueryClient(): QueryClient {
  if (queryClientInstance) {
    return queryClientInstance
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: CACHE_CONFIG.session.staleTime,
        gcTime: CACHE_CONFIG.session.gcTime,
        refetchOnWindowFocus: import.meta.env.PROD,
        retry: (failureCount, error) => {
          if (import.meta.env.DEV) {
            console.warn({ failureCount, error })
          }
          else {
            Sentry.addBreadcrumb({
              category: 'query_retry',
              message: 'Query failed and will retry or fail',
              level: 'warning',
              data: { failureCount, error_message: error instanceof Error ? error.message : String(error) },
            })
          }

          if (failureCount >= 0 && import.meta.env.DEV)
            return false
          if (failureCount > 3 && import.meta.env.PROD)
            return false

          if (error && typeof error === 'object') {
            if (
              'message' in error
              && typeof error.message === 'string'
              && error.message.includes('Unauthorized')
            ) {
              return false
            }

            if (
              'response' in error
              && error.response
              && typeof error.response === 'object'
              && 'status' in error.response
              && [401, 403].includes(Number(error.response.status))
            ) {
              return false
            }
          }

          return true
        },
      },
    },
    queryCache: new QueryCache({
      onError: (error) => {
        if (!isUnauthorizedError(error))
          return
        if (!hasSession(queryClient)) {
          redirectToSignIn()
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        if (!isUnauthorizedError(error))
          return
        if (!hasSession(queryClient)) {
          redirectToSignIn()
        }
      },
    }),
  })

  queryClientInstance = queryClient
  return queryClientInstance
}
