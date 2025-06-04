import React from "react";
import "./experienceGrid.css";
import SingleExperienceCard from "../ExperienceSingle/experienceCard";
import PixelLogo from "../../assets/images/pixel-logo.png";
import CoolmodLogo from "../../assets/images/coolmod-logo.png";

const ExperienceGrid = () => {
  return (
    <div className="background">
      <div className="limits">
        <div className="experienceGrid">
          <SingleExperienceCard
            image={PixelLogo}
            alt={"PixelCom Logo"}
            className={"pixel-logo"}
            description={
              "Puesto de prácticas como desarrollador front-end haciendo uso de frameworks como React.js en un entorno Cliente-Servidor y otras tecnologías como Docker y Socket.io o utilidades como Git, GitHub Actions y metodologías SCRUM. Aquí desarrollé algunos componentes gráficos y también ayudé en la corrección de algunos errores."
            }
            title={"PixelCom Ingeniería"}
            duration={"⌛800Hrs"}
          />
          <SingleExperienceCard
            image={CoolmodLogo}
            alt={"Coolmod Logo"}
            className={"coolmod-logo"}
            description={
              "Puesto de prácticas alternando entre diferentes sectores dentro de la compañía, en los que figuran, atención al cliente donde destacan el soporte y el uso de Microsoft Navision, montaje de ordenadores y postventa donde también hice uso de Excel."
            }
            title={"Coolmod Informática"}
            duration={"⌛380Hrs"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceGrid;
