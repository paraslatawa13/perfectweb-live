import React from "react";

const NextStep = () => {
  return (
    <section className="nextStepSection padd pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>What Will Be the Next Step?</h2>
            <p>You are one step closer to building your perfect product</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="nextStepCard">
              <h4>We’ll Prepare a Proposal</h4>
              <p>
                Based on your requirements, we’ll share scope, timeline, and budget details.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="nextStepCard">
              <h4>Together We Discuss It</h4>
              <p>
                We’ll connect via call, Zoom, or WhatsApp to refine the details
                and align with your goals.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="nextStepCard">
              <h4>Let’s Start Building</h4>
              <p>
                Once the proposal is approved, our team begins development to
                bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
