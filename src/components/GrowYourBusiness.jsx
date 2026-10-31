import React from "react";
import { Link } from "react-router-dom";

const GrowYourBusiness = ({
  title = "Want to Grow Your Business Digitally?",
  buttonText = "Start Your Project Today",
  link = "/contact-us",
  onClick = () => {},
  bgColorClass = "bg-primary", 
}) => {
  return (
    <section className={`grow-your-business`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12">
            <h2 className="m-0 text-white">{title}</h2>
          </div>
          <div className="col-md-6 col-12">
            <div className="button-flex">
              <Link to={link}  className="btn btn-primary bg-whitee">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourBusiness;
