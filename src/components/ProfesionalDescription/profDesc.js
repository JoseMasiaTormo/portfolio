import React from "react";
import { handleCopyEmail } from "../../utils/copyEmail";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfesionalDesc = () => {
  const aBubblesStyles =
    "bg-black border-none rounded-full p-3 text-white cursor-pointer transition-colors transition-transform duration-300 ease-in-out hover:scale-110 text-[25px]";

  const tooltipStyles =
    "absolute left-1/2 -translate-x-1/2 bg-[#33333317] text-white text-sm px-3 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-nowrap transition-opacity duration-300 z-10 top-full";

  return (
    <div className="w-full h-full bg-black bg-[radial-gradient(circle,_#ffffff_1.5px,_transparent_1.5px)] bg-[length:40px_40px] bg-[position:0_0,20px_20px] bg-repeat">
      <div className="flex flex-col p-7 font-glitch lg:ml-7 lg:pt-10 xl:flex-row xl:justify-center xl:gap-28 xl:p-12 xl:m-0">
        <h1 className="flex flex-col text-7xl xl:w-fit tracking-wider">
          <div className="flex flex-col md:flex-row md:gap-7 xl:flex-col xl:gap-0">
            <span>FCO</span>
            <span>JOSE</span>
          </div>
          <div className="flex flex-col md:flex-row md:gap-7 xl:flex-col xl:gap-0">
            <span>MASIA</span>
            <span>TORMO</span>
          </div>
        </h1>
        <ul className="text-xl pt-5 pl-5 font-bold list-disc leading-relaxed md:text-3xl xl:list-none xl:items-center xl:justify-center xl:flex xl:flex-col xl:p-0 tracking-wider">
          <li>DESARROLLO FULL STACK</li>
          <li>DISEÑO DE INTERFACES</li>
          <li>ESPECIALISTA EN IA Y BIG DATA</li>
          <li>TÉCNICO INFORMÁTICO</li>
        </ul>
        <div className="flex gap-4 justify-start pt-4 xl:flex-col xl:items-center xl:justify-center xl:p-0">
          <a
            href="https://github.com/JoseMasiaTormo"
            target="_blank"
            rel="noopener noreferrer"
            className={aBubblesStyles}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jose-masia-tormo"
            target="_blank"
            rel="noopener noreferrer"
            className={aBubblesStyles}
          >
            <FaLinkedin />
          </a>
          <button className={`${aBubblesStyles} relative group`} onClick={handleCopyEmail}>
            <span className={tooltipStyles}>josemasia2004@gmail.com</span>
            <FaEnvelope />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalDesc;
