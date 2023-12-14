"use server"

import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"

export async function bookmark({ userId, postId }) {
  "use server"

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const setBookmark = async (bookmark) => {
    if (bookmark === false) {
      let { data: bookmarks, error } = await supabase
        .from("bookmarks")
        .insert([{ post_id: postId, user_id: userId }])
        .select()
      revalidatePath("/dashboard")

      if (error) throw error
    } else if (bookmark === true) {
      const { data, error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("user_id", userId)
        .eq("post_id", postId)
      revalidatePath("/dashboard")

      if (error) throw error
    }
  }

  try {
    const { count, data, error } = await supabase
      .from("bookmarks")
      .select("*", { count: "exact", head: true })
      .match({ user_id: userId })
      .match({ post_id: postId })

    if (error) {
      console.log("Error")
    }
    const bookmarked = count > 0
    await setBookmark(bookmarked)
  } catch (error) {
    console.error(error)
  }
}
