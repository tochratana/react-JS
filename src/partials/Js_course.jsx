import React from "react";
import JavaScript_sidebar from "../components/sidebar/JavaScript_sidebar";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "flowbite-react";
import CodeDisplay from "../components/code/CodeDisplay";

const Js_course = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    // If the sidebar is visible and the clicked target is outside the sidebar, hide it
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

      {/* <JavaScript_sidebar isVisible={isSidebarVisible} /> */}
      <a name="arrow" />
      <CodeDisplay />
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md py-10 px-5 w-[150px] dark:text-text_primary"
        >
          <div className="w-5 h-5 border-2 border-bg_primaryOld bg-text_primary rounded-full flex justify-center items-center text-black">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <p>Back</p>
        </Link>
      </div>
      <div
        className={`flex sm:px-[120px] p-10 ${
          isSidebarVisible ? "cursor-pointer" : ""
        }`}
        // className={`p-4 ml-72 ${isSidebarVisible ? "cursor-pointer" : ""}`}
      >
        <div className="text-text_primary relative md:w-[300px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] ">
          <h1 className="text-2xl mb-6 text-black font-bold dark:text-white">
            JAVASCRIPT COURSE
          </h1>
          <a
            href="#arrow"
            className="text-white bg-red-600 fixed bottom-20 right-10 w-8 h-8 flex justify-center items-center z-10"
          >
            <i class="fa-solid fa-arrow-up"></i>
          </a>
          <div className="flex gap-10">
            <a
              className="border-2 border-black dark:border-text_primary px-5 py-2 mt-10 mb-10 hover:bg-black duration-500 hover:text-white"
              href="../../../document/FilePdf/1. JavaScript Introduction.pptx.pdf"
              download="Intoduction JavaScript.pdf"
            >
              Download
            </a>
            <a
              className="border-2 border-black dark:border-text_primary px-5 py-2 mt-10 mb-10 hover:bg-black duration-500 hover:text-white"
              href="../../../document/FilePdf/1. JavaScript Introduction.pptx.pdf"
              target="_blank"
            >
              Open
            </a>
          </div>
          <h1 className="mt-5">
            This course I will provie you a lot of reference and documentation
            for your study.
          </h1>
          <p>
            In this language you can install{" "}
            <a
              className="text-blue-600 border-b border-blue-600"
              href="https://nodejs.org/en"
              target="_blank"
            >
              Node
            </a>{" "}
            to run it in terminal
          </p>
          <p>
            after install node js you can open you IDE (Visual Stideo Code) and
            open terminal run this comment
          </p>
          <div className="relative w-[325px]">
            <SyntaxHighlighter
              language="bash"
              style={materialDark}
              showLineNumbers={false}
              customStyle={{
                padding: "1rem",
                borderRadius: "0.375rem",
              }}
            >
              {codeRunNW}
            </SyntaxHighlighter>

            <Clipboard.WithIcon
              valueToCopy={codeRunNW}
              className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]" // Adjust position as needed
            />
          </div>

          <p>
            This commend is can be use all the time when you write you code if
            you want to run one time you can don't use (--watch)
          </p>
          <p>Like this :</p>
          <div className="relative w-[325px]">
            <SyntaxHighlighter
              language="bash"
              style={materialDark}
              showLineNumbers={false}
              customStyle={{
                padding: "1rem",
                borderRadius: "0.375rem",
              }}
            >
              {codeRunN}
            </SyntaxHighlighter>

            <Clipboard.WithIcon
              valueToCopy={codeRunN}
              className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]" // Adjust position as needed
            />
          </div>
          <p>The (....) is a name of you folder </p>
          <h1 className="text-xl text-white mt-5">1. Number</h1>
          <h1 className="text-xl text-white mt-5">2. String</h1>
          <h1 className="text-xl text-white mt-5">3. Booleans</h1>
        </div>

        <div className="hidden md:block border-l-2 px-4 border-black dark:border-text_primary fixed right-28">
          <ul>
            <li>
              <a
                href="#introduction"
                className="text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#installation"
                className="text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Installation
              </a>
            </li>
            <li>
              <Link
                to="/exercise/javascript"
                className="text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Exercise Practice
              </Link>
            </li>
            <li>
              <Link
                to="/exercise/javascript"
                className="text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Js_course;
