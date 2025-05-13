import React from "react";
import Card from "../Card/CardComp";
import "./cardNetwork.css";

const cardPositions = [
  /*0HTML*/ { x: 350, y: 50 },
  /*1JS*/ { x: 600, y: 50 },
  /*2REACT*/ { x: 850, y: 50 },
  /*3CSS*/ { x: 250, y: 150 },
  /*4C++*/ { x: 830, y: 300 },
  /*5PYTHON*/ { x: 1100, y: 200 },
  /*6JAVA*/ { x: 1150, y: 50 },
  /*7FIGMA*/ { x: 1400, y: 50 },
  /*8BI*/ { x: 1500, y: 250 },
  /*9AWS*/ { x: 1400, y: 390 },
  /*10GIT*/ { x: 250, y: 300 },
  /*11DOCKER*/ { x: 600, y: 300 },
  /*12SOCKET.IO*/ { x: 425, y: 500 },
  /*13SQL*/ { x: 750, y: 500 },
  /*14MONGO*/ { x: 1220, y: 500 },
];

const connections = [
  [0, 1],
  [0, 3],
  [1, 2],
  [4, 5],
  [5, 6],
  [7, 8],
  [8, 9],
  [10, 11],
  [11, 12],
  [12, 10],
  [13, 14],
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
