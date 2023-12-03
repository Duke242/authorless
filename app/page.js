import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  return (
    <div className=" min-h-screen bg-slate-800">
      <Header />
      <main>
        <Landing />
        <Hero />
        <Pricing />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
