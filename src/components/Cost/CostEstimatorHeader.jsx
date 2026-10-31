import React from "react";

import costImagee from "../../assets/images/costimagee.webp";

const CostEstimatorHeader = () => {
  return (
    <section className="costHeader">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 12">
            <div className="cHmain">
              <h1 className="text-white text-left mb-4">Estimate Your Software Project Cost</h1>
              <p>
                Get a quick and accurate estimate for your software development
                project. Our tool considers various factors to provide you with a
                realistic cost range.
              </p>
            </div>
          </div>
          <div className="col-md-6 12">
            <div className="cHmainImage">
              <img src={costImagee} alt="costimagee" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CostEstimatorHeader;
