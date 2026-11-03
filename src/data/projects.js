import PHPTM1 from "../assets/images/cap1php.png";
import PHPTM2 from "../assets/images/cap2php.png";
import PHPTM3 from "../assets/images/cap3php.png";
import TV1 from "../assets/images/tv-graphics1.png";
import TV2 from "../assets/images/tv-graphics2.png";
import TV3 from "../assets/images/tv-graphics3.png";
import SQ1 from "../assets/images/SP1.png";
import SQ2 from "../assets/images/SP2.png";
import SQ3 from "../assets/images/SP3.png";
import MAKO1 from "../assets/images/dia.png";
import MAKO2 from "../assets/images/nuevo.png";
import MAKO3 from "../assets/images/objetivos.png";
import CDImg1 from "../assets/images/cdoor1.png";
import CDImg2 from "../assets/images/cdoor2.png";
import CDImg3 from "../assets/images/cdoor3.png";
import CIFF1 from "../assets/images/ciff1.png";
import CIFF2 from "../assets/images/ciff2.png";
import CIFF3 from "../assets/images/ciff3.png";

// Orden = orden en el slider. El primero es el que se ve al cargar la página.
const projects = [
  {
    title: "Mako",
    tag: "App móvil · IA",
    description:
      "App móvil para contar calorías y macros con IA, gratis y sin suscripción. Escribes lo que has comido y Gemini separa los ingredientes y calcula las macros. Los productos de marca salen de Open Food Facts, buscándolos por nombre o escaneando el código de barras. Los datos se guardan solo en el móvil, sin cuentas ni login.",
    images: [MAKO1, MAKO2, MAKO3],
    link: "https://github.com/JoseMasiaTormo/mako",
    linkLabel: "Ver en GitHub",
    techs: [
      "React Native",
      "Expo",
      "TypeScript",
      "SQLite",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Gemini API",
      "Open Food Facts",
      "Vitest",
    ],
  },
  {
    title: "Spotify Quiz",
    tag: "Web app · Fullstack",
    description:
      "Web app fullstack construida con Vue 3, Node.js y SQLite. Integra la API de Spotify para explorar artistas, gestionar favoritos y generar quizzes musicales personalizados. Incluye autenticación con JWT, caché de peticiones y estilos con Tailwind CSS.",
    images: [SQ1, SQ2, SQ3],
    link: "https://github.com/JoseMasiaTormo/spotify-quiz-vue",
    linkLabel: "Ver en GitHub",
    techs: ["Vue 3", "Node.js", "SQLite", "APIs", "Auth", "TailwindCSS"],
  },
  {
    title: "Code Door",
    tag: "Hardware · Python",
    description:
      "Control de acceso al baño solo para clientes. Detecta los pedidos de local desde la impresora de tickets y genera un código temporal de 120 minutos para abrir la puerta. Incluye servidor TCP, interfaz de escritorio y diseño del montaje con ESP32 y Raspberry Pi.",
    images: [CDImg1, CDImg2, CDImg3],
    link: "https://github.com/JoseMasiaTormo/codeDoor",
    linkLabel: "Ver en GitHub",
    techs: ["Python", "Tkinter", "Sockets TCP", "Regex", "JSON", "Linux"],
  },
  {
    title: "CIFinder",
    tag: "Escritorio · IA",
    description:
      "App de escritorio en Python que obtiene el CIF y la dirección de empresas a partir de su nombre, usando IA con búsqueda web (Claude, ChatGPT o Gemini). Procesa listas desde Excel, valida cada CIF con su algoritmo oficial y exporta los resultados en una hoja de cálculo formateada.",
    images: [CIFF1, CIFF2, CIFF3],
    link: "https://github.com/JoseMasiaTormo/cif_finder",
    linkLabel: "Ver en GitHub",
    techs: ["Python", "CustomTkinter", "APIs de IA", "openpyxl", "GitHub Actions"],
  },
  {
    title: "TV Graphics",
    tag: "Prácticas · React",
    description:
      "Proyecto en el que estuve involucrado durante mis prácticas del Grado Superior, desarrollado totalmente en React.",
    images: [TV1, TV2, TV3],
    link: "https://pixelcom.es/grafismo-tv",
    linkLabel: "Ver proyecto",
    techs: [
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
    ],
  },
  {
    title: "PHP Task Manager",
    tag: "Web · PHP",
    description:
      "Proyecto personal de un pequeño CRM para gestión de tareas, hecho completamente en PHP, integrando una base de datos SQLite y manejo de sesiones.",
    images: [PHPTM2, PHPTM1, PHPTM3],
    link: "https://github.com/JoseMasiaTormo/php_mini_crm",
    linkLabel: "Ver en GitHub",
    techs: ["PHP", "SQLite", "HTML", "CSS"],
  },
];

export default projects;
