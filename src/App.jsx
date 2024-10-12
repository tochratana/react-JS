import React, { Profiler, useState } from "react";
import { Layout } from "./components/layout/Layout";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import { CourseDetail } from "./components/course/CourseDetail";
import AboutPage from "./page/about/AboutPage";
import Tab from "./components/tab/Tab";
import Profile from "./page/about/Profile";
import Live from "./page/about/Live";
import Project from "./page/about/Project";
import Education from "./page/about/Education";
import ProjectDetail from "./components/project/ProjectDetail";
import Connect from "./components/auth/Connect";
import Edu_cstad from "./components/edu/Edu_cstad";
import D_business from "./components/project/D_business";
import D_portfolio from "./components/project/D_portfolio";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
      {
        path: "course/:courseId",
        element: <CourseDetail />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        children: [
          {
            path: "/about",
            element: <Profile />,
          },
          {
            path: "live",
            element: <Live />,
          },
          {
            path: "project",
            element: <Project />,
          },
          {
            path: "project/:projectId",
            element: <ProjectDetail />,
          },
          {
            path: "education",
            element: <Education />,
          },
        ],
      },
      {
        path: "/edu",
        element: <Edu_cstad />,
      },
      {
        path: "/demobusiness",
        element: <D_business />,
      },
      {
        path: "/demoportfolio",
        element: <D_portfolio />,
      },
      {
        path: "/edu_cstad",
        element: <Edu_cstad />,
      },
    ],
  },
]);

export default router;
