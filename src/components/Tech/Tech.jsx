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

const Tech = (props) => {
  return (
    <FadeInOnScroll>
      <TechContainer>
        <h2>Tech</h2>
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
