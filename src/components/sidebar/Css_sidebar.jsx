"use client";
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

const JavaScript_sidebar = ({ isVisible }) => {
  return (
    <div
      className={`${isVisible ? "block" : "hidden"} fixed inset-0 z-40 top-16`}
    >
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col ">
            <Link
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              to="/exercise/javascript"
            >
              Introduction
            </Link>
            <Link
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              to="/exercise/javascript"
            >
              Installation
            </Link>
            <Link
              className="text-blue-600 hover:underline-offset-2 hover:underline"
              to="/exercise/javascript"
            >
              Exercise Practice
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default JavaScript_sidebar;
