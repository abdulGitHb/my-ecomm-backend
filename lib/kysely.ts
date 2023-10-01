import { Generated, ColumnType } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

interface PetsTable {
  
  id: Generated<number>
  Name: string
  Owner: string
  createdAt: ColumnType<Date, string | undefined, never>
}

interface Store{
  id: Generated<number>
  name: string
  UserId: string
  createdAt: ColumnType<Date, string | undefined, never>
  updatedAt: ColumnType<Date, string | undefined, never>
}

// Keys of this interface are table names.
export interface Database {
  petss: PetsTable
}

export const db = createKysely<Database>()
export { sql } from 'kysely'