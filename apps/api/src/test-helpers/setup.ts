import { afterAll, beforeAll } from 'vitest'
import { cleanupTestData, initTestDatabase } from './db'
import app from '@/app'

// 拦截全局 fetch，使其在调用本地 /api/auth/jwks 时，直接转给内存中的 app 实例，
// 从而避免跑单元测试前必须启动独立的后端服务。
const originalFetch = globalThis.fetch
globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url
  if (url.includes('/api/auth/jwks')) {
    return app.request(url, init as any)
  }
  return originalFetch(input, init)
}

/**
 * 全局测试设置
 * 这个文件会在每个测试文件运行前执行 (由 vitest.config.ts 中的 setupFiles 指定)
 *
 * 注意：在 isolate: false 模式下，所有测试文件共享同一模块上下文，
 * 但 setupFiles 的 beforeAll/afterAll 仍然会为每个文件执行。
 * 使用守卫标记确保 initTestDatabase 只执行一次，
 * 并将 cleanupTestData 推迟到进程退出时执行。
 */

let isInitialized = false

beforeAll(async () => {
  if (!isInitialized) {
    // 只在第一个测试文件启动时初始化数据库
    await initTestDatabase()
    isInitialized = true

    // 提高 listener 上限，避免 MaxListenersExceededWarning
    // (setupFiles 会被每个测试文件加载一次，但守卫确保只注册一次)
    process.setMaxListeners(20)

    // 注册进程退出清理，确保整个测试套件结束后才清理数据
    process.once('beforeExit', async () => {
      try {
        await cleanupTestData()
      }
      catch {
        // 忽略清理错误，进程即将退出
      }
    })
  }
})

afterAll(async () => {
  // no-op: cleanup 已移至 process.beforeExit
})
