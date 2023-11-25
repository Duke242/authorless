// import ClickCopy from "./ClickCopy";
const RightSidebar = () => {
  return (
    <div className="w-1/3 flex flex-col h-full hidden lg:block">
      <div className="w-3/12 rounded bg-[rgba(232,231,237)] pr-4 text-left pt-4 fixed top-0 right-0 h-full pl-5">
        <p className="text-gray-500">
          “The important thing is not to stop questioning. Curiosity has its own
          reason for existence. One cannot help but be in awe when he
          contemplates the mysteries of eternity, of life, of the marvelous
          structure of reality. It is enough if one tries merely to comprehend a
          little of this mystery each day.
        </p>
        <br />
        <p className="text-left pr-8 text-gray-500">― Albert Einstein</p>
        <p className="mt-40 pt-40 text-purple-500 font-semibold">
          Immersed in the world of Authorless? Share the magic! Extend an
          invitation to your friends, and together, let&apos;s unravel the
          wonders within. Your invite adds to the adventure!
        </p>
        {/* <ClickCopy content={"Hellooo"} /> */}
      </div>
    </div>
  );
};
export default RightSidebar;
