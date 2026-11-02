import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import projects from "../../data/projects";
import ProjectSlide from "./ProjectSlide";

const arrowStyles =
  "flex items-center justify-center h-11 w-11 rounded-full bg-black border border-solid border-accent text-white text-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:border-accent2 hover:shadow-[0_0_14px_rgba(214,70,159,0.5)]";

const ProjectsSlider = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = projects.length;

  const goTo = (i) => setIndex((i + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section
      id="proyectos"
      className="bg-[linear-gradient(to_bottom,black,#61095a_55%,black)] text-white py-12 md:py-16"
      aria-roledescription="carrusel"
      aria-label="Proyectos"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Cabecera */}
        <div className="px-4 md:px-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-glitch text-4xl xl:text-5xl tracking-wider flex gap-3">
            <span>MIS</span>
            <span className="text-accent2 [text-shadow:0_0_10px_rgba(214,70,159,0.4)]">PROYECTOS</span>
          </h2>
          <div className="flex gap-3">
            <button type="button" onClick={prev} className={arrowStyles} aria-label="Proyecto anterior">
              <FaChevronLeft />
            </button>
            <button type="button" onClick={next} className={arrowStyles} aria-label="Proyecto siguiente">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Pestañas: se ven todos los proyectos de un vistazo */}
        <div className="px-4 md:px-10 mt-6 flex gap-2 overflow-x-auto pb-2 font-mono [scrollbar-width:none]">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => goTo(i)}
              aria-current={i === index}
              className={`shrink-0 px-3 py-1.5 rounded-md text-sm border border-solid cursor-pointer transition-all duration-200 ${
                i === index
                  ? "bg-accent2 text-[#1a0e14] border-accent2 font-semibold shadow-[0_0_12px_rgba(214,70,159,0.45)]"
                  : "bg-[rgb(44,44,44)] text-[#d6d6d6] border-accent/60 hover:border-accent2"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Pista del slider */}
        <div
          className="mt-8 overflow-hidden focus:outline-none"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <ProjectSlide key={project.title} project={project} index={i} total={total} active={i === index} />
            ))}
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="px-4 md:px-10 mt-10 flex gap-2" aria-hidden="true">
          {projects.map((p, i) => (
            <span
              key={p.title}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i === index ? "bg-accent2 shadow-[0_0_8px_rgba(214,70,159,0.6)]" : i < index ? "bg-accent/70" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
