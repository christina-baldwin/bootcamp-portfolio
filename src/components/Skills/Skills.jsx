import skillsData from "../../data/skills.json";
import styled from "styled-components";
import { media } from "../../media";
import FadeInOnScroll from "../../FadeInOnScroll";

const SkillsContainer = styled.div`
  display: flex;
  padding: 64px 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  background-color: white;
  color: black;
`;

const SkillsTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 700;
`;

const SkillsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
`;

const SkillName = styled.li`
  list-style: none;
  border-radius: 5px;
`;

const SkillCategoryName = styled.h3`
  background-color: #4ecdc4;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  padding: 2px 6px;
`;

const Skills = () => {
  return (
    <FadeInOnScroll>
      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
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
