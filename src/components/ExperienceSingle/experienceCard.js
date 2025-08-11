import React from "react";
import "./experienceCard.css";

const SingleExperienceCard = ({ description, title, link, classImage, techsExp }) => {
  return (
    <div class="cardExp">
      <div class={classImage}></div>
      <div class="contentExp">
        <span class="titleExp">{title}</span>
        <p class="descExp">{description}</p>
        {techsExp.length > 0 && (
          <div className="techListExp">
            {techsExp.map((tech, index) => (
              <span key={index} className="techItemExp">
                {tech}
                {index !== techsExp.length - 1}
              </span>
            ))}
          </div>
        )}
        <a class="actionExp" href={link}>
          Más
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default SingleExperienceCard;
