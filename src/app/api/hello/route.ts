import { NextResponse } from "next/server"

export const revalidate = 60

{/* Static Route Handlers */}
// export async function GET() {
//   const users = await fetch('https://jsonplaceholder.typicode.com/users')
//   const usersJson = await users.json()

//   return NextResponse.json({ users: usersJson })
// }

{/* Dynamic Route Handlers */}
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  return NextResponse.json({ id })
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'Fernanda Martins' })  
}