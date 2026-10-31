import React, { lazy, Suspense } from "react";
import "../App.css";
import "../Responsive-App.css";
import Typewriter from "../components/Typewriter";
import LazySection from "../components/LazySection";
import Loader from '../components/Loader';
import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";
import MotionDiv from "../components/MotionDiv";
import Desktop from "../assets/images/Home/hero-right.webp";
import { useContactFormApi } from '../api/contactForm';
import { GrCircleAlert } from "react-icons/gr";
import { LiaHandshake } from "react-icons/lia";
import { GoZap } from "react-icons/go";
import { CiSettings } from "react-icons/ci";



// Lazy loaded components (below-the-fold / heavy)
const GrowYourBusiness = lazy(() => import("../components/GrowYourBusiness"));
const ContactForm = lazy(() => import("../components/contactUs"));
const TrustedLogos = lazy(() => import("../components/TrustedLogos"));
const TestimonialCarousel = lazy(() => import("../components/TestimonialCarousel"));
const TestimonialVideoCarousel = lazy(() => import("../components/TestimonialVideoCarousel"));
const StackServicesComponent = lazy(() => import("../components/StackServicesComponent"));
const GoalsSection = lazy(() => import("../components/GoalsSection"));
const IndustryExplorer = lazy(() => import("../components/IndustryExplorer"));
const ConsultationCta = lazy(() => import("../components/ConsultationCta"));


// Keep small/critical assets/components imported normally
/**LOGOS */
import Android from "../assets/images/tech-logos/Andriod.webp";
import Angular from "../assets/images/tech-logos/Angular.webp";
import Codelgniter from "../assets/images/tech-logos/Codelgniter.webp";
import CSS3 from "../assets/images/tech-logos/CSS3.webp";
import IOS from "../assets/images/tech-logos/IOS.webp";
import Java from "../assets/images/tech-logos/Java.webp";
import Joomla from "../assets/images/tech-logos/Joomla.webp";
import Jquery from "../assets/images/tech-logos/Jquery.webp";
import JS from "../assets/images/tech-logos/JS.webp";
import Laravel from "../assets/images/tech-logos/laravel.webp";
import Magento from "../assets/images/tech-logos/Magento.webp";
import MongoDB from "../assets/images/tech-logos/MongoDB.webp";
import NodeJs from "../assets/images/tech-logos/NodeJs.webp";
import PHP from "../assets/images/tech-logos/PHP.webp";
import Python from "../assets/images/tech-logos/Phython.webp";
import ReactLogo from "../assets/images/tech-logos/React.webp";
import Shopify from "../assets/images/tech-logos/Shopify.webp";
import SQL_Server from "../assets/images/tech-logos/SQL_Server.webp";
import MySQL from "../assets/images/tech-logos/SQL.webp";
import Squarespace from "../assets/images/tech-logos/Squearespace.webp";
import Weebly from "../assets/images/tech-logos/Weebly.webp";
import Wix from "../assets/images/tech-logos/Wix.webp";
import Wordpress from "../assets/images/tech-logos/Wordpress.webp";


const techLogos = [
  { name: "Angular", logo: Angular },
  { name: "PHP", logo: PHP },
  { name: "MongoDB", logo: MongoDB },
  { name: "MySQL", logo: MySQL },
  { name: "Codelgniter", logo: Codelgniter },
  { name: "Wix", logo: Wix },
  { name: "CSS3", logo: CSS3 },
  { name: "JavaScript", logo: JS },
  { name: "Wordpress", logo: Wordpress },
  { name: "Weebly", logo: Weebly },
  { name: "JQuery", logo: Jquery },
  { name: "Node.js", logo: NodeJs },
  { name: "Laravel", logo: Laravel },
  { name: "Python", logo: Python },
  { name: "Java", logo: Java },
  { name: "IOS", logo: IOS },
  { name: "Android", logo: Android },
  { name: "Squarespace", logo: Squarespace },
  { name: "Shopify", logo: Shopify },
  { name: "Magento", logo: Magento },
  { name: "SQL Server", logo: SQL_Server },
  { name: "React", logo: ReactLogo },
  { name: "Joomla", logo: Joomla },
];


