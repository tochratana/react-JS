import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectData from "../../store/project.json"; // Import JSON directly
const ProjectCard = () => {
  const [cards, setCards] = useState([]); // State to store fetched data
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    console.log("Navigate to ID :", id);
    console.log("Hello");
    // console.log("object");
    navigate(`/project/${id}`);
    // navigate(`../../../store/project${id}`);
  };

  useEffect(() => {
    console.log("ProjectCard component rendered");
    // Set data from the imported JSON file
    setCards(projectData);
  }, []); // Empty dependency array to run once

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-20">
      {cards.map((dataProject) => (
        <div
          key={dataProject.id}
          className="port-box"
          onClick={() => handleCardClick(dataProject.id)} // Pass the correct id
        >
          <div className="prot-image">
            <img src={dataProject.image} alt={dataProject.title} />
          </div>
          <div className="port-content">
            <h3>{dataProject.title}</h3>
            <p>{dataProject.detail}</p>
            <a href="#">
              <i className="fa-solid fa-up-right-from-square text-black"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
