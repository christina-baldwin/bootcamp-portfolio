import styled from "styled-components";
import FadeInOnScroll from "../../FadeInOnScroll";

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 24px;
  text-align: center;
  background-color: white;
  color: black;
`;

const TechTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 60px;
  font-weight: 700;
`;

const TechText = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
`;

const Tech = (props) => {
  return (
    <FadeInOnScroll>
      <TechContainer>
        <TechTitle>Tech</TechTitle>
        <p>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming,
          GitHub.{" "}
        </p>
      </TechContainer>
    </FadeInOnScroll>
  );
};

export default Tech;
