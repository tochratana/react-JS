import { useParams } from "react-router-dom";
import Project from "../../store/project.json";
import "../../../src/index.css";

// console.log(useParams);

const ProjectDetail = () => {
  console.log("Hello");
  const { projectId } = useParams(); // Get the projectId from the URL
  console.log(projectId);
  const project = Project.find((project) => project.id === projectId);
  console.log("Hello Sir");
  // Find the matching project

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.detail}</p>
    </div>
  );
};

export default ProjectDetail;
