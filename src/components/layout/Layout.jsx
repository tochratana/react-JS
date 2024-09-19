import React from "react";
// import { Navbar } from "../Home/Navbar";
import { Navbar } from "../main/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../main/Footer";
// import { Footer } from "flowbite-react";

export const Layout = () => {
  return (
    <div>
      <header className=" top-0 sticky z-30">
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
