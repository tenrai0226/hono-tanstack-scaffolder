// 重新导出app
import type { z } from 'zod'

// 导出现有类型以保持兼容性
import type {
  regionSchema as selectRegionsSchema,
} from './shared/schemas/region'

// 导出app相关
export type { AppType } from './app'

export type SelectRegion = z.infer<typeof selectRegionsSchema>

// 导出新的schema和类型定义
export * from './shared/schemas'
export * from './shared/validators'