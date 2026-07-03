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
            className="inline bg-[#2e2e2e] p-[5px] m-2.5 text-sm rounded-lg border border-solid border-accent font-mono transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.6),0_0_8px_rgba(124,92,246,0.22),inset_0_0_6px_rgba(124,92,246,0.12)] hover:border-accent2 hover:-translate-y-0.5 hover:shadow-[0_1px_4px_rgba(0,0,0,0.6),0_0_4px_rgba(214,70,159,0.55),0_0_18px_rgba(214,70,159,0.55),0_0_32px_rgba(214,70,159,0.28)]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPart;
