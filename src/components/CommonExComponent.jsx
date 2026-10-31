import { Link } from "react-router-dom";
import MotionDiv from "../components/MotionDiv";

const CommonExComponent = ({ title, cards, buttonText, buttonLink }) => {
  return (
    <div className="commonEx-component">
      <div className="container">


        {title && (
          <div className="row align-items-center justify-content-center">
            <div className="header-scrol-circle mb-5">
              <MotionDiv type="fadeInUp">
                <h2 className="text-center">{title}</h2>
                <hr />
              </MotionDiv>
            </div>
          </div>
        )}
        <MotionDiv type="fadeInUp">
          <div className="row align-items-center justify-content-center">
            {cards?.map((item, index) => (
              <div key={index} className="col-md-4 col-12">
                <div className="e-card">
                  <div className="round-circel d-flex align-items-center">
                    <div className="circlec-content">
                      {item.plus && <h4 className={`plus-heading ${item.h4Class || ""}`}>{item.plus}</h4>}
                      {item.plusText && <p>{item.plusText}</p>}
                    </div>

                    <div className="circle-image">
                      <img src={item.icon} alt={item.alt} className="img-fluid" />
                    </div>
                  </div>

                  {item.bottomText && (
                    <div className="round-circeltext">
                      <p>{item.bottomText}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Button */}
          {buttonText && buttonLink && (
            <div className="row mt-4">
              <div className="button-flex d-flex  justify-content-center">
                <Link to={buttonLink} className="btn btn-primary">
                  {buttonText}
                </Link>
              </div>
            </div>
          )}
        </MotionDiv>
      </div>
    </div>
  );
};

export default CommonExComponent;
