import React from "react";
import { useState, useRef } from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "flowbite-react";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Css_course = () => {
  // Code Display
  const inlineStyle = `<h1 style="color:red;background-color:black;">
  Hello world
</h1>`;
  const externalStyle = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>

<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
span {
  display: block;
}
`;
  const html = `<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph with external CSS.</p>
</body>
</html>
`;
  const css = `h1 {
  color: navy;
  font-size: 28px;
}

p {
  color: teal;
  font-weight: bold;
}
`;
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
        <Css_sidebar isVisible={isSidebarVisible} />
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
        <p className="">CSS</p>
      </div>
      {/* JavaScript Title */}
      <h1 className="ml-[5%] text-2xl my-10 text-black font-bold dark:text-white">
        CSS COURSE
      </h1>
      <div
        className={`flex sm:px-[120px] px-10${
          isSidebarVisible ? "cursor-pointer" : ""
        }`}
      >
        <div className="dark:text-text_primaryLight relative md:w-[300px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] text-text_dark_primary">
          <a
            href="#arrow"
            className="text-white bg-red-600 fixed bottom-20 right-10 w-8 h-8 flex justify-center items-center z-10"
          >
            <i class="fa-solid fa-arrow-up"></i>
          </a>
          <p className="mb-3 font-bold">What is CSS ?</p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>CSS stands for Cascading Style Sheets</li>
            <li>
              CSS describes how HTML elements are to be displayed on screen,
              paper, or in other media
            </li>
            <li>
              CSS saves a lot of work. It can control the layout of multiple web
              pages all at once
            </li>
            <li>External stylesheets are stored in CSS files</li>
          </ul>
          <a name="addstyletohtml" />
          <p className="mb-3 font-bold">How to use CSS ?</p>
          <p>
            We can use css like Inline style, Internal style and External style
          </p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              Inline style : You can add CSS directly to an HTML element using
              the style attribute. This is useful for quick styling but not
              recommended for large projects.
            </li>
          </ul>
          <SyntaxHighlighter
            language="css"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {inlineStyle}
          </SyntaxHighlighter>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              Internal style : You can define styles inside a {"<style>"}{" "}
              element within the {"<head>"} section of your HTML document. This
              is good for single-page applications or smaller projects.
            </li>
          </ul>
          <SyntaxHighlighter
            language="css"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {externalStyle}
          </SyntaxHighlighter>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              External style : The most common method is to create a separate
              CSS file and link it to your HTML file using a {"<link>"} tag.
              This is ideal for larger projects or when you want to reuse styles
              across multiple pages.
            </li>
          </ul>
          <SyntaxHighlighter
            language="css"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {html}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="css"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {css}
          </SyntaxHighlighter>
        </div>

        <div className="hidden md:block border-l-2 px-4 border-black dark:border-text_primary fixed right-28 top-20">
          <ul>
            <li>
              <a
                href="#introduction"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#addstyletohtml"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Add style to html
              </a>
            </li>
            <li>
              <Link
                to="/course/css-course/css_exercise"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Exercise Practice
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Css_sidebar = ({ isVisible }) => {
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
              Intoduction
            </a>
            <a
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              href="#addstyletohtml"
            >
              Add style to html
            </a>
            <Link
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              to="/course/css-course/css_exercise"
            >
              Exercise Practice
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Css_course;
