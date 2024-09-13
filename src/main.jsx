import ReactDom from "react-dom/client";
import App from "./App";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { View } from "./components/page/About/View";
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/page/service/Main";
import { FormSearch } from "./components/page/search/FormSearch";
import { CategoryAbout } from "./components/page/About/CategoryAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/View",
        element: <View />,
      },
      {
        path: "/service",
        element: <Main />,
      },
      {
        path: "/FormSearch",
        element: <FormSearch />,
      },
      {
        path: "CategoryAbout",
        element: <CategoryAbout />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
