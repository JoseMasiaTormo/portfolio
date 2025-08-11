import React from "react";
import "./experienceGrid.css";
import SingleExperienceCard from "../ExperienceSingle/experienceCard";

const ExperienceGrid = () => {
  return (
    <div className="background">
      <div className="limits">
        <div className="experienceGrid">
          <SingleExperienceCard
            techsExp={[
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
            title={"PixelCom Ingeniería"}
            link={"https://pixelcom.es"}
            classImage={"imageExpPixel"}
          />
          <SingleExperienceCard
            techsExp={[
              "Microsoft Dynamics",
              "Atención al Cliente",
              "Excel",
              "Postventa",
              "Reparación de equipos",
              "Montaje de ordenadores",
            ]}
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
