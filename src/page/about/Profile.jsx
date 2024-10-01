import React from "react";
import Advice from "./Advice";
import { Link } from "react-router-dom";
import profile from "../../../public/image/ProfileB.png";
import ai_anima from "../../../public/Svg/ai_anima.svg";

const Profile = () => {
  return (
    <>
      <div className="text-text_primary flex flex-col items-center">
        <section className="md:gap-[200px] items-center md:p-10 flex md:flex-row flex-col gap-10">
          <div className="flex flex-col items-center justify-center w-[200px] sm:w-[400px]">
            <img src={profile} alt="" className="w-40 h-40 rounded-full" />
            <h2 className="text-white text-3xl font-bold">Toch Ratana</h2>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Light+of+Life+Church+(LLC)/@11.5493011,104.8844083,21z/data=!4m14!1m7!3m6!1s0x310951ac40a22aa7:0x68d461b8b0f7865!2sLight+of+Life+Church+(LLC)!8m2!3d11.5493375!4d104.8846212!16s%2Fg%2F11d_99lv5q!3m5!1s0x310951ac40a22aa7:0x68d461b8b0f7865!8m2!3d11.5493375!4d104.8846212!16s%2Fg%2F11d_99lv5q?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
            >
              <i class="fa-solid fa-location-dot"></i> Current living
            </a>
            <p>Full Stack developer </p>
            <div className="flex items-center justify-center gap-5">
              <Link to="/connect">Connect Me</Link>
              <i className="fa-regular fa-message"></i>
              <i className="fa-solid fa-calendar-days"></i>
            </div>
          </div>
          <Advice />
        </section>
        <section className="gap-10 flex items-center md:gap-60 md:p-10 md:flex-row flex-col mt-10 md:mt-0">
          <div className="w-[300px] md:w-[600px]">
            <h2 className="text-2xl text-white font-bold">
              Artificial Intelligence
            </h2>
            <p>
              AI refers to the simulation of human intelligence in machines that
              are designed to think and learn like humans.
            </p>
            <p className="leading-7">
              Narrow AI (Weak AI): AI that is specialized in a specific task.
              For example, voice assistants (like Siri), recommendation systems
              (like Netflix suggestions), and facial recognition systems.
              General AI (Strong AI): AI that can perform any intellectual task
              that a human can do. This type of AI doesn't exist yet but is the
              goal of many research projects. Superintelligent AI: A theoretical
              concept of AI surpassing human intelligence in all aspects,
              including creativity, decision-making, and emotional intelligence.
            </p>
          </div>
          <div>
            <img
              src={ai_anima}
              alt="AI Animation"
              className="w-[400px] h-[400px]"
            />
          </div>
        </section>
        {/* <section>
          <h2 className="text-2xl ">Follow Me On</h2>
          <div>
            <div class="flex justify-evenly social-icon ">
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-2 border-white">
                <i class="fa-brands fa-instagram bg-clip-text text-gray-200 hover:text-transparent hover:bg-custom-gradient text-6xl font-bold duration-500"></i>
              </div>
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-2 border-white">
                <i class="fa-brands fa-facebook duration-500 text-gray-200 text-6xl hover:text-blue-700"></i>
              </div>
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-2 border-white ">
                <i class="fa-brands fa-youtube text-gray-200 text-6xl hover:text-red-600 duration-500"></i>
              </div>
              <div className="w-20 h-20 flex justify-center items-center rounded-full border-2 border-white hover:bg-white duration-500 ">
                <i class="fa-brands fa-tiktok text-gray-200 text-6xl hover:text-black duration-500 "></i>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div>
          <p>
            I know you've been working on various web development projects,
            primarily using JavaScript, React, and Tailwind CSS. You've also
            recently begun exploring service listing projects, React.js routing,
            dynamic card rendering from JSON data, and customizing your Visual
            Studio Code setup. You’ve been working on responsive designs, using
            tools like Flowbite React, and also managing larger projects with
            Tailwind CSS configuration and dark mode features.
          </p>
          <p>
            It seems like you’re focused on expanding your skills in web
            development and project management. If you'd like more detailed info
            about any of your projects or need recommendations on specific
            technologies, feel free to ask!
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Profile;
