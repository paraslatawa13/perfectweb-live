import "../../App.css";
import "../../Responsive-App.css";
import { useMeta } from "../../hooks/useMeta";
import MetaHelmet from "../../reusablecomponents/MetaHelmet";
import GrowYourBusiness from "../../components/GrowYourBusiness";
import HireBanner from "../../components/Hire/HireBanner";
import HeadingWithText from "../../components/HeadingWithText";
import FreeEstimationSection from "../../components/FreeEstimationSection";
import HiringModel from "../../components/Hire/HiringModel";
import CFAQComponent from "../../components/CFAQComponent";
import StepByIcon from "../../components/Hire/StepByIcon";
import ServicesSection from "../../components/CommonServicesSection";
import GridComponent from "../../components/Services/GridComponent";
import calcfreeImage from "../../assets/images/calcfreeImage.webp";
import UI_Design from "../../assets/images/hire/UI_Design.webp";
import WEBSITE_REDESIGN from "../../assets/images/hire/WEBSITE_REDESIGN.webp";
import E_commerce_SEO from "../../assets/images/hire/E_commerce_SEO.webp";
import Custom_Website_Design_Logo from "../../assets/images/hire/Custom_Website_Design_Logo.webp";
import Responsive_Website from "../../assets/images/hire/Responsive_Website.webp";
import Landing_Page_Creation from "../../assets/images/hire/Landing_Page_Creation.webp";

import { Link } from "react-router-dom";
import HireUIUXBanner from "../../assets/images/Hire/HireUIUXBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";


const hiringData = [
  {
    heading: "Hire Skilled UI/UX Designers on Demand",
    content:
      "Hire talented UI/UX designers whenever you need them, whether it’s a single designer or a complete creative team. We provide the right expertise to support your design goals.",
  },
  {
    heading: "Dedicated UI/UX Designer Model",
    content:
      "Hire a full-time web designer who works exclusively on your project, delivering focused creativity, faster turnaround, and smooth collaboration with your in-house team.",
  },
  {
    heading: "Team Model",
    content:
      "Get a complete team of  UI/UX experts and quality analysts to handle all your design needs, ensuring efficiency, scalability, and polished results.",
  },
  {
    heading: "Hourly Hiring Model",
    content:
      "Pay only for the hours you need. Perfect for small design tasks, quick updates, or expert input without committing to a long-term contract. Prices start from $15/Hour.",
  },
  {
    heading: "Part-Time Model",
    content:
      "Engage a UI/UX designer on a part-time basis for continuous design updates, maintenance, or smaller creative tasks, offering flexibility and cost savings without sacrificing quality.",
  },
  {
    heading: "Project-Based Model",
    content:
      "Ideal for fully defined design projects. You pay for the complete project scope, and our team ensures high-quality designs delivered on time and within your budget.",
  },
];




const servicesData = [
  {
    img: WEBSITE_REDESIGN,
    title: "Mobile App UI/UX Design",
    desc: "We craft intuitive, high-performing mobile interfaces focused on usability, seamless navigation, and visual appeal, ensuring effortless user journeys and increased engagement across iOS and Android devices.",
    link: "/ui-ux-design-services",
  },
    {
    img: UI_Design,
    title: "Website & Landing Page Design",
    desc: "Our designers create clean, conversion-focused websites and landing pages that enhance user experience, strengthen brand identity, and drive measurable actions through smart layouts and engaging visuals.",
    link: "",
  },
    {
    img: Responsive_Website,
    title: "Wireframing & Prototyping",
    desc: "From low-fidelity wireframes to interactive prototypes, we visually map user flows and structure every screen to validate concepts early and eliminate usability issues before development begins.",
    link: "",
  },
    {
    img: Landing_Page_Creation,
    title: "Dashboard & Web App Design",
    desc: "We design powerful dashboards and web apps with clear data visualization, intuitive navigation, and user-first functionality that boosts productivity, clarity, and decision-making efficiency.",
    link: "",
  },
    {
    img: E_commerce_SEO,
    title: "E-Commerce UI/UX Design",
    desc: "We build high-converting e-commerce experiences focused on easy navigation, persuasive layouts, product visibility, and simplified checkout flows that help increase sales and improve customer satisfaction.",
    link: "",
  },

  {
    img: Custom_Website_Design_Logo,
    title: "Interaction & Micro-Animation Design",
    desc: "Our designers add meaningful interactions, micro-animations, and smooth transitions that enhance feedback, guide users naturally, and make digital experiences feel more dynamic, polished, and engaging.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Will the UI/UX design be fully optimized for mobile and tablet devices?",
    answer: "Yes, we create responsive UI/UX designs tailored for every device. Your website or app will deliver smooth navigation, perfect layouts, and consistent experiences across mobile, tablet, and desktop screens."
  },
  {
    question: "2. Can you review our existing UI/UX design and provide expert recommendations?",
    answer: "Absolutely. We conduct a detailed UI/UX audit to identify gaps, usability issues, visual inconsistencies, and conversion barriers, followed by actionable improvement suggestions that enhance user experience and overall performance."
  },
  {
    question: "3. Could poor user experience be affecting our website traffic and engagement?",
    answer: "Yes, a weak user experience can reduce traffic, increase bounce rate, and hurt conversions. We analyze your interface, interactions, and structure to improve usability, engagement, and search visibility."
  },
  {
    question: "4. Can your UI/UX designers collaborate with our development team on an hourly basis?",
    answer: "Yes, our UI/UX designers work seamlessly with your developers. You can hire them hourly for continuous collaboration, faster design iterations, smoother handoff, and efficient development-to-design alignment."
  },
  {
    question: "5. How can I be confident the design aligns perfectly with my business goals?",
    answer: "We begin with discovery sessions to understand your brand, audience, and objectives. Every design decision is strategically crafted to reflect your goals, strengthen identity, and improve user satisfaction."
  }, 
];


