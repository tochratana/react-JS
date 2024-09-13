import React, { Profiler } from "react";
import "./index.css";
import { Navbar } from "./components/page/Home/Navbar";
import { Profile } from "./components/Profile";
import { View } from "./components/page/About/View";

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
