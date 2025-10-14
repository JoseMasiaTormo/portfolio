import React from "react";
import SingleExperienceCard from "./experienceCard";

const ExperienceGrid = () => {
  const imageExpPixel =
    "object-cover w-full h-[200px] bg-[url('./assets/images/pixel-logo.png')] bg-center bg-no-repeat";
  const imageExpCoolmod =
    "object-cover w-full h-[200px] bg-[url('./assets/images/coolmod-logo.png')] bg-center bg-no-repeat";
  return (
    <div className="bg-[linear-gradient(to_bottom,_#4f177f_30%,_black_100%)] opacity-100 z-[-2]">
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
