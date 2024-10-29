import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard } from "flowbite-react";
const React_course = () => {
  const codeHomebrew = "brew install node";
  const codeNode = "node -v";
  const codeNodes = "npm -v";
  const codeReactApp = "npx create-react-app my-app";
  const codeCd = "cd myapp";
  const codeRunServer = "npm start";
  const codeReactVite = "$ npm create vite@latest";
  return (
    <div>
      <a name="introduction" />
      <a name="arrow" />
      <div className="flex items-center gap-5 px-10 text-text_primary text-sm mt-5">
        <Link
          to="/"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Home
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <p className="">Amazone Project</p>
      </div>
      <h1 className="ml-[5%] text-2xl my-10 text-black font-bold dark:text-white">
        REACT COURSE
      </h1>
      {/* <div className="flex sm:px-[120px]">
        <div className="text-text_primary relative md:w-[300px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px]">
          <a
            href="#arrow"
            className="text-white bg-red-600 fixed bottom-20 right-10 w-8 h-8 flex justify-center items-center z-10"
          >
            <i class="fa-solid fa-arrow-up"></i>
          </a>

          <p className="pl-10">
            This course I will provie you a lot of reference and documentation
            for your study.
          </p>
          <p className="mt-5 leading-10 ml-10">
            React.js is a JavaScript library for building user interfaces,
            particularly single-page applications (SPAs). It allows developers
            to create reusable UI components, making the code more modular and
            maintainable. Here are some key features:
          </p>
          <ul className="list-disc pl-10 space-y-2 leading-10 ml-10">
            <li className="">
              Component-based architecture: Build encapsulated components that
              manage their own state and compose them to create complex UIs.
            </li>
            <li>
              JSX: A syntax extension that allows you to write HTML-like code
              within JavaScript.
            </li>
            <li>
              Virtual DOM: React uses a virtual DOM to optimize updates to the
              real DOM, leading to better performance.
            </li>
            <li>
              One-way data binding: Data flows from parent to child components,
              making state management easier to trace.
            </li>
            <li>
              Hooks: Functions like useState and useEffect allow you to manage
              state and side effects in functional components.
            </li>
            <li>
              React Router: Enables navigation in SPAs, providing components
              like BrowserRouter and Route for routing.
            </li>
          </ul>
          <a name="installation" />
          <h2 className="text-text_primary pt-10">
            We have two way to setup project with React JS
          </h2>

          <div className="pl-10 py-10 leading-10">
            <p className="">Before we install react we need to install Node</p>
            <p>The node js have different operating system to install</p>
            <ol className="list-decimal">
              <li>
                Window
                <ol>
                  <li>
                    Go to official website{" "}
                    <a
                      href="https://nodejs.org/en"
                      className="underline underline-offset-2 text-blue-600"
                      target="_blank"
                    >
                      {" "}
                      Node{" "}
                    </a>
                    and install
                  </li>
                </ol>
              </li>
              <li>
                Mac
                <ol>
                  <li>Using Homebrew</li>
                </ol>
                <ol className="list-disc">
                  <li>
                    Go to{" "}
                    <a
                      href="https://brew.sh/"
                      className="underline underline-offset-2 text-blue-600"
                      target="_black"
                    >
                      Homebrew
                    </a>{" "}
                    and install homebrew to your computer
                  </li>
                </ol>
                <ol>
                  <li>
                    Commend to install Node js after we install homebrew
                    successful
                  </li>
                </ol>
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
                    {codeHomebrew}
                  </SyntaxHighlighter>

                  <Clipboard.WithIcon
                    valueToCopy={codeHomebrew}
                    className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
                  />
                </div>
                <ol>
                  <li>
                    Commend to check node js have in your computer or not (we
                    can use both window and mac)
                  </li>
                </ol>
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
                    {codeNode}
                  </SyntaxHighlighter>

                  <Clipboard.WithIcon
                    valueToCopy={codeNode}
                    className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
                  />
                </div>
              </li>
              or
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
                  {codeNodes}
                </SyntaxHighlighter>

                <Clipboard.WithIcon
                  valueToCopy={codeNodes}
                  className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
                />
              </div>
            </ol>
            <h3 className=" text-blue-600">
              Usage{" "}
              <a
                href="https://react.dev/learn/start-a-new-react-project"
                target="_black"
                className="underline underline-offset-2"
              >
                React
              </a>
            </h3>
            <p>1. Use react App</p>
            <p>Open the commend prompt or terminal and use this commend</p>
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
                {codeReactApp}
              </SyntaxHighlighter>

              <Clipboard.WithIcon
                valueToCopy={codeReactApp}
                className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
              />
            </div>
            <p>Replace my-app with your desired project name.</p>
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
                {codeCd}
              </SyntaxHighlighter>

              <Clipboard.WithIcon
                valueToCopy={codeCd}
                className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
              />
            </div>
            <p>Start the React development server</p>
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
                {codeRunServer}
              </SyntaxHighlighter>

              <Clipboard.WithIcon
                valueToCopy={codeRunServer}
                className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
              />
            </div>
            <p>2. Use vite to install</p>
            <p>
              Go to{" "}
              <a
                href="https://vitejs.dev/guide/"
                className="underline underline-offset-2 text-blue-600"
              >
                Vite
              </a>
            </p>
            <p>You can follow this commend</p>
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
                {codeReactVite}
              </SyntaxHighlighter>

              <Clipboard.WithIcon
                valueToCopy={codeReactVite}
                className="absolute bottom-3 right-1 hover:bg-[#2F2F2F]"
              />
            </div>
            <p>
              and then inpput the name for project select the framework,use
              language for your write project and press Inter.
            </p>
          </div>
          <h2></h2>
        </div>
        <div className="hidden md:block border-l-2 px-4 border-black dark:border-text_primary fixed right-28">
          <ul>
            <li>
              <a
                href="#introduction"
                className="text-blue-600 underline-offset-2 underline"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#installation"
                className="text-blue-600 underline-offset-2 underline"
              >
                Installation
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default React_course;
