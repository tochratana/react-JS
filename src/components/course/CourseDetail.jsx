import { useParams } from "react-router-dom";
import Course from "../../store/course.json";
import "../../../src/index.css";
import { Clipboard } from "flowbite-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CourseDetail = () => {
  const { courseId } = useParams();
  const course = Course.find((course) => course.id === courseId);
  if (course.id === "html-course") {
    return (
      // For HTMl course
      <>
        <h1>This is a HTML course</h1>
      </>
    );
    // CSS course
  } else if (course.id === "css-course") {
    return (
      <div>
        <h1>This is a css course</h1>
      </div>
    );
    // JavaScript course
  } else if (course.id === "javascript-course") {
    const codeJavascript = 'console.log("Hello world")';
    return (
      <>
        <h1>This is a javascript course</h1>
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
            {codeJavascript}
          </SyntaxHighlighter>

          <Clipboard.WithIcon
            valueToCopy={codeJavascript}
            className="absolute bottom-3 right-1" // Adjust position as needed
          />
        </div>
      </>
    );
    // TypeScript course
  } else if (course.id === "typescript-course") {
    return (
      <>
        <h1>This is a typescript course</h1>
      </>
    );
    // React coruse
  } else if (course.id === "react-course") {
    const codeReact = 'console.log("Hello world")';
    const codeHomebrew = "brew install node";
    const codeNode = "node -v";
    const codeNodes = "npm -v";
    const codeReactApp = "npx create-react-app my-app";
    const codeCd = "cd myapp";
    const codeRunServer = "npm start";
    const codeReactVite = "$ npm create vite@latest";
    return (
      <>
        <div className="dark:bg-bg_primary p-32 dark:text-text_primary">
          <h1 className="dark:text-text_primaryLight text-2xl font-bold mb-5">
            REACT COURSE
          </h1>
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
          <h2 className="text-text_primaryLight pt-10">
            We have two way to setup project with React JS
          </h2>
          {/* Using React */}
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
                    className="absolute bottom-3 right-1" // Adjust position as needed
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
                    className="absolute bottom-3 right-1" // Adjust position as needed
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
                  className="absolute bottom-3 right-1" // Adjust position as needed
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
                className="absolute bottom-3 right-1" // Adjust position as needed
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
                className="absolute bottom-3 right-1" // Adjust position as needed
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
                className="absolute bottom-3 right-1" // Adjust position as needed
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
                className="absolute bottom-3 right-1" // Adjust position as needed
              />
            </div>
            <p>
              and then inpput the name for project select the framework,use
              language for your write project and press Inter.
            </p>
          </div>
          <h2></h2>
        </div>
      </>
    );
    // Next course
  } else if (course.id === "next-course") {
    return (
      <>
        <h1>This is a next js course</h1>
      </>
    );
  } else if (course.id === "github-course") {
    return (
      <>
        <h1>This is a gihtub course</h1>
      </>
    );
  } else if (course.id === "git-course") {
    return (
      <>
        <h1>This is a git course</h1>
      </>
    );
  }
  //
};
