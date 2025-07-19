import React from "react";
import Dropdown from "./Dropdown";
import logoKCs from "../../assets/images/logoKCs.png";
import logoPixel from "../../assets/images/pixel-logo.png";
import logoTSP from "../../assets/images/informacion.png";
import KCPPPC from "../../assets/images/PPPC.png";
import KCPPMov from "../../assets/images/PPMov.png";
import KCCarrMov from "../../assets/images/carritoMov.png";
import TV1 from "../../assets/images/tv-graphics1.png";
import TV2 from "../../assets/images/tv-graphics2.png";
import TV3 from "../../assets/images/tv-graphics3.png";
import TSP1 from "../../assets/images/tsp1.png";
import TSP2 from "../../assets/images/tsp2.png";
import TSP3 from "../../assets/images/tsp3.png";

const DropDownG = () => {
  return (
    <div>
      <Dropdown
        logo={logoKCs}
        title={"KeyCap Specials"}
        description={
          "Proyecto personal de del Grado Superior, es un concepto de proyecto, y los diseños se han hecho todos con Figma."
        }
        image1={KCPPPC}
        image2={KCPPMov}
        image3={KCCarrMov}
        imgAlt1={"KCPPPC"}
        imgAlt2={"KCPPMov"}
        imgAlt3={"KCCarrMov"}
        link={
          "https://www.figma.com/design/K7YEAR85ubF7qU2be5yLIb/Dise%C3%B1o-Final?node-id=1669-162202&m=dev&t=jBp77qW7SqBMmEVp-1"
        }
        techs={["Figma"]}
      />
      <Dropdown
        logo={logoPixel}
        title={"TV Graphics"}
        description={
          "Proyecto en el que estuve involucrado durante mis prácticas del Grado Superior, desarrollado totalmente en React."
        }
        image1={TV1}
        image2={TV2}
        image3={TV3}
        imgAlt1={"TV1"}
        imgAlt2={"TV2"}
        imgAlt3={"TV3"}
        link={"https://pixelcom.es/grafismo-tv"}
        techs={[
          "React",
          "TypeScript",
          "Node.js",
          "Storybook",
          "AWS",
          "DynamoDB",
          "Socket.io",
          "Docker",
          "Flux",
          "Jest",
          "Github Actions",
        ]}
      />
      <Dropdown
        logo={logoTSP}
        title={"TSP Soluciones"}
        description={
          "Este es un pequeño proyecto hecho para un familiar mezclando varias tecnologías básicas, lo hice como un ejercicio en el Grado Superior."
        }
        image1={TSP1}
        image2={TSP2}
        image3={TSP3}
        imgAlt1={"TSP1"}
        imgAlt2={"TSP2"}
        imgAlt3={"TSP3"}
        link={"https://github.com/JoseMasiaTormo/TSP-SOLUCIONES-PROJECT"}
        logoName={"TSP"}
        techs={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
      />
    </div>
  );
};

export default DropDownG;
