import React from "react";
import { Link } from "react-router-dom";

const Amazone_project = () => {
  return (
    <>
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
        <Link
          to="/course/javascript/exercise"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Exercise practice
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <p className="">Amazone Project</p>
      </div>
      <div className="flex px-[12%] py-[2%] dark:text-text_primary gap-10 flex-col xl:flex-row">
        {/* right side */}
        <div className="sm:w-[600px] lg:w-[900px] xg:w-[1100px]">
          <div>
            <h1 className="text-[30px] font-bold mb-5">
              Amazone-JavaScript-Practice
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <img
              src="../../../public/image/exercise/js-amazone-exercise.png"
              alt="js-amazone-practice"
              className="w-[90%] border-2 border-black"
            />
          </div>
          <div className="mt-5">
            <div className="flex flex-col lg:flex-row lg:gap-[60%] items-center">
              <p className="text-xl mb-5 font-bold">Descriptions</p>
              <a
                href="https://js-amazone.vercel.app/"
                className="flex items-center gap-2 text-blue-600"
                target="_black"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <p className="hover:underline hover:underline-offset-2">
                  Live Preview
                </p>
              </a>
            </div>
            <hr />
            <p className="my-2">
              Js-amazone is a exercise for practice that I create it for learn
              code with JavaScript and I also have a lot of exercise like this
              if you like check it out.
            </p>
            <p className="my-5">Key Feature</p>
            <ul className="list-disc pl-5 space-y-2 ml-2">
              <li>HTML 5</li>
              <li>CSS</li>
              <li>JSON data</li>
              <li>JavaScript</li>
              <li>Full Responsive</li>
            </ul>
          </div>
        </div>
        {/* left side */}
        <div className="w-[300px] sm:w-[400px] border-2 border-text_primary rounded-md h-[350px]">
          <div className="flex justify-between p-5">
            <p>Free download</p>
            <div className="flex items-center gap-2">
              <p>License</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <hr />
          <a
            className="mt-5 flex items-center gap-5 w-[80%] h-14 m-auto rounded-lg justify-center bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898]"
            href="../../../document/project-practice/javascript-amazon-project.zip"
            download="javascript-amazone-project.zip"
          >
            <p>Download</p>
            <i class="fa-solid fa-cloud-arrow-down"></i>
          </a>
          <div className="my-5">
            <div className=" flex items-center gap-5 ml-5">
              <i class="fa-solid fa-check text-[#8336ad]"></i>
              <p>Open source</p>
            </div>
            <div className=" flex items-center gap-5 ml-5">
              <i class="fa-solid fa-check text-[#8336ad]"></i>
              <p>Practice in real project</p>
            </div>
            <div className=" flex items-center gap-5 ml-5">
              <i class="fa-solid fa-check text-[#8336ad]"></i>
              <p>Life time update</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center mt-5 p-5">
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <p>3</p>
            <p>Downloads</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amazone_project;
