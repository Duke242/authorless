import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Landing from "@/components/Landing"

export default async function Home() {
  // return (
  //   <div className="w-screen h-screen flex justify-center items-center">
  //     <h1 className="text-3xl">Under maintenance</h1>
  //   </div>
  // );
  return (
    <div className=" min-h-screen bg-slate-800">
      <Header />
      <main>
        <Landing />
        <Hero />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
