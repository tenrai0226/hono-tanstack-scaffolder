import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, jwt, openAPI } from 'better-auth/plugins'

import { db } from '@/db'
import env from '@/env'
import { USER_ROLES } from './types'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  advanced: {
    cookiePrefix: 'scaffolder-session',
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 分钟
      strategy: 'compact',
    },
  },
  plugins: [
    admin({
      defaultRole: USER_ROLES.USER,
      defaultAdminRoles: [USER_ROLES.ADMIN],
    }),
    openAPI(),
    jwt({
      jwt: {
        definePayload: ({ user, session }) => {
          return {
            ...user,
            sessionId: session.id,
          }
        },
        expirationTime: '1h',
        issuer: (env.API_URL || 'http://localhost:9999').replace(/\/+$/, ''),
        audience: (env.API_URL || 'http://localhost:9999').replace(/\/+$/, ''),
      },
    }),
  ],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  baseURL: (env.API_URL || 'http://localhost:9999').replace(/\/+$/, ''),
  basePath: '/api/auth',
  trustedOrigins: [(env.APP_URL || 'http://localhost:3000').replace(/\/+$/, '')],
})
