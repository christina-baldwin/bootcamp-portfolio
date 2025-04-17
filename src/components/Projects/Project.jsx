import "./Project.css";

const Project = (props) => {
  return (
    <div key={props.title} className="project m-b-m">
      <h3>{props.title}</h3>
      <ul className="skill-tags m-b-s">
        {props.skills.map((skill, index) => (
          <li className="skill-tag" key={index}>
            {skill}
          </li>
        ))}
      </ul>
      <p className="m-b-s">{props.description}</p>
      <p className="category-tag m-b-s">#{props.tag}-project</p>
      <div className="project-links">
        <a className="project-link demo-link" href={props.link}>
          <ion-icon name="globe-outline"></ion-icon>To Project Demo
        </a>
        <a className="project-link git-link" href={props.github}>
          <ion-icon name="logo-github"></ion-icon>View Code
        </a>
      </div>
    </div>
  );
};

export default Project;
