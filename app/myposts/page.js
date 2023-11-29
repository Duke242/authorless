import Sidebar from "@/components/Sidebar";
import MyPostsFeed from "@/components/MyPostsFeed";

export default function MyPosts() {
  return (
    <div className="flex flex-col min-h-screen bg-[rgb(232,231,237)] border border-solid border-transparent overflow-hidden">
      <div className="flex">
        <Sidebar />
        <MyPostsFeed />
        <div className="w-1/3 bg-[rgb(232,231,237)]" />
      </div>
    </div>
  );
}
