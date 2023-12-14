import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"

export const revalidate = 0

export async function like({ postId, userId }, formData) {
  "use server"

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const setLike = async (likes) => {
    if (likes === false) {
      const { data, error } = await supabase
        .from("likes")
        .insert([{ post_id: postId, user_id: userId }])
        .select()
      revalidatePath("/dashboard")

      if (error) throw error
    } else if (likes === true) {
      const { data, error } = await supabase
        .from("likes")
        .delete()
        .eq("user_id", userId)
        .eq("post_id", postId)
      revalidatePath("/dashboard")

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
  } catch (e) {
    console.error({ e })
  }
}
