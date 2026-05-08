# Edge-Native Full-Stack Scaffolder

A modern, blazing-fast, and type-safe enterprise full-stack scaffolder built with **Bun Workspaces + Turborepo**. Designed specifically for Cloudflare Edge environments (Edge Runtime).

## 🌟 Core Architecture & Tech Stack

This project utilizes a Monorepo architecture to achieve **100% End-to-End Type Safety** from the database up to the frontend UI.

### Infrastructure
- **Package Manager & Runtime**: [Bun](https://bun.sh/) (Extreme installation and execution speed)
- **Monorepo Orchestration**: [Turborepo](https://turbo.build/repo) (Smart build caching and concurrent task execution)

### Backend API (`apps/api`)
- **Framework**: [Hono.js](https://hono.dev/) + `@hono/zod-openapi` (Auto-generated OpenAPI documentation)
- **Database**: [Neon (Serverless Postgres)](https://neon.tech/) + [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)

### Frontend Web (`apps/web`)
- **Meta-Framework**: [TanStack Start](https://tanstack.com/start) (React 19, Full-stack SSR)
- **Routing & Data Fetching**: TanStack Router + TanStack Query v5
- **UI & Styling**: [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) + [HeroUI v3](https://v3.heroui.com/)
- **Forms & Validation**: `@tanstack/react-form` + Zod (Reusing backend Schemas)

---

## 🚀 Quick Start (Tutorial)

### 1. Prerequisites
Ensure you have the latest version of [Bun](https://bun.sh/) installed on your machine.
This scaffolder relies on a PostgreSQL database (Neon DB is recommended).

### 2. Install Dependencies
Run the following in the project root:
```bash
bun install
```

### 3. Environment Configuration
Navigate to `apps/api` and `apps/web` respectively to copy the environment templates:
```bash
cp apps/api/.env.example apps/api/.env
# Fill in your DATABASE_URL and BETTER_AUTH_SECRET in apps/api/.env

cp apps/web/.env.example apps/web/.env
```

### 4. Database Initialization (Migrate & Seed)
Enter the API directory, push the schema to the database, and populate the initial "Golden Example (Regions)" data:
```bash
cd apps/api
bun run db:push
bun run db:seed
```

### 5. Start the Full-Stack Development Environment
Return to the project root and start the frontend and backend simultaneously using Turborepo:
```bash
bun run dev
```
- **Web Frontend**: `http://localhost:3000`
- **API Backend**: `http://localhost:9999`
- **API Documentation (Scalar)**: `http://localhost:9999/reference`

---

## 🏗 Directory Structure Guide (Explanation)

```text
.
├── apps/
│   ├── api/            # Hono backend service (exposes OpenAPI and Client export)
│   └── web/            # TanStack Start frontend (imports backend types via api workspace)
├── packages/           # Reserved shared package directory (for UI libraries or DB libraries)
├── package.json        # Root dependencies and Workspaces definition
├── turbo.json          # Turborepo build pipeline configuration
└── rules.md            # Project-level core architectural rules (Must-read for Agents)
```

### How does End-to-End Type Safety work?
1. The backend exports an `AppType` containing complete routing and Zod Schema type definitions in `apps/api/src/client.ts`.
2. The frontend imports the API via workspace dependencies in `package.json`: `"api": "workspace:*"`.
3. The frontend uses Hono's `hc` client combined with `AppType` to make requests, gaining auto-completion and type validation. Modifying the backend's return value will cause the frontend types to **report errors immediately**.

> ⚠️ **Development Principle Reminder**: Before starting secondary development, please be sure to read the `GEMINI.md` in the respective application directories or `rules.md` in the root directory. They contain the mandatory architectural specifications for this scaffolder.