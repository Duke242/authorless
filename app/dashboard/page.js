import ButtonAccount from "@/components/ButtonAccount";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen p-8 pb-24">
      <section className="flex flex-col space-y-6 ml-auto pr-8 pb-4">
        <ButtonAccount />
      </section>
      <div className="flex bg-purple-200 w-full h-full">
        <div className="bg-red-300 flex w-1/3">Hello</div>
        <div className="bg-green-300 flex w-1/3">Hello</div>
        <div className="bg-blue-300 flex w-1/3">Hello</div>
      </div>
    </main>
  );
}
