
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
import CustomAPIDevelopment from "../../assets/images/tech-logos/CustomAPIDevelopment.webp";
import CloudAPIDevelopment from "../../assets/images/tech-logos/CloudAPIDevelopment.webp";
import ThirdPartyAPiImplementation from "../../assets/images/tech-logos/ThirdPartyAPiImplementation.webp";
import APiIntegrationServices from "../../assets/images/tech-logos/APiIntegrationServices.webp";
import RSoapAPIDevelopment from "../../assets/images/tech-logos/RSoapAPIDevelopment.webp";
import APIMandOptimization from "../../assets/images/tech-logos/APIMandOptimization.webp";
import { Link } from "react-router-dom";

import HireAPIBanner from "../../assets/images/Hire/HireAPIBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";


const hiringData = [
  {
    heading: "Dedicated Developer Model",
    content:
      "Hire a full-time developer who works exclusively on your project, ensuring complete focus, faster delivery, and seamless integration with your in-house team.",
  },
  {
    heading: "Team Model",
    content:
      "Get a full team of skilled developers, designers, and testers to handle end-to-end project needs, ensuring efficiency, scalability, and faster time-to-market.",
  },
  {
    heading: "Hourly Hiring Model",
    content:
      "Pay only for the hours worked. Ideal for short-term tasks, bug fixes, or when you need expert assistance without committing to full-time resources. Prices start from $15/Hour.",
  },
  {
    heading: "Part-Time Model",
    content:
      "Engage developers on a part-time basis for ongoing support, maintenance, or smaller projects, providing flexibility and cost-effectiveness without compromising quality.",
  },
  {
    heading: "Project-Based Model",
    content:
      "Best for clearly defined projects with fixed requirements. You pay for the project scope, and our team ensures on-time delivery with predictable costs.",
  },
  {
    heading: "Hybrid Model",
    content:
      "Combine multiple models — like dedicated + hourly — for maximum flexibility, allowing you to scale resources as per evolving project demands",
  },
];

