import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Tab = () => {
  const location = useLocation();

  // Helper function to determine if a tab is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center justify-center text-[10px] text-text_primary">
        <li className="me-2">
          <Link
            to="/about"
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              isActive("/about")
                ? "dark:text-white text-black border-black dark:border-white"
                : "hover:text-black hover:border-black border-transparent hover:dark:text-white dark:hover:border-white"
            } duration-300`}
          >
            Profile
          </Link>
        </li>
        <li className="me-2" role="presentation">
          <Link
            to="/about/education"
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              isActive("/about/education")
                ? "dark:text-white text-black border-black dark:border-white"
                : "hover:text-black hover:border-black border-transparent hover:dark:text-white dark:hover:border-white"
            } duration-300`}
          >
            Education
          </Link>
        </li>
        <li className="me-2" role="presentation">
          <Link
            to="/about/project"
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              isActive("/about/project")
                ? "dark:text-white text-black border-black dark:border-white"
                : "hover:text-black hover:border-black border-transparent hover:dark:text-white dark:hover:border-white"
            } duration-300`}
          >
            Project
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Tab;
