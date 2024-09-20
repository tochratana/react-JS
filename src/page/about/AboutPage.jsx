import React from "react";
import Tab from "../../components/tab/Tab";
import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <Tab />
      <Outlet />
    </>
  );
};

export default AboutPage;
