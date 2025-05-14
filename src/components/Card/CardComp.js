import React from "react";
import "./card.css";

const Card = ({ Icon, image, label }) => {
  return (
    <div className="card">
      <div className="card2">
        {image ? <img src={image} alt={label} className="card-image" /> : Icon && <Icon className="card-icon" />}
      </div>
    </div>
  );
};

export default Card;
