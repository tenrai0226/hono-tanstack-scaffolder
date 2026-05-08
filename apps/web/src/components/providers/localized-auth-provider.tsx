import type { Messages } from '~/lib/i18n/messages'
import type { Locale } from '~/lib/i18n/shared'
import { AuthProvider } from '@better-auth-ui/heroui'
import { ToastProvider } from '@heroui/react'
import * as Sentry from '@sentry/react'
import { Link, useNavigate } from '@tanstack/react-router'

import { useTheme } from 'next-themes'
import * as React from 'react'
import { useLocale, useMessages } from 'use-intl'
import { getBetterAuthLocalization } from '~/lib/i18n/auth-localization'
import { authClient } from '~/utils/auth'

export function LocalizedAuthProvider({ children }: { children: React.ReactNode }) {
  const navigateFn = useNavigate()
  const { theme, setTheme } = useTheme()
  const locale = useLocale() as Locale
  const messages = useMessages() as Messages
  
  const { data } = authClient.useSession()

  React.useEffect(() => {
    if (data?.user) {
      Sentry.setUser({ id: data.user.id })
    } else {
      Sentry.setUser(null)
    }
  }, [data?.user])

  // Extract auth messages from use-intl configuration
  const localization = React.useMemo(() => {
    try {
      const loc = getBetterAuthLocalization(messages, locale)
      return loc
    }
    catch (error) {
      Sentry.captureException(error, { extra: { source: 'auth_localization' } })
      return undefined
    }
  }, [messages, locale])

  // Adapter for navigate to match expected signature
  const handleNavigate = React.useCallback((options: { to: string, replace?: boolean }) => {
    navigateFn({ to: options.to as any, replace: options.replace })
  }, [navigateFn])

  const AuthLink = React.useMemo(() => {
    return ({ ref, href, to, className, children, ...props }: { href: string, className?: string, children?: React.ReactNode, to?: string } & { ref?: React.RefObject<HTMLAnchorElement | null> }) => {
      return (
        <Link
          ref={ref}
          to={(to || href) as any}
          className={className}
          {...(props as any)}
        >
          {children}
        </Link>
      )
    }
  }, [])

  return (
    <AuthProvider
      authClient={authClient as any}
      // @ts-expect-error type mismatch with better-auth-ui
      appearance={{ theme: theme as any, setTheme }}
      localization={localization as any}
      redirectTo="/dashboard"
      navigate={handleNavigate as any}
      basePaths={{ auth: '/auth', settings: '/settings', organization: '/organization' }}
      viewPaths={{
        SIGN_IN: 'sign-in',
        SIGN_UP: 'sign-up',
        FORGOT_PASSWORD: 'forgot-password',
        RESET_PASSWORD: 'reset-password',
      } as any}
    >
      {children}
      <ToastProviderAdapter />
    </AuthProvider>
  )
}

function ToastProviderAdapter() {
  return <ToastProvider />
}
