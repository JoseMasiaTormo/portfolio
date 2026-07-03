import React from "react";

const SingleExperienceCard = ({ description, title, link, classImage, techsExp }) => {
  return (
    <div className="max-w-[500px] rounded-lg bg-[#141414] border border-solid border-accent font-mono transition-shadow duration-200 shadow-[0_1px_10px_0_rgba(0,0,0,1)] hover:shadow-[0_1px_10px_0_rgba(0,0,0,1),0_0_22px_rgba(124,92,246,0.22)]">
      <div className={classImage}></div>
      <div className="p-4">
        <span className="text-[#cfcfcf] text-lg leading-7 font-semibold">{title}</span>
        <p className="mt-2 text-[#bdbdbd] text-sm leading-5">{description}</p>
        {techsExp.length > 0 && (
          <div className="my-2 text-base text-[#e0e0e0] text-center flex flex-wrap items-center justify-center">
            {techsExp.map((tech, index) => (
              <span
                key={index}
                className="inline bg-[rgb(44,44,44)] px-2 py-1 m-1 text-sm rounded-md border border-solid border-accent transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.3),0_0_8px_rgba(124,92,246,0.22),inset_0_0_6px_rgba(124,92,246,0.12)] hover:border-accent2 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_0_4px_rgba(214,70,159,0.55),0_0_18px_rgba(214,70,159,0.55),0_0_32px_rgba(214,70,159,0.28)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <a
          className="group no-underline inline-flex text-[#1a0e14] text-sm leading-5 font-semibold items-center gap-1 bg-accent2 p-[4px_8px] rounded-md transition-shadow duration-200 shadow-[0_0_12px_rgba(214,70,159,0.28)] hover:shadow-[0_0_18px_rgba(214,70,159,0.5)]"
          href={link}
        >
          Más
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default SingleExperienceCard;
