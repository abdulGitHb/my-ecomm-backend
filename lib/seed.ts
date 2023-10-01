import { db, sql } from '@/lib/kysely'

export async function seed() {
  const createTable = await db.schema
    .createTable('petss')
    .ifNotExists()
    .addColumn('id', 'serial', (cb) => cb.primaryKey())
    .addColumn('Name', 'varchar(255)', (cb) => cb.notNull())
    .addColumn('Owner', 'varchar(255)', (cb) => cb.notNull().unique())
    .addColumn('createdAt', sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute()
  console.log(`Created "users" table`);
  const addUsers = await db
    .insertInto('petss')
    .values([
      {
        Name: 'Guillermo Rauch',
        Owner: 'rauchg@vercel.com',
      },
      {
        Name: 'Guillermo Rauchh',
        Owner: 'rauchg@vercel.comm',
      },
      {
        Name: 'Guillermo Rauchhh',
        Owner: 'rauchg@vercel.commm',
      },
    ])
    .execute()
  console.log('Seeded database with 3 users')
  return {
    createTable,
    addUsers,
  }
}