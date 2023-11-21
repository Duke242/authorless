import Link from "next/link";
import ButtonAccount from "./ButtonAccount";

const Sidebar = () => {
  return (
    <div className="w-1/3 ">
      <div className="fixed top-0 left-0 flex flex-col w-3/12 border shadow-2xl  bg-[rgb(232,231,237)] h-full">
        <section
          className="flex flex-col mx-auto pr-8 content-end pb-4 pl-5 backdrop-blur-md w-full pt-2"
          style={{ position: "sticky", top: 0 }}
        >
          <Link href="/" className="btn btn-ghost btn-sm w-fit mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Homepage
          </Link>
          <ButtonAccount />
        </section>
        <ul className="ml-4 mt-4">
          <Link href={"compose"}>
            <li className="flex text-xl align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2 text-purple-600">
              Compose
            </li>
          </Link>
          <Link href={"dashboard"}>
            <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
              Home
            </li>
          </Link>
          <Link href={"bookmarks"}>
            <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
              Bookmarks
            </li>
          </Link>
          <Link href={""}>
            <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
              Feedback
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
