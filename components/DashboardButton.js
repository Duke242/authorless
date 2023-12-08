"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import config from "@/config"
import { createBrowserClient } from "@supabase/ssr"

// A simple button to sign in with our providers (Google & Magic Links).
// It automatically redirects user to callbackUrl (config.auth.callbackUrl) after login, which is normally a private page for users to manage their accounts.
// If the user is already logged in, it will show their profile picture & redirect them to callbackUrl immediately.
const DashboardButton = ({ text = "Go To Dashboard", extraStyle }) => {
  const router = useRouter()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()

      setUser(data.user)
    }

    getUser()
  }, [supabase])

  const handleClick = () => {
    if (user) {
      router.push(config.auth.callbackUrl)
    } else {
      router.push(config.auth.loginUrl)
    }
  }
  return (
    <button
      onClick={handleClick}
      className="text-white mt-4 p-4 bg-purple-500 w-fit mx-auto rounded-full font-bold hover:bg-purple-800 transition"
    >
      {text}
    </button>
  )
}

export default DashboardButton
