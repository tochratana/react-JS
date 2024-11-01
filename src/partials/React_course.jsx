import React from "react";
// import JavaScript_sidebar from "../components/sidebar/JavaScript_sidebar";
import { Sidebar } from "flowbite-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "flowbite-react";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

const React_course = () => {
  // Code Display

  const customStyle = {
    ...solarizedlight,
    'code[class*="language-"]': {
      ...solarizedlight['code[class*="language-"]'],
      backgroundColor: "#e2e8f0",
    },
    'pre[class*="language-"]': {
      ...solarizedlight['pre[class*="language-"]'],
      backgroundColor: "#e2e8f0",
      // width: "500px",
      fontSize: "12px",
      padding: "5px",
    },
  };
  // code copy from keyborad
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      isSidebarVisible &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      setSidebarVisible(false);
    }
  };

  const codeRunNW = "node --watch .....";
  const codeRunN = "node ....";
  return (
    <div onClick={handleClickOutside}>
      <a name="introduction" />
      <button
        className="fixed top-20 right-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md z-50 md:hidden block"
        onClick={(e) => {
          e.stopPropagation();
          toggleSidebar();
        }}
      >
        <span class="material-symbols-outlined">thumbnail_bar</span>
      </button>

      <div ref={sidebarRef}>
        <JavaScript_sidebar isVisible={isSidebarVisible} />
      </div>
      <a name="arrow" />
      {/* Start */}
      <div className="flex items-center gap-5 px-10 text-text_primary text-sm mt-5">
        <Link
          to="/"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Home
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <p className="">React course</p>
      </div>
      {/* JavaScript Title */}
      <h1 className="ml-[5%] text-2xl my-10 text-black font-bold dark:text-white">
        REACT COURSE
      </h1>
      <div
        className={`flex sm:px-[120px] px-10${
          isSidebarVisible ? "cursor-pointer" : ""
        }`}
      >
        <div className="dark:text-text_primaryLight relative md:w-[300px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] text-text_dark_primary">
          {/* Write code this hear */}
          <a
            href="#arrow"
            className="text-white bg-red-600 fixed bottom-20 right-10 w-8 h-8 flex justify-center items-center z-10"
          >
            <i class="fa-solid fa-arrow-up"></i>
          </a>
          <p className="mb-3 font-bold">Why we use JavaScript ?</p>
        </div>

        <div className="hidden md:block border-l-2 px-4 border-black dark:border-text_primary fixed right-28 top-20">
          <ul>
            <li>
              <a
                href=""
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Introduction
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const JavaScript_sidebar = ({ isVisible }) => {
  return (
    <div
      className={`${isVisible ? "block" : "hidden"} fixed inset-0 z-40 top-16`}
    >
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col ">
            <a
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              href="#introduction"
            >
              Introduction
            </a>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default React_course;
