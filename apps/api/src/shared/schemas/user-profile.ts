import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

import { userProfiles } from '@/db/schema/user-profiles'

export const userPreferencesSchema = z.object({
  locale: z.string().optional(),
  theme: z.string().optional(),
})

export type UserPreferences = z.infer<typeof userPreferencesSchema>

// 基本选择模式
export const userProfileSchema = createSelectSchema(userProfiles)

// 创建模式
export const createUserProfileSchema = createInsertSchema(userProfiles)


// 更新模式 - 所有字段都是可选的
export const updateUserProfileSchema = createUserProfileSchema.partial()

// 响应模式
export const userProfileResponseSchema = userProfileSchema

// 导出类型
export type UserProfile = z.infer<typeof userProfileSchema>
export type CreateUserProfile = z.infer<typeof createUserProfileSchema>
export type UpdateUserProfile = z.infer<typeof updateUserProfileSchema>
