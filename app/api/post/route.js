import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export async function POST(req) {
  // console.log("POST");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const supabaseSession = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabaseSession.auth.getSession();

  const payload = await req.json();

  // console.log({ session, payload });

  try {
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          user_id: session.user.id,
          ...payload,
        },
      ])
      .select();
    if (error) {
      throw error;
    }
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
