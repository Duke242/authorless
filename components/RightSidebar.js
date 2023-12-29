// import ClickCopy from "./ClickCopy";
const RightSidebar = () => {
  return (
    <div className="w-1/3 flex flex-col h-full scrollbar-hide hidden lg:block">
      <div className="w-3/12 rounded bg-[rgba(232,231,237)] pr-4 text-left pt-4 fixed top-0 right-0 h-full pl-5">
        <p className="text-gray-500">
          We believe that the best content comes from the richness of diverse
          perspectives. This space is for you to share anything that sparks joy,
          curiosity, or excitement! Whether it's a fascinating article, a
          favorite quote, or an original creation, your contribution is what
          makes this community thrive.
        </p>
        <p className="mt-40 pt-40 text-purple-500 font-semibold">
          Immersed in the world of Authorless? Share the magic! Extend an
          invitation to your friends, and together, let&apos;s unravel the
          wonders within. Your invite adds to the adventure!
        </p>
        {/* <ClickCopy content={"Hellooo"} /> */}
      </div>
    </div>
  )
}
export default RightSidebar
