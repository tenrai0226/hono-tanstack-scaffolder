import { Auth } from '@better-auth-ui/heroui'
import { viewPaths } from '@better-auth-ui/core'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { z } from 'zod'
import { PublicLayout } from '~/components/layout/public-layout'

const VALID_AUTH_PATHS = ['sign-in', 'sign-up', 'forgot-password', 'reset-password', 'verify-email']

export const Route = createFileRoute('/auth/$pathname')({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  beforeLoad({ params: { pathname } }) {
    if (!Object.values(viewPaths.auth).includes(pathname)) {
      throw notFound()
    }
  },
  component: AuthPage,
})

function AuthPage() {
  const { pathname } = Route.useParams()

  // 映射 kbab-case 到 camelCase (如 'sign-in' -> 'signIn')
  const viewKey = pathname.replace(/-([a-z])/g, (_, group1) => group1.toUpperCase())

  return (
    <PublicLayout>
      <div className="container mx-auto flex min-h-[calc(100vh-128px)] flex-col items-center justify-center p-4">
        <Auth view={viewKey as any} path={pathname} />
      </div>
    </PublicLayout>
  )
}
