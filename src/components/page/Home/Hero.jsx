import React from "react";

export function Hero() {
  return (
    <div className="dark:bg-bg_primary dark:text-white bg-gray-50">
      <div className="py-10 px-[10px] lg:px-[200px] flex flex-col items-center">
        <p className="dark:hover:bg-[#030925] border-2 dark:border-gray-800 text-center py-1 px-2 rounded-2xl dark:bg-bg_primary dark:text-white w-[350px] m-auto">
          🎉 Introducing to Blog and get on linkin
          <a
            href="https://www.linkedin.com/in/ratana-touch-930119302/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin ml-2"></i>
          </a>
        </p>
        <h1 className="text-4xl lg:text-[70px] w-[380px] md:w-[800px] lg:w-[800px] text-center font-bold md:leading-[90px]">
          Kick of with a bang with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898]">
            Toch Ratana
          </span>
        </h1>
        <p className="text-xl w-[400px] lg:w-[600px] text-center text-text_primary">
          Build your next project using React.js 14, Tailwindcss, Neon, SCSS ,
          Resend, React Email, Shadcn/ui, Stripe.
        </p>
        <div className="flex gap-10 md:flex-row flex-col items-center md:gap-20 lg:gap-40 mt-7">
          <a className=" w-48 rounded-3xl py-2 px-10 border-2 dark:border-white dark:bg-white dark:text-black flex gap-3 items-center border-black">
            Connect<i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            href="https://github.com/RML-Cambo/react-JS"
            className=" w-60 rounded-3xl py-2 px-8 border-2 border-white flex gap-2 items-center hover:bg-bg_primary hover:text-white duration-700"
            target="_black"
          >
            Star on Github 1.5K<i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="./Svg/working-from-anywhere-animate.svg"
          alt=""
          className="w-[800px] m-auto"
        />
      </div>
      <div className="">
        <p className="text-center text-text_primary mt-7">POWERED BY</p>
        <div className="flex items-center gap-10 lg:text-4xl w-full justify-center mt-10 text-text_primary hover:dark:text-text_primaryLight text-2xl flex-col sm:flex-row">
          <div className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500">
            <i className="fa-brands fa-react"></i>
            React
          </div>
          <div className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500">
            Tailwindcss
          </div>
          <div className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500">
            <i className="fa-brands fa-js"></i>JavaScript
          </div>
          <div className="text-text_primary hover:dark:text-white cursor-pointer flex gap-3 font-bold hover:text-bg_primary duration-500">
            <i className="fa-brands fa-html5"></i>HTML
          </div>
        </div>
      </div>
    </div>
  );
}
