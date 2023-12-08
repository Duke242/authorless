import { NextResponse } from "next/server"
import { createSupabaseReqResClient } from "./libs/createSupabaseReqResClient"

// The middleware is used to refresh the user's session before loading Server Component routes
export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = await createSupabaseReqResClient(req, res)
  // console.log({ supabase })
  await supabase.auth.getSession()
  return res
}
