import React from "react";
import ProjectCost from "../../assets/Images/ProjectCost.webp"; 
import { Link } from "react-router-dom";

const CalProjectCost = ({ 
  title = "Calculate Your Project Cost", 
  description = "Get a quick, transparent estimate for your website, app, or digital solution—tailored to your needs.", 
  buttonText = "Start Cost Calculator", 
  buttonLink = "/contact-us", 
  image = ProjectCost 
}) => {
  return (
    <section className="calcProjectSection padd">
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-md-6 col-12">
            <div className="calcProjecttext">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="button-flex">
                {/* <Link to={buttonLink} className="btn btn-primary bg-whitee">
                  {buttonText}
                </Link> */}
              </div>
            </div>
          </div>

         
          <div className="col-md-6 col-12">
            <div className="calcProjectimg">
              <img src={ProjectCost} alt="Website Cost Calculator" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalProjectCost;
