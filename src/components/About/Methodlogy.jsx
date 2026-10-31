import React from "react";
import ourMission from "../../assets/images/about/ourMission.webp";
import ourVision from "../../assets/images/about/ourVision.webp";
import ourMissionIcon from "../../assets/images/about/ourMissionIcon.svg";
import ourVisionIcon from "../../assets/images/about/ourVisionIcon.svg";

const Methodlogy = () => {
  return (
    <div className="methodlogyComponent">
      <div className="methodlogyGrid">
        {/* Mission */}
        <div
          className="methodlogyColumn"
          style={{
            backgroundImage: `url(${ourMission})`,
            backgroundColor: "#FE5F15CC",
          }}
        >
          <div className="medthodlogyIcon">
            <img src={ourMissionIcon} alt="Our Mission" />
          </div>
          <div className="medthodlogyContent">
            <h4>Our Mission</h4>
            <p>
              Our mission is to empower organizations with technology that fuels growth, optimizes processes, and creates meaningful outcomes, helping businesses expand and succeed in today’s digital-first world.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div
          className="methodlogyColumn"
          style={{
            backgroundImage: `url(${ourVision})`,
            backgroundColor: "#274c90c7",
          }}
        >
          <div className="medthodlogyIcon">
            <img src={ourVisionIcon} alt="Our Vision" />
          </div>
          <div className="medthodlogyContent">
            <h4>Our Vision</h4>
            <p>
              Our vision is to be a catalyst for digital success, helping businesses adapt, grow, and thrive with transformative solutions in today’s dynamic global market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodlogy;
