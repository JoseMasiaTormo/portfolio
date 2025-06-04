import React, { useEffect, useState } from "react";
import "./profDesc.css";

const fullText =
  "·Soy un joven entusiasta de 20 años con una pasión por las nuevas tecnologías y el aprendizaje continuo. Poseo una mentalidad abierta y una determinación inquebrantable para adquirir experiencia en diversos campos, para así poder crecer profesionalmente todo lo que pueda.";

const ProfesionalDesc = () => {
  const [textShown, setTextShown] = useState("");
  const [animateBrackets, setAnimateBrackets] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      const element = document.querySelector(".animated-text");

      if (element && element.getBoundingClientRect().top < triggerPoint && !animateBrackets) {
        setAnimateBrackets(true);

        setTimeout(() => {
          let index = 0;
          const interval = setInterval(() => {
            setTextShown((prev) => prev + fullText.charAt(index));
            index++;
            if (index >= fullText.length) clearInterval(interval);
          }, 15);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateBrackets]);

  return (
    <div className="pd-container">
      <div className="photo" />
      <div className="text-block">
        <div className={`bracket left-brace ${animateBrackets ? "open" : ""}`}>{"{"}</div>

        <div className={`text-content ${animateBrackets ? "expand" : ""}`}>
          <p className={`animated-text ${animateBrackets ? "visible" : "hidden"}`}>{textShown}</p>
        </div>

        <div className={`bracket right-brace ${animateBrackets ? "open" : ""}`}>{"}"}</div>
      </div>
    </div>
  );
};

export default ProfesionalDesc;
