"use server";
// components/LikeButton.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const LikeButton = ({ postId }) => {
  let liked = false;
  let likeCount = 0;

  const fetchLikeStatus = async () => {
    try {
      const { data, error } = await supabase
        .from("likes")
        .select("id")
        .eq("user_id", supabase.auth.user().id)
        .eq("post_id", postId);

      if (error) {
        throw error;
      }

      // If the user has already liked the post, update the state
      liked = data.length > 0;

      // Update likeCount based on fetched data
      likeCount = liked ? data.length : 0;

      // Update the UI directly (force re-render)
      forceRender();
    } catch (error) {
      console.error("Error fetching like status:", error.message);
    }
  };

  const handleLikeClick = async () => {
    try {
      if (liked) {
        // User has already liked the post, so unlike it
        await supabase
          .from("likes")
          .delete()
          .eq("user_id", supabase.auth.user().id)
          .eq("post_id", postId);
        liked = false;
        likeCount = Math.max(likeCount - 1, 0);
      } else {
        // User hasn't liked the post, so like it
        await supabase
          .from("likes")
          .upsert([{ user_id: supabase.auth.user().id, post_id: postId }]);
        liked = true;
        likeCount = likeCount + 1;
      }

      // Update like_count in the posts table
      await supabase
        .from("posts")
        .update({ like_count: likeCount })
        .eq("id", postId);

      // Update the UI directly (force re-render)
      forceRender();
    } catch (error) {
      console.error("Error handling like click:", error.message);
    }
  };

  // Fetch initial like status and count when component mounts
  fetchLikeStatus();

  // Dummy forceRender function to trigger a re-render
  const forceRender = () => {};

  return (
    <button
      className={`bg-purple-700 p-2 text-white font-normal rounded-2xl hover:shadow-xl ${
        liked
          ? "bg-purple-200 text-purple-500"
          : "hover:bg-purple-200 hover:text-purple-500"
      } transition`}
      onClick={handleLikeClick}
    >
      {/* {liked ? "Unlike" : "Like"}
       */}
    </button>
  );
};

export default LikeButton;
