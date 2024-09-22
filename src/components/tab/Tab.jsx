import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../page/about/Profile";
import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>
          <select
            id="Tab"
            className="w-full rounded-md border-gray-200"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option>Profile</option>
            <option>Live</option>
            <option>Archive</option>
            <option>Notifications</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200 mt-5">
            <nav className="-mb-px flex gap-6 justify-center">
              <Link
                to="/about"
                onClick={() => setActiveTab("Profile")}
                className={`shrink-0 border-b-2 p-3 text-sm font-medium ${
                  activeTab === "Profile"
                    ? "hover:dark:text-text_primaryLight hover:text-bg_primary border-b-white border-2 dark:border-b-bg_primary text-text_primary border-t-text_primary border-l-text_primary border-r-text_primary rounded-t-md"
                    : "border-transparent text-gray-500"
                }`}
              >
                Profile
              </Link>

              <Link
                to="/about/live"
                onClick={() => setActiveTab("Live")}
                className={`shrink-0 border-b-2 p-3 text-sm font-medium ${
                  activeTab === "Live"
                    ? "hover:dark:text-text_primaryLight hover:text-bg_primary border-b-white border-2 dark:border-b-bg_primary text-text_primary border-t-text_primary border-l-text_primary border-r-text_primary rounded-t-md"
                    : "border-transparent text-gray-500"
                }`}
              >
                Life
              </Link>

              <Link
                to="/about/education"
                onClick={() => setActiveTab("Education")}
                className={`shrink-0 border-b-2 p-3 text-sm font-medium ${
                  activeTab === "Education"
                    ? "hover:dark:text-text_primaryLight hover:text-bg_primary border-b-white border-2 dark:border-b-bg_primary text-text_primary border-t-text_primary border-l-text_primary border-r-text_primary rounded-t-md"
                    : "border-transparent text-gray-500"
                }`}
              >
                Education
              </Link>

              <Link
                to="/about/project"
                onClick={() => setActiveTab("Notifications")}
                className={`shrink-0 border-b-2 p-3 text-sm font-medium ${
                  activeTab === "Notifications"
                    ? "hover:dark:text-text_primaryLight hover:text-bg_primary border-b-white border-2 dark:border-b-bg_primary text-text_primary border-t-text_primary border-l-text_primary border-r-text_primary rounded-t-md"
                    : "border-transparent text-gray-500"
                }`}
              >
                Project
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
