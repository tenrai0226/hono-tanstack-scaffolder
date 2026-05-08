import { createRoute } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'
import { jsonContent } from 'stoker/openapi/helpers'
import { createMessageObjectSchema } from 'stoker/openapi/schemas'

import { createRouter } from '@/lib/create-app'

const router = createRouter().openapi(
  createRoute({
    tags: ['Index'],
    method: 'get',
    path: '/',
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema('TB2 API'),
        'TB2 API Index',
      ),
    },
  }),
  (c) => {
    // const logger = c.get("logger");
    // logger.info("TB2 API Index, hello, world!!!");
    return c.json(
      {
        message: 'TB2 API',
      },
      HttpStatusCodes.OK,
    )
  },
)

export default router
