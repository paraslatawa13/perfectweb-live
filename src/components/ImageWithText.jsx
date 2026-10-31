import React from "react";
import MotionDiv from "../components/MotionDiv";
import { Link } from "react-router-dom";
const ImageWithText = ({
  title,
  description,
  listItems = [],
  buttonText,
  buttonLink,
  image,
  altText,
  sideCircle,
  reverse = false, 
}) => {
  return (
    <div className="image-with-text">
      <div className="container">
        <div className="row align-items-center">
          {/* Content */}
          <div className={`col-md-6 col-12 ${reverse ? "order-md-2" : ""}`}>
            <MotionDiv type="fadeInLeft">
            <div className="product-cost-left">
              <div className="header-main">
                {title && <h2>{title}</h2>}
                <hr />
              </div>

              {description}

              {listItems.length > 0 && (
                <ul>
                  {listItems.map((item, index) => (
                    <li key={index}>
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.text}
                          className="img-fluid"
                        />
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {buttonText && (
                <div className="button-flex">
                  <Link to={buttonLink}
                    className="btn btn-primary"
                  >
                    {buttonText}
                  </Link>
                </div>
              )}
            </div>
            </MotionDiv>
          </div>

          {/* Image */}
          <div className={`col-md-6 col-12 ${reverse ? "order-md-1" : ""}`}>
            
            <div className="product-cost-image">
              <MotionDiv type="fadeInRight">
                {image && (
                  <img
                    src={image}
                    alt={altText || "Section Image"}
                    className="img-fluid"
                  />
                )}
              </MotionDiv>
            </div>
          </div>
        </div>

        {/* Side Circle */}
        {sideCircle && (
          <div className="row align-items-center">
            <div className="col-12">
              <div className="side-circle-image">
                <img
                  src={sideCircle}
                  alt="Side Circle"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageWithText;
