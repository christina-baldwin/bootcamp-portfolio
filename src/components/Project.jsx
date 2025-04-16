const Project = (props) => {
  return (
    <div key={props.title} className="project">
      <h3>{props.title}</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div>{props.description}</div>
      <div>#{props.tag}-project</div>
      <a href={props.link}>To Project Demo</a>
      <a href={props.github}>View Code</a>
    </div>
  );
};

export default Project;
