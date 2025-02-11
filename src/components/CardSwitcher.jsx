import React, { useState } from "react";
import "../styles/CardSwitcher.css";



const cardImages = [
  { id: 1, src: "/images/photo.png" },
  { id: 2, src: "/images/hangg.png" },
  { id: 3, src: "/images/cfunding.jpg" },
];

const CardSwitcher = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Initially, the center card is active

  // Function to handle clicking the left card
  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + cardImages.length) % cardImages.length);
  };

  // Function to handle clicking the right card
  const handleRightClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
  };

  return (
    <div className="card-container">
      {cardImages.map((card, index) => {
        const isActive = index === activeIndex;
        const positionClass =
          index === (activeIndex - 1 + cardImages.length) % cardImages.length
            ? "left-card"
            : index === (activeIndex + 1) % cardImages.length
            ? "right-card"
            : "center-card";

        return (
          <div
            key={card.id}
            className={`card ${positionClass} ${isActive ? "active" : ""}`}
            onClick={() => {
              if (positionClass === "left-card") handleLeftClick();
              if (positionClass === "right-card") handleRightClick();
            }}
          >
            <img src={card.src} alt={`Card ${card.id}`} className="card-image" />
          </div>
        );
      })}
    </div>
  );
};

export default CardSwitcher;
