import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Landing from "@/components/Landing"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

export const fetchCache = "force-no-store" // to page.js

export const revalidate = 0

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  return (
    <>
      <Header />
      <main>
        <Landing />
        <Hero />
        {/* <Pricing /> */}
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  )
}
