import type { AnyPgColumn } from 'drizzle-orm/pg-core'

import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core'

import { timestamps } from '../helpers/columns.helpers'

// 定义 Region 表
export const regions = pgTable('regions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(), // 名称
  parentId: integer('parent_id').references((): AnyPgColumn => regions.id),
  sourceId: text('source_id').unique(),
  ...timestamps,
})
