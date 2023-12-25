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
import { createSupabaseServerClient } from "@/libs/createSupabaseServerClient"

export default async function Dashboard() {
  const supabase = createSupabaseServerClient()

  const user = await supabase.auth.getUser()

  const queryClient = new QueryClient()

  const posts = await queryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: serverPosts,
  })

  return (
    <main className="flex h-full bg-[rgb(232,231,237)]">
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
