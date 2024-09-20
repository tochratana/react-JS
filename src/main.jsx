import ReactDom from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./App";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
