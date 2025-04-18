import HeroImages from "./HeroImages";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero m-b-l">
      <img className="logo m-b-s" src={props.logo} />
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
      <button className="hero-btn">Contact Me!</button>
    </div>
  );
};

export default Hero;
