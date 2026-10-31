import "../App.css";
import "../Responsive-App.css";
import { Helmet } from "react-helmet-async";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../components/CommonHeroSection";
import GrowYourBusiness from "../components/GrowYourBusiness";
import aboutBanner from "../assets/images/about/aboutBanner.webp";
import quoteTop from "../assets/images/about/quote-top.svg";
import quoteBottom from "../assets/images/about/quote-bottom.svg";
import Founder from "../assets/images/about/Founder.webp";
import Methodlogy from "../components/about/Methodlogy";
import core1 from "../assets/images/about/core1.svg";
import core2 from "../assets/images/about/core2.svg";
import core3 from "../assets/images/about/core3.svg";
import core4 from "../assets/images/about/core4.svg";
import core5 from "../assets/images/about/core5.svg";
import core6 from "../assets/images/about/core6.svg";

import Gallery from "../components/about/Gallery";
import ImageWithText from "../components/ImageWithText";


const coreValues = [
  {
    icon: core1,
    title: "Trust",
    description:
      "We build lasting relationships by being transparent, reliable, and consistent. Our clients trust us to deliver quality solutions that truly drive business success.",
  },
  {
    icon: core2,
    title: "Growth Mindset",
    description:
      "We embrace challenges, encourage innovation, and continuously learn to adapt. Our focus is on helping both our team and clients achieve sustainable growth.",
  },
  {
    icon: core3,
    title: "Ownership",
    description:
      "We take full responsibility for every project, ensuring accountability at every stage. Our proactive approach guarantees commitment, dedication, and results that exceed client expectations.",
  },
  {
    icon: core4,
    title: "Gratitude",
    description:
      "We value every opportunity and relationship. Gratitude keeps us grounded, motivating us to serve clients better and celebrate the success we achieve together.",
  },
  {
    icon: core5,
    title: "Excellence",
    description:
      "We strive for the highest standards in everything we do, from strategy to execution, ensuring quality, innovation, and impactful results for every client.",
  },
  {
    icon: core6,
    title: "Honesty",
    description:
      "We believe in open communication and truthful practices. Honesty guides our decisions, fostering trust and strong partnerships with clients, partners, and our internal teams.",
  },
];


function About() {
  const { meta } = useMeta();
  return (
    <>
    <MetaHelmet meta={meta} />
      <section className="Common-hero-section about padd">
          <CommonHeroSection
               subtitle="About"
              title="Perfect Web Services- Driving Digital Growth with Innovation "
              description="Perfect Web Services is a full-service digital agency delivering innovative web design, development, and marketing solutions. We drive business growth through creativity, technology, and strategies tailored to your brand’s success."
              buttonText="Let's Get Started"
              buttonLink="/contact-us"
              image={aboutBanner}
              altText="Perfect Web Services Team"
              />   
      </section>
       {/* GROW YOUR BUSINESS*/}

     <GrowYourBusiness
      buttonText="Get a Free Quote"
      onClick={() => window.location.href = "/contact-us"}
    />


      <section className="methodlogySection padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="header-main">
                <h2 className="text-center">
                  Discover Our Story
                </h2>
                <hr />
              </div>
              <p className="subhead">The idea of <b>Perfect Web Services</b> was conceived in 2015 by <b>Mr. Paras Latawa,</b> a strategic and innovative founder. Officially launched in 2019, we began as a one-person initiative and have grown into a strong team of 25+ professionals. </p><br></br>
              <p className="subhead">Over the years, we’ve proudly served <b>1000+ clients worldwide,</b> delivering exceptional web design, development, and digital marketing solutions. Our goal has always been to blend creativity with technology, developing impactful strategies that help businesses thrive.</p><br></br>
              <p className="subhead">Today, Perfect Web Services stands as a trusted partner for brands looking to strengthen their digital presence and achieve measurable results. </p>
            </div>
          </div>
          <div className="row justify-content-center">
              <Methodlogy />
          </div>
        </div>
      </section>
    <section className="founderSection padd clip-section">
      <ImageWithText
        title={
          <>
            Words from the <span>Founder</span>
          </>
        }
        image={Founder}
        altText="Paras Latawa- Founder and CEO of Perfect Web Services"
        reverse={true}
        description={
          <div className="founder-text-wrapper">
          
            

            <div className="text-content">
              <div className="body-textt">
                <img src={quoteTop} alt="quote" className="quote-img top" />
                <p>
                  I founded Perfect Web Services with a passion to turn challenges into opportunities. Behind every design, every strategy, there’s a vision to help you achieve more. Our purpose goes beyond services; it’s about building relationships, creating impact, and walking beside you on your success journey. Our Client’s win is our ultimate reward.
                </p>
                <img src={quoteBottom} alt="quote" className="quote-img bottom" />
              </div>
              <div className="founderName">
                 <p>Paras Latawa <br /> <b>Founder & CEO</b></p>
              </div>
            </div>
          </div>
        }
      />
    </section>
      
    <section className="core-values padd">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="header-main mb-5">
              <h2 className="">Our Core Values</h2><hr></hr>
            </div>
          </div>
        </div>

        <div className="row">
          {coreValues.map((item, index) => (
            <div className="col-md-4 col-12" key={index}>
              <div className="core-colmn">
                <div className="coreIcon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="coreContent">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="gallerySection padd clip-section">
        <div className="container">
          <Gallery />
        </div>
    </section>
          
    </>
  );
}

export default About;
