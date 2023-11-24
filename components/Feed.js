import { data } from "autoprefixer";
import Post from "./Post";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Feed = async () => {
  let { data: posts, error } = await supabase.from("posts").select("*");

  return (
    <div className="h-screen w-2/3 mx-4 mt-2 bg-[rgb(232,231,237)] overflow-y-scroll">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          date={new Date(post.created_at).toLocaleDateString()}
          content={post.content}
          sources={post.sources}
          opinion={post.opinion}
        />
      ))}
    </div>
  );
};

export default Feed;
