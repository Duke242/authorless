"use client";
import Link from "next/link";
import ButtonAccount from "./ButtonAccount";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:flex md:flex md:w-1/3 lg:w-1/3 bg-[rgb(232,231,237)]">
      <div className="hidden fixed top-0 md:w-3/12 md:flex left-0 lg:w-3/12 lg:flex flex flex-col w-3/12 border shadow-2xl  bg-[rgb(232,231,237)] h-full">
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
              Feed
            </li>
          </Link>
          <Link href={"myposts"}>
            <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
              My Posts
            </li>
          </Link>
          <Link href={"bookmarks"}>
            <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
              Bookmarks
            </li>
          </Link>
          <Link href={"feedback"}>
            <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
              Give Feedback
            </li>
          </Link>
        </ul>
      </div>
      <button
        className={`md:hidden lg:hidden h-12 w-12 absolute fixed top-0 left-0 pt-2 ${
          isOpen ? "hidden" : ""
        }`}
        onClick={() => setIsOpen(true)}
      >
        {" "}
        <span className="sr-only">Open main menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="purple"
          className="w-12 h-12 text-base-content"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 z-10 w-screen h-screen px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 bg-color-primary mr-auto"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root">
            <div className="divider text-purple-800">Authorless</div>
            <ul className="ml-4 mt-4">
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
              <Link href={"compose"}>
                <li className="flex text-xl align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2 text-purple-600">
                  Compose
                </li>
              </Link>
              <Link href={"dashboard"}>
                <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
                  Feed
                </li>
              </Link>
              <Link href={"myposts"}>
                <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
                  My Posts
                </li>
              </Link>
              <Link href={"bookmarks"}>
                <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
                  Bookmarks
                </li>
              </Link>
              <Link href={"feedback"}>
                <li className="flex align-center w-full text-left text-base list-none font-normal border-5 hover:bg-gray-300 hover:font-semibold cursor-pointer rounded transition p-2">
                  Give Feedback
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
