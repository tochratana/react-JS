import React from "react";
import { Link } from "react-router-dom";
const Css_exercise = () => {
  return (
    <div className="text-black dark:text-text_primaryLight">
      <div className="flex items-center gap-5 px-10 text-text_primary text-sm mt-5">
        <Link
          to="/"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Home
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <Link
          to="/course/css-course"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          CSS
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <p className="">Css exericse</p>
      </div>
      <p className="ml-[5%] text-xl pt-10">
        This exercise I do it when I learn JavaScript
      </p>
      <ul className="ml-[5%] text-black dark:text-text_primaryLight p-10">
        <li className="hover:text-blue-600 hover:underline hover:underline-offset-3">
          <Link to="/course/css/css_exercise/heart_exercise">
            1. Heart rate (Use CSS with @keyframes and transform to create it
            you can practice and download source code).
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Css_exercise;
