import Coruse from "../../store/course.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const CourseCard = () => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
  };

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../store/course.json")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <>
      <h1>This is a hove page</h1>
      <section className="dark:bg-bg_primary py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-text_primaryLight">
              The course provide you
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* This is a card component */}
            {Coruse.map((courses) => {
              return (
                <div
                  key={courses.id}
                  onClick={() => handleCardClick(courses.id)}
                  className="overflow-hidden bg-white dark:bg-black rounded shadow dark:hover:shadow-[0_4px_10px_rgba(22,163,74,0.8)]  cursor-pointer"
                >
                  <div className="p-8">
                    <div className="flex items-center">
                      <img
                        className="flex-shrink-0 w-12 h-auto"
                        src={courses.image}
                        height="30"
                        alt="html5 logo"
                      />
                      <div className="ml-5 mr-auto">
                        <p className="text-xl font-semibold text-black dark:text-text_primaryLight">
                          {courses.title}
                        </p>
                        <p className="mt-px text-sm text-text_primary hover:dark:text-text_primaryLight hover:text-bg_primary">
                          {courses.category}
                        </p>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-text_primary hover:dark:text-text_primaryLight mt-7 hover:text-bg_primary">
                      This curse I will provide you about how to build a simple
                      structure of website and you will know lots of about tag
                      element.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
