import React from "react";
import "./experienceGrid.css";
import SingleExperienceCard from "../ExperienceSingle/experienceCard";
import PixelLogo from "../../assets/images/pixel-logo.png";
import CoolmodLogo from "../../assets/images/coolmod-logo.png";

const ExperienceGrid = () => {
  return (
    <div className="limits">
      <div className="experienceGrid">
        <SingleExperienceCard
          image={PixelLogo}
          alt={"PixelCom Logo"}
          className={"pixel-logo"}
          description={
            "Puesto de prácticas como desarrollador front-end haciendo uso de React.js, Docker, Socket.io y otras tecnologías de gestión de datos, a parte de uso de modalidad SCRUM."
          }
          title={"PixelCom Ingeniería"}
          duration={"⌛800Hrs"}
        />
        <SingleExperienceCard
          image={CoolmodLogo}
          alt={"Coolmod Logo"}
          className={"coolmod-logo"}
          description={
            "Puesto de prácticas alternando entre diferentes puestos, en los que figuran, atención al cliente, montaje de ordenadores y postventa."
          }
          title={"Coolmod Informática"}
          duration={"⌛380Hrs"}
        />
      </div>
    </div>
  );
};

export default ExperienceGrid;
