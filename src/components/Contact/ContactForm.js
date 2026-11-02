import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { CONTACT_EMAIL, FORMSPREE_ID } from "../../config";

const fieldStyles =
  "w-full bg-[#141414] text-white font-mono text-sm rounded-md border border-solid border-accent/60 px-3 py-2.5 outline-none transition-all duration-200 placeholder:text-[#666] focus:border-accent2 focus:shadow-[0_0_0_1px_rgba(214,70,159,0.6),0_0_16px_rgba(214,70,159,0.35)]";
const labelStyles = "block mb-1.5 text-xs uppercase tracking-[0.15em] text-[#bdbdbd]";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // bot

    // Sin Formspree configurado: abre el cliente de correo con todo relleno
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Contacto desde el portfolio - ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(res.statusText);
      setStatus("sent");
      setForm({ name: "", email: "", message: "", _gotcha: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="bg-[radial-gradient(ellipse_at_top,_#3a0f5e_0%,_black_65%)] bg-black text-white py-14 md:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:items-start">
        <div>
          <h2 className="font-glitch text-4xl xl:text-5xl tracking-wider flex flex-wrap gap-3">
            <span>HABLEMOS</span>
            <span className="text-accent2 [text-shadow:0_0_10px_rgba(214,70,159,0.4)]">?</span>
          </h2>
          <p className="mt-4 font-mono text-[#d6d6d6] leading-relaxed max-w-md">
            ¿Tienes un proyecto, una oferta o simplemente quieres comentar algo? Escríbeme y te respondo lo antes
            posible.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block font-mono text-sm text-[#bdbdbd] no-underline transition-colors hover:text-accent2"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-solid border-accent/40 bg-black/50 p-5 md:p-7 shadow-[0_0_24px_rgba(124,92,246,0.15)] grid gap-5 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="cf-name" className={labelStyles}>
              Nombre
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={onChange}
              placeholder="Tu nombre"
              className={fieldStyles}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className={labelStyles}>
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={onChange}
              placeholder="tu@email.com"
              className={fieldStyles}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-message" className={labelStyles}>
              Mensaje
            </label>
            <textarea
              id="cf-message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={onChange}
              placeholder="Cuéntame…"
              className={`${fieldStyles} resize-y min-h-[120px]`}
            />
          </div>

          {/* Honeypot anti-spam: invisible para personas */}
          <input
            type="text"
            name="_gotcha"
            value={form._gotcha}
            onChange={onChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 font-mono text-sm font-semibold text-[#1a0e14] bg-accent2 px-5 py-2.5 rounded-md border-none cursor-pointer transition-shadow duration-200 shadow-[0_0_12px_rgba(214,70,159,0.28)] hover:shadow-[0_0_18px_rgba(214,70,159,0.5)] disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p role="status" className="font-mono text-sm m-0">
              {status === "sent" && <span className="text-[#7ee0a8]">¡Mensaje enviado! Te respondo pronto ✅</span>}
              {status === "error" && (
                <span className="text-[#ff7a9a]">
                  No se pudo enviar. Prueba a escribirme a {CONTACT_EMAIL}
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
