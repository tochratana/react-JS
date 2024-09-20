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
        ],
      },
    ],
  },
]);

export default router;
