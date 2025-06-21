import React from "react";
import "./profDesc.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfesionalDesc = () => {
  const textShown =
    "Soy desarrollador Full Stack Junior, lo que en mi caso significa, poca experiencia pero un gran entusiasmo por aprender lo máximo posible de las tecnologías actuales y de las nuevas.";

  const handleCopyEmail = () => {
    const email = "josemasia2004@gmail.com";

    try {
      const tempInput = document.createElement("textarea");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Correo copiado al portapapeles 📋");
    } catch (err) {
      alert("No se pudo copiar el correo automáticamente.");
    }
  };

  return (
    <div className="pd-container">
      <div className="photo" />
      <div className="text-block">
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

        <div className={`text-content`}>
          <p className={`animated-text visible`}>{textShown}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalDesc;
