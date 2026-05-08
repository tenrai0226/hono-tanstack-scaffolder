import { adminClient, jwtClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'

// Better Auth 服务端 URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9999'
export const BETTER_AUTH_URL = import.meta.env.VITE_BETTER_AUTH_URL || `${API_BASE_URL}/api/auth`

export const authClient = createAuthClient({
  baseURL: BETTER_AUTH_URL,
  plugins: [
    adminClient(),
    jwtClient(),
  ],
})
