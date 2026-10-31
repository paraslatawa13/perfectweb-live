// CommonHeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";
const CommonHeroSection = ({ 
  subtitle,  
  title, 
  description, 
  buttonText, 
  buttonLink, 
  image, 
  altText 
}) => {
  return (
    <div className="common-heroComponent">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start">
            <div className="c-h-content">
              {subtitle && <h5 className="mb-2">{subtitle}</h5>} 
              {title && <h1 className="text-white">{title}</h1>}
              {description && <p className="text-white">{description}</p>}
              <div className="button-flex">
                {buttonText && (
                  <Link to={buttonLink} className="btn btn-primary bg-whitee">
                    {buttonText}
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-center">
            {image && (
              <img 
                src={image} 
                alt={altText || "Hero Section"} 
                className="img-fluid" 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeroSection;
