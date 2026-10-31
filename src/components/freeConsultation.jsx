import React from "react";
import freeConsultation from "../assets/images/Home/free-consultation.webp";
import MotionDiv from "../components/MotionDiv";
import { Link } from "react-router-dom";


const FreeConsultation = ({ 
  title,
  description, 
  buttonText, 
  buttonLink, 
}) => {
  return (
    <div className="freeConsultaionComponent">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <MotionDiv type="fadeInUp">
              <div
                className="tech-flex"
                style={{
                  background: `linear-gradient(90deg, #295199 39.42%, rgba(41, 81, 153, 0) 100%), url(${freeConsultation})  `,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `cover`
                }}
              >
                <div className="free-consulation-left">
                  {title && <h2 className="text-white mb-3">{title}</h2>}
                  {description && <p className="text-white mb-3">{description}</p>}
                  <div className="button-flex">
                    {buttonText && (
                      <Link to={buttonLink} className="btn btn-primary bg-whitee">
                        {buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
