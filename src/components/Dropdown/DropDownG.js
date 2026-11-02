import React from "react";
import Dropdown from "./Dropdown";
import PHPTM1 from "../../assets/images/cap1php.png";
import PHPTM2 from "../../assets/images/cap2php.png";
import PHPTM3 from "../../assets/images/cap3php.png";
import TV1 from "../../assets/images/tv-graphics1.png";
import TV2 from "../../assets/images/tv-graphics2.png";
import TV3 from "../../assets/images/tv-graphics3.png";
import SQ1 from "../../assets/images/SP1.png";
import SQ2 from "../../assets/images/SP2.png";
import SQ3 from "../../assets/images/SP3.png";
import MAKO1 from "../../assets/images/dia.png";
import MAKO2 from "../../assets/images/nuevo.png";
import MAKO3 from "../../assets/images/objetivos.png";
import CDImg1 from "../../assets/images/cdoor1.png";
import CDImg2 from "../../assets/images/cdoor2.png";
import CDImg3 from "../../assets/images/cdoor3.png";

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
        title={"Mako"}
        description={
          "App móvil para contar calorías y macros con IA, gratis y sin suscripción. Escribes lo que has comido y Gemini separa los ingredientes y calcula las macros. Los productos de marca salen de Open Food Facts, buscándolos por nombre o escaneando el código de barras. Los datos se guardan solo en el móvil, sin cuentas ni login."
        }
        image1={MAKO1}
        image2={MAKO2}
        image3={MAKO3}
        imgAlt1={"MAKO1"}
        imgAlt2={"MAKO2"}
        imgAlt3={"MAKO3"}
        link={"https://github.com/JoseMasiaTormo/mako"}
        techs={[
          "React Native",
          "Expo",
          "TypeScript",
          "SQLite",
          "Cloudflare Workers",
          "Cloudflare D1",
          "Gemini API",
          "Open Food Facts",
          "Vitest",
        ]}
      />
      <Dropdown
        title={"Code Door"}
        description={
          "Control de acceso al baño solo para clientes. Detecta los pedidos de local desde la impresora de tickets y genera un código temporal de 120 minutos para abrir la puerta. Incluye servidor TCP, interfaz de escritorio y diseño del montaje con ESP32 y Raspberry Pi."
        }
        image1={CDImg1}
        image2={CDImg2}
        image3={CDImg3}
        imgAlt1={"CDImg1"}
        imgAlt2={"CDImg2"}
        imgAlt3={"CDImg3"}
        link={"https://github.com/JoseMasiaTormo/codeDoor"}
        techs={["Python", "Tkinter", "Sockets TCP", "Regex", "JSON", "Linux"]}
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
    </div>
  );
};

export default DropDownG;
