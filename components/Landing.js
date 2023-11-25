import Link from "next/link";
import DashboardButton from "./DashboardButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Landing = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("has_access");

  return (
    <div className="flex flex-col h-screen bg-slate-800">
      <h1 className="flex flex-col items-center text-center text-purple-800 text-8xl pt-20 mr-4 ml-4">
        <span className="text-purple-400 font-normal">
          Explore a realm where curiosity rules,{" "}
        </span>
        <span className="text-purple-600 font-normal">
          ideas are prized for merit,
        </span>
        <span className="text-purple-800 font-bold">
          and authors stay hidden.
        </span>
      </h1>
      {session ? null : (
        <Link
          href="/#pricing"
          className="link link-hover text-base-200 bg-red-800 mx-auto p-3 rounded-full text-2xl bg-transparent border border-purple-500 border-solid border-2 px-8 mt-10"
        >
          Join
        </Link>
      )}
      {session ? <DashboardButton /> : null}
      {profiles.has_access ? null : (
        <Link
          href="/#pricing"
          className="link link-hover text-base-200 bg-red-800 mx-auto p-3 rounded-full text-2xl bg-transparent border border-purple-500 border-solid border-2 px-8 mt-10"
        >
          Subscribe for full access
        </Link>
      )}
    </div>
  );
};

export default Landing;
