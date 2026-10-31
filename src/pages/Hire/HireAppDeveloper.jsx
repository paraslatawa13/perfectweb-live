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
import CrossPlatform from "../../assets/images/hire/WEBSITE_REDESIGN.webp";
import oneA from "../../assets/images/Services/one-a.png";
import SecurityCompliance from "../../assets/images/hire/Custom_Website_Design_Logo.webp";
import APIIntegration from "../../assets/images/hire/Responsive_Website.webp";
import twoA from "../../assets/images/Services/two-a.png";
import { Link } from "react-router-dom";

import HireAppBanner from "../../assets/images/Hire/HireAppBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";


const hiringData = [
  {
    heading: "Hire Skilled App Developers on Demand",
    content:
      "Hire experienced mobile app developers whenever you need them, whether it’s one dedicated expert or a complete development team. Get the right talent to build, scale, and optimize your app.",
  },
  {
    heading: "Dedicated App Developer Model",
    content:
      "Hire a full-time app developer who works exclusively on your project, ensuring focused development, faster delivery, seamless communication, and full alignment with your technical goals.",
  },
  {
    heading: "Team Model",
    content:
      "Get a full team of app developers, testers, and technical leads to manage end-to-end development, ensuring scalability, efficiency, and flawless execution for complex or large projects.",
  },
  {
    heading: "Hourly Hiring Model",
    content:
      "Pay only for the development hours you need. Ideal for short-term tasks, feature enhancements, bug fixing, or expert assistance without long-term commitments. Prices start from $20/Hour.",
  },
  {
    heading: "Part-Time Model",
    content:
      "Hire app developers on a part-time basis for ongoing support, maintenance, or smaller development tasks, offering flexibility, affordability, and reliable expertise whenever required.",
  },
  {
    heading: "Project-Based Model",
    content:
      "Perfect for fully scoped app development projects. You pay for the complete project, and our team ensures top-quality development delivered on time and aligned with your budget.",
  },
];




const servicesData = [
  {
    img: oneA,
    title: "Native App Development",
    desc: "Our developers build high-performance native apps for iOS and Android using platform-specific technologies, ensuring smooth functionality, fast performance, and a seamless user experience across devices.",
    link: "",
  },
    {
    img: CrossPlatform,
    title: "Cross-Platform App Development",
    desc: "We specialize in cross-platform frameworks, creating apps that run flawlessly on multiple devices with shared codebases, reduced costs, and consistent user experiences without compromising performance or design.",
    link: "",
  },
    {
    img: APIIntegration,
    title: "API Integration & Backend Development",
    desc: "Our team integrates third-party APIs and builds secure, scalable backends to ensure smooth data flow, real-time functionality, and reliable performance across all app modules and features.",
    link: "/custom-api-development-services",
  },
    {
    img: twoA,
    title: "UI/UX Mobile App Design",
    desc: "We design intuitive, visually appealing mobile interfaces focused on user behavior, creating seamless interactions that elevate engagement, simplify navigation, and significantly enhance overall user satisfaction.",
    link: "",
  },
    {
    img: UI_Design,
    title: "App Performance Optimization",
    desc: "Our experts ensure your app loads fast, minimizes crashes, improves responsiveness, and delivers smooth performance using advanced optimization techniques and continuous performance testing.",
    link: "",
  },

  {
    img: SecurityCompliance,
    title: "Security & Compliance Implementation",
    desc: "We implement robust security measures, encryption protocols, and compliance standards to protect user data, prevent vulnerabilities, and ensure your application meets industry-level safety requirements.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Can your app developers work with our existing backend or tech stack?",
    answer: "Yes, our developers easily integrate with your current backend, frameworks, and third-party APIs, ensuring smooth compatibility, faster development, and seamless collaboration with your in-house technical team."
  },
  {
    question: "2. Do you provide both Android and iOS app developers?",
    answer: "Absolutely. We offer dedicated Android, iOS, and cross-platform developers skilled in native and hybrid technologies to build high-performance applications tailored to your business goals."
  },
  {
    question: "3. How do you ensure code quality during app development?",
    answer: "We follow strict coding standards, perform regular code reviews, conduct automated and manual testing, and use best practices to ensure clean, secure, scalable, and maintainable app code."
  },
  {
    question: "4. Can I scale my development team anytime during the project?",
    answer: "Yes, you can scale your team up or down anytime. Easily add more developers, designers, or testers based on project timelines, new features, or workload changes."
  },
  {
    question: "5. Will I get regular updates during the development process?",
    answer: "Yes. We provide transparent communication, daily or weekly updates, milestone reviews, tracking dashboards, and consistent reporting to ensure you stay informed throughout the development cycle."
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

import Angular from "../../assets/images/tech-logos/Android/Angular.webp";
import Docker from "../../assets/images/tech-logos/Android/Docker.webp";
import Flutter from "../../assets/images/tech-logos/Android/Flutter.webp";
import IntelliJIdea from "../../assets/images/tech-logos/Android/IntelliJIdea.webp";
import Java from "../../assets/images/tech-logos/Android/Java.webp";
import JavaScript from "../../assets/images/tech-logos/Android/JavaScript.webp";
import MicrosoftSqlServer from "../../assets/images/tech-logos/Android/MicrosoftSqlServer.webp";
import MongoDb from "../../assets/images/tech-logos/Android/MongoDb.webp";
import MySql from "../../assets/images/tech-logos/Android/MySql.webp";
import NodeJs from "../../assets/images/tech-logos/Android/NodeJs.webp";
import PostGreSql from "../../assets/images/tech-logos/Android/PostGreSql.webp";
import Python from "../../assets/images/tech-logos/Android/Python.webp";
import React from "../../assets/images/tech-logos/Android/React.webp";
import Xamarin from "../../assets/images/tech-logos/Android/Xamarin.webp";


  const techLogos = [
  { name: "Angular", logo: Angular },
  { name: "Docker", logo: Docker },
  { name: "Flutter", logo: Flutter },
  { name: "IntelliJ IDEA", logo: IntelliJIdea },
  { name: "Java", logo: Java },
  { name: "JavaScript", logo: JavaScript },
  { name: "Microsoft SQL Server", logo: MicrosoftSqlServer },
  { name: "MongoDB", logo: MongoDb },
  { name: "Microsoft SQL Server", logo: MySql },
  { name: "Node.js", logo: NodeJs },
  { name: "PostgreSQL", logo: PostGreSql },
  { name: "Python", logo: Python },
  { name: "React", logo: React },
  { name: "Xamarin ", logo: Xamarin },
  
];


function HireAppDeveloper() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire Mobile App Developers ",
          description: "Hire expert mobile app developers at Perfect Web Services to experience true excellence. Automate workflows, integrate third-party tools, and build secure, scalable, full-stack mobile applications tailored to your business needs.",
          buttonText: "Start Your Project Now",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireAppBanner],
          alt: "Hire Mobile App Developers ",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Mobile App Developers for High-Performance Applications"
        subText="Our dedicated app developers don’t just build high-performing apps; we guide you in choosing the right technology that fits your business needs and maximizes revenue growth."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Mobile App Developers for High-Performance Applications"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire Mobile App Developer Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our Mobile App Developers Use" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free App Development Cost Estimation"
        description="How much will your website or app cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring Mobile App Developer at PWS"
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

export default HireAppDeveloper;
