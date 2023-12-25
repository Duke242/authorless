import { redirect } from "next/navigation"
import config from "@/config"
import { cookies } from "next/headers"

export default async function LayoutPrivate({ children }) {
  return redirect(config.auth.callbackUrl)
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect(config.auth.loginUrl)
  }

  return <>{children}</>
}
