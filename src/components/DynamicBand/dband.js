import React from "react";
import "./dband.css";

const DynamicBand = () => {
  const message = "Esta página web aún está en desarrollo.";

  return (
    <div className="dband">
      <div className="dband-track">
        <p>{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
        <p aria-hidden="true">{message}</p>
      </div>
    </div>
  );
};

export default DynamicBand;
