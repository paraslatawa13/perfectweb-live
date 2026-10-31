import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const GridComponent = ({ data }) => {
  // helper to render item wrapper (either Link or div)
  const Wrapper = ({ item, children }) => {
    if (item.link) {
      // Internal link (starts with /) → use React Router Link
      if (item.link.startsWith("/")) {
        return (
          <Link to={item.link} className="clickable">
            {children}
          </Link>
        );
      }

      // External link → fallback to <a>
      return (
        <a
          href={item.link}
          className="clickable"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    // No link → just a div
    return <div>{children}</div>;
  };

  return (
    <div className="gridComponent">
      {/* Desktop Grid */}
      <div className="gridComponent-flex desktop-view justify-content-center">
        {data.map((item, index) => (
          <div className="gridList" key={index}>
            <Wrapper item={item}>
              <div className="gridListBlock">
                <div className="gridiconImage">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="gridiContent">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Wrapper>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="mobile-view">
        <Swiper spaceBetween={20} slidesPerView={1.2} grabCursor={true}>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Wrapper item={item}>
                <div className="gridListBlock">
                  <div className="gridiconImage">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="gridiContent">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Wrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GridComponent;
