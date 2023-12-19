import Link from "next/link"
import DashboardButton from "./DashboardButton"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import ButtonSignin from "./ButtonSignin"

const Landing = async () => {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const userId = session?.user.id

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("has_access")
    .eq("id", userId)

  // const access = profiles?.[0]?.has_access
  // console.log({ access })

  return (
    <div className="flex flex-col min-h-screen bg-slate-800">
      <h1 className="flex flex-col items-center text-center text-purple-800 pt-12 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl sm:pt-12 md:pt-12 lg:pt-16 xl:pt-14 mx-4 mb-8">
        <span className="text-purple-300 font-normal">
          Anonymously post your interesting ideas.
        </span>
        <span className="text-purple-400 font-normal">
          Inspire others and be inspired.
        </span>
        <span className="text-purple-500 font-bold">
          Become the ideal, innovative version of yourself.
        </span>
      </h1>
      {/* {session ? ( */}
      {/* <DashboardButton /> */}
      <Link href={"dashboard"} className="flex w-full">
        <button className="text-white mx-auto text-2xl bg-purple-600 w-fit p-4 rounded-full hover:bg-purple-800 transition">
          Dashboard
        </button>
      </Link>
      {/* ) : ( */}
      <div className="flex justify-center items-center flex-col w-full sm:w-3/4 lg:w-1/2 mx-auto mt-8">
        {/* <Link
            href="/#pricing"
            className="link link-hover py-2 text-base-200 bg-red-800 text-center rounded-full text-xl sm:text-2xl bg-transparent border border-purple-500 border-solid border-2 px-6 sm:px-8"
          >
            Join
          </Link>
          <p className="text-white text-center m-3">
            Or, if you want to see some posts first
          </p> */}
        {/* <ButtonSignin extraStyle="btn-primary" /> */}
      </div>
      {/* )} */}
      {/* {session && !access && (
        <Link
          href="/#pricing"
          className="link link-hover text-base-200 bg-red-800 mx-auto p-3 rounded-full text-xl sm:text-2xl bg-transparent border border-purple-500 border-solid border-2 px-6 sm:px-8 mt-10"
        >
          Subscribe for full access
        </Link>
      )} */}
    </div>
  )
}

export default Landing
