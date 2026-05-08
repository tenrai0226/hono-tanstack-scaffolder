import { Button, Card } from '@heroui/react'
import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { useTranslations } from 'use-intl'
import { LocalizedLink } from '~/components/common/localized-link'
import { seo } from '~/utils/seo'
import { getPageMeta } from '~/utils/seo-meta'

export const Route = createFileRoute('/{-$locale}/_public/')({
  head: ({ params }: any) => {
    const locale = params.locale
    const meta = getPageMeta('/', locale)
    return seo({
      ...meta,
      pathname: '/',
      locale,
    })
  },
  component: HomePage,
})

function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <main>
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          {t('title') || 'Welcome to Scaffolder'}
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-10 px-4">
          {t('subtitle') || 'A clean Hono + TanStack Start template'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <LocalizedLink to="/admin" className="block">
            <Button size="lg" className="font-bold px-8">
              Go to Admin
            </Button>
          </LocalizedLink>
        </div>
      </section>

      <section className="pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-6 max-w-4xl mx-auto">
        <Card className="p-6">
          <Card.Header className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xl">⚡️</div>
            <p className="text-lg font-bold">Fast by default</p>
          </Card.Header>
          <Card.Content>
            <p className="text-stone-500 text-sm">Powered by Vite and Cloudflare Workers.</p>
          </Card.Content>
        </Card>

        <Card className="p-6">
          <Card.Header className="flex flex-col gap-2">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-xl">🔒</div>
            <p className="text-lg font-bold">Secure</p>
          </Card.Header>
          <Card.Content>
            <p className="text-stone-500 text-sm">Integrated with Better Auth for complete type safety and security.</p>
          </Card.Content>
        </Card>
      </section>
    </main>
  )
}