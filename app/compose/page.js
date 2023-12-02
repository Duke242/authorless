import CreatePost from "@/components/CreatePost";
import Sidebar from "@/components/Sidebar";

const createPost = () => {
  return (
    <div className="bg-[rgb(232,231,237)] h-screen">
      <Sidebar />
      <CreatePost />
    </div>
  );
};
export default createPost;
