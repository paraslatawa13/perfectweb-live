import React from "react";
import { Link } from "react-router-dom";

const HireBanner = ({ content, media }) => {
  const { title, description, buttonText, buttonLink } = content || {};
  const { images = [], alt = "" } = media || {}; // ✅ include alt from media

  return (
    <section className="Hirehero-section">
      <div className="common-heroComponent">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-md-6 text-center text-md-start">
              {title && <h1 className="text-white">{title}</h1>}
              {description && <p>{description}</p>}

              {buttonText && (
                <div className="button-flex">
                  <Link to={buttonLink} className="btn btn-primary">
                    {buttonText}
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT IMAGES */}
            <div className="col-md-6 text-center position-relative Hirehero-image">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={alt ? `${alt} ${images.length > 1 ? `-${index + 1}` : ""}` : `Banner image ${index + 1}`}
                  className={`hero-img hero-img-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireBanner;
