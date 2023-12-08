import { redirect } from "next/navigation"
import config from "@/config"
import { createSupabaseServerClient } from "@/libs/createSupabaseServerClient"

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children }) {
  createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(config.auth.loginUrl)
  }

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("has_access")
    .eq("id", user.id)

  const access = profiles?.[0]?.has_access

  if (access !== true) {
    redirect(config.auth.callbackUrl)
  }

  return <>{children}</>
}
