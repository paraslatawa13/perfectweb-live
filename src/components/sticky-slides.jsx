import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import journeyPic from "../assets/images/Home/Journey-pic.webp";
import Blog1 from "../assets/Images/blog-image-1.webp";
import partnerBG from "../assets/images/Home/partner-bg.webp";
import freeEstimates from "../assets/images/Home/Free-Estimates.svg";

const slides = [
  {
    title: "$250 Research Guides – Free Today!",
    text: "Unlock expert research guides worth $250 designed to streamline your business processes and drive smarter decisions.",
    img: journeyPic,
    buttonText: "Get it Now",
    rightContent: {
      items: [{ icon: freeEstimates, text: "Free Business Research Guide" }],
    },
  },
  {
    title: "Validate Ideas, Grow with Experts",
    text: "Book a free session with professionals to refine and validate your business concept.",
    img: Blog1,
    buttonText: "Book Free Consultation",
    rightContent: {
      items: [
        { icon: freeEstimates, text: "Free Brainstorming Session" },
        { icon: freeEstimates, text: "Business Validation Support" },
      ],
    },
  },
  {
    title: "Get a Complete Business Growth Package – Free!",
    text: "Share your details and receive a tailored bundle of benefits, from competitive analysis to growth strategies, designed to accelerate your business success.",
    img: partnerBG,
    buttonText: "Grab it Now",
    rightContent: {
      items: [
        { icon: freeEstimates, text: "Competitive Business Study" },
        { icon: freeEstimates, text: "Statement of Work" },
        { icon: freeEstimates, text: "Free Proposal" },
        { icon: freeEstimates, text: "Business Wireframing Document" },
        { icon: freeEstimates, text: "Go-To-Market Plan" },
        { icon: freeEstimates, text: "Growth Strategy" },
      ],
    },
  },
];

const StickySlides = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const totalScreens = slides.length;

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect (desktop only)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, slides.length]);

  useEffect(() => {
    if (!isMobile) {
      const unsubscribe = progress.on("change", (latest) => {
        setActiveIndex(Math.min(slides.length - 1, Math.floor(latest)));
      });
      return () => unsubscribe();
    }
  }, [progress, isMobile]);

  // Manual navigation for both desktop & mobile
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <div
      ref={sectionRef}
      style={{
        height: isMobile ? "100vh" : `${totalScreens * 100}vh`,
        position: "relative",
      }}
    >
      <div
        className="stickyCarmain"
        style={{
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : 40,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="stickycarslidelist"
            animate={{
              x: i === activeIndex ? "0%" : i < activeIndex ? "-100%" : "100%",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="stickycar-flex-bg"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              
              }}
            >
              <div className="stickycar-content">
                <div className="stickycar-inner">
                  <div className="tt-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <div className="button-flex">
                      <button className="btn btn-primary bg-whitee">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                  <div className="stickycar-data">
                    <ul>
                      {slide.rightContent.items.map((item, idx) => (
                        <li key={idx}>
                          <div className="outer-shape">
                            <div className="outer-shap-icon">
                              <img src={item.icon} alt="" className="img-fluid" />
                            </div>
                            <div className="outer-shap-data">{item.text}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Arrows always visible (desktop + mobile) */}
        <div className="stickycar-arrows">
          <button onClick={goPrev} className="arrow-btn left"></button>
          <button onClick={goNext} className="arrow-btn right"></button>
        </div>
      </div>
    </div>
  );
};

export default StickySlides;
