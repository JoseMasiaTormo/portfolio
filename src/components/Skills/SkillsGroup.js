import React from "react";
import SkillsPart from "./SkillsPart";
import { FaCode } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const SkillsGroup = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#000000_30%,_#4f177f_100%)]">
      <div className="limits">
        <div className="flex flex-wrap justify-center">
          <div>
            <SkillsPart
              title="Frontend"
              skillsTechs={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Tailwind"]}
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
          <div className="order-[-1] mx-2 my-0 p-0 mt-4 md:pr-10 flex items-center justify-center xl:m-0">
            <h1 className="flex flex-row font-glitch text-4xl tracking-wider items-center justify-center gap-3 xl:flex-col xl:gap-0 xl:text-5xl">
              <span>SKILLS</span>
              <span>&</span>
              <span className="text-[#5b21b9]">STACK</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGroup;
