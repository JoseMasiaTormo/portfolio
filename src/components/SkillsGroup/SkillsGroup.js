import React from "react";
import "./skillsGroup.css";
import SkillsPart from "../SkillsPart/SkillsPart";
import { FaCode } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const SkillsGroup = () => {
  return (
    <div className="background-skills">
      <div className="limits">
        <div className="skills-all">
          <div className="skillsGroup">
            <SkillsPart
              title="Frontend"
              skillsTechs={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"]}
              iconSkill={<FaCode />}
            />
            <SkillsPart
              title="Backend"
              skillsTechs={["Python", "Java", "C++", "Node.js"]}
              iconSkill={<IoMdSettings />}
            />
            <SkillsPart
              title="BBDD"
              skillsTechs={["MySQL", "MongoDB", "PostgreSQL", "DynamoDB", "PowerBI"]}
              iconSkill={<FaDatabase />}
            />
            <SkillsPart
              title="Otros"
              skillsTechs={["Docker", "AWS", "Git", "Socket.io", "Flux", "Jest", "AWS", "Figma", "Windows", "Linux"]}
              iconSkill={<IoLibrary />}
            />
          </div>
          <div className="titleGroup">
            <h1>
              SKILLS & <span className="highlight-stack">STACK</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGroup;
