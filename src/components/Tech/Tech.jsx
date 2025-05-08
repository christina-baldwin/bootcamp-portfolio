import styled from "styled-components";
import FadeInOnScroll from "../../FadeInOnScroll";
import { media } from "../../media";

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 24px;
  text-align: center;
  background-color: white;
  color: black;
  align-items: center;

  @media ${media.smallDesktop} {
    padding: 128px 0px;
  }
`;

const TechTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 60px;
  font-weight: 700;

  @media ${media.smallDesktop} {
    font-size: 80px;
  }
`;

const TechText = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;

  @media ${media.smallDesktop} {
    font-size: 18px;
    width: 782px;
  }
`;

const Tech = (props) => {
  return (
    <FadeInOnScroll>
      <TechContainer>
        <TechTitle>Tech</TechTitle>
        <TechText>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
          Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming,
          GitHub.{" "}
        </TechText>
      </TechContainer>
    </FadeInOnScroll>
  );
};

export default Tech;
