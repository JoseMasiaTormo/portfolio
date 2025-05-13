import React from "react";
import "./card.css";

const Card = ({ image, alt }) => {
  return (
    <div className="card">
      <div className="card2">
        <img src={image} alt={alt} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
