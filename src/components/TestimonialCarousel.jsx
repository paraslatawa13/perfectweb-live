import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import tQuote from "../assets/images/Home/t-quote.svg";
import bQuote from "../assets/images/Home/b-quote.svg";
import shapeBlue from "../assets/images/Home/shape-blue.webp";

const testimonials = [
  {
    name: "Tom Sullivan",
    role: "Principal, CRISISREADYLAB",
    text: "Perfect Web Services did an excellent job designing my website! Paras and his team are outstanding. They were super responsive, completed everything exactly as requested, and delivered right on time. Highly recommended!",
  },
  {
    name: "Amanda Steinberg",
    role: "Founder, CanCat",
    text: "I've been working with Perfect Web Services for years. Paras and his team are outstanding. They are everything you want in a firm: extremely personable, highly responsive, receptive to feedback and the price is right.",
  },
  {
    name: "Ellina Wyss",
    role: "",
    text: "As a client of Perfect Web Services I have been closely working with Paras and a team of talented developers to create a website for my startup. I was always treated professionally and any request has been taken with care to detail. Definitely recommend and would work again!",
  },
  {
    name: "Vincent Freeman",
    role: "Commercial Director, Kandor",
    text: "We have worked with Paras and his team for the last 2 years, developing and designing the front and back end of our platform. Paras is very committed and knowledgable and he is always planning ahead to avoid any future risks/issues. I would highly recommend Paras and his team.",
  },
  {
    name: "Atman breeze",
    role: "",
    text: "I am very satisfied with the work done by Perfect Web Services. My request was done exactly as I wanted it and on time. They are excellent professionals who keep a fluid communication with the client. I highly recommend them.",
  },
  {
    name: "Jodie Thompson",
    role: "Chief of Staff, IGV Housing",
    text: "I can highly recommend the team at Perfect Web Services. Paras has never let us down, producing high quality work with attention and care and always delivering on time.",
  },
    {
    name: "Emily Rogers",
    role: "",
    text: "The end deliverable impressed the client. Thanks to Paras and his team's efforts to improve sales by 65%. The team's workflow was seamless, holding regular meetings to provide updates. Overall, they were goal-oriented, always available, and efficient.",
  },
  {
    name: "Birsen Tosun",
    role: "",
    text: "The company is great to work with for all sort of web development needs. Me and my friend together hired them to create our business website. They took very less time and provide best website in a quite effective budget. It's a must try company I recommend them to all.",
  },

  {
    name: "Jess Barmentloo",
    role: "",
    text: "We at Hunter Corp Limited would definitely recommend PS Soft Group. Not only do they have great customer service but also they take the time to understand your business and project.  Thank you so much team!! 5 Stars for sure!!",
  },
  {
    name: "Hideaway camp resort",
    role: "",
    text: "Perfect web services is awesome! They create a great website for us with minimal time.",
  },

   {
    name: "john smith",
    role: "",
    text: "A++++ Excellent Work Experience With Perfect Web Services Very good website design and development company and fastest services. Thank you Paras",
  },
    {
    name: "Yasmin Mattox",
    role: "Director, URochester River Campus Libraries",
    text: "Great talent which works with you to better understand your own needs to execute on deliverables well and on budget.",
  },

];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-carousel">
      <Swiper
        modules={[Navigation, Autoplay, FreeMode]}
        navigation
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={3.3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        freeMode={{ enabled: true, momentum: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 2.8, spaceBetween: 30 },
          1470: { slidesPerView: 3.3, spaceBetween: 30 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              className="testimonial-card"
              style={{
                backgroundImage: `url(${shapeBlue})`,
              }}
            >
              <div className="quote-icon t">
                <img src={tQuote} alt="Quote icon" className="img-fluid" />
              </div>
              <div className="topname-postion">
                <h4 className="testimonial-name">{t.name}</h4>
                <p className="testimonial-role">{t.role}</p>
              </div>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="quote-icon b">
                <img src={bQuote} alt="Quote icon" className="img-fluid" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
