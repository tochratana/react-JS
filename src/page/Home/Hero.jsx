import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="dark:bg-bg_primary dark:text-white bg-gray-50">
      <div className="py-10 px-[10px] lg:px-[200px] flex flex-col items-center">
        <p
          className="dark:hover:bg-[#030925] border-2 dark:border-gray-800 text-center py-1 px-2 rounded-2xl dark:bg-bg_primary dark:text-white w-[350px] m-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          🎉 Introducing to Blog and get on linkin
          <a
            href="https://www.linkedin.com/in/ratana-touch-930119302/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin ml-2"></i>
          </a>
        </p>
        <h1
          className="text-4xl lg:text-[70px] w-[380px] md:w-[800px] lg:w-[800px] text-center font-bold md:leading-[90px]"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          Explore My Blog with{" "}
          <span
            className="linear-wipe"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Toch Ratana
          </span>
        </h1>

        <p
          className="text-xl w-[400px] lg:w-[600px] text-center text-text_primary"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          This is my blog, and I created it to share study-related activities,
          information, and my knowledge, as well as other documents I have
          researched.
        </p>
        <div
          className="flex gap-10 md:flex-row flex-col items-center md:gap-20 lg:gap-40 mt-7"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          <Link
            className=" w-48 rounded-3xl py-2 px-10 border-2 dark:border-white dark:bg-white dark:text-black flex gap-3 items-center border-black"
            to="/connect"
          >
            Connect<i className="fa-solid fa-arrow-right"></i>
          </Link>
          <a
            href="https://github.com/tochratana/react-JS"
            className=" w-60 rounded-3xl py-2 px-8 border-2 border-white flex gap-2 items-center hover:bg-bg_primary hover:text-white duration-700"
            target="_black"
          >
            Star on Github 1.5K<i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <img
          src="./Svg/working-from-anywhere-animate.svg"
          alt=""
          className="w-[800px] m-auto"
        />
      </div>
      <div className="">
        <p className="text-center text-text_primary mt-7">POWERED BY</p>
        <div className="flex items-center gap-10 lg:text-4xl w-full justify-center mt-10 text-text_primary hover:dark:text-text_primaryLight text-2xl flex-col sm:flex-row">
          <div
            className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-150"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            <i className="fa-brands fa-react"></i>
            React
          </div>
          <div
            className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            Tailwindcss
          </div>
          <div
            className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            <i className="fa-brands fa-js"></i>JavaScript
          </div>
          <div
            className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            <i className="fa-brands fa-html5"></i>HTML
          </div>
        </div>
      </div>
    </div>
  );
}
