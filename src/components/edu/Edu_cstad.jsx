import React from "react";
import degree from "../../../public/image/degree.jpg";
const Edu_cstad = () => {
  return (
    <div className="dark:text-white">
      <p className="text-center text-2xl font-bold my-10">CSTAD EDUCATION</p>
      <p className="px-[15%] text-justify">
        I studied at CSTAD, a trending course in the tech field. I was there for
        about two months and learned a lot of technologies like HTML, CSS,
        JavaScript, React, Tailwind CSS, and Bootstrap. I also built several
        projects and plan to continue creating more after finishing the program.
      </p>
      <img src={degree} className="px-[15%] py-10" />
    </div>
  );
};

export default Edu_cstad;
