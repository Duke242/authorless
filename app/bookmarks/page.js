import Sidebar from "@/components/Sidebar";
import BookmarksContainer from "@/components/BookmarksContainer";

export default function Bookmarks() {
  return (
    <div className="flex">
      <Sidebar />
      <BookmarksContainer />
      <div className="w-1/3 bg-[rgb(232,231,237)]" />
    </div>
  );
}
