import type {
  CreateRoute,
  GetChildrenRoute,
  GetOneRoute,
  ListRoute,
  PatchRoute,
  RemoveRoute,
} from './regions.routes'
import type { AppRouteHandler } from '@/lib/types'
import { eq } from 'drizzle-orm'

import * as HttpStatusCodes from 'stoker/http-status-codes'

import * as HttpStatusPhrases from 'stoker/http-status-phrases'
import { db } from '@/db'
import { regions } from '@/db/schema/regions'

import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from '@/lib/constants'

export const listRegions: AppRouteHandler<ListRoute> = async (c) => {
  const allRegions = await db.query.regions.findMany()
  return c.json(allRegions, HttpStatusCodes.OK)
}

export const createRegion: AppRouteHandler<CreateRoute> = async (c) => {
  const newRegion = c.req.valid('json')
  if (!newRegion) {
    return c.json(
      {
        success: false,
        error: {
          issues: [
            {
              code: ZOD_ERROR_CODES.INVALID_UPDATES,
              path: [],
              message: ZOD_ERROR_MESSAGES.NO_UPDATES,
            },
          ],
          name: 'ZodError',
        },
      },
      HttpStatusCodes.UNPROCESSABLE_ENTITY,
    )
  }
  const [insertedRegion] = await db
    .insert(regions)
    .values(newRegion)
    .onConflictDoUpdate({
      target: [regions.sourceId],
      set: {
        ...newRegion,
        updatedAt: new Date(),
      },
    })
    .returning()
  return c.json(insertedRegion, HttpStatusCodes.CREATED)
}

export const getRegion: AppRouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid('param')
  const region = await db.query.regions.findFirst({
    where(fields, operators) {
      return operators.eq(fields.id, id)
    },
  })
  if (!region) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
      HttpStatusCodes.NOT_FOUND,
    )
  }
  return c.json(region, HttpStatusCodes.OK)
}

export const updateRegion: AppRouteHandler<PatchRoute> = async (c) => {
  const { id } = c.req.valid('param')
  const updateData = c.req.valid('json')
  const [updatedRegion] = await db
    .update(regions)
    .set(updateData)
    .where(eq(regions.id, id))
    .returning()
  if (!updatedRegion) {
    return c.json(
      {
        error: {
          issues: [
            { code: 'not_found', path: ['id'], message: 'Region not found' },
          ],
          name: 'NotFoundError',
        },
        success: false,
      },
      HttpStatusCodes.NOT_FOUND,
    )
  }
  return c.json(updatedRegion, HttpStatusCodes.OK)
}

export const deleteRegion: AppRouteHandler<RemoveRoute> = async (c) => {
  const { id } = c.req.valid('param')
  const [deleted] = await db
    .delete(regions)
    .where(eq(regions.id, id))
    .returning()
  if (!deleted) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
      HttpStatusCodes.NOT_FOUND,
    )
  }
  return c.body(null, HttpStatusCodes.NO_CONTENT)
}

export const listChildrenRegions: AppRouteHandler<GetChildrenRoute> = async (
  c,
) => {
  const { id } = c.req.valid('param')
  const children = await db.query.regions.findMany({
    where(fields, operators) {
      return operators.eq(fields.parentId, id)
    },
  })
  return c.json(children, HttpStatusCodes.OK)
}
