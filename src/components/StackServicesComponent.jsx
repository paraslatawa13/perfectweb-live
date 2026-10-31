import React, { useState } from "react";
import { Link } from "react-router-dom";
import sideShape from "../assets/images/sideshape.webp";
import webDevelopment from "../assets/images/Home/Web-Development.svg";
import uiuxDesign from "../assets/images/Home/ui-ux-design.svg";
import digitalMarketing from "../assets/images/Home/digital-marketing.svg";
import appDevelopement from "../assets/images/Home/app-Developement.svg";
import service1 from "../assets/images/Home/stack-img.png";
import service2 from "../assets/images/Home/stack-img2.png";
import service3 from "../assets/images/Home/stack-img.png";
import service4 from "../assets/images/Home/stack-img.png";
// import stackVideo from "../assets/videos/stack-video.mp4"; 
import MotionDiv from "../components/MotionDiv";

const servicesData = [
  {
    title: "AI Code Review & Rescue",
    description:
      "A ten-year engineering partner for web, mobile, automation and AI - and an AI-accelerated way of building, so your product ships faster and costs less to get there.",
    cta: "Get your code reviewed ",
    link: "/web-development-services",
    img: webDevelopment,
    rightImg: service1,
  },
  {
    title: "Software built with AI, done right",
    description:
      "We build with the same AI tools - deliberately, with our own process wrapped around them so you get something fast to ship, cheaper to build, and easy to extend later.",
    cta: "See how we build ",
    link: "/ui-ux-design-services",
    img: uiuxDesign,
    rightImg: service2,
  },
  {
    title: "Agentic AI & Automation",
    description:
      "Workflows and AI agents that take on multi-step work — follow-ups, triage, reporting — and hand off to your team where judgment is needed. Add RAG, and they answer from your own documents, with sources.",
    cta: "Get your code reviewed ",
    link: "/affordable-digital-marketing-services",
    img: digitalMarketing,
    rightImg: service3,
  },
  {
    title: "Machine Learning modals ",
    description:
      "Models trained on your data to predict demand, recommend, match, score risk and personalize — with deep learning where images, text or speech are involved.",
        cta: "Get your code reviewed ",
    link: "/mobile-app-development-services",
    img: appDevelopement,
    rightImg: service4,
  },
];

const StackServicesComponent = () => {
  const [expanded, setExpanded] = useState({});

  return (
    <div className="stackServicesComponents">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="header-main mb-5">
            <MotionDiv type="fadeInUp">
              <h2>
                From Concept to Completion Our
                <span className="fw-bold"> Full-Stack Services</span>
              </h2>
              <hr />
            </MotionDiv>
          </div>
        </div>

        <div className="row align-items-stretch">
          {/* LEFT: service boxes */}
          <div className="col-md-6 col-12">
            <div className="services-left">
              {servicesData.map((service, index) => (
                <div
                  className="services-list"
                  key={index}
                  tabIndex={0}
                >
                  {/* <Link to={service.link} className="service-link"> */}
                  <Link className="service-link">
                    <div className="service-icon">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>
                        {expanded[service.id]
                          ? service.description
                          : service.description.split(" ").slice(0, 10).join(" ") +
                          (service.description.split(" ").length > 10 ? "..." : "")}

                        {service.description.split(" ").length > 20 && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded((prev) => ({
                                ...prev,
                                [service.id]: !prev[service.id],
                              }))
                            }
                            className="read-more-btn"
                          >
                            {expanded[service.id] ? "Read Less" : "Read More"}
                            <i className="fa fa-angle-right"></i>
                          </button>
                        )}
                      </p>
                      {service.cta && (
                        <p className="service-btn">{service.cta}</p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6 col-12 stack-right-image">
            <MotionDiv type="fadeInLeft">
              <video
                className="services-video"
                src="https://www.pexels.com/download/video/7272375/"
                poster={service1}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </MotionDiv>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12">
            <div className="side-circle-image">
              <img src={sideShape} alt="Side Circle" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackServicesComponent;