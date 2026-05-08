import { Button, Card } from '@heroui/react'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { FileText, Heart, Settings } from 'lucide-react'
import * as React from 'react'
import { LocalizedLink } from '~/components/common/localized-link'
import { PublicLayout } from '~/components/layout/public-layout'
import { AUTH_ROUTES, getAuthRoute } from '~/lib/auth/routes'
import { createSessionQuery } from '~/lib/session-query'

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ context, location }) => {
    // Force session data load
    const session = await context.queryClient.ensureQueryData(
      createSessionQuery(context.queryClient),
    )

    // Redirect to login if not authenticated
    if (!session?.session) {
      throw redirect({
        to: getAuthRoute(AUTH_ROUTES.signIn) as any,
        search: ((prev: any) => ({ ...prev, redirect: location.href })) as any,
      })
    }

    return { session, user: session.user }
  },
  component: DashboardPage,
})

function DashboardPage() {
  const { user } = Route.useRouteContext()

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Welcome back
            {user?.name ? `, ${user.name}` : ''}
            !
          </h1>
          <p className="text-lg text-stone-500">
            Manage your saved Hyakumeiten restaurants and personal dining notes here.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
            <Card.Header className="flex flex-col items-start gap-2 pb-2">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <Card.Title className="text-xl font-bold">Saved Restaurants</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-stone-500 text-sm mb-6">
                You haven't saved any restaurants yet. Start exploring the map to find your next meal!
              </p>
              <LocalizedLink to="/discovery" className="block w-full">
                <Button className="w-full font-medium">
                  Go to Map
                </Button>
              </LocalizedLink>
            </Card.Content>
          </Card>

          <Card className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
            <Card.Header className="flex flex-col items-start gap-2 pb-2">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mb-2">
                <FileText className="w-5 h-5" />
              </div>
              <Card.Title className="text-xl font-bold">My Notes</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-stone-500 text-sm mb-6">
                Personal notes, tags, and dining experiences will appear here once you add them to your saved locations.
              </p>
              <Button variant="ghost" isDisabled className="w-full font-medium bg-stone-100 dark:bg-stone-800">
                View Notes
              </Button>
            </Card.Content>
          </Card>

          <Card className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
            <Card.Header className="flex flex-col items-start gap-2 pb-2">
              <div className="w-10 h-10 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-full flex items-center justify-center mb-2">
                <Settings className="w-5 h-5" />
              </div>
              <Card.Title className="text-xl font-bold">Account Settings</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-stone-500 text-sm mb-6">
                Manage your language preferences, linked accounts, and profile details.
              </p>
              <Button variant="ghost" className="w-full font-medium bg-stone-100 dark:bg-stone-800">
                Edit Profile
              </Button>
            </Card.Content>
          </Card>
        </div>
      </div>
    </PublicLayout>
  )
}
