import { createClient } from "@supabase/supabase-js";
export async function like({ postId, userId }, formData) {
  "use server";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const setLike = async (likes) => {
    console.log({ likes });
    if (likes) {
      console.log("inserting");
      const { data, error } = await supabase
        .from("likes")
        .insert([{ post_id: postId, user_id: userId }])
        .select();

      if (error) throw error;
    } else {
      const { data, error } = await supabase
        .from("likes")
        .delete()
        .eq("user_id", userId)
        .eq("post_id", postId);

      if (error) throw error;
    }
  };

  try {
    const { count, error } = await supabase
      .from("likes")
      .select("*", { count: "exact", head: true })
      .eq("post_id", postId)
      .eq("user_id", userId);

    if (error) throw error;

    const liked = count > 0;
    // console.log({ liked, data, userId, postId });
    console.log({ liked, count, postId, userId });
    await setLike(!liked);
  } catch (e) {
    console.error({ e });
  }
}
