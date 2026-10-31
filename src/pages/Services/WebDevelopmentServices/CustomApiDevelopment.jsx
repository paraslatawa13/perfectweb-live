import "../../../App.css";
import "../../../Responsive-App.css";
import { useMeta } from "../../../hooks/useMeta";
import MetaHelmet from "../../../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../../../components/CommonHeroSection";
import FreeConsultation from "../../../components/freeConsultation";
import FreeEstimationSection from "../../../components/FreeEstimationSection";
import ImageWithText from "../../../components/ImageWithText";
import GridComponent from "../../../components/Services/GridComponent";
import CommonExComponent from "../../../components/CommonExComponent";
import FourStepComponent from "../../../components/Services/FourStepComponent";
import CFAQComponent from "../../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../../components/TestimonialVideoCarousel";
import sideCircle from "../../../assets/images/side-circle.png";
import APIDevelopmentBanner from "../../../assets/images/Services/APIDevelopmentBanner.webp";
import WebAPIclient from "../../../assets/images/Services/WebAPIclient.webp";
import ACIcon1 from "../../../assets/images/Services/ACIcon1.webp";
import ACIcon2 from "../../../assets/images/Services/ACIcon2.webp";
import ACIcon3 from "../../../assets/images/Services/ACIcon3.webp";
import ACIcon4 from "../../../assets/images/Services/ACIcon4.webp";
import ACIcon5 from "../../../assets/images/Services/ACIcon5.webp";
import ACIcon6 from "../../../assets/images/Services/ACIcon6.webp";
import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import ieIcon from "../../../assets/images/Home/ie-icon.webp";
import cIcon from "../../../assets/images/Home/cs-icon.webp";
import pDIcon from "../../../assets/images/Home/pd-icon.webp";
import ServicesCover from "../../../components/ServicesCover";
import APicon1 from "../../../assets/images/Services/APicon1.webp";
import APicon2 from "../../../assets/images/Services/APicon2.webp";
import APicon3 from "../../../assets/images/Services/APicon3.webp";
import APicon4 from "../../../assets/images/Services/APicon4.webp";
import APicon5 from "../../../assets/images/Services/APicon5.webp";
import APicon6 from "../../../assets/images/Services/APicon6.webp";
import TAndSSupportAvailable from "../../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";
/**TECH STACK */
import TechStack from "../../../components/TechStack";
import Auth2 from "../../../assets/images/tech-logos/Api/Auth2.webp";
import Django from "../../../assets/images/tech-logos/Api/Django.webp";
import Express from "../../../assets/images/tech-logos/Api/Express.webp";
import FastApi from "../../../assets/images/tech-logos/Api/FastApi.webp";
import Flash from "../../../assets/images/tech-logos/Api/Flash.webp";
import Graph from "../../../assets/images/tech-logos/Api/Graph.webp";
import Grpc from "../../../assets/images/tech-logos/Api/Grpc.webp";
import Java from "../../../assets/images/tech-logos/Api/Java.webp";
import JavaScript from "../../../assets/images/tech-logos/Api/JavaScript.webp";
import Json from "../../../assets/images/tech-logos/Api/Json.webp";
import Laravel from "../../../assets/images/tech-logos/Api/Laravel.webp";
import Netgo from "../../../assets/images/tech-logos/Api/Netgo.webp";
import NodeJs from "../../../assets/images/tech-logos/Api/NodeJs.webp";
import Php from "../../../assets/images/tech-logos/Api/Php.webp";
import Postmen from "../../../assets/images/tech-logos/Api/Postmen.webp";
import Python from "../../../assets/images/tech-logos/Api/Python.webp";
import RestApi from "../../../assets/images/tech-logos/Api/RestApi.webp";
import Ruby from "../../../assets/images/tech-logos/Api/Ruby.webp";
import Soap from "../../../assets/images/tech-logos/Api/Soap.webp";
import Spring from "../../../assets/images/tech-logos/Api/Spring.webp";
import TypeScript from "../../../assets/images/tech-logos/Api/TypeScript.webp";
import Xml from "../../../assets/images/tech-logos/Api/Xml.webp";


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

const servicesData = [
  {
    img: APicon1,
    title: "API Planning & Support",
    desc: "We help you plan, build, and manage your API from start to finish, ensuring smooth development and ongoing support for your business needs.",
    link: "",
  },
  {
    img: APicon2,
    title: " API Design & Development",
    desc: " Our team creates secure, fast, and scalable APIs that connect your apps, systems, or websites, customized exactly to your business goals.",
    link: "",
  },
  {
    img: APicon3,
    title: "API Security Check",
    desc: "We protect your APIs from cyber threats with strong testing methods, keeping your data and systems safe from hackers and common issues.",
    link: "",
  },
  {
    img: APicon4,
    title: " API Connection Services",
    desc: "We connect your existing software and tools using APIs so data can move easily between apps, making your systems work smarter together.",
    link: "",
  },
  {
    img: APicon5,
    title: "API Process Automation",
    desc: "We use APIs to automate tasks like updates, testing, or deployments—saving time, reducing errors, and increasing your team’s productivity.",
    link: "",
  },
  {
    img: APicon6,
    title: "API Performance Monitoring",
    desc: "We track how your API is working in real time, helping fix problems quickly so your users always get a smooth and reliable experience.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. How long does it take to develop an API?",
    answer: "The timeline depends on complexity, functionality, and integrations, but most APIs take 2 to 6 weeks for development, testing, and deployment."
  },
  {
    question: "2. What technologies are used in API development?",
    answer: "Common technologies include REST, GraphQL, SOAP, Node.js, Python, JSON, XML, and tools like Postman and Swagger for testing, design, and documentation."
  },
  {
    question: "3. Can APIs be integrated with mobile apps?",
    answer: "Yes, APIs are commonly used to connect mobile apps with servers, enabling real-time data sync, payment gateways, notifications, and third-party service integrations."
  },
  {
    question: "4. What’s the difference between REST and SOAP APIs?",
    answer: " REST APIs use HTTP and JSON, offering flexibility and speed. SOAP is protocol-based, more secure, and suited for enterprise-level applications with strict compliance."
  },
  {
    question: "5.  Do I need documentation for my API?",
    answer: "Yes, proper documentation helps developers understand endpoints, parameters, and responses, making integration faster, easier, and more effective for third-party or internal teams."
  }
];


