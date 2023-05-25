import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')


  // const users = await fetch('https://jsonplaceholder.typicode.com/users')
  // const userJson = await users.json()

  return NextResponse.json({ id })
}

export async function POST(request: Request) {
  return NextResponse.json({ message: 'Fernanda Martins' })  
}