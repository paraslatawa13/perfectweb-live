import React from "react";


const StepByIcon = ({ title, steps }) => {
  return (
    <div className="StepByIconBlock">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {title && (
              <div className="header-main mb-5">
                <h2 className="text-center">{title}</h2>
                <hr />
              </div>
            )}
          </div>

          <div className="col-12">
            <div className="StepByIcons">

              {steps?.map((item, index) => (
                <div className="StepByIcon" key={index}>
                  <div className="stepByImage">
                    <img src={item.img} alt={item.text} />
                  </div>
                  <div className="stepByText">
                    <p>{item.text}</p>
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

export default StepByIcon;
