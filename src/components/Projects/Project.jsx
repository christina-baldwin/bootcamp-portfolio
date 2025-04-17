const Project = (props) => {
  return (
    <div key={props.title} className="project m-b-m">
      <h3>{props.title}</h3>
      <ul className="m-b-s">
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p className="m-b-s">{props.description}</p>
      <p className="m-b-s">#{props.tag}-project</p>
      <a href={props.link}>To Project Demo</a>
      <a href={props.github}>View Code</a>
    </div>
  );
};

export default Project;
