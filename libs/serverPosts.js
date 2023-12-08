import { createSupabaseServerClient } from "./createSupabaseServerClient"

export const serverPosts = async () => {
  const supabase = createSupabaseServerClient()

  let { data: posts, error } = await supabase
    .from("posts")
    .select(
      `
        *,
        likes (post_id,user_id),
        bookmarks (post_id,user_id)
      `
    )
    .order("created_at", { ascending: false })
    .limit(5)
  if (error) throw new Error(error)
  // console.log({ SERVER: posts })
  return posts
}