function Home() {
  const { meta } = useMeta();
  const { postContactForm } = useContactFormApi();
  return (
    <>
      <MetaHelmet meta={meta} />

      {/* HERO SECTION (keep eager) */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 text-center text-md-start">
              <MotionDiv type="fadeInUp" className="hero-content">
                <h1 className="text-white text-capitalize hero-text">
                  Build software. <span className="color-orange">Automate operations.</span> Add intelligence.
                </h1>
                <div className="hero-para">
                  <p>A ten-year engineering partner for web, mobile, automation and AI and an AI-
                    accelerated way of building, so your product ships faster and costs less to get there.</p>
                </div>
              </MotionDiv>

              <MotionDiv type="fadeInUp" className="button-flex">
                <div className="experience-card">
                  <div className="experience-years">
                    <span className="years-number">10</span>
                    <span className="years-label">Yrs</span>
                  </div>

                  <div className="experience-divider" />

                  <ul className="experience-description">
                    <li>
                      Shipping software, automations and AI systems for product
                      companies, startups and operating businesses.
                    </li>
                    <li>
                      No jargon walk-through, let us solve the problem, we show you the
                      fix.
                    </li>
                  </ul>
                </div>
              </MotionDiv>
            </div>

            <div className="col-md-5 text-center">
              <MotionDiv type="fadeInUp" className="video-image">
                <div className="hero-image-video">
                  <img
                    src={Desktop}
                    alt="Website Development"
                    fetchPriority="high"
                    decoding="async"
                    className="img-fluid"
                  />
                </div>

                <div className="animated-content">
                  <div className="top bounce">
                    <Link to="/web-development-services" className="rescue-notification">
                      <span className="notification-icon">
                        <LiaHandshake />
                      </span>

                      <span className="notification-divider" />

                      <span className="notification-text">
                        Evaluate
                        <br />
                        a partner
                      </span>
                    </Link>
                  </div>

                  <div className="right bounce">
                    <Link to="/web-development-services" className="rescue-notification">
                      <span className="notification-icon">
                        <CiSettings />
                      </span>

                      <span className="notification-divider" />

                      <span className="notification-text">
                        Run things
                        <br />
                        better
                      </span>
                    </Link>
                  </div>

                  <div className="toper bounce">
                    <Link to="/web-development-services" className="rescue-notification">
                      <span className="notification-icon">
                        <GoZap />
                      </span>

                      <span className="notification-divider" />

                      <span className="notification-text">
                        Start
                        <br />
                        something new
                      </span>
                    </Link>
                  </div>

                  <div className="left bounce">
                    <Link to="/web-development-services" className="rescue-notification">
                      <span className="notification-icon">
                        <GrCircleAlert />
                      </span>

                      <span className="notification-divider" />

                      <span className="notification-text">
                        Rescue a
                        <br />
                        stuck AI project
                      </span>
                    </Link>
                  </div>

                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loader />}>
        <LazySection>
          <GrowYourBusiness
            buttonText="Get a Free Quote"
            onClick={() => window.location.href = "/contact-us"}
          />
        </LazySection>

        

        <LazySection>
          <section className="full-stack-services padd">
            <StackServicesComponent />
          </section>
        </LazySection>

        <LazySection>
          <section className="Gloal-stack-services padd">
            <GoalsSection />
          </section>
        </LazySection>

        <IndustryExplorer />


        <ConsultationCta />
        <LazySection>
          <section className="trusted-partners padd">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="header-main  mb-5">
                  <MotionDiv type="fadeInUp">
                    <h2>Loved & Trusted by 500+ Leading Brands</h2>
                    <hr />
                  </MotionDiv>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-12">
                  <TrustedLogos />
                </div>
              </div>
            </div>
          </section>
        </LazySection>


        <LazySection>
          <section className="Testimonial-section padd clip-section">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center">
                <div className="header-main  mb-5">
                  <MotionDiv type="fadeInUp">
                    <h2>Words from  Our Valued Clients</h2>
                    <hr />
                  </MotionDiv>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-12">
                  <TestimonialCarousel />
                </div>
              </div>
            </div>
          </section>
        </LazySection>
        <LazySection>
          <section className="Testimonialvideosection padd">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="header-main  mb-5">
                  <MotionDiv type="fadeInUp">
                    <h2>Client Voices That Inspire Us</h2>
                    <hr />
                  </MotionDiv>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-12">
                  <TestimonialVideoCarousel />
                </div>
              </div>

              <div className="row align-items-center justify-content-center mt-5 align-items-center">
                <p className="text-center"><b>Curious how we turn client goals into success stories?</b></p>
                <div className="button-flex d-flex justify-content-center">
                  <Link to="/case-studies" className="btn btn-primary">Yes, Show Me Some Case Studies</Link>
                </div>
              </div>
            </div>
          </section>
        </LazySection>
        <LazySection>
          <section className="contact-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        </LazySection>

      </Suspense>
    </>
  );
}

export default Home;
