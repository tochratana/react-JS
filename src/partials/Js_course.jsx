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

const Js_course = () => {
  // Code Display
  const coddNumber = `let age = 25;       // Integer
let price = 9.99;   // Floating-point number
`;
  const codeString = `let name = "Alice";
let greeting = 'Hello!';`;
  const bigInt = `let largeNumber = 12345678901234567890n;`;
  const symbol = `let id = Symbol("uniqueId");`;
  const nulls = `let emptyValue = null;`;
  const undifind = `let value;
console.log(value); // Output: undefined`;
  const booleans = `let isOnline = true;
let hasAccess = false;`;
  const Object = `let person = {
  name: "Alice",
  age: 25
};`;
  const Array = `let fruits = ["apple", "banana", "cherry"];`;
  const Function = `function greet() {
  console.log("Hello, world!");
}
`;
  const Date = `let today = new Date();`;
  const note = `let x = 10;
let y = "5";
let Sum = x + y; // Sum = 105;
let Subtract = x - y; // Subtract = 5;`;
  const scope = `function example() {
  if (true) {
    var a = 10; // Function-scoped
    let b = 20; // Block-scoped
    const c = 30; // Block-scoped
  }
  console.log(a); // 10
  console.log(b); // Error: b is not defined
  console.log(c); // Error: c is not defined
}
example();`;
  const reassignment = `var x = 1;
x = 2; // Reassignment allowed
var x = 3; // Redeclaration allowed

let y = 1;
y = 2; // Reassignment allowed
// let y = 3; // Error: Cannot redeclare

const z = 1;
// z = 2; // Error: Cannot reassign
// const z = 3; // Error: Cannot redeclare
`;
  const notes = `const person = { name: "Alice" };
  // Allowed (modifying properties)
  person.name = "Bob"; `;
  const hoisting = `//undefined (var is hoisted)
var a = 10;
  console.log(a); 

//Error:Cannot access 'b' before initialization
let b = 20;
console.log(b); 

//Error:Cannot access 'c' before initialization
const c = 30;
console.log(c);
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
        <JavaScript_sidebar isVisible={isSidebarVisible} />
      </div>

      {/* <JavaScript_sidebar isVisible={isSidebarVisible} /> */}
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
        <p className="">JavaScript</p>
      </div>
      {/* JavaScript Title */}
      <h1 className="ml-[5%] text-2xl my-10 text-black font-bold dark:text-white">
        JAVASCRIPT COURSE
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

          {/* <div className="flex gap-10">
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
          </div> */}
          <p className="mb-3 font-bold">Why we use JavaScript ?</p>
          <p className="mb-3">
            JavaScript is widely used because it enables dynamic and interactive
            web development. Here are some key reasons why we use JavaScript:
          </p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              Client-Side Interactivity: JavaScript allows developers to create
              interactive elements on web pages, such as buttons, forms,
              sliders, drop-down menus, animations, and more. It runs in the
              user's browser without needing server-side interaction for every
              change, improving user experience.
            </li>
            <li>
              Cross-Platform and Ubiquitous: JavaScript works across all modern
              browsers and platforms without needing additional installations.
              It is the only programming language native to web browsers, making
              it essential for web development.
            </li>
            <li>
              Rich Ecosystem and Libraries: JavaScript works across all modern
              browsers and platforms without needing additional installations.
              It is the only programming language native to web browsers, making
              it essential for web development.
            </li>
            <li>
              Asynchronous Operations: With JavaScript, you can perform
              asynchronous tasks such as fetching data from servers without
              refreshing the entire page using technologies like AJAX, Fetch
              API, and async/await.
            </li>
            <li>
              Event-Driven Programming: JavaScript’s event-based model allows
              developers to create responsive applications that react to user
              inputs, like clicks, hovers, scrolls, and keyboard events.
            </li>
            <li>
              DOM Manipulation: JavaScript provides powerful capabilities to
              dynamically change the Document Object Model (DOM) of a webpage.
              You can add, remove, or modify elements in real-time, helping
              developers build dynamic and responsive UIs.
            </li>
            <li>
              Server-Side Programming: With the introduction of Node.js,
              JavaScript can also be used for server-side programming. This
              allows developers to use a single language across the entire
              stack, improving efficiency and reducing context-switching.
            </li>
            <li>
              Community and Support: JavaScript has a large community of
              developers, offering extensive support, learning resources,
              open-source projects, and tools.
            </li>
          </ul>
          <a name="installation" />
          <p className="mb-3 font-bold">How to use JavaScript ?</p>
          <p>
            We can run JavaScript in console on browser, visual code and another
            IDE.
          </p>
          <a className="text-blue-600">Run JavaScript on console</a>
          <p className="ml-5">
            Go to browser on right click and choose inspect on the tab choose
            console.
          </p>
          <a className="text-blue-600">Run JavaScript in Visual Code</a>
          <p className="ml-5">
            Install Visual code and Node.js to run JavaScript on terminal
          </p>
          <p className="ml-5">
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
          <p className="ml-5">
            after install node js you can open you IDE (Visual Stideo Code) and
            open terminal run this comment
          </p>
          <div className="background:red  relative w-[325px]">
            <SyntaxHighlighter
              language="bash"
              style={materialDark}
              showLineNumbers={false}
              customStyle={{
                padding: "1rem",
                borderRadius: "0.375rem",
                // backgroundColor: "#e2e8f0",
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
          <a name="datatype" />
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
          <p className="text-xl font-bold mt-5">Data type</p>
          <p>
            Data types define the type of value that a variable can hold. In
            JavaScript, there are two main categories of data types:{" "}
            <span className="font-bold">primitive data types</span>
            and <span className="font-bold">non-primitive</span> (reference)
            data types
          </p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>Primitive data type</li>
            <p>Number: Represents both integer and floating-point numbers.</p>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {coddNumber}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            String: Represents a sequence of characters. Strings can be written
            with single (' '), double (" "), or backticks (` `).
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {codeString}
          </SyntaxHighlighter>
          <p clclassName="ml-5 pl-2 space-y-1">
            Boolean: Represents a logical value: true or false.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {booleans}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Undefined: A variable that has been declared but not assigned a
            value holds an undefined value.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {undifind}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Null: Represents an intentional absence of any value. It is
            explicitly assigned to a variable to indicate that it has no value.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {nulls}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Symbol: A unique and immutable primitive value, often used as keys
            in objects.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {symbol}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            BigInt: Used for working with very large numbers that exceed the
            safe integer limit for regular numbers (Number.MAX_SAFE_INTEGER).
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {bigInt}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Number: Represents both integer and floating-point numbers.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {codeString}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Number: Represents both integer and floating-point numbers.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {codeString}
          </SyntaxHighlighter>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>Non-Primitive (Reference) Data Types:</li>
          </ul>
          <p className="ml-5 pl-2 space-y-1">
            Object: Represents a collection of key-value pairs.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {Object}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Array: A special type of object used to store ordered collections of
            values.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {Array}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Function: A block of code designed to perform a task, and it is also
            a type of object in JavaScript.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {Function}
          </SyntaxHighlighter>
          <p className="ml-5 pl-2 space-y-1">
            Date: An object used to work with dates and times.
          </p>

          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {Date}
          </SyntaxHighlighter>

          <p className="text-red-600">Special Note on Type Coercion:</p>
          <p className="ml-5 pl-2 space-y-1">
            JavaScript is loosely typed, which means a variable's data type can
            change during execution based on the assigned values. For example,
            JavaScript can automatically convert numbers to strings when needed:
          </p>
          <a name="constletvar" />
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {note}
          </SyntaxHighlighter>
          <p>What is different between const let and var ?</p>
          <p className="ml-5">
            The main difference between let, const, and var in JavaScript lies
            in scope, reassignment, and hoisting behavior. Here's a detailed
            comparison:
          </p>
          <p>1. Scope</p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              var: Function-scoped. It is accessible throughout the function in
              which it is declared, or globally if declared outside of any
              function.
            </li>
            <li>
              let: Block-scoped. It is accessible only within the block ({}) in
              which it is declared (such as in a loop, conditional statement, or
              a function).
            </li>
            <li>
              const: Block-scoped, similar to let. It is accessible only within
              the block in which it is declared.
            </li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {scope}
          </SyntaxHighlighter>
          <p>2. Reassignment:</p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              var: Can be reassigned and redeclared within its scope without
              error.
            </li>
            <li>
              let: Can be reassigned but cannot be redeclared within the same
              scope.
            </li>
            <li>
              const: Cannot be reassigned or redeclared. The value of a const
              variable is fixed after assignment.
            </li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {reassignment}
          </SyntaxHighlighter>
          <p>
            Note: For const objects and arrays, while you cannot reassign the
            entire object or array, you can modify their properties or elements.
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {notes}
          </SyntaxHighlighter>
          <p>3. Hoisting:</p>
          <ul className="list-disc pl-2 space-y-1 leading-9 ml-5">
            <li>
              var: Is hoisted to the top of its function or global scope, and
              initialized with undefined. This means you can use it before it is
              declared (although not a best practice).
            </li>
            <li>
              let and const: Are hoisted to the top of their block but are not
              initialized. Accessing them before the declaration results in a
              ReferenceError due to being in the "temporal dead zone."
            </li>
          </ul>
          <SyntaxHighlighter
            language="javascript"
            style={customStyle}
            customStyle={{ width: "350px" }}
          >
            {hoisting}
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
                href="#installation"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="#datatype"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Data type
              </a>
            </li>
            <li>
              <a
                href="#constletvar"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                const, let and var
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Operator
              </a>
            </li>
            <li>
              <Link
                to="/course/javascript/exercise"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Exercise Practice
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-blue-600 hover:underline-offset-2 hover:underline dark:text-white"
              >
                Document file
              </Link>
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
            <a
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              href="#installation"
            >
              Installation
            </a>
            <a
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              href="#datatype"
            >
              Data type
            </a>
            <a
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              href="#constletvar"
            >
              Const let and var
            </a>
            <Link
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              to="/course/javascript/exercise"
            >
              Exercise Practice
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Js_course;
