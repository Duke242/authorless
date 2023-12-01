import { createClient } from "@supabase/supabase-js";

export async function post(userId, formData) {
  "use server";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log({
    title: formData.get("title"),
    body: formData.get("body"),
    opinion: formData.get("opinion"),
    source: formData.get("source"),
  });

  try {
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          user_id: userId,
          title: formData.get("title"),
          content: formData.get("body"),
          opinion: formData.get("opinion"),
          sources: formData.get("source"),
        },
      ])
      .select();

    if (error) {
      throw error;
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
