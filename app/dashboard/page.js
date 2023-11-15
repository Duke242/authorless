import ButtonAccount from "@/components/ButtonAccount";
import DashboardInput from "@/components/DashboardInput";
import Feed from "@/components/Feed";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen p-8 pb-16 bg-[rgb(250,250,250)]">
      <section
        className="flex flex-end space-y-6 ml-0 pr-8 content-end pb-4 backdrop-blur-md w-full pt-2"
        style={{ position: "sticky", top: 0 }}
      >
        <ButtonAccount />
      </section>
      <div className="text-center text-slate-800 font-bold text-4xl">Ideas</div>
      {/* <div className="flex w-full h-full scroll-none"> */}
      {/* <div className="flex w-1/3">Hello</div> */}
      <Feed />
      {/* <div class="h-fit w-fit bg-gradient-to-r from-purple-400 via-violet-600 to-purple-900 rounded-xl mx-auto">
            <input type="text" class="rounded-md m-1" placeholder="Idea?" />
          </div> */}
      {/* <div className="bg-transparent flex w-1/3">Hello</div> */}
      {/* </div> */}
    </main>
  );
}
