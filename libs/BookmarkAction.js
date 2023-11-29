import { createClient } from "@supabase/supabase-js";

export async function bookmark(userId, postId) {
  "use server";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // console.log({ userId: userId.userId, postId: userId.postId });

  const { data, error } = await supabase
    .from("bookmarks")
    .insert([{ user_id: userId.userId, post_id: userId.postId }])
    .select();

  console.log("bookmark", { data });
}
