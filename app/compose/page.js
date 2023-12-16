import CreatePost from "@/components/CreatePost"
import RightSidebar from "@/components/RightSidebar"
import Sidebar from "@/components/Sidebar"

const createPost = () => {
  return (
    <div>
      <Sidebar />
      <CreatePost />
      <RightSidebar />
    </div>
  )
}
export default createPost
