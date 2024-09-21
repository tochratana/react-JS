import React from "react";

const Profile = () => {
  return (
    <>
      <div className="text-text_primary flex flex-col items-center">
        <img
          src="./public/image/p4.png"
          alt=""
          className="w-40 h-40 rounded-full"
        />
        <h2 className="text-white text-3xl font-bold">Toch Ratana</h2>
        <p className="text-blue-600">Freshman at SETEC Institute</p>
        <p>Follow me for get new information about programming</p>
        <div>
          <p>
            I know you've been working on various web development projects,
            primarily using JavaScript, React, and Tailwind CSS. You've also
            recently begun exploring service listing projects, React.js routing,
            dynamic card rendering from JSON data, and customizing your Visual
            Studio Code setup. You’ve been working on responsive designs, using
            tools like Flowbite React, and also managing larger projects with
            Tailwind CSS configuration and dark mode features.
          </p>
          <p>
            It seems like you’re focused on expanding your skills in web
            development and project management. If you'd like more detailed info
            about any of your projects or need recommendations on specific
            technologies, feel free to ask!
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
