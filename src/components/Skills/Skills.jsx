import skillsData from "../../data/skills.json";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills m-b-l">
      <h2 className="text-center">Skills</h2>
      <div className="skills-table">
        {skillsData.skills.map((skill) => (
          <div key={skill.name}>
            <h3 className="text-center">{skill.name}</h3>
            <ul>
              {skill.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
