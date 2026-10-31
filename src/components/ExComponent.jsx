import ExperiencedAndCertifiedProfessionals from "../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import hundredClientSatisfactionrate from "../assets/images/badge/hundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../assets/images/badge/CommittedToOn-TimeResults.webp";
import MotionDiv from "../components/MotionDiv";


const ExComponent = ({ title,plus, plusText, leftOneh, clientSH, clientSP, leftTwoh, leftThreeh, leftfour, leftfive, leftfourh, middleOne, middleTwo, middleTwoP, rightOne, rightTwo, rightThree, buttonLink, }) => {
  return (
    <div className="ex-component">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="header-scrol-circle mb-5">
            <MotionDiv type="fadeInUp">
              {title &&<h2 className="text-center">{title}</h2>}
              <hr />
            </MotionDiv>
          </div>
        </div>
        <MotionDiv type="fadeInUp">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 col-12">
            <div className="e-card">
              <div className="e-lefttop">
                <div className="round-circel d-flex align-items-center">
                  <div className="circlec-content">
                    {plus && <h4>{plus}</h4>}
                    {plusText &&<p>{plusText}</p>}
                  </div>

                  <div className="circle-image ms-3">
                    <img src={ExperiencedAndCertifiedProfessionals} alt="Industry Experience" className="img-fluid" />
                  </div>
                </div>

                <div className="lr-content mt-3">
                  { leftOneh && <p> {leftOneh}</p>}
                </div>
              </div>

              <div className="e-leftbtm mt-4">
                {rightOne && <h4>{rightOne}</h4>}
                {rightTwo && <p>{rightTwo}</p>}
              </div>
            </div>
          </div>

          {/* Center Card */}
          <div className="col-md-4 col-12">
            <div className="e-card">
              <div className="e-centertop text-center">
                {leftfour && <h4>{leftfour}</h4>}
                {leftfive && <p>{leftfive}</p>}
              </div>

              <div className="e-centertbtm">
                <div className="round-circel d-flex align-items-center">
                  <div className="circlec-content">
                   {middleOne && <h4>{middleOne}</h4>}
                   {middleTwo && <p>{middleTwo}</p>}
                  </div>

                  <div className="circle-image">
                    <img src={hundredClientSatisfactionrate} alt="Client Satisfaction" className="img-fluid" />
                  </div>
                </div>

                <div className="lr-content">
                  {middleTwoP &&  <p>{middleTwoP}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-md-4 col-12">
            <div className="e-card">
              <div className="e-centertop">
                <div className="round-circel">
                  <div className="circlec-content">

                    {<h4>{leftTwoh}</h4>}
                    {<p>{leftThreeh}</p>}

                  </div>

                  <div className="circle-image">
                    <img src={CommittedToOnTimeResults} alt="Projects Delivered" className="img-fluid" />
                  </div>
                </div>

                <div className="lr-content">
                  {leftfourh && <p>{leftfourh}</p>}
                </div>
              </div>

              <div className="e-rightbtm">
                    {clientSH &&<h4>{clientSH}</h4>}
                    {clientSP &&<p>{clientSP}</p>}
              </div>
            </div>
          </div>
        </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default ExComponent;
