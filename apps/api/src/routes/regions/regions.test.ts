import type { TestUser } from '@/test-helpers'
import { testClient } from 'hono/testing'
import * as HttpStatusCodes from 'stoker/http-status-codes'

import { beforeAll, describe, expect, it } from 'vitest'
import { createTestApp } from '@/lib/create-app'
import { USER_ROLES } from '@/lib/types'
import {
  createAuthHeader,
  createTestUserViaAuth,

  updateTestUserRoleAndRefreshToken,
} from '@/test-helpers'

import router from './regions.index'

const client = testClient<typeof router>(createTestApp(router)) as any

describe('regions routes', () => {
  let testUser: TestUser
  let adminUser: TestUser

  beforeAll(async () => {
    // 创建普通用户
    testUser = await createTestUserViaAuth(`user-region-${Date.now()}@example.com`)
    // 创建管理员用户
    const rawAdmin = await createTestUserViaAuth(`admin-region-${Date.now()}@example.com`)
    adminUser = await updateTestUserRoleAndRefreshToken(rawAdmin, USER_ROLES.ADMIN)
  })

  let createdId: number
  const testRegionName = `Region ${Date.now()}`
  const testSourceId = `source_${Date.now()}`

  it('pOST /regions - 未授权访问返回 401', async () => {
    const response = await client.regions.$post({
json: { name: 'test', sourceId: 'test' },
    })
    expect(response.status).toBe(HttpStatusCodes.UNAUTHORIZED)
  })

  it('pOST /regions - 普通用户访问返回 403', async () => {
    const response = await client.regions.$post({
json: { name: 'test', sourceId: 'test' },
      header: { Authorization: createAuthHeader(testUser.token) },
    })
    expect(response.status).toBe(HttpStatusCodes.FORBIDDEN)
  })

  it('pOST /regions - 管理员成功创建地区', async () => {
    const response = await client.regions.$post({
json: {
        name: testRegionName,
        sourceId: testSourceId,
      },
      header: { Authorization: createAuthHeader(adminUser.token) },
    })

    expect(response.status).toBe(HttpStatusCodes.CREATED)
    const json = await response.json()
    expect((json as any).name).toBe(testRegionName)
    createdId = (json as any).id
  })

  it('gET /regions - 获取地区列表 (公开)', async () => {
    const response = await client.regions.$get()

    expect(response.status).toBe(HttpStatusCodes.OK)
    const json = await response.json()
    expect(json).toBeInstanceOf(Array)
    expect(json.some((r: any) => r.id === createdId)).toBe(true)
  })

  it('pATCH /regions/{id} - 管理员成功更新地区', async () => {
    const updatedName = `${testRegionName} Updated`
    const response = await client.regions[':id'].$patch({
      param: { id: createdId },
      json: {
        name: updatedName,
      },
      header: { Authorization: createAuthHeader(adminUser.token) },
    })

    expect(response.status).toBe(HttpStatusCodes.OK)
    const json = await response.json()
    expect((json as any).name).toBe(updatedName)
  })

  it('dELETE /regions/{id} - 管理员成功删除地区', async () => {
    const response = await client.regions[':id'].$delete({
      param: { id: createdId },
      header: { Authorization: createAuthHeader(adminUser.token) },
    })

    expect(response.status).toBe(HttpStatusCodes.NO_CONTENT)
  })
})
