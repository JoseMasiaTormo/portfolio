import React from "react";
import "./experienceCard.css";

const SingleExperienceCard = ({ description, title, link, classImage }) => {
  return (
    <div class="cardExp">
      <div class={classImage}></div>
      <div class="contentExp">
        <span class="titleExp">{title}</span>
        <p class="descExp">{description}</p>
        <a class="actionExp" href={link}>
          Más
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default SingleExperienceCard;
