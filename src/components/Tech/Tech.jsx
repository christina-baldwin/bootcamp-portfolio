import styled from "styled-components";
import FadeInOnScroll from "../../FadeInOnScroll";

const TechContainer = styled.div`
  text-align: center;
`;

const Tech = (props) => {
  return (
    <FadeInOnScroll>
      <TechContainer className="m-b-l p-l bg-colour-1">
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
