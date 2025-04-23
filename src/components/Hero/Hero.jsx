import styled from "styled-components";
import HeroImages from "./HeroImages";

const HeroSection = styled.div`
  text-align: center;
  padding: 5rem 7rem;
`;
const HeroLogo = styled.img`
  width: 3%;
`;
const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 1.5rem;
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

const Hero = (props) => {
  return (
    <HeroSection className="m-b-l">
      <HeroLogo className="logo m-b-s" src={props.logo} />
      <h3>Hi! I'm</h3>
      <h1>{props.name}</h1>
      <hr />
      <HeroImages />
      <h3>{props.title}</h3>
      <p className="m-b-s">
        I began learning frontend and web development in March 2024 after moving
        to Sweden, where I had time to rediscover my interest in tech. With
        access to resources, I quickly became invested in coding and decided to
        pursue a career in the field. I’m also currently enrolled in a Web Dev
        Bootcamp to continue building my skills and collaborate with others.
        Outside of coding, I enjoy Olympic weightlifting, CrossFit, reading, and
        playing video games.
      </p>
      <HeroButton>Contact Me!</HeroButton>
    </HeroSection>
  );
};

export default Hero;
