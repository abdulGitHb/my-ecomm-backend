import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';
import { db } from '@/lib/kysely';


export async function GET(request: Request) {
    
  const addUsers = await db
    .insertInto('petss')
    .values([
      {
        Name: 'Hello1',
        Owner: 'master1',
      },
      {
        Name: 'Hello2',
        Owner: 'master2',
      },
    ])
    .execute()
  console.log('Seeded database with 2 users', addUsers);

  const pets = await sql`SELECT * FROM Petss;`;
  return NextResponse.json({ pets }, { status: 200 });
}
