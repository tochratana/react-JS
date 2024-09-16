import React from "react";

export function Protentail() {
  return (
    <div className="dark:bg-bg_primary text-text_primary  flex px-[10%] py-16">
      <img src="./Svg/Data extraction-cuate.svg" alt="" className="w-[500px]" />
      <div className="p-10 w-[700px] ">
        <h1 className="text-white text-4xl">Empower your projects</h1>
        <p className="hover:text-text_primaryLight py-2">
          Unlock the full potential of your projects with our open-source SaaS
          platform. Collaborate seamlessly, innovate effortlessly, and scale
          limitlessly.
        </p>
        <div className="py-3 hover:text-text_primaryLight">
          <p className="flex gap-5 items-center">
            <i class="fa-solid fa-laptop text-[#8336ad]"></i>
            <p className="text-white">Collaborative</p>
          </p>
          <p className="ml-10">
            Work together with your team members in real-time.
          </p>
        </div>
        <div className="hover:text-text_primaryLight">
          <p className="flex gap-6 items-center">
            <i class="fa-solid fa-gear text-[#8336ad]"></i>
            <p className="text-white">Innovative</p>
          </p>
          <p className="ml-10">
            Stay ahead of the curve with access constant updates.
          </p>
        </div>
        <div className="hover:text-text_primaryLight py-3">
          <p className="flex gap-6 items-center">
            <i class="fa-solid fa-magnifying-glass text-[#8336ad]"></i>
            <p className="text-white">Scalable</p>
          </p>
          <p className="ml-10">
            Our platform offers the scalability needed to adapt to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
