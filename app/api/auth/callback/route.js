import { NextResponse } from "next/server"
import config from "@/config"
import { createSupabaseAppServerClient } from "@/libs/createSupabaseServerClient"
import { serverPosts } from "@/libs/serverPosts"

export const dynamic = "force-dynamic"

// This route is called after a successful login. It exchanges the code for a session and redirects to the callback URL (see config.js).
export async function GET(req) {
  const requestUrl = new URL(req.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const supabase = createSupabaseAppServerClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) throw new Error(error)
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin + config.auth.callbackUrl)
}
