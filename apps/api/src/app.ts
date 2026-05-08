import { auth } from '@/lib/auth'
import configureOpenAPI from '@/lib/configure-open-api'
import createApp from '@/lib/create-app'
import index from '@/routes/index.route'
import regions from '@/routes/regions/regions.index'

const app = createApp()

configureOpenAPI(app)

// 链式挂载路由，确保类型推导完整
const routes = app
  .route('/', index)
  .route('/', regions)

// 挂载 Better Auth 通配符路由
routes.on(['POST', 'GET'], '/api/auth/*', c => auth.handler(c.req.raw))

// 导出链式调用后的 routes 类型
export type AppType = typeof routes

export default routes
