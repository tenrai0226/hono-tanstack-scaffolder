import { z } from 'zod'

import { userProfileSchema } from './user-profile'

// 用户基础Schema - 适配 Better Auth
export const userBaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  image: z.string().nullable(),
  role: z.string().nullable(), // 现在统一使用单一字符串角色
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const userFullSchema = userBaseSchema.extend({
  profile: userProfileSchema.nullable(),
})

export type UserFull = z.infer<typeof userFullSchema>

// 更新用户Schema
export const updateUserSchema = userBaseSchema.partial()

// 用户ID参数Schema - 移除 UUID 限制，因为 Better Auth ID 是普通的 string
export const userIdParamsSchema = z.object({
  id: z.string(),
})

// 操作成功响应Schema
export const SuccessResponseSchema = z.object({
  success: z.boolean(),
})

// 导出类型
export type SelectUser = z.infer<typeof userBaseSchema>
export type UpdateUser = z.infer<typeof updateUserSchema>
export type UserIdParams = z.infer<typeof userIdParamsSchema>
export type SuccessResponse = z.infer<typeof SuccessResponseSchema>

// 导出常量
export const DEFAULT_PAGE_SIZE = 30
export const MAX_PAGE_SIZE = 100