/**MODELS DESIGN*/
import HIconOne from "../../assets/images/Hire/HIconOne.svg";
import HIconTwo from "../../assets/images/Hire/HIconTwo.svg";
import HIconThree from "../../assets/images/Hire/HIconThree.svg";
import HIconFour from "../../assets/images/Hire/HIconFour.svg";
import HIconFive from "../../assets/images/Hire/HIconFive.svg";
import HIconSix from "../../assets/images/Hire/HIconSix.svg";


const stepItems = [
  { img: HIconOne, text: "Requirement Sharing" },
  { img: HIconTwo, text: "Resource Shortlisting" },
  { img: HIconThree, text: "Interview & Selection" },
  { img: HIconFour, text: "Engagement Model Finalization" },
  { img: HIconFive, text: "Onboarding & Kickoff" },
  { img: HIconSix, text: "Ongoing Support" }, 
];


/**TECH STACK */
import TechStack from "../../components/TechStack";
import Figma from "../../assets/images/tech-logos/Figma.webp";
import Xd from "../../assets/images/tech-logos/Xd.webp";
import SketchLogo from "../../assets/images/tech-logos/SketchLogo.webp";
import Canva from "../../assets/images/tech-logos/Canva.webp";
import Photoshop from "../../assets/images/tech-logos/Photoshop.webp";
import FramerMotion from "../../assets/images/tech-logos/FramerMotion.webp";
import Lottie from "../../assets/images/tech-logos/Lottie.webp";
import InVision from "../../assets/images/tech-logos/Invision.webp";



  const techLogos = [
  { name: "Figma", logo: Figma },
  { name: "Adobe XD", logo: Xd },
  { name: "Sketch", logo: SketchLogo },
  { name: "Canva", logo: Canva },
  { name: "Photoshop", logo: Photoshop },
  { name: "Framer Motion", logo: FramerMotion },
  { name: "Lottie", logo: Lottie },
  { name: "InVision", logo: InVision },

  
];


function HireUIUXDesigner() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} />  
      <HireBanner
        content={{
          title: "Hire UI/UX Designer",
          description: "Get unique, high-impact UI/UX designs for your website and apps, crafted to be visually impressive and optimized to convert visitors into customers.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireUIUXBanner],
          alt: "Hire UI/UX designer",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Hire UI/UX Designers for Stunning Interfaces"
        subText="Our vetted UI/UX designers transform ideas into design masterpieces. With multi-industry experience and a track record of excellence, we consistently deliver outstanding interfaces that drive results."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="UI/UX Designers with Diverse Expertise"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire UI/UX Designer Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our Web Designer Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free UI/UX Design Cost Estimation"
        description="Not sure how much your website or app will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring Web Designers at PWS"
        steps={stepItems}
      />
    </section>

    <section className="hiringModelSection padd clip-section bg-color-gray">
        <HiringModel
          title="Flexible Hiring Models Designed for Your Business Needs"
          models={hiringData}
        />
        <div className="btnbock text-center mt-5">
            <div className="button-flex">
               <Link to="/contact-us" className="btn btn-primary">Share Your Requirement Now</Link>
            </div>
         </div>         
    </section>

    {/*FAQ*/}
    <section className="faq-section padd">
      
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="header-main  mb-5">
            <h2>Frequently Asked Questions</h2>
            <hr />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <CFAQComponent 
            faqData={webDevFAQ} image={FAQImg} 
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default HireUIUXDesigner;
