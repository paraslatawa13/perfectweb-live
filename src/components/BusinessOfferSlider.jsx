import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import calcFreeImage from "../assets/images/calcfreeImage.webp";

const slides = [
  {
    title: "$250 Research Guides – Free Today!",
    text: "Unlock expert research guides worth $250 designed to streamline your business processes and drive smarter decisions.",
    buttonText: "Get it Now",
    rightItems: ["Free Business Research Guide"],
  },
  {
    title: "Validate Ideas, Grow with Experts",
    text: "Book a free session with professionals to refine and validate your business concept.",
    buttonText: "Book Free Consultation",
    rightItems: ["Free Brainstorming Session", "Business Validation Support"],
  },
  {
    title: "Get a Complete Business Growth Package – Free!",
    text: "Share your details and receive a tailored bundle of benefits, from competitive analysis to growth strategies.",
    buttonText: "Book Free Consultation",
    rightItems: [
      "Competitive Business Study",
      "Statement of Work",
      "Free Proposal",
      "Business Wireframing Document",
      "Go-To-Market Plan",
      "Growth Strategy",
    ],
  },
];

const BusinessOfferSlider = () => {
  return (
    <div className="businessOfferSlider">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop={true}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="BESlideWrapper">
              
              <div className="BESlideLeft">
                <div className="BESlideLeftWrapper">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <div className="button-flex">
                      {slide.buttonText === "Get it Now" ? (
                        <button
                          type="button"
                          className="btn btn-primary bg-whitee"
                            data-bs-toggle="modal"
                            data-bs-target="#otpModal"
                        >
                          {slide.buttonText}
                        </button>
                      ) : (
                        <Link to="/contact-us" className="btn btn-primary bg-whitee">
                          {slide.buttonText}
                        </Link>
                      )}
                    </div>

                </div>
              </div>

              
              <div className="BESlideRight">
                <div
                  className="bgpsImage"
                  style={{
                    backgroundImage: `url(${calcFreeImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                  className="bgpsItems">
                  {slide.rightItems.map((item, idx) => (
                    <p key={idx} className="rightItem">
                      <i className="fa fa-check-circle"></i> {item}
                    </p>
                    
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BusinessOfferSlider;
