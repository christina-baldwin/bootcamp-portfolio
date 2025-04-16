import skillsData from "../data/skills.json";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-table">
        {skillsData.skills.map((skill) => (
          <div key={skill.name}>
            <h3>{skill.name}</h3>
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
