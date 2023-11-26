import { Manrope } from "next/font/google";
import { like } from "../libs/LikeAction";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Post = async ({
  post: { title, date, content, sources, opinion, id, likes },
}) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log({ likes });
  const likePost = like.bind(null, { postId: id, userId: session.user.id });
  const userLikes = likes.some(
    ({ user_id: userId }) => userId === session.user.id
  );

  return (
    <div className="p-6 mb-6 mr-6 ml-6 rounded-2xl shadow-xl bg-[rgba(250,250,250,.6)]">
      <h2 className="font-bold text-left text-purple-500 mb-3 font-sans">
        {title}
      </h2>
      <p className={`${manrope.variable} font-sans`}>{content}</p>
      {opinion && (
        <>
          <h3 className="mt-4 mb-4 text-purple-500 font-semibold border-t-2 border-purple-300 w-fit border-solid">
            Opinion
          </h3>
          <p className="mb-2">{opinion}</p>
        </>
      )}
      <div className="flex pt-3">
        <div className="flex flex-col border-r-2 border-purple-300 border-solid pr-4">
          <form action={likePost}>
            <button
              className={`
                bg-purple-700 p-2 text-white font-normal rounded-2xl hover:shadow-xl hover:bg-purple-200 hover:text-purple-500 transition
                ${userLikes ? "liked" : "unliked"}
              `}
              type="submit"
            >
              {/* <LikeButton /> */}
              Like
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
