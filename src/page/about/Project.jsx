import React from "react";
import ProjectCard from "./ProjectCard";
import demoAnimate from "../../../public/Svg/demo.svg";
import businessweb from "../../../public/image/p_business.png";
import por from "../../../public/image/p_por.png";
import service from "../../../public/image/p_service.png";
import teamwork from "../../../public/image/p_teamWork.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="text-text_primary">
        <section className="items-center flex md:flex-row flex-col md:gap-20 px-10 lg:px-20 mx-0 lg:mx-10 gap-5">
          <div className="sm:w-[500px] lg:w-[800px]">
            <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898] font-bold pt-20 md:pl-20">
              Project Practicum
            </h2>
            <p className="px-7 xl:px-14 mt-10 ml-10">
              This project I have do it alone after I graduate about HTML CSS
              JavaScript and React JS.If you want to get this project, you can
              DM to me. About some of project I clone from another website. You
              can connect me for service create website or call me to
              collabration with team work.
            </p>
            <div className="flex justify-center mt-10">
              <a
                class="group relative inline-block overflow-hidden border border-text_primary px-8 py-3 focus:outline-none"
                href="#demo"
              >
                <span class="absolute inset-y-0 left-0 w-[2px] dark:bg-white bg-black transition-all group-hover:w-full group-active:bg-indigo-500 duration-700"></span>

                <span class="relative text-xl text-text_primary transition-colors group-hover:dark:text-black group-hover:text-white font-bold">
                  Demo
                </span>
              </a>
            </div>
          </div>
          <img
            src={demoAnimate}
            alt=""
            className="xl:w-[500px] xl:h-[500px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
          />
        </section>
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-5">Some of My project</h2>
          <p id="demo">You can demo it</p>
          {/* <ProjectCard /> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-20">
            <div className="port-box">
              <div className="prot-image">
                <img src={businessweb} />
              </div>
              <div className="port-content">
                <h3>BusinessWeb</h3>
                <p>Help you to find your client and easy business</p>
                <Link to="/demobusiness">
                  <i className="fa-solid fa-up-right-from-square text-black"></i>
                </Link>
              </div>
            </div>
            <div className="port-box">
              <div className="prot-image">
                <img src={por} />
              </div>
              <div className="port-content">
                <h3>Portfolio Demo</h3>
                <p>Simple Portfolio for first leaning</p>
                <Link to="/demoportfolio">
                  <i className="fa-solid fa-up-right-from-square text-black"></i>
                </Link>
              </div>
            </div>
            <div className="port-box">
              <div className="prot-image">
                <img src={service} />
              </div>
              <div className="port-content">
                <h3>TeamWork</h3>
                <p>Provide you about service with your daily</p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square text-black"></i>
                </a>
              </div>
            </div>
            <div className="port-box">
              <div className="prot-image">
                <img src={teamwork} />
              </div>
              <div className="port-content">
                <h3>Service</h3>
                <p>Find work team and tranning with your career</p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square text-black"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
