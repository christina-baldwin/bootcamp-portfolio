import skillsData from "../../data/skills.json";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills m-b-l p-l bg-colour-1">
      <h2 className="text-center">Skills</h2>
      <div className="skills-table">
        {skillsData.skills.map((skill) => (
          <div key={skill.name}>
            <h4 className="skill-name text-center p-s">{skill.name}</h4>
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
