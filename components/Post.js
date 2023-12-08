"use client"
import { like } from "../libs/LikeAction"
import { bookmark } from "@/libs/BookmarkAction"
import { revalidatePath } from "next/cache"
import styles from "@/styles/Post.module.css"
import { createSupabaseBrowserClient } from "@/libs/createSupabaseBrowserClient"
import { useEffect, useState } from "react"
import { QueryClient } from "@tanstack/react-query"

const Post = ({
  post: { title, date, content, sources, opinion, id, likes, bookmarks },
  page,
  index,
  toggleLike,
}) => {
  const [user, setUser] = useState(null)

  const supabase = createSupabaseBrowserClient()

  useEffect(() => {
    const loadFromServer = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    loadFromServer()
  }, [supabase])

  const likePost = like.bind(null, { postId: id, userId: user?.id })

  const submitLike = ({ target: { dataset } }) => {
    toggleLike({ page: Number(dataset.page), index: Number(dataset.index) })
  }

  const bookmarkPost = bookmark.bind(null, {
    postId: id,
    userId: user?.id,
  })

  const userBookmarks = bookmarks.some(
    ({ user_id: userId, post_id: postId }) =>
      userId === user?.id && postId === id
  )

  const userLikes = likes.some(({ user_id: userId }) => userId === user?.id)

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
          <form
            data-page={page}
            data-index={index}
            action={likePost}
            onSubmit={submitLike}
          >
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