const servicesData = [
  {
    img: CustomAPIDevelopment,
    title: "Custom API Development",
    desc: "We build tailor-made APIs to match your unique business needs—ensuring smooth data exchange, secure communication, and seamless connectivity between your applications and platforms.",
    link: "",
  },
    {
    img: APiIntegrationServices,
    title: "API Integration Services",
    desc: "Our developers integrate APIs across CRM, ERP, payment, and third-party tools to streamline operations, boost functionality, and enhance your system’s overall performance.",
    link: "/custom-api-development-services",
  },
    {
    img: RSoapAPIDevelopment,
    title: "RESTFUL & SOAP API Development",
    desc: "We specialize in building RESTful and SOAP APIs for secure, scalable, and flexible data interaction between multiple software applications across web and mobile environments.",
    link: "",
  },
    {
    img: ThirdPartyAPiImplementation,
    title: "Third-Party API Implementation",
    desc: "Enhance your app’s capabilities with powerful third-party API integrations, including Google, Salesforce, HubSpot, and more—ensuring compatibility, performance, and reliability.",
    link: "",
  },
    {
    img: APIMandOptimization,
    title: "API Maintenance & Optimization",
    desc: "We monitor, update, and optimize APIs for performance, speed, and security—ensuring your integrations remain reliable, efficient, and aligned with evolving business goals.",
    link: "",
  },

  {
    img: CloudAPIDevelopment,
    title: "Cloud API Development",
    desc: "Our experts create and integrate APIs for leading cloud platforms like AWS, Azure, and Google Cloud, enabling scalable, secure, and connected cloud-based solutions.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Why should I hire API developers from PWS?",
    answer: "PWS offers skilled API developers who design secure, scalable, and high-performance APIs that enhance application communication, integration, and digital efficiency seamlessly."
  },
  {
    question: "2. What types of APIs do your developers build?",
    answer: "Our developers specialize in RESTful, GraphQL, SOAP, and custom APIs for web, mobile, and cloud platforms to enable seamless system connectivity and automation."
  },
  {
    question: "3. Can you integrate APIs with existing systems?",
    answer: "Yes, we integrate APIs with CRMs, ERPs, CMSs, and third-party tools to ensure smooth data exchange and improved operational efficiency across all platforms."
  },
  {
    question: "4. How do you ensure API security and performance?",
    answer: "We implement encryption, authentication, rate limiting, and continuous monitoring to protect data and ensure API stability, reliability, and exceptional performance at scale."
  },
  {
    question: "5. Do you offer API maintenance and optimization services?",
    answer: "Absolutely. PWS provides post-deployment API monitoring, debugging, and optimization services to ensure consistent performance, compatibility, and uptime across integrated platforms."
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
  { img: HIconOne, text: "Share Your Requirements" },
  { img: HIconTwo, text: "Talent Shortlisting" },
  { img: HIconThree, text: "Interview & Selection" },
  { img: HIconFour, text: "Flexible Engagement Models" },
  { img: HIconFive, text: "Onboarding & Kickoff" },
  { img: HIconSix, text: "Continuous Support" }, 
];


/**TECH STACK */
import TechStack from "../../components/TechStack";

import Auth2 from "../../assets/images/tech-logos/Api/Auth2.webp";
import Django from "../../assets/images/tech-logos/Api/Django.webp";
import Express from "../../assets/images/tech-logos/Api/Express.webp";
import FastApi from "../../assets/images/tech-logos/Api/FastApi.webp";
import Flash from "../../assets/images/tech-logos/Api/Flash.webp";
import Graph from "../../assets/images/tech-logos/Api/Graph.webp";
import Grpc from "../../assets/images/tech-logos/Api/Grpc.webp";
import Java from "../../assets/images/tech-logos/Api/Java.webp";
import JavaScript from "../../assets/images/tech-logos/Api/JavaScript.webp";
import Json from "../../assets/images/tech-logos/Api/Json.webp";
import Laravel from "../../assets/images/tech-logos/Api/Laravel.webp";
import Netgo from "../../assets/images/tech-logos/Api/Netgo.webp";
import NodeJs from "../../assets/images/tech-logos/Api/NodeJs.webp";
import Php from "../../assets/images/tech-logos/Api/Php.webp";
import Postmen from "../../assets/images/tech-logos/Api/Postmen.webp";
import Python from "../../assets/images/tech-logos/Api/Python.webp";
import RestApi from "../../assets/images/tech-logos/Api/RestApi.webp";
import Ruby from "../../assets/images/tech-logos/Api/Ruby.webp";
import Soap from "../../assets/images/tech-logos/Api/Soap.webp";
import Spring from "../../assets/images/tech-logos/Api/Spring.webp";
import TypeScript from "../../assets/images/tech-logos/Api/TypeScript.webp";
import Xml from "../../assets/images/tech-logos/Api/Xml.webp";


  const techLogos = [
  { name: "Auth2", logo: Auth2 },
  { name: "Django", logo: Django },
  { name: "Express", logo: Express },
  { name: "FastApi", logo: FastApi },
  { name: "Flash", logo: Flash },
  { name: "Graph", logo: Graph },
  { name: "Grpc Bakery", logo: Grpc },
  { name: "Java", logo: Java },
  { name: "JavaScript", logo: JavaScript },
  { name: "Json", logo: Json },
  { name: "Laravel", logo: Laravel },  
  { name: "Netgo", logo: Netgo },
  { name: "NodeJs", logo: NodeJs },
  { name: "Php", logo: Php },
  { name: "Postmen", logo: Postmen },
  { name: "Python", logo: Python },
  { name: "RestApi", logo: RestApi },
  { name: "Ruby", logo: Ruby },
  { name: "Soap", logo: Soap },
  { name: "Spring", logo: Spring },
  { name: "TypeScript", logo: TypeScript },
   { name: "Xml", logo: Xml },
  
];




function HireAPIDevelopers() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} />
      <HireBanner
        content={{
          title: "Hire API Developers with Proven Expertise",
          description: "From creating custom APIs to enhancing existing integrations, our skilled team ensures smooth connectivity, superior performance, and powerful results that drive your business forward.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireAPIBanner],
          alt: "Hire API Developers",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Developers for Flexible and Scalable APIs"
        subText="Bring top talent to your project with our pre-vetted experts. We help you design, develop, and implement effective solutions that drive results and expand your brand visibility."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our API Developers’ Core Expertise"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire API Expert Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our API Expert Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free API Development Cost Estimation"
        description="Not sure how much your website or product will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Choosing the Right API Developers at PWS"
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

export default HireAPIDevelopers;
