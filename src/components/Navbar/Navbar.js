import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { id: "proyectos", label: "Proyectos" },
  { id: "skills", label: "Skills" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Resalta la sección que está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["inicio", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClasses = (id) =>
    `relative no-underline px-1 py-1 transition-colors duration-200 hover:text-accent2 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-accent2 after:shadow-[0_0_8px_rgba(214,70,159,0.7)] after:transition-all after:duration-300 ${
      active === id ? "text-white after:w-full" : "text-[#bdbdbd] after:w-0"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full font-mono transition-all duration-300 ${
        scrolled || open
          ? "bg-black/80 backdrop-blur-md border-b border-solid border-accent/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          : "bg-black border-b border-solid border-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-4 md:px-10" aria-label="Principal">
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="font-glitch text-2xl tracking-[0.15em] text-white no-underline [text-shadow:0_0_10px_rgba(124,92,246,0.6)]"
        >
          FJ<span className="text-accent2">MT</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-[0.15em] uppercase list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClasses(l.id)} aria-current={active === l.id ? "true" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-white text-3xl bg-transparent border-none cursor-pointer p-1"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-72" : "max-h-0"}`}
      >
        <ul className="list-none m-0 px-4 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`block no-underline py-3 px-3 rounded-md uppercase tracking-[0.15em] text-sm border-l-2 border-solid ${
                  active === l.id
                    ? "text-white border-accent2 bg-white/5"
                    : "text-[#bdbdbd] border-transparent hover:text-accent2"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
