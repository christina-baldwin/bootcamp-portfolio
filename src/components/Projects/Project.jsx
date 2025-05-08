import styled from "styled-components";
import ProjectBtn from "../Btns/ProjectBtn";
import { media } from "../../media";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 32px;

  @media ${media.smallDesktop} {
    padding-right: 7rem;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const SkillTag = styled.div`
  border: 3px solid #4ecdc4;
  border-radius: 5px;
  padding: 0.2rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${media.tablet} {
    width: 50%;
  }
`;

const Project = (props) => {
  return (
    <ProjectContainer key={props.title} className="m-b-m">
      <h3>{props.title}</h3>
      <SkillTags className="m-b-s">
        {props.skills.map((skill, index) => (
          <SkillTag key={index}>{skill}</SkillTag>
        ))}
      </SkillTags>
      <p className="m-b-s">{props.description}</p>
      <p className="text-italic m-b-s">#{props.tag}-project</p>
      <ProjectLinks>
        <ProjectBtn
          linkType="demo"
          href="https://example.com"
          iconName="globe-outline"
          text="To Project Demo"
          aria-label="View the live demonstration of the project"
        />

        <ProjectBtn
          linkType="github"
          href="https://github.com/username/project"
          iconName="logo-github"
          text="View Code"
          aria-label="View the source code"
        />
      </ProjectLinks>
    </ProjectContainer>
  );
};

export default Project;
