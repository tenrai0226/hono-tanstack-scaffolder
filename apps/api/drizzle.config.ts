import { defineConfig } from 'drizzle-kit'

import env from '@/env'

export default defineConfig({
  schema: './src/db/schema',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  // 排除 PostGIS 系统表，防止 push 时误删
  tablesFilter: ['!spatial_ref_sys'],
  extensionsFilters: ['postgis'],
  migrations: {
    table: 'my-migrations-table', // `__drizzle_migrations` by default
    schema: 'public', // used in PostgreSQL only, `drizzle` by default
  },
})
