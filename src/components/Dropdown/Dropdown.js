import React, { useState } from "react";

export default function Dropdown({
  logo,
  title,
  description,
  image1,
  image2,
  image3,
  imgAlt1,
  imgAlt2,
  imgAlt3,
  link,
  logoName,
  techs = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const imgDrop = "max-w-full h-auto rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.3)] object-cover block mx-[10px]";

  const customImgStyles = {
    KCPPMov: "max-w-[200px] rounded-[30px] w-full h-auto",
    KCPPPC: "max-w-full w-[600px] h-auto",
    KCCarrPC: "max-w-full w-[600px] h-auto",
    TSP1: "max-w-full w-[600px] h-auto",
    TSP2: "max-w-full w-[600px] h-auto",
    TSP3: "max-w-full w-[600px] h-auto",
    TSP: "w-[70px] h-[70px]",
  };

  const getImgClasses = (id) => `${imgDrop} ${customImgStyles[id] || ""}`;

  return (
    <div className="w-full max-w-full bg-[linear-gradient(to_right,#001230,#61095a)] text-white box-border shadow-[0_4px_10px_rgba(0,0,0,0.4)] p-6 pb-0 transition-all duration-[400] ease-in-out overflow-hidden">
      <div
        className="flex items-center justify-center cursor-pointer font-glitch tracking-[0.2em]"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-24 h-24" id={logoName} />
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
                  className="inline shadow-[0_2px_8px_rgba(0,0,0,0.3)] bg-[rgb(44,44,44)] p-1 m-2 rounded-md border border-solid border-[#6d2eff]"
                >
                  {tech}
                  {index !== techs.length - 1}
                </span>
              ))}
            </div>
          )}
          <a href={link} className="text-white no-underline">
            Ir al proyecto ⛓️‍💥
          </a>
          <div className="flex flex-wrap justify-center items-center my-4 gap-5">
            <img src={image2} alt={imgAlt2} id={imgAlt2} className={getImgClasses(imgAlt2)} />
            <img src={image3} alt={imgAlt3} id={imgAlt3} className={getImgClasses(imgAlt3)} />
            <img src={image1} alt={imgAlt1} id={imgAlt1} className={getImgClasses(imgAlt1)} />
          </div>
        </div>
      </div>
    </div>
  );
}
