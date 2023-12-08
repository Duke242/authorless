"use server"
import { revalidatePath } from "next/cache"
import { createSupabaseServerClient } from "./createSupabaseServerClient"

export async function like({ postId, userId }, formData) {
  "use server"

  const supabase = createSupabaseServerClient()

  const setLike = async (likes) => {
    if (likes === false) {
      const { data, error } = await supabase
        .from("likes")
        .insert([{ post_id: postId, user_id: userId }])
        .select()

      if (error) throw error
    } else if (likes === true) {
      const { data, error } = await supabase
        .from("likes")
        .delete()
        .eq("user_id", userId)
        .eq("post_id", postId)

      if (error) throw error
    }
  }

  try {
    const { count, data, error } = await supabase
      .from("likes")
      .select("*", { count: "exact", head: true })
      .match({ user_id: userId })
      .match({ post_id: postId })

    if (error) throw error
    const liked = count > 0
    await setLike(liked)
    revalidatePath("/dashboard")
  } catch (e) {
    console.error({ e })
  }
}
