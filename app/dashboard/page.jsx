"use server"
import Feed from "@/components/Feed"
import RightSidebar from "@/components/RightSidebar"
import Sidebar from "@/components/Sidebar"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import { serverPosts } from "@/libs/serverPosts"
import { cookies } from "next/headers"
import { createSupabaseServerClient } from "@/libs/createSupabaseServerClient"

export default async function Dashboard() {
  const supabase = createSupabaseServerClient()

  const user = await supabase.auth.getUser()
  // console.log({ user })

  const queryClient = new QueryClient()

  const posts = await queryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: serverPosts,
  })

  return (
    <main className="flex flex-col min-h-screen bg-[rgb(232,231,237)] border border-solid border-transparent overflow-hidden">
      <div className="flex">
        <Sidebar />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Feed {...{ posts }} />
        </HydrationBoundary>
        <RightSidebar />
      </div>
    </main>
  )
}
