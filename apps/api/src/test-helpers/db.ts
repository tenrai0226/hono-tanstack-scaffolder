/**
 * 测试数据库辅助工具
 * 用于 Neon PostgreSQL 测试环境的初始化和清理
 */

import { neon } from '@neondatabase/serverless'
import { eq, inArray, sql } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from '@/db/schema'
import env from '@/env'

/**
 * 创建测试数据库连接
 * 使用独立的连接，避免与主应用连接冲突
 */
export function createTestDb() {
  if (!env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL is not set. Please ensure .env.test file exists and contains DATABASE_URL.',
    )
  }

  // 验证连接字符串格式
  try {
    const url = new URL(env.DATABASE_URL)
    if (!url.protocol.startsWith('postgres')) {
      throw new Error(
        `Invalid DATABASE_URL protocol. Expected postgres:// or postgresql://, got ${url.protocol}`,
      )
    }
  }
  catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        `Invalid DATABASE_URL format. Expected a valid URL, got: ${String(env.DATABASE_URL).substring(0, 20)}...`,
      )
    }
    throw error
  }

  try {
    const client = neon(env.DATABASE_URL)
    return drizzle(client, {
      logger: false, // 测试环境关闭日志
      schema,
    })
  }
  catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    throw new Error(
      `Failed to create database connection: ${errorMessage}\n`
      + '请确保：\n'
      + '1. DATABASE_URL 在 .env.test 中正确配置\n'
      + '2. 数据库服务正在运行（Neon PostgreSQL）\n'
      + '3. 网络连接正常\n'
      + '4. 数据库连接字符串有效',
    )
  }
}

/**
 * 清理所有测试数据
 * 按照外键依赖顺序删除数据
 */
export async function cleanupTestData() {
  const db = createTestDb()

  try {
    // 按照外键依赖顺序删除

    // 1. 删除业务数据 (按依赖顺序：先删中间表/子表，再删主表)
    await db.delete(schema.userProfiles)
    await db.delete(schema.regions)

    // 2. 删除认证与会话数据 (Better Auth 相关)
    await db.delete(schema.sessions)
    await db.delete(schema.accounts)
    await db.delete(schema.verifications)
    await db.delete(schema.users)
    await db.delete(schema.jwkss)
  }
  catch (error) {
    console.error('清理测试数据失败:', error)
    throw error
  }
}

/**
 * 清理特定用户的测试数据
 */
export async function cleanupUserTestData(userId: string) {
  const db = createTestDb()

  try {
    // 删除用户的会话
    await db.delete(schema.sessions).where(eq(schema.sessions.userId, userId))

    // 删除用户的账户
    await db.delete(schema.accounts).where(eq(schema.accounts.userId, userId))

    // 删除用户
    await db.delete(schema.users).where(eq(schema.users.id, userId))
  }
  catch (error) {
    console.error(`清理用户 ${userId} 的测试数据失败:`, error)
    throw error
  }
}

/**
 * 初始化测试数据库
 * 确保数据库 schema 是最新的
 */
export async function initTestDatabase() {
  if (!env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL is not set. Please ensure .env.test file exists and contains DATABASE_URL.',
    )
  }

  try {
    const db = createTestDb()
    // 测试数据库连接
    await db.execute(sql`SELECT 1`)

    // 注意：在真实环境中，你可能需要在这里调用 drizzle-kit push 或者 apply migrations
    // 但通常建议在运行测试前手动运行一次 db:push
  }
  catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    let detailedMessage = `数据库连接失败: ${errorMessage}\n\n`

    if (errorMessage.includes('ECONNREFUSED') || errorMessage.includes('connect')) {
      detailedMessage += '无法连接到数据库。请确保：\n'
        + '1. DATABASE_URL 在 .env.test 中正确配置\n'
        + '2. 数据库服务正在运行（Neon PostgreSQL）\n'
        + '3. 网络连接正常\n'
        + '4. 数据库连接字符串有效（格式：postgresql://user:password@host/database?sslmode=require）\n'
    }
    else {
      detailedMessage += '请检查数据库配置和连接状态。\n'
    }

    throw new Error(detailedMessage)
  }
}

/**
 * 删除测试用户
 */
export async function deleteTestUser(userId: string) {
  const db = createTestDb()
  await db.delete(schema.users).where(eq(schema.users.id, userId))
}

/**
 * 获取测试用户 ID 前缀
 */
export const TEST_USER_ID_PREFIX = 'test-'

/**
 * 检查是否为测试用户 ID
 */
export function isTestUserId(userId: string): boolean {
  return userId.startsWith(TEST_USER_ID_PREFIX)
}

/**
 * 清理所有测试用户数据
 */
export async function cleanupAllTestUsers() {
  const db = createTestDb()

  try {
    const testUsers = await db
      .select({ id: schema.users.id })
      .from(schema.users)
      .where(sql`${schema.users.id} LIKE ${`${TEST_USER_ID_PREFIX}%`}`)

    if (testUsers.length === 0) {
      return
    }

    const userIds = testUsers.map(u => u.id)

    // 删除测试用户的会话
    await db.delete(schema.sessions).where(inArray(schema.sessions.userId, userIds))

    // 删除测试用户的账户
    await db.delete(schema.accounts).where(inArray(schema.accounts.userId, userIds))

    // 删除测试用户
    await db.delete(schema.users).where(inArray(schema.users.id, userIds))
  }
  catch (error) {
    console.error('清理所有测试用户失败:', error)
    throw error
  }
}
