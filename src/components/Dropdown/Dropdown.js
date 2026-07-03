import React, { useState } from "react";

export default function Dropdown({
  title,
  description,
  image1,
  image2,
  image3,
  imgAlt1,
  imgAlt2,
  imgAlt3,
  link,
  techs = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const imgDrop = "max-w-full h-auto rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.3)] object-cover block mx-[10px]";

  const customImgStyles = {
    TSP1: "max-w-full w-[600px] h-auto",
    TSP2: "max-w-full w-[600px] h-auto",
    TSP3: "max-w-full w-[600px] h-auto",
    PHPTM1: "w-[300px] max-w-[45%] h-auto",
    PHPTM2: "w-[480px] max-w-[90%] h-auto",
    PHPTM3: "w-[240px] max-w-[45%] h-auto",
  };

  const getImgClasses = (id) => `${customImgStyles[id] || ""}`;

  return (
    <div className="w-full max-w-full bg-[linear-gradient(to_bottom,black,#61095a,black)] text-white box-border shadow-[0_4px_10px_rgba(0,0,0,0.4)] p-6 pb-0 transition-all duration-[400] ease-in-out overflow-hidden">
      <div
        className="flex items-center justify-center cursor-pointer font-glitch tracking-[0.2em] text-white [text-shadow:0_0_10px_rgba(214,70,159,0.4)]"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-semibold m-0">{title}</h2>
        </div>
        <div className="text-2xl pl-3 min-[380px]:flex hidden ">{isOpen ? " ▲" : " ▼"}</div>
      </div>

      <div className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out font-mono">
        <div
          className={`mt-6 items-center justify-center text-center text-base opacity-0 max-h-0 overflow-hidden transition-[max-height,opacity] duration-[1500] ease-in-out  ${
            isOpen ? "opacity-100 max-h-fit" : "opacity-0 max-h-0"
          }`}
        >
          <p>{description}</p>
          {techs.length > 0 && (
            <div className="my-3 text-base text-[#e0e0e0] text-center flex flex-wrap items-center justify-center">
              {techs.map((tech, index) => (
                <span
                  key={index}
                  className="inline bg-[rgb(44,44,44)] px-2 py-1 m-2 text-sm rounded-md border border-solid border-accent transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.3),0_0_8px_rgba(124,92,246,0.22),inset_0_0_6px_rgba(124,92,246,0.12)] hover:border-accent2 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.3),0_0_4px_rgba(214,70,159,0.55),0_0_18px_rgba(214,70,159,0.55),0_0_32px_rgba(214,70,159,0.28)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <a href={link} className="text-white no-underline transition-colors duration-200 hover:text-accent2">
            Ir al proyecto ⛓️‍💥
          </a>
          <div className="flex flex-wrap justify-center items-center my-4 gap-5">
            <img
              src={image2}
              alt={`${title} - captura 2`}
              id={imgAlt2}
              loading="lazy"
              className={`${imgDrop} ${getImgClasses(imgAlt2)}`}
            />
            <img
              src={image3}
              alt={`${title} - captura 3`}
              id={imgAlt3}
              loading="lazy"
              className={`${imgDrop} ${getImgClasses(imgAlt3)}`}
            />
            <img
              src={image1}
              alt={`${title} - captura 1`}
              id={imgAlt1}
              loading="lazy"
              className={`${imgDrop} ${getImgClasses(imgAlt1)}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
