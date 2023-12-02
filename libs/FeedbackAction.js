// import { createClient } from "@supabase/supabase-js";

// export async function feedback(userId, formData) {
//   "use server";

//   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//   const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
//   const supabase = createClient(supabaseUrl, supabaseKey);

//   const { data, error } = await supabase
//     .from("feedback")
//     .insert([{ user_id: userId, content: formData.get("content") }])
//     .select();
//   if (error) {
//     throw error;
//   }

//   console.log({ data });
// }
