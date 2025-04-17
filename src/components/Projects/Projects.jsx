import projectsData from "../../data/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <p>
        All of my different projects made either from scratch, from bootcamp
        prompts, customised from course projects, or guided from online courses.
        Please use the filter to better see what type of projects you are
        viewing.
      </p>
      <button>Filter projects by</button>
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
      <button>Load more projects</button>
    </div>
  );
};

export default Projects;
