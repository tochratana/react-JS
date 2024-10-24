import React from "react";
import { Link } from "react-router-dom";

const Gti_course = () => {
  return (
    <div>
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
      <div className="text-text_primary flex sm:px-[120px]">
        <div className="text-text_primary relative md:w-[300px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px]">
          <h1 className="dark:text-text_primaryLight text-2xl font-bold mb-5">
            GIT COURSE
          </h1>
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
      </div>
    </div>
  );
};

export default Gti_course;
