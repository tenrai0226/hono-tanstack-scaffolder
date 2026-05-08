import type { AppType } from './src/app'; import { hc } from 'hono/client'; const client = hc<AppType>(''); client.users.me.favorites[':shopId'];
