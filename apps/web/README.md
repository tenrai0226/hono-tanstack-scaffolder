# Scaffolder Web (TanStack Start + HeroUI)

基于 React 19 和 TanStack 现代生态构建的全栈 SSR 前端应用，专为 Cloudflare Pages (Edge Runtime) 设计。

## 📖 核心特性解释 (Explanation)

### Edge Runtime 限制
本应用运行在边缘计算节点（如 Cloudflare Workers），**禁止使用任何 Node.js 原生模块**（如 `fs`, `path`, `crypto`）。所有的代码（包括服务端 SSR 代码）都必须是环境无关的。

### 路由与状态管理的结合
- **TanStack Router**: 提供了基于文件的强类型路由。所有的路由都在 `src/routes` 目录下定义，`routeTree.gen.ts` 会自动生成。
- **TanStack Query 预取**: 在 SSR 阶段，通过 Router 的 `loader` 预取数据并挂载到 Query Cache 中，到客户端时实现无缝的 Hydration，杜绝页面级的瀑布流 (Waterfall) 加载。

---

## 🛠 开发指南：构建前端业务 (How-to Guide)

以项目中保留的“黄金示例” `admin/regions` 为例，构建高质量前端页面的工作流：

### Step 1: 强类型数据获取
不需要手写 fetch。利用从 `api` 工作区透传过来的 `authApiClient`：
```typescript
import { useSuspenseQuery } from '@tanstack/react-query'
import { authApiClient, type SelectRegion } from 'api/client'

const { data } = useSuspenseQuery({
  queryKey: ['regions'],
  queryFn: async () => {
    const res = await authApiClient.regions.$get({})
    if (!res.ok) throw res
    return (await res.json()) as unknown as SelectRegion[]
  }
})
```

### Step 2: 使用 @tanstack/react-form 构建表单
放弃传统的受控组件或 `react-hook-form`。为了实现最严谨的性能和类型校验，**必须使用 `@tanstack/react-form`** 结合 Zod：
```tsx
import { useForm } from '@tanstack/react-form'

const form = useForm({
  defaultValues: { name: '' },
  onSubmit: async ({ value }) => { /* ... */ }
})

// 在 JSX 中
<form.Field name="name" validators={{ onChange({ value }) { return !value ? '必填' : undefined } }}>
  {(field) => (
    <Input 
      value={field.state.value} 
      onChange={(e) => field.handleChange(e.target.value)} 
    />
  )}
</form.Field>
```

### Step 3: UI 与多语言 (i18n)
- 组件优先使用 [HeroUI v3](https://v3.heroui.com/)（基于 React Aria，具备完整的无障碍支持）。
- Tailwind CSS v4 负责原子化样式调整。
- 使用 `useTranslations('Namespace')` 替代硬编码文本。

---

## 📚 常用命令速查 (Reference)

```bash
# 更新并生成最新的 TanStack 路由树 (开发时通常会自动执行)
bunx @tanstack/router-cli generate

# 执行 TypeScript 检查 (确保从 API 层引用的类型没有被打破)
bun run typecheck

# 运行 E2E 测试 (Playwright)
bun run test:e2e
```
