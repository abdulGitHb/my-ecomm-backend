import { db } from '@/lib/kysely'
import Image from 'next/image'
import { seed } from '@/lib/seed'

export default async function Table() {
  let users
  let startTime = Date.now()

  try {
    users = await db.selectFrom('petss').selectAll().execute()
  } catch (e: any) {
    if (e.message === `relation "petss" does not exist`) {
      console.log(
        'Table does not exist, creating and seeding it with dummy data now...'
      )
      // Table is not created yet
      await seed()
      startTime = Date.now()
      users = await db.selectFrom('petss').selectAll().execute()
    } else {
      throw e
    }
  }

  const duration = Date.now() - startTime

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
          <div
            key={user.Name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.Name}</p>
                <p className="text-sm text-gray-500">{user.Owner}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}