import React from "react";
import "./skillsPart.css";

const SkillsPart = ({ title, skillsTechs, iconSkill }) => {
  return (
    <div className="skills-part">
      <div className="skills-header">
        <span className="icon">{iconSkill}</span>
        <h3 className="title-skill">{title}</h3>
      </div>
      <hr className="separator-skills" />
      <div className="skills-list">
        {skillsTechs.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPart;
