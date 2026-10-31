import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrer.css";
import Img1 from "../../assets/images/career/img1.jpg";
import Img2 from "../../assets/images/career/img2.jpg";
import Img3 from "../../assets/images/career/img4.jpg";
import Img4 from "../../assets/images/career/img5.jpg";
import Img5 from "../../assets/images/career/img10.jpg";
import Img6 from "../../assets/images/career/img6.jpg";
import Img7 from "../../assets/images/career/img12.jpg";
import Img8 from "../../assets/images/career/img7.jpeg";

const WorkFeel = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  return (
    <section className="workfell padd">
      <div className="container">
        <div className="row">
          <div class="col-12 text-center">
            <div class="header-main mb-5">
              <h5>Life @ Perfect Web Services</h5>
              <h2 class="">Where Work Feels Like Home</h2>
              <hr />
            </div>
          </div>

          <div className="swiper-wrapper-custom">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              speed={1000}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".swiper-pagination",
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={5}
              breakpoints={{
                300: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="rounded-3"
                    src={img}
                    alt={`slide-${index}`}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-navigation">
              <button className="custom-prev">❮</button>
              <button className="custom-next">❯</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFeel;
