import React from "react";
import MotionDiv from "../components/MotionDiv";

const HeadingWithText = ({ heading, subText }) => {
  return (
    <section className="headingWithText padd pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-main">
              {heading && (
                <MotionDiv type="fadeInUp">
                  <h2>{heading}</h2>
                  <hr />
                </MotionDiv>
              )}

              {subText && <p>{subText}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingWithText;
