import type { UserQueryParams } from '@/shared/schemas'

import { and, count, eq, sql } from 'drizzle-orm'

import { db } from '@/db'
import { users } from '@/db/schema/auth-schema'

/**
 * 用户服务 - 封装对 Better Auth 用户的操作
 * 仅保留对核心 user 记录的查询，角色管理现在统一由 Better Auth Admin 插件通过 users.role 字段处理。
 */
export class UserService {
  async listUsers(params: UserQueryParams) {
    const offset = (params.page - 1) * params.pageSize

    const filters = []
    if (params.email) {
      filters.push(sql`${users.email} ILIKE ${`%${params.email}%`}`)
    }

    const whereClause = filters.length > 0 ? and(...filters) : undefined

    // 获取总数
    const [countResult] = await db
      .select({ total: count() })
      .from(users)
      .where(whereClause)

    // 获取用户列表
    const userList = await db.query.users.findMany({
      where: whereClause,
      limit: params.pageSize,
      offset,
      orderBy: (users, { desc }) => [desc(users.createdAt)],
    })

    return {
      users: userList,
      total: Number(countResult?.total || 0),
    }
  }

  async getUser(userId: string) {
    const user = await db.query.users.findFirst({
      where: fields => eq(fields.id, userId),
    })
    if (!user) {
      throw new Error(`用户ID ${userId} 不存在`)
    }
    return user
  }

  async getUserWithProfile(userId: string) {
    const user = await this.getUser(userId)
    const profile = await db.query.userProfiles.findFirst({
      where: fields => eq(fields.userId, userId),
    })

    return {
      ...user,
      profile: profile || null,
    }
  }
}
