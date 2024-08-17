import projects from "../../data/projects.json";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div className="ml-5 mr-5 mt-5 mb-20">
      <div className="">
        <h1 className="text-[#06FCD8] font-bold lg:text-[32px] text-[17.41px] mb-16">
          Past Projects
        </h1>
      </div>
      {projects.map((el, index) => (
        <ProjectList el={el} key={index} />
      ))}
    </div>
  );
}
export default Projects;
