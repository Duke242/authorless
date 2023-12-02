import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

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
