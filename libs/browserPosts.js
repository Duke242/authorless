import { createBrowserClient } from "@supabase/ssr"

export const browserPosts = async () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

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

  return posts
}
