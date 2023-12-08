"use client"
import Post from "./Post"
import { browserPosts } from "@/libs/browserPosts"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { createBrowserClient } from "@supabase/ssr"

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

const Feed = ({ posts }) => {
  // const supabaseSession = createServerComponentClient({ cookies })

  // const {
  //   data: { session },
  // } = await supabaseSession.auth.getSession()

  // const supabase = createBrowserClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // )

  // console.log({ supabase })
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
        posts.map((post) => <Post key={post.id} {...{ post }} />)
      )}
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
