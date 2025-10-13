import React from "react";

const SingleExperienceCard = ({ description, title, link, classImage, techsExp }) => {
  return (
    <div className="max-w-[500px] rounded-lg bg-[#141414] shadow-[0_1px_10px_0_rgba(0,0,0,1)] border border-solid border-transparent font-mono">
      <div class={classImage}></div>
      <div class="p-4">
        <span class="text-[#cfcfcf] text-lg leading-7 font-semibold">{title}</span>
        <p class="mt-2 text-[#bdbdbd] text-sm leading-5">{description}</p>
        {techsExp.length > 0 && (
          <div className="my-2 text-base text-[#e0e0e0] text-center flex flex-wrap items-center justify-center">
            {techsExp.map((tech, index) => (
              <span
                key={index}
                className="inline shadow-[0_2px_8px_0_rgba(0,0,0,0.3)] bg-[rgb(44,44,44)] p-1 m-1 rounded-md border border-solid border-[#6d2eff] "
              >
                {tech}
                {index !== techsExp.length - 1}
              </span>
            ))}
          </div>
        )}
        <a
          class="group no-underline inline-flex text-[#afafaf] text-sm leading-5 font-medium items-center gap-1 bg-[#3f0086] p-[4px_8px] rounded-s shadow-[0_0px_10px_0_rgba(0,0,0,1)]"
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
