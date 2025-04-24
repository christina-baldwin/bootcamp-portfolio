import styled from "styled-components";
import HeroImages from "./HeroImages";
import { media } from "../../media";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeInOnScroll from "../../FadeInOnScroll";

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem;

  @media ${media.tablet} {
    padding: 4rem;
  }

  @media ${media.smallDesktop} {
    padding: 5rem;
  }

  @media ${media.desktop} {
    padding: 6rem;
  }
`;
const HeroLogo = styled.img`
  width: 15%;

  @media ${media.tabletLandscape} {
    width: 10%;
  }

  @media ${media.smallDesktop} {
    width: 7%;
  }

  @media ${media.desktop} {
    width: 5%;
  }

  @media ${media.largeDesktop} {
    width: 4.5%;
  }
`;
const HeroButton = styled.button`
  padding: 10px 20px;
  background-color: #4ecdc4;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:active {
    transition: all 0.3s ease;
    transform: translate(2px, -2px);
  }
`;

const StyledHr = styled(motion.hr)`
  width: 100%;
  max-width: 100%;
  border: none;
  height: 2px;
  background-color: #4ecdc4;
  margin: 2rem auto;
`;

const Hero = (props) => {
  return (
    <HeroSection className="m-b-l">
      <HeroLogo className="logo m-b-s" src={props.logo} alt="Site logo." />
      <h2>Hi! I'm</h2>
      <h1>{props.name}</h1>
      <StyledHr />
      <FadeInOnScroll>
        <HeroImages />
      </FadeInOnScroll>
      <h2>{props.title}</h2>
      <p className="m-b-s">
        I began learning frontend and web development in March 2024 after moving
        to Sweden, where I had time to rediscover my interest in tech. With
        access to resources, I quickly became invested in coding and decided to
        pursue a career in the field. I’m also currently enrolled in a Web Dev
        Bootcamp to continue building my skills and collaborate with others.
        Outside of coding, I enjoy Olympic weightlifting, CrossFit, reading, and
        playing video games.
      </p>
      <HeroButton aria-label="Click to scroll down to the contact section.">
        Contact Me!
      </HeroButton>
    </HeroSection>
  );
};

export default Hero;
