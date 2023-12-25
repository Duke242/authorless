import { redirect } from "next/navigation"
import config from "@/config"
import { createSupabaseServerClient } from "@/libs/createSupabaseServerClient"

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page

export const dynamic = "force-dynamic"

export default async function LayoutPrivate({ children }) {
  // const supabase = createSupabaseServerClient()

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  // if (!user) {
  //   redirect(config.auth.loginUrl)
  // }

  return <>{children}</>
}
