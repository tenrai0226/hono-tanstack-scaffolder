import type { ExecutionContext } from '@cloudflare/workers-types'
import * as Sentry from '@sentry/cloudflare'

// Cloudflare Workers 入口（通过 Sentry.withSentry 包裹实现生产异常自动捕获）
export default Sentry.withSentry(
  (env: Env) => ({
    dsn: env.SENTRY_DSN?.replace(/^["']|["']$/g, '') || '',
    tracesSampleRate: 0.1, // 生产环境 10% 采样，控制免费额度用量
    release: env.SENTRY_RELEASE,
    environment: env.NODE_ENV || 'production',
  }),
  {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
      // 将环境变量注入到 globalThis，供 env.ts 使用
      if (env) {
        (globalThis as any).DATABASE_URL = env.DATABASE_URL;
        (globalThis as any).BETTER_AUTH_SECRET = env.BETTER_AUTH_SECRET;
        (globalThis as any).NODE_ENV = env.NODE_ENV || 'production';
        (globalThis as any).LOG_LEVEL = env.LOG_LEVEL || 'info';
        (globalThis as any).API_URL = env.API_URL;
        (globalThis as any).APP_URL = env.APP_URL;
        (globalThis as any).MAINTENANCE_MODE = env.MAINTENANCE_MODE;
        (globalThis as any).BEARER_TOKEN = env.BEARER_TOKEN
      }

      // 延迟导入 app，确保环境变量已设置
      const { default: app } = await import('./app')
      return app.fetch(request, env, ctx)
    },
  },
)

// 定义环境变量类型
export interface Env {
  DATABASE_URL: string
  BETTER_AUTH_SECRET: string
  NODE_ENV?: string
  LOG_LEVEL?: string
  API_URL?: string
  APP_URL?: string
  MAINTENANCE_MODE?: boolean
  BEARER_TOKEN?: string
  SENTRY_DSN?: string
  SENTRY_RELEASE?: string
}

