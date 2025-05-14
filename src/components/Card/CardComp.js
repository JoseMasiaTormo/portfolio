import React from "react";
import "./card.css";

const Card = ({ Icon, image, label, hoverText }) => {
  return (
    <div className="card">
      <div className="card2">
        {image ? <img src={image} alt={label} className="card-image" /> : Icon && <Icon className="card-icon" />}
        <p className="hover-text">{hoverText}</p>
      </div>
    </div>
  );
};

export default Card;
