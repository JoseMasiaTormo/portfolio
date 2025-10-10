import React from "react";
import { handleCopyEmail } from "../../utils/copyEmail";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfesionalDesc = () => {
  const textShown =
    "Soy desarrollador Full Stack Junior, lo que en mi caso significa, poca experiencia pero un gran entusiasmo por aprender lo máximo posible de las tecnologías actuales y de las nuevas.";

  const aBubblesStyles =
    "bg-black border-none rounded-full p-3 font-[25px] text-white cursor-pointer transition-colors transition-transform duration-300 ease-in-out hover:scale-110";

  return (
    <div className="w-full h-full bg-[url('./assets/backgrounds/dot_bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col p-5 font-mono">
        <h1 className="text-7xl font-extrabold">FCO JOSE MASIÀ TORMO</h1>
        <h2 className="text-xl pt-5">
          · Desarrollador Full Stack <br /> · Analista de Datos <br />· Especialista en IA
        </h2>
        <p className="text-lg pt-5">{textShown}</p>
        <div className="flex gap-4 justify-start">
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
          <button className="email-bubble" onClick={handleCopyEmail}>
            <span className="tooltip">josemasia2004@gmail.com</span>
            <FaEnvelope />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalDesc;
