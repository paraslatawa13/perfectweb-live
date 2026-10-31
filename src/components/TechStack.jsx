import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TechStack = ({ title, techLogos = [] }) => {
  const row1 = techLogos.slice(0, 8);
  const row2 = techLogos.slice(8, 15);
  const row3 = techLogos.slice(15, 24);

  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="header-main mb-5">
          {title && <h2 className="text-center">{title}</h2>}
          <hr />
        </div>
      </div>

      <div className="tech-stack-cover">
        {/* Desktop View */}
        <div className="desktop-tech d-none d-lg-block">
          {[row1, row2, row3].map((row, rIndex) => (
            <div className={`ttop row${rIndex + 1}`} key={rIndex}>
              {row.map((tech, i) => (
                <div className="tt-list" key={i}>
                  <div className="tech-logo">
                    <img src={tech.logo} alt={tech.name} />
                  </div>
                  <div className="tech-name">
                    <p>{tech.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="mobile-tech d-lg-none">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {techLogos.map((tech, i) => (
              <SwiperSlide key={i}>
                <div className="tt-list text-center">
                  <div className="tech-logo">
                    <img src={tech.logo} alt={tech.name} />
                  </div>
                  <div className="tech-name">
                    <p>{tech.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TechStack;
