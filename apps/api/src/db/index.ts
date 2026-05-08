import type { NeonHttpDatabase } from 'drizzle-orm/neon-http'

import { neon, Pool } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { drizzle as drizzleWs } from 'drizzle-orm/neon-serverless'

import env from '@/env'

import * as schema from './schema'

// 延迟初始化，避免在模块加载时访问环境变量
// 这在 Cloudflare Workers 中很重要，因为环境变量在 fetch 函数执行时才可用
let _client: ReturnType<typeof neon> | null = null
let _db: NeonHttpDatabase<typeof schema> | null = null

function getClient() {
  if (!_client) {
    _client = neon(env.DATABASE_URL)
  }
  return _client
}

function getDb() {
  if (!_db) {
    _db = drizzle(getClient(), {
      logger: env.NODE_ENV === 'development',
      schema,
    })
  }
  return _db
}

// 使用 Proxy 延迟访问，确保在第一次使用时才初始化
export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get(_target, prop) {
    return getDb()[prop as keyof typeof _db]
  },
})

/**
 * 双驱动混合模式：仅在需要事务原子性的写路径使用 WebSocket 驱动。
 *
 * 背景：neon-http 驱动（HTTP one-shot 模式）性能最优但不支持交互式事务。
 * 当多步写入需要原子性保障时（如 Shop + Translation 联合创建），切换到
 * WebSocket 驱动以获得完整的 BEGIN/COMMIT/ROLLBACK 支持。
 *
 * 每次调用会创建一个短生命周期的 Pool 并在事务完成后立即释放，
 * 以避免 Cloudflare Workers 中 WebSocket 连接跨请求泄漏。
 */
export async function withTransaction<T>(
  fn: (tx: Parameters<Parameters<ReturnType<typeof drizzleWs>['transaction']>[0]>[0]) => Promise<T>,
): Promise<T> {
  const pool = new Pool({ connectionString: env.DATABASE_URL })
  const wsDb = drizzleWs({ client: pool, schema })
  try {
    return await wsDb.transaction(fn)
  } finally {
    await pool.end()
  }
}
