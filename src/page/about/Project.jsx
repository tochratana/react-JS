import React from "react";
import ProjectCard from "./ProjectCard";
import demoAnimate from "../../../public/Svg/demo.svg";

const Project = () => {
  return (
    <>
      <div className="text-text_primary">
        <section className="flex gap-20 px-20 mx-10">
          <div className="w-[800px]">
            <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898] font-bold pt-20 pl-20">
              Project Practicum
            </h1>
            <p className="px-14 mt-10 ml-10">
              This project I have do it alone after I graduate about HTML CSS
              JavaScript and React JS.If you want to get this project, you can
              DM to me. About some of project I clone from another website. You
              can connect me for service create website or call me to
              collabration with team work.
            </p>
            <div className="flex justify-center mt-10">
              <a
                class="group relative inline-block overflow-hidden border border-text_primary px-8 py-3 focus:outline-none"
                href="#"
              >
                <span class="absolute inset-y-0 left-0 w-[2px] dark:bg-white bg-black transition-all group-hover:w-full group-active:bg-indigo-500 duration-700"></span>

                <span class="relative text-xl text-text_primary transition-colors group-hover:dark:text-black group-hover:text-white font-bold">
                  Demo
                </span>
              </a>
            </div>
          </div>
          <img src={demoAnimate} alt="" className="w-[500px] h-[500px]" />
        </section>
        <section className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-5">Some of My project</h1>
          <p>You can demo it</p>
          <ProjectCard />
        </section>
      </div>
    </>
  );
};

export default Project;
