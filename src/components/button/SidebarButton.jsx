import React from "react";

const SidebarButton = ({ onButtonClick }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <button
        className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md"
        onClick={onButtonClick}
      >
        Open Popup
      </button>
    </div>
  );
};

export default SidebarButton;
