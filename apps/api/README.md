# Scaffolder API (Hono + Drizzle + Better Auth)

这是一个极速、类型安全、部署于边缘节点 (Edge-compatible) 的后端服务。

## 📖 核心架构解释 (Explanation)

本项目严格贯彻 **“四层路由架构”**，实现了高度解耦与契约优先（Contract-First）的设计：

1. **`*.routes.ts` (契约层)**: 仅负责定义 OpenAPI 的 Schema（输入/输出/路径），绝对不含业务逻辑。
2. **`*.handlers.ts` (业务层)**: 实现真正的请求处理与数据库操作。它直接从契约层推断上下文类型。
3. **`*.index.ts` (装配层)**: 将契约与业务绑定。
4. **`*.test.ts` (测试层)**: 基于 Vitest 的真实集成测试，不采用黑盒 Mock。

---

## 🛠 开发指南：如何构建新业务？(How-to Guide)

以项目中保留的“黄金示例” `regions` (地区) 为例，开发一个新模块的标准工作流如下：

### Step 1: 数据库设计 (`src/db/schema`)
在 `src/db/schema/` 下创建新的实体表，例如 `regions.ts`。使用 Drizzle 提供的类型。
完成后，在 `src/db/schema/index.ts` 中导出该表。
然后执行迁移：
```bash
bunx drizzle-kit generate
bunx drizzle-kit push
```

### Step 2: 定义 API 契约 (`regions.routes.ts`)
使用 `@hono/zod-openapi` 定义接口。
```typescript
import { createRoute, z } from '@hono/zod-openapi'
import { regionSchema } from '@/shared/schemas/region'

export const getOneRoute = createRoute({
  path: '/regions/{id}',
  method: 'get',
  responses: {
    200: { description: '成功', content: { 'application/json': { schema: regionSchema } } },
  },
})
```

### Step 3: 编写业务逻辑 (`regions.handlers.ts`)
引入对应的 DB Schema，编写处理函数。如果需要权限控制，注意 Handler 会基于 Route 的要求校验 Token。
```typescript
import type { RouteHandler } from '@hono/zod-openapi'
import type { GetOneRoute } from './regions.routes'
import { db } from '@/db'

export const getOneHandler: RouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid('param')
  // ... db query
  return c.json(data, 200)
}
```

### Step 4: 装配并暴露类型 (`regions.index.ts` & `src/app.ts`)
将定义好的 Router 引入到 `src/app.ts` 中挂载，确保其加入到链式调用的 `AppType` 中。这保证了前端能获得完整的类型推断。

---

## 📚 常用命令速查 (Reference)

```bash
# 生成并推送数据库表结构变更
bun run db:generate && bun run db:push

# 运行集成测试 (基于 .env.test 独立数据库)
bun run test

# 执行类型检查 (验证 Zod Schema 与前端消费兼容性)
bun run typecheck

# 代码格式化与修复
bun run lint
```
