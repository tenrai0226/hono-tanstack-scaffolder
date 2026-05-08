import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { AdminLayout } from '~/components/layout/admin-layout'
import { AUTH_ROUTES, getAuthRoute } from '~/lib/auth/routes'
import { createSessionQuery } from '~/lib/session-query'

export const Route = createFileRoute('/admin')({
  beforeLoad: async ({ context, location }) => {
    // 强制获取 session 数据
    const session = await context.queryClient.ensureQueryData(
      createSessionQuery(context.queryClient),
    )

    // 如果未登录，重定向到登录页
    if (!session?.session) {
      throw redirect({
        to: getAuthRoute(AUTH_ROUTES.signIn) as any,
        search: {
          redirect: location.href,
        } as any,
      })
    }

    // 这里可以进一步检查角色是否为 admin
    // if (session.user?.role !== 'admin') { ... }

    return {
      session,
    }
  },
  component: AdminLayoutComponent,
})

function AdminLayoutComponent() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}
