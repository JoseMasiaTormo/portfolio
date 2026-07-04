import React from "react";
import Dropdown from "./Dropdown";
import PHPTM1 from "../../assets/images/cap1php.png";
import PHPTM2 from "../../assets/images/cap2php.png";
import PHPTM3 from "../../assets/images/cap3php.png";
import TV1 from "../../assets/images/tv-graphics1.png";
import TV2 from "../../assets/images/tv-graphics2.png";
import TV3 from "../../assets/images/tv-graphics3.png";
import TSP1 from "../../assets/images/tsp1.png";
import TSP2 from "../../assets/images/tsp2.png";
import TSP3 from "../../assets/images/tsp3.png";
import SQ1 from "../../assets/images/SP1.png";
import SQ2 from "../../assets/images/SP2.png";
import SQ3 from "../../assets/images/SP3.png";

const DropDownG = () => {
  return (
    <div>
      <Dropdown
        title={"PHP Task Manager"}
        description={
          "Proyecto personal de un pequeño CRM para gestión de tareas, hecho completamente en PHP, integrando una base de datos SQLite y manejo de sesiones."
        }
        image1={PHPTM1}
        image2={PHPTM3}
        image3={PHPTM2}
        imgAlt1={"PHPTM1"}
        imgAlt2={"PHPTM3"}
        imgAlt3={"PHPTM2"}
        link={"https://github.com/JoseMasiaTormo/php_mini_crm"}
        techs={["PHP", "SQLite", "HTML", "CSS"]}
      />
      <Dropdown
        title={"Spotify Quiz"}
        description={
          "Web app fullstack construida con Vue 3, Node.js y SQLite. Integra la API de Spotify para explorar artistas, gestionar favoritos y generar quizzes musicales personalizados. Incluye autenticación con JWT, caché de peticiones y estilos con Tailwind CSS."
        }
        image1={SQ1}
        image2={SQ2}
        image3={SQ3}
        imgAlt1={"SQ1"}
        imgAlt2={"SQ2"}
        imgAlt3={"SQ3"}
        link={"https://github.com/JoseMasiaTormo/spotify-quiz-vue"}
        techs={["Vue 3", "Node.js", "SQLite", "APIs", "Auth", "TailwindCSS"]}
      />
      <Dropdown
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
        techs={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
      />
    </div>
  );
};

export default DropDownG;
