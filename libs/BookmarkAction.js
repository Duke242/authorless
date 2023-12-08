"use server"
import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import { createSupabaseServerClient } from "./createSupabaseServerClient"

export async function bookmark({ userId, postId }) {
  "use server"
  console.log({ userId })
  const supabase = createSupabaseServerClient()
  const setBookmark = async (bookmark) => {
    if (bookmark === false) {
      let { data: bookmarks, error } = await supabase
        .from("bookmarks")
        .insert([{ post_id: postId, user_id: userId }])
        .select()
      if (error) throw error
    } else if (bookmark === true) {
      const { data, error } = await supabase
        .from("bookmarks")
        .delete()
        .eq("user_id", userId)
        .eq("post_id", postId)

      if (error) throw error
    }
  }

  try {
    const { count, data, error } = await supabase
      .from("bookmarks")
      .select("*", { count: "exact", head: true })
      .match({ user_id: userId, post_id: postId })
    if (error) {
      console.log("Error")
    }

    const bookmarked = count > 0

    await setBookmark(bookmarked)
    revalidatePath("/dashboard")
  } catch (error) {
    console.error(error)
  }
}
