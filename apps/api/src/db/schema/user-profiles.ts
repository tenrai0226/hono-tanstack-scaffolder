import { boolean, jsonb, pgTable, text } from 'drizzle-orm/pg-core'

import { timestamps } from '../helpers/columns.helpers'
import { users } from './auth-schema'

/**
 * 用户配置表
 * 存储用户的详细信息和偏好设置
 */
export const userProfiles = pgTable(
  'user_profiles',
  {
    // 用户ID，对应 Better Auth 中的用户ID，作为主键
    userId: text('user_id')
      .primaryKey()
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),

    // 显示名称
    displayName: text('display_name'),

    // 头像URL
    avatarUrl: text('avatar_url'),

    // 用户偏好设置，包括语言等
    preferences: jsonb('preferences').default({
      locale: 'zh-CN',
      theme: 'light',
    }),

    // 用户界面设置
    uiSettings: jsonb('ui_settings').default({}),

    // 通知设置
    notificationSettings: jsonb('notification_settings').default({
      email: true,
      push: false,
    }),

    // 是否完成初始设置
    setupCompleted: boolean('setup_completed').default(false),

    // 时间戳
    ...timestamps,
  },
)
