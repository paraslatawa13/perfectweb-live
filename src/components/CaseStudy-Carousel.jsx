import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useCaseStudyApi } from "../api/case_studies";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "swiper/css";
import "swiper/css/navigation";

import kandor from "../assets/images/Home/kandor.webp";

const CaseStudyCarousel = () => {
  const { getCaseStudy } = useCaseStudyApi();
  const [caseStudies, setCaseStudies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Limit words (15)
  const limitWords = (text = "", wordLimit = 15) => {
    const words = text.replace(/<[^>]+>/g, "").split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await getCaseStudy();
        console.log("case study get", response);
        if (response?.data && Array.isArray(response.data)) {
          setCaseStudies(response.data);
        } else {
          console.warn("Unexpected API response:", response);
        }
      } catch (error) {
        console.error("Error fetching case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <div className="case-study-carousel">
      {loading ? (
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
        }}
        className="case-swiper"
      >
          {Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="case-studylist">
                <div className="case-inner">
                  {/* LEFT SIDE */}
                  <div className="case-left">
                    <div className="caseLogo">
                      <Skeleton circle width={50} height={50} />
                    </div>
                    <div className="case-content">
                      <h3 className="first-p">
                        <Skeleton width="80%" />
                      </h3>
                      <p className="second-p">
                        <Skeleton count={2} />
                      </p>
                      <div className="button-flex">
                        <Skeleton width={100} height={35} borderRadius={20} />
                      </div>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
                  <div className="case-img">
                    <Skeleton height={220} borderRadius={10} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : caseStudies.length === 0 ? (
        <p>No case studies available.</p>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="case-swiper"
        >
          {caseStudies.map((cs, i) => (
            <SwiperSlide key={cs.id}>
              <div className={`case-studylist ${activeIndex === i ? "center-slide" : "" }`} >
                <Link to={`/case-study/${cs.slug}`}>
                  <div className="case-inner">
                    {/* LEFT SIDE */}
                    <div className="case-left">
                      <div className="caseLogo">
                        <img src={cs.image  || kandor } 
                        alt="logo" 
                        onError={(e) => {
                        e.currentTarget.src = kandor;
                        }}
                        />
                      </div>
                      <div className="case-content">
                        <h3 className="first-p">{cs.title}</h3>
                        <p className="second-p">
                          {limitWords(cs.summary, 10)}
                        </p>
                        <div className="button-flex">
                          <button className="btn btn-primary bg-whitee">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="case-img">
                      <img
                        src={cs.featured_image}
                        alt={cs.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CaseStudyCarousel;
