// import ReactDom from "react-dom/client";
// import App from "./App";
// import React from "react";
// import "./index.css";

// ReactDom.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // console.log(root);

import ReactDom from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

root.render(<App />);
