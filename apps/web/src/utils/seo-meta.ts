import type { Locale } from '~/lib/i18n/shared'

interface PageMeta {
  title: string
  description: string
}

export function getPageMeta(pathname: string, locale?: string): PageMeta {
  // Return generic scaffolder metas
  return { 
    title: 'Scaffolder — Full-Stack Edge-Native Scaffolder', 
    description: 'A modern, type-safe full-stack scaffolder based on Hono and TanStack Start.' 
  }
}
