import { createSupabaseBrowserClient } from "./createSupabaseBrowserClient"
export const POSTS_PER_LOAD = 3
export const infiniteBrowserPosts = async ({ pageParam = 1 }) => {
  const supabase = createSupabaseBrowserClient()
  let { data: posts, error } = await supabase
    .from("posts")
    .select(
      `
        *
      `
    )
    .order("created_at", { ascending: false })
    .range((pageParam - 1) * POSTS_PER_LOAD, pageParam * POSTS_PER_LOAD - 1)
  if (error) throw new Error(error)

  return posts
}
