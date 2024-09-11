import ReactDom from "react-dom/client";
import App from "./App";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { View } from "./components/About/View";
import { Layout } from "./components/layout/Layout";
import { Main } from "./components/service/Main";
import { FormSearch } from "./components/search/FormSearch";

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
        path: "/search",
        element: <FormSearch />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
