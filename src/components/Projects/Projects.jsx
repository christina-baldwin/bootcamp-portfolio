import projectsData from "../../data/projects.json";
import Project from "./Project";
// import Dropdown from "./Dropdown";
import SeeMore from "../Btns/SeeMoreBtn";
import FadeInOnScroll from "../../FadeInOnScroll";
import styled from "styled-components";
import { media } from "../../media";

const ProjectsSection = styled.div`
  display: flex;
  padding: 64px 24px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;

  @media ${media.smallDesktop} {
    padding: 128px;
    gap: 128px;
  }
`;

const ProjectsHeading = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;

  @media ${media.smallDesktop} {
    font-size: 80px;
  }
`;

const ProjectsDesc = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 25px;
  font-weight: 400;
`;

const Projects = () => {
  return (
    <FadeInOnScroll>
      <ProjectsSection>
        <ProjectsHeading>My Projects</ProjectsHeading>
        <ProjectsDesc>
          All of my different projects made either from scratch, from bootcamp
          prompts, customised from course projects, or guided from online
          courses. Please use the filter to better see what type of projects you
          are viewing.
        </ProjectsDesc>
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
