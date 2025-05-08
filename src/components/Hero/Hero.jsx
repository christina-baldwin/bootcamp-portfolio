import styled from "styled-components";
import HeroImages from "./HeroImages";
import { media } from "../../media";
import { motion } from "framer-motion";
import FadeInOnScroll from "../../FadeInOnScroll";

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 64px 24px;

  @media ${media.tablet} {
  }

  @media ${media.smallDesktop} {
  }

  @media ${media.desktop} {
  }
`;
const HeroIntro = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
`;

const HeroMain = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 52px;
  font-weight: 700;
  line-height: 80px;

  @media ${media.tabletLandscape} {
    line-height: 100px;
  }
`;

const HeroTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
`;

const HeroDesc = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
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
  background-color: #4ecdc4;
  color: black;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  width: 204px;
  height: 38px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;

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
      <HeroIntro>Hi! I'm</HeroIntro>
      <HeroMain>{props.name}</HeroMain>
      <StyledHr />
      <FadeInOnScroll>
        <HeroImages />
      </FadeInOnScroll>
      <HeroTitle>{props.title}</HeroTitle>
      <HeroDesc>
        I began learning frontend and web development in March 2024 after moving
        to Sweden, where I had time to rediscover my interest in tech. With
        access to resources, I quickly became invested in coding and decided to
        pursue a career in the field. I’m also currently enrolled in a Web Dev
        Bootcamp to continue building my skills and collaborate with others.
        Outside of coding, I enjoy Olympic weightlifting, CrossFit, reading, and
        playing video games.
      </HeroDesc>
      <HeroButton aria-label="Click to scroll down to the contact section.">
        Contact Me!
      </HeroButton>
    </HeroSection>
  );
};

export default Hero;
