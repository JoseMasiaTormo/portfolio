import React from "react";
import Card from "../Card/CardComp";
import "./cardNetwork.css";

const cardPositions = [
  /*HTML*/ { x: 350, y: 50 },
  /*JS*/ { x: 600, y: 50 },
  /*REACT*/ { x: 850, y: 50 },
  /*FIGMA*/ { x: 1400, y: 90 },
  /*CSS*/ { x: 250, y: 150 },
  /*C++*/ { x: 750, y: 190 },
  /*PYTHON*/ { x: 1100, y: 120 },
  /*JAVA*/ { x: 1250, y: 200 },
  { x: 250, y: 300 },
  { x: 600, y: 300 },
  { x: 425, y: 500 },
  { x: 700, y: 550 },
  /*BI*/ { x: 1500, y: 250 },
  /*AWS*/ { x: 1400, y: 390 },
  { x: 1400, y: 390 },
];

const connections = [
  [0, 1],
  [0, 4],
  [1, 2],
  [5, 6],
  [7, 6],
  [8, 9],
  [9, 10],
  [8, 10],
  [3, 12],
  [12, 13],
];

const CardNetwork = () => {
  return (
    <div className="network-container">
      <svg className="lines-svg">
        {connections.map(([from, to], idx) => (
          <line
            key={idx}
            x1={cardPositions[from].x + 50}
            y1={cardPositions[from].y + 50}
            x2={cardPositions[to].x + 50}
            y2={cardPositions[to].y + 50}
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
        ))}
      </svg>
      {cardPositions.map((pos, index) => (
        <div
          key={index}
          className="card-wrapper"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
        >
          <Card />
        </div>
      ))}
    </div>
  );
};

export default CardNetwork;
