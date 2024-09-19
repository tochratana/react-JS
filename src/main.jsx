import ReactDom from "react-dom/client";
import App from "./App";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { View } from "./components/page/About/View";
import { Layout } from "./components/layout/Layout";
import { CategoryAbout } from "./components/page/About/CategoryAbout";
import { CourseDetail } from "./components/course/CourseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <View />,
      },
      {
        path: "/View",
        element: <App />,
      },
      {
        path: "CategoryAbout",
        element: <CategoryAbout />,
      },
      {
        path: "/course/:courseId", // Add route for course detail
        element: <CourseDetail />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
