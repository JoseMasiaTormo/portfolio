import React from "react";
import "./experienceCard.css";

const SingleExperienceCard = ({ image, description, className, alt, title, duration }) => {
  return (
    <div class="cardExp">
      <img src={image} alt={alt} className={className} />
      <div class="card__content">
        <p class="card__title">{title}</p>
        <p class="card__description">{description}</p>
        <p class="card__duration">{duration}</p>
      </div>
    </div>
  );
};

export default SingleExperienceCard;
