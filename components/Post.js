import { like } from "../libs/LikeAction";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { bookmark } from "@/libs/BookmarkAction";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase1 = createClient(supabaseUrl, supabaseKey);

const Post = async ({
  post: { title, date, content, sources, opinion, id, likes },
}) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const likePost = like.bind(null, { postId: id, userId: session.user.id });

  const bookmarkPost = bookmark.bind(null, {
    postId: id,
    userId: session.user.id,
  });

  let { data: bookmarks, error } = await supabase1
    .from("bookmarks")
    .select("post_id, user_id");

  revalidatePath("/dashboard");

  const userBookmarks = bookmarks.some(
    ({ user_id: userId, post_id: postId }) =>
      userId === session.user.id && postId === id
  );

  const userLikes = likes.some(
    ({ user_id: userId }) => userId === session.user.id
  );

  return (
    <div className="p-6 mb-6 mr-6 ml-6 rounded-2xl shadow-xl bg-[rgba(250,250,250,.6)]">
      <h2 className="font-normal text-left text-purple-500 mb-3 font-sans">
        {title}
      </h2>
      <p>{content}</p>
      {opinion && (
        <>
          <h3 className="mt-4 mb-4 text-purple-500 font-normal border-t-2 border-purple-300 w-fit border-solid">
            Opinion
          </h3>
          <p className="mb-2">{opinion}</p>
        </>
      )}
      <div className="flex pt-3">
        <div className="flex items-center gap-1 border-r-2 border-purple-300 border-solid pr-4">
          <form action={likePost}>
            <button className="flex mx-auto" type="submit">
              {userLikes ? (
                <FcLike color="blue" size={30} />
              ) : (
                <FcLikePlaceholder size={30} />
              )}
            </button>
          </form>
          <form action={bookmarkPost}>
            <button className="mt-2">
              {userBookmarks ? (
                <FaBookmark size={20} />
              ) : (
                <FaRegBookmark size={20} />
              )}
            </button>
          </form>
          <p className="text-gray-500 text-sm mx-auto pt-2">{date}</p>
        </div>
        {sources && (
          <div className="rounded pt-1 text-gray-400 ml-4">{sources}</div>
        )}
      </div>
    </div>
  );
};

export default Post;