const stepsData = [
  {
    img: One,
    title: " Requirement Analysis & Planning",
    desc: "We begin by understanding your business needs, defining the API's purpose, endpoints, and data flow to ensure a clear, goal-driven development roadmap.",
  },
  {
    img: Two,
    title: " Design & Prototyping",
    desc: "Our experts craft wireframes and design specifications, focusing on user experience, architecture, and efficient data handling to create scalable, secure API solutions.",
  },
  {
    img: Three,
    title: "Development & Testing",
    desc: "Using modern technologies, we build your API with strict coding standards and run extensive tests to validate performance, reliability, and compliance with integration requirements.",
  },
  {
    img: Four,
    title: "Deployment & Ongoing Support",
    desc: "We deploy the API to your preferred environment and provide continuous monitoring, updates, and support to ensure smooth performance and adaptability over time.",
  },

];

function CustomApiDevelopment() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
     <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="API Development Services"
            title="Next-Gen API Development Services"
            description="Our experts leverage next-gen API technologies and deep domain expertise to modernize legacy systems, enabling seamless integration, enhanced scalability, and a future-ready digital strategy."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={APIDevelopmentBanner}
            altText="Next-Gen API Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- API Integration & Development Company"
                description="As a leading API development company, we build secure, high-performance APIs to streamline operations and boost connectivity. Our experts specialize in RESTful, GraphQL, SOAP APIs, gRPC, WebSocket, and JSON-RPC, offering custom development, third-party integration, and modernization for mobile, cloud, and enterprise systems. This ensures seamless scalability and efficiency across all digital platforms."
                buttonText="Get Free Consultation Now"
                buttonLink="/contact-us"
                image={WebAPIclient}
                altText="API Integration & Development Company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              <h2 className="text-center">API Integration & Development Services We Offer:</h2>
              <hr />
            </div>
            <p className="subhead">Here are our API solutions. Explore Now.</p>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
                <GridComponent data={servicesData} />
            </div>
          </div>
        </div>
      </section>


     {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free API Cost Estimation"
        description="Not sure how much the API will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Our Tech Stack Expertise for API Development" techLogos={techLogos} />
          </div>
        </section>

       
    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="Why Perfect Web Services for API Development Services?"
      cards={[
        {
          plus: "120+ ",
          bottomText: "Custom APIs Developed Across Industries",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "200+",
          bottomText: "Third-Party Integrations Implemented Seamlessly",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "98%",
          bottomText: "Client Retention Rate with On-Time Delivery",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: " Scalable, Secure & Well-Documented APIs",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "$250",
          bottomText: "Starting API Development Package",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery"
        },
        {
          plus: "90+",
          bottomText: "Legacy Systems Upgraded with Modern APIs",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Hire CMS Developer Now"
      buttonLink="/contact-us"
    /></section>


     


    {/*Free Consultation*/}

      <section className="webd-consulation padd">
        <FreeConsultation
          title="What kind of API do you need? Share the integration and functionality you’re aiming for, and we’ll suggest the best-fit solution for your requirements. "
          buttonText="Share Your Requirement "
          buttonLink="/contact-us"
        />
      </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Collaborate with a Trusted API Development Partner "
        sectionSubText="With years of expertise in custom API solutions, Perfect Web Services empowers businesses with future-ready, secure, and scalable APIs that streamline operations and drive growth."
        services={[
          {
            icon: ACIcon1,
            heading: " Proven Development Standards",
            text: "We follow agile methodology and proven coding practices to ensure high-performance, scalable, and secure APIs tailored to modern business needs."
          },
          {
            icon: ACIcon2,
            heading: "Clear & Developer-Friendly Documentation",
            text: "We deliver easy-to-follow API documentation, ensuring quick adoption, smooth integration, and effortless debugging for internal and third-party teams."
          },
          {
            icon: ACIcon3,
            heading: "Skilled & Certified Developers",
            text: "Our developers stay updated with evolving API technologies, delivering high-quality, error-free solutions that scale with your business."
          },

          {
            icon: ACIcon4,
            heading: "Customized Client Solutions",
            text: "We understand your unique goals and craft API solutions that align perfectly with your workflows, systems, and end-user requirements."
          },
          {
            icon: ACIcon5,
            heading: "Full-Cycle API Services",
            text: "From strategy to post-deployment support, we offer complete API development, covering frontend, backend, integration, security, and more."
          },
          {
            icon: ACIcon6,
            heading: "Elite Development Teams",
            text: "Work with a team of seasoned professionals equipped with deep experience in building, securing, and modernizing APIs across industries."
          },
          
        ]}
      />
    </section>


    
      {/*Testimonial Video carousel*/}
      <section className="serviceTestimonialvideo  padd clip-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="header-main  mb-5">
              <h2>Client Voices That Inspire Us</h2>
              <hr />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
              <TestimonialVideoCarousel />
            </div>
          </div>
        </div>
      </section>


      <section className="fourSteps  padd pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <FourStepComponent 
              titles = "Our Step-by-Step API Development Approach"
                faqDatas={stepsData}
                btntext ="Let's Discuss"
              />
            </div>
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

export default CustomApiDevelopment;