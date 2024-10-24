import React from "react";
// import greeting from "../../script/popup-sidebar.js";
// greeting();

const Js_sidebar = ({ isVisible, onClose }) => {
  return (
    <div
      className={`${
        isVisible ? "flex" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 items-center justify-center`}
    >
      <div className="bg-white rounded-lg w-80 p-6 relative">
        <span
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-xl font-bold mb-4">Js_sidebar Content</h2>
        <p className="text-gray-700">This is a simple Js_sidebar message.</p>
      </div>
    </div>
  );
};

export default Js_sidebar;
