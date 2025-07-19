import React, { useState } from "react";
import "./dropdown.css";

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

  return (
    <div className="containerDrop">
      <div className="headerDrop" onClick={toggleDropdown}>
        <div className="logoTitleDrop">
          <img src={logo} alt="Logo" className="logoDrop" id={logoName} />
          <h2 className="titleDrop">{title}</h2>
        </div>
        <div className="iconDrop">{isOpen ? " ▲" : " ▼"}</div>
      </div>

      <div className="contentDropWrapper">
        <div className={`contentDrop ${isOpen ? "open" : "closed"}`}>
          <p>{description}</p>
          {techs.length > 0 && (
            <div className="techList">
              {techs.map((tech, index) => (
                <span key={index} className="techItem">
                  {tech}
                  {index !== techs.length - 1}
                </span>
              ))}
            </div>
          )}
          <a href={link} className="linkDrop">
            Ir al proyecto ⛓️‍💥
          </a>
          <div className="imagesDrop">
            <img src={image1} alt={imgAlt1} id={imgAlt1} />
            <img src={image2} alt={imgAlt2} id={imgAlt2} />
            <img src={image3} alt={imgAlt3} id={imgAlt3} />
          </div>
        </div>
      </div>
    </div>
  );
}
