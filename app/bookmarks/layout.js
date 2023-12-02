import { redirect } from "next/navigation";
import config from "@/config";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-hot-toast";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect(config.auth.loginUrl);
  }

  const userId = session.user.id;

  console.log({ userId });

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("has_access")
    .eq("id", userId);

  const access = profiles?.[0]?.has_access;
  console.log({ access });

  if (access !== true) {
    redirect(config.auth.callbackUrl);
  }

  return <>{children}</>;
}
