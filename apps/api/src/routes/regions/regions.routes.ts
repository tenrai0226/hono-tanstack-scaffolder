import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers'
import { createErrorSchema, IdParamsSchema } from 'stoker/openapi/schemas'

import { notFoundSchema } from '@/lib/constants'
import { adminOnly, authMiddleware } from '@/middlewares/auth'
import {
  createRegionSchema,
  regionSchema,
  updateRegionSchema,
} from '@/shared/schemas/region'
import { authorizationHeaderSchema } from '@/shared/validators'

const tags = ['Regions']

const RegionSchema = regionSchema // 使用schema中定义的regionSchema
const RegionsSchema = z.array(RegionSchema)

export const listRegionsRoute = createRoute({
  path: '/regions',
  method: 'get',
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(regionSchema),
      '获取地区列表成功',
    ),
  },
})

export const createRegionsRoute = createRoute({
  path: '/regions',
  method: 'post',
  middleware: [authMiddleware, adminOnly] as const,
  request: {
    headers: authorizationHeaderSchema,
    body: jsonContentRequired(createRegionSchema, '创建地区'),
  },
  tags,
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(regionSchema, '创建地区成功'),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(createRegionSchema),
      '验证错误',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createErrorSchema(z.any()),
      '未授权',
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      createErrorSchema(z.any()),
      '权限不足',
    ),
  },
})

export const getOneRoute = createRoute({
  path: '/regions/{id}',
  method: 'get',
  request: {
    params: IdParamsSchema,
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(regionSchema, '获取地区信息成功'),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, '地区未找到'),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      'id 参数错误',
    ),
  },
})

export const patchRoute = createRoute({
  path: '/regions/{id}',
  method: 'patch',
  middleware: [authMiddleware, adminOnly] as const,
  request: {
    headers: authorizationHeaderSchema,
    params: IdParamsSchema,
    body: jsonContent(updateRegionSchema, '更新地区信息'),
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(regionSchema, '更新地区信息成功'),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createErrorSchema(
        z.object({
          message: z.string(),
        }),
      ),
      '地区未找到',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(updateRegionSchema).or(
        createErrorSchema(IdParamsSchema),
      ),
      'The validation error(s)',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createErrorSchema(z.any()),
      '未授权',
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      createErrorSchema(z.any()),
      '权限不足',
    ),
  },
})

export const removeRegionsRoute = createRoute({
  path: '/regions/{id}',
  method: 'delete',
  middleware: [authMiddleware, adminOnly] as const,
  request: {
    headers: authorizationHeaderSchema,
    params: IdParamsSchema,
  },
  tags,
  responses: {
    [HttpStatusCodes.NO_CONTENT]: {
      description: '删除地区成功',
    },
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createErrorSchema(
        z.object({
          message: z.string(),
        }),
      ),
      '地区未找到',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      'id 参数错误',
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      createErrorSchema(z.any()),
      '未授权',
    ),
    [HttpStatusCodes.FORBIDDEN]: jsonContent(
      createErrorSchema(z.any()),
      '权限不足',
    ),
  },
})

export const getChildrenRoute = createRoute({
  path: '/regions/{id}/children',
  method: 'get',
  request: {
    params: IdParamsSchema,
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(RegionsSchema, '获取子地区列表成功'),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createErrorSchema(
        z.object({
          message: z.string(),
        }),
      ),
      '地区未找到',
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      'id 参数错误',
    ),
  },
})

export const list = listRegionsRoute
export const create = createRegionsRoute
export const getOne = getOneRoute
export const patch = patchRoute
export const remove = removeRegionsRoute
export const getChildren = getChildrenRoute

export type ListRoute = typeof listRegionsRoute
export type CreateRoute = typeof createRegionsRoute
export type GetOneRoute = typeof getOneRoute
export type PatchRoute = typeof patchRoute
export type RemoveRoute = typeof removeRegionsRoute
export type GetChildrenRoute = typeof getChildrenRoute
