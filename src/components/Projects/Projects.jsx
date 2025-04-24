import projectsData from "../../data/projects.json";
import Project from "./Project";
import Dropdown from "./Dropdown";
import SeeMore from "../Btns/SeeMoreBtn";
import FadeInOnScroll from "../../FadeInOnScroll";

const Projects = () => {
  return (
    <FadeInOnScroll>
      <div className="projects m-b-l p-m">
        <h2 className="text-center">My Projects</h2>
        <p className="text-center m-b-s">
          All of my different projects made either from scratch, from bootcamp
          prompts, customised from course projects, or guided from online
          courses. Please use the filter to better see what type of projects you
          are viewing.
        </p>
        <Dropdown />
        {projectsData.projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            skills={project.skills}
            tag={project.tag}
            link={project.link}
            github={project.github}
          />
        ))}
        <SeeMore section="projects" aria-label="See more projects" />
      </div>
    </FadeInOnScroll>
  );
};

export default Projects;
