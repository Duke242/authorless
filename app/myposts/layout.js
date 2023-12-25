import { redirect } from "next/navigation"
import config from "@/config"
import { createSupabaseServerClient } from "@/libs/createSupabaseServerClient"

export default async function LayoutPrivate({ children }) {
  const supabase = createSupabaseServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect(config.auth.loginUrl)
  }

  return <>{children}</>
}
