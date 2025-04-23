import styled from "styled-components";

const ProjectContainer = styled.div`
  padding-right: 10rem;
`;

const SkillTags = styled.div`
  display: flex;
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
`;

const ProjectLink = styled.a`
  display: flex;
  width: 15%;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  // Dynamic styling based on 'linkType' prop
  background-color: ${(props) =>
    props.linkType === "demo" ? "#4ecdc4" : "transparent"};
  color: ${(props) => (props.linkType === "demo" ? "black" : "white")};
  border: ${(props) =>
    props.linkType === "demo" ? "#4ecdc4" : "1px solid white"};

  &:hover,
  &:active {
    transform: translate(2px, -2px);
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
        <ProjectLink linkType="demo" href={props.link}>
          <ion-icon name="globe-outline"></ion-icon>To Project Demo
        </ProjectLink>
        <ProjectLink linkType="github" href={props.github}>
          <ion-icon name="logo-github"></ion-icon>View Code
        </ProjectLink>
      </ProjectLinks>
    </ProjectContainer>
  );
};

export default Project;
