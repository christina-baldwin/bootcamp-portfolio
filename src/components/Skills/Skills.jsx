import skillsData from "../../data/skills.json";
import styled from "styled-components";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkillsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  justify-content: center;
`;

const SkillsList = styled.ul`
  list-style: none;
  text-align: center;
`;

const SkillName = styled.li`
  list-style: none;
  background-color: #4ecdc4;
  border-radius: 5px;
  padding: 0.5rem;
`;

const Skills = () => {
  return (
    <SkillsContainer className="m-b-l p-l bg-colour-1">
      <h2 className="text-center">Skills</h2>
      <SkillsTable>
        {skillsData.skills.map((skill) => (
          <div key={skill.name}>
            <SkillName className="skill-name text-center p-s">
              {skill.name}
            </SkillName>
            <SkillsList>
              {skill.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </SkillsList>
          </div>
        ))}
      </SkillsTable>
    </SkillsContainer>
  );
};

export default Skills;
