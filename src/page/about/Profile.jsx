import React from "react";
import Advice from "./Advice";
import { Link } from "react-router-dom";
import profile from "../../../public/image/ProfileB.png";
import ai_anima from "../../../public/Svg/ai_anima.svg";
import logo from "../../../public/image/logo.png";
import tochratana from "../../../public/image/tochratana.jpg";
import question from "../../../public/Svg/question.svg";
const Profile = () => {
  return (
    <>
      <div className="dark:text-white px-[15%] py-[80px] profileContainer">
        <img src={logo} alt="DevMentor" className="w-16" data-aos="fade-up" />
        <h1 className="text-xl font-bold mt-10" data-aos="fade-down">
          DevMentor learning
        </h1>
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          <div className="md:w-[600px] text-lg">
            <p
              className="my-5 text-justify leading-normal"
              data-aos="fade-down-right"
            >
              Hello! My name is{" "}
              <a
                className="group relative inline-block overflow-hidden"
                href="https://cv-tochratana.vercel.app"
                target="_blank"
              >
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                <span className="relative transition-colors group-hover:text-white align-middle">
                  Toch Ratana
                </span>
              </a>
              , and I'm currently a second-year student majoring in Information
              Technology with a focus on web development. My expertise includes
              technologies like HTML, CSS, Tailwind CSS, JavaScript, React, Git,
              and GitHub.
            </p>

            <p className="my-5 text-justify" data-aos="fade-up-left">
              Beyond my studies, I love capturing moments from my life, whether
              through photos or videos, and I often share these on{" "}
              <a
                className="group relative inline-block overflow-hidden"
                href="https://tiktok.com/@devmentor_learning"
                target="_blank"
              >
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                <span className="relative transition-colors group-hover:text-white align-middle">
                  TikTok
                </span>
              </a>{" "}
              and{" "}
              <a
                className="group relative inline-block overflow-hidden"
                href="https://youtube.com/@devmentor-learning"
                target="_blank"
              >
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
                <span className="relative transition-colors group-hover:text-white align-middle">
                  YouTube
                </span>
              </a>
              . I also enjoy sharing my knowledge and experiences on social
              media to connect with others and inspire new ideas. Though I'm
              currently focused on my studies and not working, I dedicate time
              to personal projects, putting my skills to practical use.
            </p>
            <p className="mt-12">Thanks for stopping by!</p>
          </div>
          <div>
            <img src={tochratana} alt="" className="w-[300px]" />
          </div>
        </div>
        <div className="flex justify-center xl:justify-between my-16 gap-10">
          <img src={question} alt="" className="w-[300px] hidden xl:block" />
          <div className="flex flex-col justify-between">
            <p
              className="text-center text-2xl mt-16 mb-5"
              data-aos="fade-up-left"
            >
              Why did I choose to study web development ?
            </p>
            <p className=" text-justify leading-8" data-aos="fade-up-right">
              Studying web development opens up a world of opportunities. It's a
              chance to create, innovate, and problem-solve. Every day brings a
              new challenge, and the skills you gain are in high demand across
              industries. Plus, ther's something satisfying about building
              something from scratch that others can interact with and use.
              What' s not to love?
            </p>
          </div>
        </div>
        <p className="text-xl my-10" data-aos="zoom-in">
          Future Goals and Ambitions
        </p>
        <p className="text-justify" data-aos="fade-up-left">
          As I move forward, my goal is to secure a job in the field by my third
          year and, eventually, to launch my own e-learning platform to teach
          coding to beginners. I'm passionate about sharing knowledge, and
          through my platform, I hope to inspire others to take their first
          steps in tech. I also plan to create a lot of video content, sharing
          my coding journey and encouraging others to stay motivated and
          curious.
        </p>
        <hr className="my-10" />
        <p className="text-xl my-10" data-aos="zoom-in">
          Favorite Project
        </p>
        <p className="text-justify" data-aos="fade-up-right">
          One of my favorite projects so far has been building an e-commerce
          website. It challenged me to put my skills to the test, and I loved
          the process of bringing a functional project to life.
        </p>
        <p className="text-xl my-10" data-aos="zoom-in">
          The Purpose of My Content
        </p>
        <p className="text-justify" data-aos="zoom-in">
          Through my TikTok and YouTube channels, I share coding knowledge,
          lifestyle tips, and insights into a day in the life of an IT student.
          My goal is to inspire others by sharing my journey and experiences as
          I navigate the world of technology.
        </p>
        <p className="text-xl my-10" data-aos="zoom-in">
          Hobbies
        </p>
        <p className="text-justify" data-aos="zoom-in">
          Outside of tech, I enjoy capturing life through photography, listening
          to music, and creating videos that showcase my daily experiences.
          Thank you for stopping by!
        </p>
        <Advice />
        <p className="text-center text-bash">
          Don't care, this is just a random phrase.
        </p>
      </div>
    </>
  );
};

export default Profile;
