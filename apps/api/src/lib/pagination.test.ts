import { describe, expect, it } from 'vitest'

import {
  combineFilters,
  createSearchFilter,
  formatPaginatedResponse,
  withPagination,
} from './pagination'

describe('pagination utilities', () => {
  // --- formatPaginatedResponse ---
  describe('formatPaginatedResponse', () => {
    it('should format basic paginated response', () => {
      const result = formatPaginatedResponse(
        [{ id: 1 }, { id: 2 }],
        10,
        { page: 1, pageSize: 2 },
      )

      expect(result).toEqual({
        data: [{ id: 1 }, { id: 2 }],
        pagination: {
          total: 10,
          pageSize: 2,
          currentPage: 1,
          totalPages: 5,
        },
      })
    })

    it('should calculate totalPages correctly with remainder', () => {
      const result = formatPaginatedResponse(
        [],
        7,
        { page: 1, pageSize: 3 },
      )

      expect(result.pagination.totalPages).toBe(3) // ceil(7/3) = 3
    })

    it('should handle empty data', () => {
      const result = formatPaginatedResponse(
        [],
        0,
        { page: 1, pageSize: 10 },
      )

      expect(result.data).toEqual([])
      expect(result.pagination.total).toBe(0)
      expect(result.pagination.totalPages).toBe(0)
    })

    it('should handle single page', () => {
      const result = formatPaginatedResponse(
        [{ id: 1 }],
        1,
        { page: 1, pageSize: 10 },
      )

      expect(result.pagination.totalPages).toBe(1)
    })
  })


  // --- createSearchFilter ---
  describe('createSearchFilter', () => {
    const mockField = { name: 'test' }

    it('should return undefined for undefined value', () => {
      const result = createSearchFilter(mockField, undefined)
      expect(result).toBeUndefined()
    })

    it('should create a filter for string value (ILIKE by default)', () => {
      const result = createSearchFilter(mockField, 'test')
      expect(result).toBeDefined()
    })

    it('should create exact filter for string with exact=true', () => {
      const result = createSearchFilter(mockField, 'test', true)
      expect(result).toBeDefined()
    })

    it('should create exact filter for numeric value', () => {
      const result = createSearchFilter(mockField, 42)
      expect(result).toBeDefined()
    })
  })

  // --- combineFilters ---
  describe('combineFilters', () => {
    it('should return undefined for empty array', () => {
      const result = combineFilters([])
      expect(result).toBeUndefined()
    })

    it('should return undefined for all-undefined array', () => {
      const result = combineFilters([undefined, undefined])
      expect(result).toBeUndefined()
    })

    it('should return single filter directly', () => {
      const mockFilter = { name: 'test' } as any
      const result = combineFilters([mockFilter])
      expect(result).toBe(mockFilter)
    })

    it('should combine multiple filters', () => {
      const filter1 = { name: 'test1' } as any
      const filter2 = { name: 'test2' } as any
      const result = combineFilters([filter1, filter2])
      expect(result).toBeDefined()
    })

    it('should skip undefined filters', () => {
      const filter1 = { name: 'test1' } as any
      const result = combineFilters([undefined, filter1, undefined])
      expect(result).toBe(filter1)
    })
  })

  // --- withPagination ---
  describe('withPagination', () => {
    it('should apply limit and offset to query builder', () => {
      const mockQb = {
        limit: (n: number) => ({
          offset: (o: number) => ({ limited: n, offseted: o }),
        }),
      }

      const result = withPagination(mockQb as any, 2, 10)
      expect(result).toEqual({ limited: 10, offseted: 10 })
    })

    it('should default to page 1 and pageSize 10', () => {
      const mockQb = {
        limit: (n: number) => ({
          offset: (o: number) => ({ limited: n, offseted: o }),
        }),
      }

      const result = withPagination(mockQb as any)
      expect(result).toEqual({ limited: 10, offseted: 0 })
    })

    it('should handle page 1 with offset 0', () => {
      const mockQb = {
        limit: (n: number) => ({
          offset: (o: number) => ({ limited: n, offseted: o }),
        }),
      }

      const result = withPagination(mockQb as any, 1, 20)
      expect(result).toEqual({ limited: 20, offseted: 0 })
    })

    it('should enforce minimum page of 1', () => {
      const mockQb = {
        limit: (n: number) => ({
          offset: (o: number) => ({ limited: n, offseted: o }),
        }),
      }

      const result = withPagination(mockQb as any, 0, 10)
      expect(result).toEqual({ limited: 10, offseted: 0 })
    })

    it('should enforce minimum pageSize of 1', () => {
      const mockQb = {
        limit: (n: number) => ({
          offset: (o: number) => ({ limited: n, offseted: o }),
        }),
      }

      const result = withPagination(mockQb as any, 1, 0)
      expect(result).toEqual({ limited: 1, offseted: 0 })
    })
  })
})
