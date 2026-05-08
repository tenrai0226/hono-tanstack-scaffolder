import type { QueryClient } from '@tanstack/react-query'
import type { Locale } from '~/lib/i18n/shared'
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import * as React from 'react'
import { Toaster } from 'sonner'
// Scaffolder 错误边界预留，如果您有自定义的组件请替换，这里用原生 fallback
import { DefaultCatchBoundary } from '~/components/errors/default-catch-boundary'
import { NotFound404 } from '~/components/errors/not-found-404'
import { DefaultPending } from '~/components/misc/default-pending'
import { IntlProvider } from '~/components/providers/intl-provider'
import { LocalizedAuthProvider } from '~/components/providers/localized-auth-provider'
import { ThemeProvider } from '~/components/providers/theme-provider'

import { getCurrentLocale } from '~/lib/i18n/client'
import { defaultLocale } from '~/lib/i18n/shared'
import appCss from '~/styles/app.css?url'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  errorComponent: props => (
    <RootDocumentForError>
      <DefaultCatchBoundary {...props} />
    </RootDocumentForError>
  ),
  notFoundComponent: () => (
    <RootDocumentForError>
      <NotFound404 />
    </RootDocumentForError>
  ),
  pendingComponent: () => (
    <RootDocumentForError>
      <DefaultPending />
    </RootDocumentForError>
  ),
  component: RootComponent,
})

import { AuthGuardModal } from '~/components/auth/AuthGuardModal'

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider>
        <IntlProvider>
          <LocalizedAuthProvider>
            <Outlet />
            <Toaster richColors position="top-right" />
            <AuthGuardModal />
          </LocalizedAuthProvider>
        </IntlProvider>
      </ThemeProvider>
    </RootDocument>
  )
}

/**
 * 专用于错误和 404 页面的根文档。
 * 在 SSR 期间发生错误时，如果试图执行动态 Locale 探测（getCurrentLocale），
 * 很容易发生 Context 缺失或引发 Hydration 失败。
 * 所以错误页严格使用 defaultLocale 兜底。
 */
function RootDocumentForError({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <React.Suspense fallback={<div>Loading...</div>}>
          {children}
        </React.Suspense>
        <Scripts />
      </body>
    </html>
  )
}

/**
 * 正常页面的根文档，负责执行正常的国际化探嗅。
 */
function RootDocument({ children }: { children: React.ReactNode }) {
  let locale: Locale = defaultLocale
  try {
    locale = getCurrentLocale()
  }
  catch (e) {
    // Ignore
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <React.Suspense fallback={<div>Loading...</div>}>
          {children}
        </React.Suspense>
        <Scripts />
      </body>
    </html>
  )
}
