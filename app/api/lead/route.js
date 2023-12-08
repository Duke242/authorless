import { NextResponse } from "next/server"
import { createSupabaseAppServerClient } from "@/libs/createSupabaseServerClient"

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
export async function POST(req) {
  const body = await req.json()

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  try {
    const supabase = createSupabaseAppServerClient()
    await supabase.from("leads").insert({ email: body.email })

    return NextResponse.json({})
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
