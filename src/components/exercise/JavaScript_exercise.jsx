import React from "react";
import { Link } from "react-router-dom";

const JavaScript_exercise = () => {
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
          to="/course/javascript-course"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          JavaScript
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <p className="">JavaScript</p>
      </div>
      <p className="ml-[5%] text-xl pt-10">
        This exercise I do it when I learn JavaScript
      </p>
      <ul className="ml-[5%] text-black dark:text-text_primaryLight p-10">
        <li className="hover:text-blue-600 hover:underline hover:underline-offset-3">
          <Link to="/">
            1. Rock Paper Scission (Use javascript to create a random number
            that computer pick, function and use condition)
          </Link>
        </li>
        <li className="hover:text-blue-600 hover:underline hover:underline-offset-3">
          <Link to="/course/javascript/exercise/amazone_project">
            2. Amazone project clone (Use javascript contain function,
            condition, loop, localstorage, json, rander data from json file
            using javascript export, module)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default JavaScript_exercise;
