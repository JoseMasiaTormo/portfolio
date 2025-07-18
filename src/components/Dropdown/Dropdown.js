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
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="containerDrop">
      <div className="headerDrop" onClick={toggleDropdown}>
        <div className="logoTitleDrop">
          <img src={logo} alt="Logo" className="logoDrop" />
          <h2 className="titleDrop">{title}</h2>
        </div>
        <div className="iconDrop">{isOpen ? " ▲" : " ▼"}</div>
      </div>

      {isOpen && (
        <div className="contentDrop">
          <p>{description}</p>
          <a href={link} className="linkDrop">
            Ir al proyecto ⛓️‍💥
          </a>
          <div className="imagesDrop">
            <img src={image1} alt={imgAlt1} id={imgAlt1} />
            <img src={image2} alt={imgAlt2} id={imgAlt2} />
            <img src={image3} alt={imgAlt3} id={imgAlt3} />
          </div>
        </div>
      )}
    </div>
  );
}
