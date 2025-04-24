import skillsData from "../../data/skills.json";
import styled from "styled-components";
import { media } from "../../media";
import FadeInOnScroll from "../../FadeInOnScroll";

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

  @media ${media.tabletLandscape} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${media.smallDesktop} {
    gap: 2rem;
  }

  @media ${media.desktop} {
    gap: 3rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const SkillName = styled.li`
  list-style: none;
  border-radius: 5px;
`;

const SkillCategoryName = styled.h3`
  background-color: #4ecdc4;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
`;

const Skills = () => {
  return (
    <FadeInOnScroll>
      <SkillsContainer className="m-b-l p-l bg-colour-1">
        <h2 className="text-center">Skills</h2>
        <SkillsTable>
          {skillsData.skills.map((skill) => (
            <div key={skill.name}>
              <SkillCategoryName>{skill.name}</SkillCategoryName>

              <SkillsList>
                {skill.skills.map((item, index) => (
                  <SkillName key={index}>{item}</SkillName>
                ))}
              </SkillsList>
            </div>
          ))}
        </SkillsTable>
      </SkillsContainer>
    </FadeInOnScroll>
  );
};

export default Skills;
