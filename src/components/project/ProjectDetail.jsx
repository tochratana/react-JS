import { useParams } from "react-router-dom";
import Project from "../../store/project.json";
import "../../../src/index.css";

// console.log(useParams);

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get the projectId from the URL
  const project = Project.find((project) => project.id === projectId);
  // Find the matching project
  if (project.id === "busweb_demo") {
    return (
      <div className="text-text_primary">
        <h1>This is a Business website</h1>
      </div>
    );
  }
};
export default ProjectDetail;
