import Feed from "@/components/Feed";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen bg-[rgb(232,231,237)] border border-solid border-transparent overflow-hidden">
      <div className="flex">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </main>
  );
}
