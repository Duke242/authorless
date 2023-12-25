import CreatePost from "@/components/CreatePost"
import RightSidebar from "@/components/RightSidebar"
import Sidebar from "@/components/Sidebar"

const createPost = () => {
  return (
    <div className="bg-[rgb(232,231,237)] h-screen">
      <Sidebar />
      <CreatePost />
      <RightSidebar />
    </div>
  )
}
export default createPost
