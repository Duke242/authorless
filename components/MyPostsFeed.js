import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import Post from "./Post";
import { createClient } from "@supabase/supabase-js";

const MyPostsFeed = async () => {
  const supabaseSession = createServerComponentClient({ headers, cookies });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const {
    data: { session },
  } = await supabaseSession.auth.getSession();

  let { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", session.user.id);

  if (error) {
    console.error("Error fetching posts:", error);
    return null; // or handle the error in a different way
  }

  // console.log({ NEW: posts });

  if (!posts) {
    return <div>There are no posts.</div>;
  }

  return (
    <div className="h-max w-2/3 bg-[rgb(232,231,237)] border border-solid border-transparent overflow-scroll">
      {posts.map((post) => (
        <div
          className="p-6 mb-6 mt-6 mr-6 ml-6 rounded-2xl shadow-xl bg-[rgba(250,250,250,.6)]"
          key={post.id}
        >
          <h2 className="font-bold text-left text-purple-500 mb-3 font-sans">
            {post.title}
          </h2>
          <p>{post.content}</p>
          {post.opinion && (
            <div>
              <h3 className="mt-4 mb-4 text-purple-500 font-semibold border-t-2 border-purple-300 w-fit border-solid">
                Opinion
              </h3>
              <p className="mb-2">{post.opinion}</p>
            </div>
          )}
          {post.sources && (
            <div className="rounded pt-1 text-gray-400">{post.sources}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyPostsFeed;
