import React, { useState, useEffect } from "react";
import "../../styles/ItineraryDetailPage.css";

const CoverflowCarousel = ({ items, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);



  // Handle card click to bring clicked card to the front
  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="coverflow-container">
      <div className="coverflow-carousel">
        {[...Array(items.length)].map((_, i) => {
          const index = (currentIndex + i - 1 + items.length) % items.length;
          const position = i - 1; // -1 = left, 0 = center, 1 = right

          let transformStyle = "scale(0.8)";
          let zIndex = 1;
          let opacity = 0.3;

          if (position === 0) {
            transformStyle = "scale(1) translateX(0)";
            zIndex = 3;
            opacity = 1;
          } else if (position === -1) {
            transformStyle = "scale(0.9) translateX(-80%) rotateY(0deg)";
            zIndex = 2;
            opacity = 0.7;
          } else if (position === 1) {
            transformStyle = "scale(0.9) translateX(80%) rotateY(0deg)";
            zIndex = 2;
            opacity = 0.7;
          }

          return (
            <div
              key={index}
              className="coverflow-item"
              style={{
                transform: transformStyle,
                zIndex,
                opacity,
              }}
              onClick={() => handleCardClick(index)}  // Click handler
            >
              {items[index]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoverflowCarousel;
