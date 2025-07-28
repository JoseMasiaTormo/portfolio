import React from "react";
import "./footer.css";
import { handleCopyEmail } from "../../utils/copyEmail";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterComp = () => {
  return (
    <div>
      <div className="footerComp">
        <div className="social-bubbles">
          <a href="https://github.com/JoseMasiaTormo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/jose-masia-tormo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <button className="email-bubble" onClick={handleCopyEmail}>
            <span className="tooltip">josemasia2004@gmail.com</span>
            <FaEnvelope />
          </button>
        </div>
        <p>© 2025 Fco Jose Masià Tormo</p>
        <p>Esta web está en continuo desarrollo</p>
      </div>
    </div>
  );
};

export default FooterComp;
