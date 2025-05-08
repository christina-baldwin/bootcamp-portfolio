import projectsData from "../../data/projects.json";
import Project from "./Project";
// import Dropdown from "./Dropdown";
import SeeMore from "../Btns/SeeMoreBtn";
import FadeInOnScroll from "../../FadeInOnScroll";
import styled from "styled-components";

const ProjectsSection = styled.div`
  display: flex;
  padding: 64px 24px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`;

const ProjectsHeading = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;
`;

const Projects = () => {
  return (
    <FadeInOnScroll>
      <ProjectsSection>
        <ProjectsHeading>My Projects</ProjectsHeading>
        <p className="text-center m-b-s">
          All of my different projects made either from scratch, from bootcamp
          prompts, customised from course projects, or guided from online
          courses. Please use the filter to better see what type of projects you
          are viewing.
        </p>
        {/* <Dropdown /> */}
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
      </ProjectsSection>
    </FadeInOnScroll>
  );
};

export default Projects;
