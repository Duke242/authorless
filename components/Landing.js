import Link from "next/link";
import DashboardButton from "./DashboardButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ButtonSignin from "./ButtonSignin";

const Landing = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("has_access")
    .eq("id", userId);

  const access = profiles?.[0]?.has_access;
  console.log({ access });

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
      {session ? (
        <DashboardButton />
      ) : (
        <div className="flex justify-center flex-col w-fit mx-auto mt-8">
          <Link
            href="/#pricing"
            className="link link-hover py-2 text-base-200 bg-red-800 text-center rounded-full text-2xl bg-transparent border border-purple-500 border-solid border-2 px-8 "
          >
            Join
          </Link>
          <p className="text-white text-center m-3">
            Or, if you want to see some posts first
          </p>
          <ButtonSignin extraStyle="btn-primary" />
        </div>
      )}
      {session && !access && (
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
