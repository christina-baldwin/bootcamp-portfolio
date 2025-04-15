const Hero = (props) => {
  return (
    <>
      <img src={props.img} />
      <h3>Hi! I'm</h3>
      <h1>{props.name}</h1>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </>
  );
};

export default Hero;
