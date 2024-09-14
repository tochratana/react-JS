import React, { Profiler, useState } from "react";
import "./index.css";
import { Navbar } from "./components/page/Home/Navbar";
import { Profile } from "./components/Profile";
import { View } from "./components/page/About/View";
import { theme } from "flowbite-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
