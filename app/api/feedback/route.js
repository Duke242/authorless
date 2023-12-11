import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(req) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const {
    data: { user },
  } = await supabase.auth.getUser()
  console.log({ A: supabase.auth })
  console.log({ user })

  const payload = await req.json()

  try {
    const { data, error } = await supabase
      .from("feedback")
      .insert([
        {
          user_id: user.id,
          content: payload.feedback,
        },
      ])
      .select()
    if (error) {
      throw error
    }
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
