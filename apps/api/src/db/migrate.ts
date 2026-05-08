import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';

import env from '@/env';

const sql = neon(env.DATABASE_URL);
const db = drizzle(sql);

async function main() {
  console.log('Running migrations...');
  try {
    await migrate(db, {
      migrationsFolder: './src/db/migrations',
      migrationsTable: 'my-migrations-table',
      migrationsSchema: 'public',
    });
    console.log('Migrations applied successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

main();
