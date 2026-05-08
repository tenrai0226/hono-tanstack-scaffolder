import { z } from 'zod'

// 检测是否在 Cloudflare Workers 环境
// 注意：开启 nodejs_compat 后会注入 process，所以需要通过 navigator.userAgent 来更准确地判断
const isWorkers = typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers'

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
  DATABASE_URL: z.string().url(),
  DATABASE_AUTH_TOKEN: z.string().optional(),

  // 系统维护模式开关
  MAINTENANCE_MODE: z.string().optional().default('false').transform(v => v === 'true'),

  BETTER_AUTH_SECRET: z.string().min(32).optional(),

  API_URL: z
    .url()
    .optional()
    .transform((s): string | undefined => (s ? s.replace(/\/+$/, '') : s)),
  APP_URL: z
    .url()
    .optional()
    .transform((s): string | undefined => (s ? s.replace(/\/+$/, '') : s)),

  // Agent 认证配置 (供 Uploader 使用)
  BEARER_TOKEN: z.string().optional(),

  // JWKS 内存缓存 TTL（秒）
  JWKS_CACHE_TTL_SECONDS: z.coerce.number().min(60).max(86400).optional().default(3600),
})
  .superRefine((input, ctx) => {
    if (input.NODE_ENV === 'production') {
      if (!input.BETTER_AUTH_SECRET) {
        ctx.addIssue({
          code: 'invalid_type',
          expected: 'string',
          received: 'undefined',
          path: ['BETTER_AUTH_SECRET'],
          message: 'Must be set when NODE_ENV is \'production\'',
        })
      }
      if (!input.APP_URL || input.APP_URL.startsWith('http://localhost')) {
        ctx.addIssue({
          code: 'invalid_type',
          expected: 'string',
          received: 'undefined',
          path: ['APP_URL'],
          message: 'Must be set when NODE_ENV is \'production\' and not localhost',
        })
      }
    }
  })

export type env = z.infer<typeof EnvSchema>

function getEnvVars(): Record<string, any> {
  if (isWorkers) {
    return {
      NODE_ENV: (globalThis as any).NODE_ENV || 'production',
      PORT: 9999,
      LOG_LEVEL: (globalThis as any).LOG_LEVEL || 'info',
      DATABASE_URL: (globalThis as any).DATABASE_URL,
      DATABASE_AUTH_TOKEN: (globalThis as any).DATABASE_AUTH_TOKEN,
      BETTER_AUTH_SECRET: (globalThis as any).BETTER_AUTH_SECRET,
      API_URL: (globalThis as any).API_URL,
      APP_URL: (globalThis as any).APP_URL,
      MAINTENANCE_MODE: (globalThis as any).MAINTENANCE_MODE,
      BEARER_TOKEN: (globalThis as any).BEARER_TOKEN,
      JWKS_CACHE_TTL_SECONDS: (globalThis as any).JWKS_CACHE_TTL_SECONDS,
    }
  }
  return process.env
}

const { data: env, error } = EnvSchema.safeParse(getEnvVars())

if (error) {
  console.error('❌ Invalid env:')
  console.error(error.format())
  if (!isWorkers) {
    process.exit(1)
  }
  else {
    throw new Error('Invalid environment variables')
  }
}

export default env!
