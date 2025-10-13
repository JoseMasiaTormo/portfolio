import React from "react";

const SkillsPart = ({ title, skillsTechs, iconSkill }) => {
  return (
    <div className="flex flex-col m-2">
      <div className="flex items-center gap-2 p-0 mt-3">
        <span>{iconSkill}</span>
        <h3 className="m-0 font-mono text-xl">{title}</h3>
      </div>
      <hr className="border-t border-solid border-[#ccc] w-full" />
      <div className="flex flex-wrap mb-1.5">
        {skillsTechs.map((skill, index) => (
          <div
            key={index}
            className="inline shadow shadow-black bg-[#2e2e2e] p-[5px] m-2.5 text-sm rounded-lg border border-[#6d2eff] border-solid font-mono"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPart;
