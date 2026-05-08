import type { TestUser } from '@/test-helpers'
import { createRoute, z } from '@hono/zod-openapi'
import { testClient } from 'hono/testing'
import * as HttpStatusCodes from 'stoker/http-status-codes'

import { beforeAll, describe, expect, it } from 'vitest'
import { createRouter, createTestApp } from '@/lib/create-app'
import { APP_BINDING_KEYS, USER_ROLES } from '@/lib/types'
import {
  createAuthHeader,
  createTestUserViaAuth,

  updateTestUserRoleAndRefreshToken,
} from '@/test-helpers'
import { adminOnly, authMiddleware } from './auth'

// 定义一个测试用的路由来验证中间件行为
const testRoute = createRoute({
  path: '/test-auth',
  method: 'get',
  middleware: [authMiddleware] as const,
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        'application/json': {
          schema: z.object({
            userId: z.string(),
            role: z.string(),
          }),
        },
      },
      description: 'Auth check passed',
    },
  },
})

const adminTestRoute = createRoute({
  path: '/test-admin',
  method: 'get',
  middleware: [authMiddleware, adminOnly] as const,
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: 'Admin check passed',
    },
  },
})

const testRouter = createRouter()
  .openapi(testRoute, (c) => {
    return c.json({
      userId: c.get(APP_BINDING_KEYS.USER_ID) as string,
      role: c.get(APP_BINDING_KEYS.USER_ROLE) as string,
    }, HttpStatusCodes.OK);
  })
  .openapi(adminTestRoute, (c) => {
    return c.json({ message: "Welcome Admin" }, HttpStatusCodes.OK);
  });


const client = testClient<typeof testRouter>(createTestApp(testRouter)) as any

describe('auth middleware', () => {
  let testUser: TestUser
  let adminUser: TestUser

  beforeAll(async () => {
    // 创建普通用户
    testUser = await createTestUserViaAuth(`user-auth-${Date.now()}@example.com`)
    // 创建管理员用户
    const rawAdmin = await createTestUserViaAuth(`admin-auth-${Date.now()}@example.com`)
    adminUser = await updateTestUserRoleAndRefreshToken(rawAdmin, USER_ROLES.ADMIN)
  })

  it('gET /test-auth - 未提供 Token 返回 401', async () => {
    const response = await client['test-auth'].$get()
    expect(response.status).toBe(HttpStatusCodes.UNAUTHORIZED)
  })

  it('gET /test-auth - 提供无效 Token 返回 401', async () => {
    const response = await client['test-auth'].$get({
      header: {
        authorization: 'Bearer invalid-token',
      },
    })
    expect(response.status).toBe(HttpStatusCodes.UNAUTHORIZED)
  })

  it('gET /test-auth - 提供有效 Token 注入正确上下文', async () => {
    const response = await client['test-auth'].$get({
      header: {
        Authorization: createAuthHeader(testUser.token),
      },
    })
    expect(response.status).toBe(HttpStatusCodes.OK)
    const json = await response.json()
    expect(json.userId).toBe(testUser.userId)
    expect(json.role).toBe(USER_ROLES.USER)
  })

  it('gET /test-admin - 普通用户访问返回 403', async () => {
    const response = await client['test-admin'].$get({
      header: {
        Authorization: createAuthHeader(testUser.token),
      },
    })
    expect(response.status).toBe(HttpStatusCodes.FORBIDDEN)
  })

  it('gET /test-admin - 管理员用户访问成功', async () => {
    const response = await client['test-admin'].$get({
      header: {
        Authorization: createAuthHeader(adminUser.token),
      },
    })
    expect(response.status).toBe(HttpStatusCodes.OK)
    const json = await response.json()
    expect(json.message).toBe('Welcome Admin')
  })
})
