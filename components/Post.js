import { Manrope } from "next/font/google"
import { like } from "../libs/LikeAction"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { bookmark } from "@/libs/BookmarkAction"
import styles from "@/styles/Post.module.css"

// export const dynamic = "force-dynamic";

export const revalidate = 0

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const Post = async ({
  post: { title, date, content, sources, opinion, id, likes, bookmarks },
}) => {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const likePost = session
    ? like.bind(null, { postId: id, userId: session.user.id })
    : null

  const userLikes = session
    ? likes.some(({ user_id: userId }) => userId === session.user.id)
    : false

  const bookmarkPost = session
    ? bookmark.bind(null, { postId: id, userId: session.user.id })
    : null

  const userBookmarks = session
    ? bookmarks.some(
        ({ user_id: userId, post_id: postId }) =>
          userId === session.user.id && postId === id
      )
    : false

  return (
    <div className="p-6 mt-6 mb-6 mr-6 ml-6 rounded-2xl shadow-xl bg-[rgba(250,250,250,.6)]">
      {title && (
        <h2 className="font-normal text-left text-purple-500 mb-3 font-sans">
          {title}
        </h2>
      )}
      <pre className="break-words whitespace-pre-wrap">{content}</pre>
      {opinion && (
        <div>
          <h3 className="mt-4 mb-4 text-purple-500 font-normal border-t-2 border-purple-300 w-fit border-solid">
            Opinion
          </h3>
          <pre className="mb-2 break-words whitespace-pre-wrap">{opinion}</pre>
        </div>
      )}
      <div className="flex pt-3">
        <div className="flex items-center gap-1 border-r-2 border-purple-300 border-solid pr-4">
          <div>
            {session ? (
              <>
                <form action={likePost}>
                  <button
                    className={`${styles.like} flex mx-auto ${
                      userLikes ? styles.liked : "unliked"
                    }`}
                    type="submit"
                  ></button>
                </form>
                <form action={bookmarkPost}>
                  <button
                    className={`${styles.bookmark} flex mx-auto ${
                      userBookmarks ? styles.bookmarked : "noBookmark"
                    }`}
                  ></button>
                </form>
              </>
            ) : (
              <p className="text-sm text-gray-400 mr-0">
                Please log in to like and bookmark posts.
              </p>
            )}
          </div>
          <p className="text-gray-500 text-sm mx-auto pt-2">{date}</p>
        </div>
        {sources && (
          <div className="rounded pt-1 text-gray-400 ml-4 break-words">
            {sources}
          </div>
        )}
      </div>
    </div>
  )
}

export default Post
