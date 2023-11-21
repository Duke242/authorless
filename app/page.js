import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (session) {
  //   redirect('/dashboard');
  // }

  return (
    <>
      <Header />
      <main>
        <Landing />
        <Hero />
        <Pricing />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
