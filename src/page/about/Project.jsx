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
        <section className="dark:text-white ">
          <p className="px-[15%] py-10">
            I complete this project on my own after graduating, focusing on
            HTML, CSS, JavaScript, and React JS. If you're interested in this
            project, feel free to DM me.Some elements were inspired by other
            website. You can connect with me for website createion services or
            to collaborate on team project.
          </p>
        </section>

        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-5">Some of My project</h2>
          <p id="demo">You can demo it</p>
          {/* <ProjectCard /> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-20 p-10 md:p-40">
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
