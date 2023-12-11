import Sidebar from "@/components/Sidebar"
import BookmarksContainer from "@/components/BookmarksContainer"

export default function Bookmarks() {
  return (
    <div className="flex">
      <Sidebar />
      <BookmarksContainer />
      <div className="hidden w-1/3 bg-[rgb(232,231,237)] lg:block" />
    </div>
  )
}
