import React from "react";
import GalleryImg1 from "../../assets/images/Gallery/Gallery1.webp";
import GalleryImg2 from "../../assets/images/Gallery/Gallery2.webp";
import GalleryImg3 from "../../assets/images/Gallery/Gallery3.webp";
import GalleryImg4 from "../../assets/images/Gallery/Gallery4.webp";
import GalleryImg5 from "../../assets/images/Gallery/Gallery5.webp";
import GalleryImg6 from "../../assets/images/Gallery/Gallery6.webp";
import GalleryImg7 from "../../assets/images/Gallery/Gallery7.webp";

const columns = [
  [GalleryImg1],            // first column
  [GalleryImg2, GalleryImg3], // second column
  [GalleryImg4],            // third column
  [GalleryImg5, GalleryImg6], // fourth column
  [GalleryImg7],            // fifth column
];

const Gallery = () => {
  return (
    <div className="GalleryWrapper text-center">
      <div className="header-main  mb-5">
          <h2>Life @Perfect Web Services</h2>
          <hr />
     </div>
      <div className="main-gallery">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="gallery-col">
            {col.map((img, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={img}
                  alt="Life at Perfect Web Services"
                  style={{
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
