import { NextResponse } from "next/server"

{/* Edge and Node.js Runtimes */}
export const runtime = 'experimental-edge'

{/* Dynamic Route Segments */}
export async function GET(request: Request, { params } : { params: { slug: string } }) {
  const slug = params.slug

  return NextResponse.json({ slug })
}
