import React from "react";
import { Link } from "react-router-dom";
const FreeEstimationSection = ({
  title = "Get A Free Product Cost Estimation",
  description = "Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs.",
  buttonText = "Start Calculations",
  buttonLink = "#",
  image,
  altText = "Section Image",
}) => {
  return (
    <section className="freeProductEstimation">
      <div className="container">
        <div className="row m-0 align-items-center">
          {/* Left Column */}
          <div className="col-md-5 col-12 p-0">
            <div className="freeLeftcoumn">
              <div className="header-main">
                <h2 className="text-white">{title}</h2>
                <hr />
              </div>

              <div className="frreColumncontent">
                <p className="text-white">{description}</p>
              </div>

              <div className="button-flex">
                <Link to={buttonLink} className="btn btn-primary bg-whitee">
                {buttonText}
                </Link>      
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-7 col-12 p-0">
            <div className="freeRightcolImage">
              <img
                src={image}
                alt={altText}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeEstimationSection;
