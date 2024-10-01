import React from "react";

export function Protentail() {
  return (
    <div className="dark:bg-bg_primary text-text_primary  flex xl:px-[10%] px-[4%] py-16 bg-gray-50 xl:flex-row flex-col items-center justify-center">
      <img
        src="./Svg/Data extraction-cuate.svg"
        alt=""
        className="w-[200px] md:w-[500px]"
      />
      <div className="p-10 w-[400px] md:w-[700px] ">
        <h2 className="text-black dark:text-white md:text-xl xl:text-4xl font-bold">
          Empower your projects
        </h2>
        <p className="dark:hover:text-text_primaryLight py-2 hover:text-black text-sm xl:text-xl">
          Unlock the full potential of your projects with our open-source SaaS
          platform. Collaborate seamlessly, innovate effortlessly, and scale
          limitlessly.
        </p>
        <div className="py-3 dark:hover:text-text_primaryLight hover:text-black">
          <div className="flex gap-5 items-center">
            <i className="fa-solid fa-laptop text-[#8336ad]"></i>
            <p className="dark:text-white text-black">Collaborative</p>
          </div>
          <p className="ml-10">
            Work together with your team members in real-time.
          </p>
        </div>
        <div className="dark:hover:text-text_primaryLight hover:text-black">
          <div className="flex gap-6 items-center">
            <i className="fa-solid fa-gear text-[#8336ad]"></i>
            <p className="text-black dark:text-white">Innovative</p>
          </div>
          <p className="ml-10">
            Stay ahead of the curve with access constant updates.
          </p>
        </div>
        <div className="dark:hover:text-text_primaryLight py-3 hover:text-black">
          <div className="flex gap-6 items-center">
            <i className="fa-solid fa-magnifying-glass text-[#8336ad]"></i>
            <p className="text-black dark:text-white">Scalable</p>
          </div>
          <p className="ml-10">
            Our platform offers the scalability needed to adapt to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
