import React, { Profiler } from "react";
import "./index.css";
import { Navbar } from "./components/Home/Navbar";
import { Profile } from "./components/Profile";
import { View } from "./components/About/View";

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
