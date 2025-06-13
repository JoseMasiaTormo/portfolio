import React from "react";
import "./experienceGrid.css";
import SingleExperienceCard from "../ExperienceSingle/experienceCard";

const ExperienceGrid = () => {
  return (
    <div className="background">
      <div className="limits">
        <div className="experienceGrid">
          <SingleExperienceCard
            description={
              "Puesto de prácticas como desarrollador full-stack haciendo uso de frameworks como React.js en un entorno Cliente-Servidor y otras tecnologías como Docker y Socket.io o utilidades como Git, GitHub Actions y metodologías SCRUM además de CI/CD. Aquí desarrollé algunos componentes gráficos y también ayudé en la corrección de algunos errores."
            }
            title={"PixelCom Ingeniería"}
            link={"https://pixelcom.es"}
            classImage={"imageExpPixel"}
          />
          <SingleExperienceCard
            description={
              "Puesto de prácticas alternando entre diferentes sectores dentro de la compañía, en los que figuran, atención al cliente donde destacan el soporte y el uso de Microsoft Navision, montaje de ordenadores y postventa donde también hice uso de Excel."
            }
            title={"Coolmod Informática"}
            link={"https://coolmod.com"}
            classImage={"imageExpCoolmod"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceGrid;
