import React from "react";

const VerticalCarousel = ({ column1Images, column2Images, column3Images }) => {
  return (
    <div className="vcarousel-container">
      {/* Column 1 - Top to Bottom */}
      <div className="carousel-column top-to-bottom">
        <div className="carousel-track">
          {[...column1Images, ...column1Images].map((img, i) => (
            <div className="carousel-card" key={`col1-${i}`}>
              <img src={img} alt="service" />
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 - Bottom to Top */}
      <div className="carousel-column bottom-to-top">
        <div className="carousel-track">
          {[...column2Images, ...column2Images].map((img, i) => (
            <div className="carousel-card" key={`col2-${i}`}>
              <img src={img} alt="service" />
            </div>
          ))}
        </div>
      </div>

      {/* Column 3 - Top to Bottom */}
      <div className="carousel-column top-to-bottom">
        <div className="carousel-track">
          {[...column3Images, ...column3Images].map((img, i) => (
            <div className="carousel-card" key={`col3-${i}`}>
              <img src={img} alt="service" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
