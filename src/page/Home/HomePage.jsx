import React from "react";
import Hero from "./Hero";
import { Protentail } from "./Protentail";
import { CourseCard } from "./CourseCard";
import RanderCardCourse from "../../hooks/RanderCardCourse";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Protentail />
      <CourseCard />
    </>
  );
};

export default HomePage;
