import React, { useRef, useEffect } from "react";
import Card from "../Card/CardComp";
import "./cardNetwork.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaAws,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiCplusplus, SiSocketdotio, SiMysql, SiMongodb } from "react-icons/si";
import powerbiIcon from "../../assets/icons/bi.png";

const iconData = [
  { Icon: FaHtml5, label: "HTML", hoverText: "HTML" },
  { Icon: FaJs, label: "JavaScript", hoverText: "JavaScript" },
  { Icon: FaReact, label: "React", hoverText: "React.js" },
  { Icon: FaCss3Alt, label: "CSS", hoverText: "CSS" },
  { Icon: SiCplusplus, label: "C++", hoverText: "C++" },
  { Icon: FaPython, label: "Python", hoverText: "Python" },
  { Icon: FaJava, label: "Java", hoverText: "Java" },
  { Icon: FaFigma, label: "Figma", hoverText: "Figma" },
  { image: powerbiIcon, label: "Power BI", hoverText: "PowerBI" },
  { Icon: FaAws, label: "AWS", hoverText: "Amazon Web Services" },
  { Icon: FaGitAlt, label: "Git", hoverText: "Git" },
  { Icon: FaDocker, label: "Docker", hoverText: "Docker" },
  { Icon: SiSocketdotio, label: "Socket.IO", hoverText: "Socket.io" },
  { Icon: SiMysql, label: "SQL", hoverText: "MySQL" },
  { Icon: SiMongodb, label: "MongoDB", hoverText: "MongoDB" },
];

const cardPositions = [
  /*0HTML*/ { x: 350, y: 120 },
  /*1JS*/ { x: 600, y: 120 },
  /*2REACT*/ { x: 850, y: 120 },
  /*3CSS*/ { x: 250, y: 220 },
  /*4C++*/ { x: 830, y: 370 },
  /*5PYTHON*/ { x: 1100, y: 270 },
  /*6JAVA*/ { x: 1150, y: 120 },
  /*7FIGMA*/ { x: 1400, y: 120 },
  /*8BI*/ { x: 1500, y: 320 },
  /*9AWS*/ { x: 1400, y: 460 },
  /*10GIT*/ { x: 250, y: 370 },
  /*11DOCKER*/ { x: 600, y: 370 },
  /*12SOCKET.IO*/ { x: 425, y: 570 },
  /*13SQL*/ { x: 750, y: 570 },
  /*14MONGO*/ { x: 1220, y: 570 },
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const containerWidth = scrollContainer.offsetWidth;
      const contentWidth = scrollContainer.scrollWidth;
      const scrollTo = (contentWidth - containerWidth) / 2;

      scrollContainer.scrollLeft = scrollTo;
    }
  }, []);

  return (
    <div className="network-container">
      <h2 className="network-title">Conocimientos</h2>
      <div className="network-graph-scroll" ref={scrollRef}>
        <div className="network-graph-inner">
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
              <Card
                Icon={iconData[index].Icon}
                image={iconData[index].image}
                label={iconData[index].label}
                hoverText={iconData[index].hoverText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardNetwork;
