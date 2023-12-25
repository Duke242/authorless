"use client"
import Post from "./Post"
import Link from "next/link"
import { QueryClient, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { createSupabaseBrowserClient } from "@/libs/createSupabaseBrowserClient"
import { useEffect, useRef, useState } from "react"
import {
  POSTS_PER_LOAD,
  infiniteBrowserPosts,
} from "@/libs/infiniteBrowserPosts"
import { SpinningCircles } from "react-loading-icons"

const Feed = ({ posts: initialPosts }) => {
  const [user, setUser] = useState(null)
  const footer = useRef(null)
  const supabase = createSupabaseBrowserClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  const toggleLike = ({ page, index }) => {
    // const queryClient = new QueryClient()
    // queryClient.setQueryData(["infinite-posts"], (prev) => console.log(prev))
    console.log({ page, index })
    refetch({
      refetchPage: (refPage, refIndex) =>
        refPage === page && refIndex === index,
    })
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["infinite-posts"],
    queryFn: infiniteBrowserPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    initialData: {
      pages: [initialPosts],
      pageParams: [1],
    },
  })
  const posts = data.pages.flat()

  useEffect(() => {
    const foot = footer.current
    const callback = () => {
      fetchNextPage()
    }
    let observer = new IntersectionObserver(callback)
    observer.observe(foot)
    return () => observer.unobserve(foot)
  }, [])

  const links = [
    {
      href: "/#pricing",
      label: "Pricing",
    },
  ]
  // const { data: posts, error } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: browserPosts,
  // })
  // console.log({ FEEDPOST: posts })

  const postCount = posts.length
  // console.log({ posts })

  // console.log({ posts, error, postCount })

  // let { data: profiles, e } = await supabase
  //   .from("profiles")
  //   .select("*")
  //   .eq("id", session.user.id)

  // const access = profiles?.[0]?.has_access

  const access = true

  return access ? (
    <div className="min-h-screen w-2/3 mx-4 mt-2 bg-[rgb(232,231,237)] overflow-scroll mx-auto w-fit md:w-2/3 lg:w-2/3">
      {postCount === 0 ? (
        <div className="text-center p-4">No posts available</div>
      ) : (
        data.pages.map((page, pageIdx) =>
          page.map((post, postIdx) => (
            <Post key={post.id} page={pageIdx} index={postIdx} {...{ post }} />
          ))
        )
      )}
      {isFetchingNextPage ? (
        <SpinningCircles fill="#9333ea" className="mx-auto" />
      ) : null}
      <div ref={footer}></div>
    </div>
  ) : (
    <div className="min-h-screen w-2/3 mx-4 mt-2 bg-[rgb(232,231,237)]">
      {postCount === 0 ? (
        <div className="text-center p-4">No posts available</div>
      ) : (
        posts.slice(0, 2).map((post) => <Post key={post.id} {...{ post }} />)
      )}

      <h1 className="mx-auto text-purple-700 w-max text-3xl text-center mb-4">
        Subscribe to see more posts <br /> and access other pages.
      </h1>

      <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center bg-purple-600 w-40 rounded mx-auto mt-5">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className="link link-hover text-base-200"
          >
            Click to Subscribe
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Feed
