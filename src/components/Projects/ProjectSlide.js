import React, { useState } from "react";
import { FaExpand } from "react-icons/fa6";
import { techChipStyles } from "../../utils/styles";
import Lightbox from "../Lightbox/Lightbox";

const ProjectSlide = ({ project, index, total, active }) => {
  const [current, setCurrent] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const { title, tag, description, images, link, linkLabel, techs } = project;

  return (
    <article
      className="w-full shrink-0 px-4 md:px-10"
      aria-roledescription="diapositiva"
      aria-label={`${index + 1} de ${total}: ${title}`}
      aria-hidden={!active}
      inert={active ? undefined : ""}
    >
      <div className="grid gap-8 items-center lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* Info */}
        <div className="font-mono order-2 lg:order-1">
          <div className="flex items-baseline gap-3 text-sm tracking-[0.2em] text-[#bdbdbd]">
            <span className="font-glitch text-accent2 text-2xl [text-shadow:0_0_10px_rgba(214,70,159,0.4)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>/ {String(total).padStart(2, "0")}</span>
            <span className="ml-auto uppercase text-xs">{tag}</span>
          </div>
          <h3 className="mt-3 font-glitch text-4xl md:text-5xl tracking-[0.12em] text-white [text-shadow:0_0_10px_rgba(214,70,159,0.4)]">
            {title}
          </h3>
          <p className="mt-4 text-[#d6d6d6] leading-relaxed">{description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span key={tech} className={techChipStyles}>
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 no-underline inline-flex text-[#1a0e14] text-sm font-semibold items-center gap-2 bg-accent2 px-4 py-2 rounded-md transition-shadow duration-200 shadow-[0_0_12px_rgba(214,70,159,0.28)] hover:shadow-[0_0_18px_rgba(214,70,159,0.5)]"
          >
            {linkLabel}
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Capturas */}
        <div className="order-1 lg:order-2">
          <button
            type="button"
            onClick={() => setViewerOpen(true)}
            aria-label={`Ampliar captura ${current + 1} de ${title}`}
            className="group relative block w-full p-0 cursor-zoom-in h-[260px] sm:h-[340px] lg:h-[420px] rounded-xl border border-solid border-accent/60 bg-black bg-[radial-gradient(circle,_rgba(255,255,255,0.18)_1px,_transparent_1px)] bg-[length:22px_22px] overflow-hidden shadow-[0_0_24px_rgba(124,92,246,0.18)] transition-shadow duration-300 hover:border-accent2 hover:shadow-[0_0_28px_rgba(214,70,159,0.35)]"
          >
            <span className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-md bg-black/70 border border-solid border-accent2/60 px-2 py-1 font-mono text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <FaExpand /> Ampliar
            </span>
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${title} - captura ${i + 1}`}
                loading="lazy"
                className={`absolute inset-0 m-auto max-h-[90%] max-w-[92%] object-contain rounded-lg shadow-[0_4px_18px_rgba(0,0,0,0.6)] transition-opacity duration-500 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </button>
          {viewerOpen && (
            <Lightbox
              images={images}
              index={current}
              title={title}
              onChange={setCurrent}
              onClose={() => setViewerOpen(false)}
            />
          )}
          <div className="mt-3 flex justify-center gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ver captura ${i + 1} de ${title}`}
                aria-pressed={i === current}
                className={`h-14 w-20 rounded-md overflow-hidden border border-solid bg-black cursor-pointer transition-all duration-200 ${
                  i === current
                    ? "border-accent2 shadow-[0_0_12px_rgba(214,70,159,0.5)]"
                    : "border-[#444] opacity-60 hover:opacity-100 hover:border-accent"
                }`}
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectSlide;
