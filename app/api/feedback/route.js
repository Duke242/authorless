import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/libs/createSupabaseServerClient"

export async function POST(req) {
  const supabase = createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

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
