import React from "react";
import { handleCopyEmail } from "../../utils/copyEmail";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfesionalDesc = () => {
  const textShown =
    "Soy desarrollador Full Stack Junior, lo que en mi caso significa, poca experiencia pero un gran entusiasmo por aprender lo máximo posible de las tecnologías actuales y de las nuevas.";

  const aBubblesStyles =
    "bg-black border-none rounded-full p-3 text-white cursor-pointer transition-colors transition-transform duration-300 ease-in-out hover:scale-110 text-[25px]";

  const tooltipStyles =
    "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 bg-[#33333317] text-white text-sm px-3 py-1.5 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible whitespace-nowrap transition-opacity duration-300 z-10";

  return (
    <div className="w-full h-full bg-[url('./assets/backgrounds/dot_bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col p-5 font-mono">
        <h1 className="text-7xl font-extrabold">FCO JOSE MASIÀ TORMO</h1>
        <ul className="text-xl pt-5 pl-5 font-bold list-disc leading-relaxed">
          <li>DESARROLLO FULL STACK</li>
          <li>DISEÑO DE INTERFACES</li>
          <li>ESPECIALISTA EN IA Y BIG DATA</li>
          <li>TÉCNICO INFORMÁTICO</li>
        </ul>
        <p className="text-lg pt-5 leading-relaxed">{textShown}</p>
        <div className="flex gap-4 justify-start pt-4">
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
