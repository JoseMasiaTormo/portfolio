import React from "react";
import SingleExperienceCard from "./experienceCard";

const ExperienceGrid = () => {
  const imageExpPixel =
    "object-cover w-full h-[200px] bg-[url('./assets/images/pixel-logo2.png')] bg-[250px] bg-center bg-no-repeat";
  const imageExpCoolmod =
    "object-cover w-full h-[200px] bg-[url('./assets/images/coolmod-logo.png')] bg-[250px] bg-center bg-no-repeat";
  return (
    <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0)),url('./assets/backgrounds/techback.jpg')] bg-cover bg-center bg-no-repeat bg-fixed opacity-100 z-[-2]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-wrap justify-center gap-5 p-10">
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
            classImage={imageExpPixel}
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
            classImage={imageExpCoolmod}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceGrid;
