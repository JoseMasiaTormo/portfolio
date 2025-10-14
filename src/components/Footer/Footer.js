import React from "react";
import { handleCopyEmail } from "../../utils/functions";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterComp = () => {
  return (
    <footer className="flex flex-wrap justify-center items-center w-full bg-black bg-[radial-gradient(circle,_#ffffff_1.5px,_transparent_1.5px)] bg-[length:40px_40px] bg-[position:0_0,20px_20px] bg-repeat p-3 text-center gap-5 overflow-hidden box-border">
      <div className="flex justify-center gap-[15px] mt-[10px]">
        <a
          href="https://github.com/JoseMasiaTormo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-none rounded-full p-3 text-[25px] text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/jose-masia-tormo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-none rounded-full p-3 text-[25px] text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <button
          className="relative bg-transparent border-none rounded-full p-3 text-[25px] text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 group"
          onClick={handleCopyEmail}
        >
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[rgba(51,51,51,0.09)] text-white text-[12px] px-[10px] rounded-md whitespace-nowrap opacity-0 invisible transition-opacity duration-300 group-hover:visible group-hover:opacity-100 z-10">
            josemasia2004@gmail.com
          </span>
          <FaEnvelope />
        </button>
      </div>
      <p className="text-white text-sm">© 2025 Fco Jose Masià Tormo</p>
      <p className="text-white text-sm">Esta web está en continuo desarrollo</p>
    </footer>
  );
};

export default FooterComp;
