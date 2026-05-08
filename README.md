# Edge-Native Full-Stack Scaffolder

这是一个基于 **Bun Workspaces + Turborepo** 构建的现代化、极速、类型安全的企业级全栈脚手架。专为 Cloudflare 边缘计算环境 (Edge Runtime) 设计。

## 🌟 核心架构与技术栈

本项目采用 Monorepo 架构，实现了从数据库到前端 UI 的 **100% 端到端类型安全 (End-to-End Type Safety)**。

### 基础设施
- **包管理与运行**: [Bun](https://bun.sh/) (极致的安装与执行速度)
- **Monorepo 编排**: [Turborepo](https://turbo.build/repo) (智能构建缓存与并发任务执行)

### 后端 API (`apps/api`)
- **框架**: [Hono.js](https://hono.dev/) + `@hono/zod-openapi` (自动生成 OpenAPI 文档)
- **数据库**: [Neon (Serverless Postgres)](https://neon.tech/) + [Drizzle ORM](https://orm.drizzle.team/)
- **身份认证**: [Better Auth](https://www.better-auth.com/)

### 前端 Web (`apps/web`)
- **元框架**: [TanStack Start](https://tanstack.com/start) (React 19, 全栈 SSR)
- **路由与数据预取**: TanStack Router + TanStack Query v5
- **UI 与样式**: [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) + [HeroUI v3](https://v3.heroui.com/)
- **表单与验证**: `@tanstack/react-form` + Zod (复用后端 Schema)

---

## 🚀 快速上手 (Tutorial)

### 1. 环境准备
请确保你的机器上已安装最新版本的 [Bun](https://bun.sh/)。
本脚手架依赖于 PostgreSQL 数据库（推荐使用 Neon DB）。

### 2. 安装依赖
在项目根目录执行：
```bash
bun install
```

### 3. 环境配置
分别进入 `apps/api` 和 `apps/web` 目录，复制环境变量模板：
```bash
cp apps/api/.env.example apps/api/.env
# 请在 apps/api/.env 中填入你的 DATABASE_URL 和 BETTER_AUTH_SECRET

cp apps/web/.env.example apps/web/.env
```

### 4. 数据库初始化 (Migrate & Seed)
进入 API 目录，将 Schema 推送至数据库，并填充初始的“黄金示例(Regions)”数据：
```bash
cd apps/api
bun run db:push
bun run db:seed
```

### 5. 启动全栈开发环境
回到项目根目录，利用 Turborepo 一键启动前后端：
```bash
bun run dev
```
- **Web 前端**: `http://localhost:3000`
- **API 后端**: `http://localhost:9999`
- **API 文档 (Scalar)**: `http://localhost:9999/reference`

---

## 🏗 目录结构指南 (Explanation)

```text
.
├── apps/
│   ├── api/            # Hono 后端服务 (对外暴露 OpenAPI 与 Client 导出)
│   └── web/            # TanStack Start 前端 (通过 api workspace 引入后端类型)
├── packages/           # 预留的共享包目录 (可用于抽取 UI 库或 DB 库)
├── package.json        # 根依赖与 Workspaces 定义
├── turbo.json          # Turborepo 构建流水线配置
└── rules.md            # 项目级别的核心架构规范与军规 (Agent 必读)
```

### 端到端类型安全是如何工作的？
1. 后端在 `apps/api/src/client.ts` 中导出带有完整路由和 Zod Schema 类型定义的 `AppType`。
2. 前端通过 `package.json` 中的 workspace 依赖引入 API：`"api": "workspace:*"`。
3. 前端使用 Hono 的 `hc` 客户端结合 `AppType` 发起请求，获得自动补全和类型校验。修改后端的返回值，前端类型会**即时报错**。

> ⚠️ **开发原则提醒**：在进行二次开发前，请务必阅读各自应用目录下的 `GEMINI.md` 或根目录的 `rules.md`。它们包含了本脚手架强制执行的架构规范。
