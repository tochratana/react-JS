import { useParams } from "react-router-dom";
import Course from "../../store/course.json";
import "../../../src/index.css";
import { Clipboard } from "flowbite-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CourseDetail = () => {
  const code = 'console.log("Hello world")';
  const { courseId } = useParams();
  const course = Course.find((course) => course.id === courseId);

  return (
    <div className="dark:bg-bg_primary p-32 dark:text-text_primary">
      <h1 className="dark:text-text_primaryLight text-2xl font-bold">
        {course.title} CRUSH COURSE
      </h1>
      <p className="">
        This {course.name} I will provie you a lot of referents for you study
        and anythings
      </p>
      <p>The first we will setup</p>
      {/* copy to clibord */}
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
          {code}
        </SyntaxHighlighter>

        <Clipboard.WithIcon
          valueToCopy={code}
          className="absolute bottom-3 right-1" // Adjust position as needed
        />
      </div>
    </div>
  );
};
