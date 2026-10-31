import React from "react";
import bgCheck from "../../assets/images/Hire/bgCheck.svg"; 

const HiringModel = ({ title, models }) => {
  return (
    <div className="hiringModel">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="header-main mb-5">
              <h2>{title}</h2>
              <hr />
            </div>
          </div>

          <div className="col-12">
            <div className="hiringModel_block">
              {models.map((item, index) => (
                <div className="hiringCard" key={index}>
                  <div className="hiringHeading">
                    <h5>{item.heading}</h5>
                    <img src={bgCheck} alt="Check Icon" />
                  </div>
                  <div className="hiringContent">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HiringModel;
