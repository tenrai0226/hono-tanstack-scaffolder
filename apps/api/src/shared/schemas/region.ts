import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

import { regions } from '@/db/schema/regions'

// 从数据库模型生成基础schema
export const regionSchema = createSelectSchema(regions)

// 创建区域的schema
export const createRegionSchema = createInsertSchema(regions).extend({
  name: z.string().min(1),
  sourceId: z.string().regex(/^\w+$/),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

// 更新区域的schema
export const updateRegionSchema = createRegionSchema.partial()

// 查询区域参数的schema
export const queryRegionSchema = z.object({
  id: z.coerce.number().int().positive().optional(),
  name: z.string().optional(),
  sourceId: z.string().optional(),
  cn: z.string().optional(),
  en: z.string().optional(),
  tw: z.string().optional(),
  kr: z.string().optional(),
})

// 响应schema
export const regionResponseSchema = regionSchema

// 区域列表响应schema
export const regionListResponseSchema = z.array(regionResponseSchema)

// 从schema推导类型
export type Region = z.infer<typeof regionSchema>
export type CreateRegion = z.infer<typeof createRegionSchema>
export type UpdateRegion = z.infer<typeof updateRegionSchema>
export type QueryRegion = z.infer<typeof queryRegionSchema>
export type RegionResponse = z.infer<typeof regionResponseSchema>
export type RegionListResponse = z.infer<typeof regionListResponseSchema>
