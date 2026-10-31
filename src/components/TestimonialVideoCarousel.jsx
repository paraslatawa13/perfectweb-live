import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import JorgeVideo from "../assets/video/Jorge.mp4";
import JodieVideo from "../assets/video/Jodie.mp4";
import Sairana from "../assets/video/Sairana.mp4";
import JodieThumb from "../assets/video/JodieThumb.webp";
import JorgeThumb from "../assets/video/JorgeThumb.webp";
import SairanaThumb from "../assets/video/SairanaThumb.webp";

const testimonialsVideo = [
  {
    name: "Jorge Piedra",
    role: "Founder, Vibra",
    video: JorgeVideo,
    authorImg: JorgeThumb,
    thumbnail: JorgeThumb,
  },
  {
    name: "Jodie Thompson",
    role: "Chief of Staff, IGVHousing ",
    video: JodieVideo,
    authorImg: JodieThumb,
    thumbnail: JodieThumb,
  },
    {
    name: "Sariana Barbarotta",
    role: "Marketing Communications Specialist, ScImage",
    video: Sairana,
    authorImg: SairanaThumb,
    thumbnail: SairanaThumb,
  },

  
  
  

];


const VideoCard = ({ t }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={`testimonial-video-card ${isPlaying ? "active" : ""}`}>
      <div className="testimonial-video relative">
        <video
          ref={videoRef}
          width="100%"
          poster={t.thumbnail}
          onClick={togglePlay}
          onEnded={() => setIsPlaying(false)} 
        >
          <source src={t.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button className="custom-play-btn" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>

      <div className="testimonial-video-data">
        <div className="testi-video-author">
          <img src={t.authorImg} alt={t.name} className="author-img" />
        </div>

        <div className="testi-author-data">
          <h4>{t.name}</h4>
          <p>{t.role}</p>

          {t.website && (
            <div className="websiteLink">
              <p>
                <b>Website:</b>{" "}
                <a href={t.website} target="_blank">
                  {t.website}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ MAIN CAROUSEL COMPONENT
const TestimonialVideoCarousel = () => {
  return (
    <div className="testimonial-video-carousel">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="testimonial-video-swiper"
      >
        {testimonialsVideo.map((t, i) => (
          <SwiperSlide key={i}>
            <VideoCard t={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialVideoCarousel;
