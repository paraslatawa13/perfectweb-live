import React from "react";
import Cst1 from "../../assets/images/cst-1.svg";
import Cst2 from "../../assets/images/cst-2.svg";
import Cst3 from "../../assets/images/cst-3.svg";
import Cst4 from "../../assets/images/cst-4.svg";
import SmartChoice from "../../assets/images/SmartChoice.webp";



const CostTextBlock = () => {
  return (
    <section className="costTextBlock padd">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="header-main mb-5">
              <h2>What Makes Our Product Cost Calculator the Smart Choice?</h2>
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="col-leftb">
              <div className="colleftBlock">
                <div className="licon">
                  <img src={Cst1} alt="Instant Estimates" className="img-fluid" />
                </div>
                <h6>Instant Estimates</h6>
                <p>Get quick and accurate cost calculations for your project within seconds.</p>
              </div>
              <div className="colleftBlock">
                <div className="licon">
                  <img src={Cst2} alt="Transparent Pricing" className="img-fluid" />
                </div>
                <h6>Transparent Pricing</h6>
                <p>No hidden charges, everything is clearly defined upfront.</p>
              </div>
              <div className="colleftBlock">
                <div className="licon">
                  <img src={Cst3} alt="Time-Saving" className="img-fluid" />
                </div>
                <h6>Time-Saving</h6>
                <p>Helps you plan a budget effectively before starting development.</p>
              </div>
              <div className="colleftBlock">
                <div className="licon">
                  <img src={Cst4} alt="Smart Decision-Making" className="img-fluid" />
                </div>
                <h6>Smart Decision-Making</h6>
                <p>Helps you plan a budget effectively before starting development.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="col-rightb">
              <img src={SmartChoice} alt="Smart Choice" className="img-fluid" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default CostTextBlock;
