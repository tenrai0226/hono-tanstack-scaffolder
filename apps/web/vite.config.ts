import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

import { sentryVitePlugin } from '@sentry/vite-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
  server: {
    port: 4456,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: [
      { find: /^@\/db\/(.*)$/, replacement: path.resolve(__dirname, '../api/src/db/$1') },
      { find: /^~(?=\/)/, replacement: path.resolve(__dirname, './src') },
      { find: /^@(?=\/)/, replacement: path.resolve(__dirname, './src') },
      { find: /^node:stream\/web$/, replacement: path.resolve(__dirname, 'src/stubs/node-stream-web.ts') },
      { find: /^node:stream$/, replacement: path.resolve(__dirname, 'src/stubs/node-stream.ts') },
      { find: /^node:async_hooks$/, replacement: path.resolve(__dirname, 'src/stubs/node-async-hooks.ts') },
      { find: /^node:http$/, replacement: path.resolve(__dirname, 'src/stubs/node-http.ts') },
      { find: /^node:https$/, replacement: path.resolve(__dirname, 'src/stubs/node-https.ts') },
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    ...(mode === 'production' 
      ? [
          cloudflare({ viteEnvironment: { name: 'ssr' } }),
          sentryVitePlugin({
            org: 'japan-fushou-ltdco',
            project: 'scaffolder-web',
            authToken: process.env.SENTRY_AUTH_TOKEN,
            telemetry: false,
            sourcemaps: {
              filesToDeleteAfterUpload: ['**/*.map'],
            },
          })
        ] 
      : []),
    tanstackStart(),
    viteReact(),
  ],
}))
