import type { SQL, SQLWrapper } from 'drizzle-orm'
import type { PgSelect } from 'drizzle-orm/pg-core'

import type { CommonQueryParams, PaginatedResponse } from '@/shared/validators/common'

import { sql } from 'drizzle-orm'
import { CommonQueryParamsSchema } from '@/shared/validators/common'

export { type CommonQueryParams, CommonQueryParamsSchema, type PaginatedResponse }

export function formatPaginatedResponse<T>(
  data: T[],
  total: number,
  queryParams: CommonQueryParams,
): PaginatedResponse<T> {
  const { page, pageSize } = queryParams
  const totalPages = Math.ceil(total / pageSize)

  return {
    data,
    pagination: {
      total,
      pageSize,
      currentPage: page,
      totalPages,
    },
  }
}



export function createSearchFilter(
  field: any,
  value: string | number | undefined,
  exact: boolean = false,
): SQL | undefined {
  if (value === undefined)
    return undefined
  if (typeof value === 'string' && !exact) {
    return sql`${field} ILIKE ${`%${value}%`}`
  }
  return sql`${field} = ${value}`
}

export function combineFilters(filters: (SQL | undefined)[]): SQLWrapper | undefined {
  const validFilters = filters.filter(Boolean) as SQL[]
  if (validFilters.length === 0)
    return undefined
  if (validFilters.length === 1)
    return validFilters[0]
  return sql`(${sql.join(validFilters, sql` AND `)})`
}

export function withPagination<T extends PgSelect>(
  qb: T,
  page: number = 1,
  pageSize: number = 10,
): T {
  const validPage = Math.max(1, Math.floor(page))
  const validPageSize = Math.max(1, Math.floor(pageSize))
  return qb.limit(validPageSize).offset((validPage - 1) * validPageSize)
}
