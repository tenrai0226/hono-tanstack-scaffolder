import { createRouter } from '@/lib/create-app'

import * as handlers from './regions.handlers'
import * as routes from './regions.routes'

const router = createRouter()
  .openapi(routes.list, handlers.listRegions)
  .openapi(routes.create, handlers.createRegion)
  .openapi(routes.getOne, handlers.getRegion)
  .openapi(routes.patch, handlers.updateRegion)
  .openapi(routes.remove, handlers.deleteRegion)
  .openapi(routes.getChildren, handlers.listChildrenRegions)

export default router
