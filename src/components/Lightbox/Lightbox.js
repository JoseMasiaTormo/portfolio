import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

const btn =
  "flex items-center justify-center h-11 w-11 rounded-full bg-black/70 border border-solid border-accent text-white text-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:border-accent2 hover:shadow-[0_0_14px_rgba(214,70,159,0.5)]";

// Se renderiza en un portal en <body>: el slider usa transform y eso
// rompería el position: fixed si el visor viviera dentro.
const Lightbox = ({ images, index, title, onClose, onChange }) => {
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const total = images.length;

  const next = () => onChange((index + 1) % total);
  const prev = () => onChange((index - 1 + total) % total);

  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  // Los eventos de React suben por el portal hasta el slider:
  // los cortamos aquí para no cambiar de proyecto por detrás.
  const onKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  const onTouchStart = (e) => {
    e.stopPropagation();
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    e.stopPropagation();
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} - captura ${index + 1} de ${total}`}
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm text-white font-mono animate-[fadeIn_200ms_ease-out]"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm tracking-[0.15em]">
          <span className="font-glitch text-accent2 text-lg mr-2">{title}</span>
          {index + 1} / {total}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className={btn} aria-label="Cerrar visor">
          <FaXmark />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 md:px-20 pb-6">
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} - captura ${index + 1}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain rounded-lg shadow-[0_0_40px_rgba(124,92,246,0.25)] animate-[fadeIn_250ms_ease-out]"
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className={`${btn} absolute left-3 md:left-6 top-1/2 -translate-y-1/2 hover:-translate-y-1/2`}
              aria-label="Captura anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className={`${btn} absolute right-3 md:right-6 top-1/2 -translate-y-1/2 hover:-translate-y-1/2`}
              aria-label="Captura siguiente"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
