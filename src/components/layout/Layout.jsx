import React from "react";
// import { Navbar } from "../Home/Navbar";
import { Navbar } from "../page/Home/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
// import { Footer } from "flowbite-react";

export const Layout = () => {
  return (
    <div>
      <header className=" top-0 z-30 sticky">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
