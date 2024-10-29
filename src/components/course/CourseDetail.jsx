import { useParams } from "react-router-dom";
import Course from "../../store/course.json";
import { useState } from "react";
import "../../../src/index.css";
import { Clipboard } from "flowbite-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Js_course from "../../partials/Js_course";
import Gti_course from "../../partials/Gti_course";
import React_course from "../../partials/React_course";
import Css_course from "../../partials/Css_course";

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
        <Css_course />
      </div>
    );
    // JavaScript course
  } else if (course.id === "javascript-course") {
    return (
      <>
        <Js_course />
      </>
    );

    // TypeScript course
  } else if (course.id === "typescript-course") {
    return (
      <>
        <h1>
          This course I will provie you a lot of reference and documentation for
          your study.
        </h1>
      </>
    );
    // React coruse
  } else if (course.id === "react-course") {
    return (
      <>
        <React_course />
      </>
    );
    // Next course
  } else if (course.id === "next-course") {
    return (
      <div className="text-text_primary">
        <h1>This is a next js course</h1>
      </div>
    );
    // Github course
  } else if (course.id === "github-course") {
    return (
      <div className="text-text_primary">
        <h1>This is a gihtub course</h1>
      </div>
    );
    // Git course
  } else if (course.id === "git-course") {
    return (
      <>
        <Gti_course />
      </>
    );
  }
  //
};
