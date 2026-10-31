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
import HireIOSBanner from "../../assets/images/Hire/HireIOSBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";

const hiringData = [
  {
    heading: "Hire iOS  App Developers on Demand",
    content:
      "Bring skilled mobile app developers on board whenever you need them, whether it’s a single specialist or an entire development team. Access the right expertise to build, scale, and refine your app.",
  },
  {
    heading: "Dedicated iOS App Developer Model",
    content:
      "Hire a dedicated full-time iOS app developer who focuses solely on your project, ensuring faster execution, smooth communication, and complete alignment with your technical vision and delivery goals.",
  },
  {
    heading: "Full Team Model",
    content:
      "Build a complete development team including app developers, QA testers, and technical leads who handle the entire development lifecycle, ensuring scalability, efficiency, and flawless execution for any project size.",
  },
  {
    heading: "Hourly Engagement Model",
    content:
      "Pay only for the hours required. Ideal for small tasks, quick fixes, feature upgrades, or expert input, without committing to long-term contracts. Pricing begins at $20/hour.",
  },
  {
    heading: "Part-Time Developer Model",
    content:
      "Hire iOS app developers part-time for continuous updates, maintenance, or smaller development activities, offering flexibility, cost savings, and reliable expertise whenever your project needs support.",
  },
  {
    heading: "Project-Based Engagement Model",
    content:
      "Best suited for well-defined app development projects. Pay for the full scope, and our team will deliver high-quality solutions on time, on budget, and aligned with your expectations.",
  },
];




const servicesData = [
  {
    img: oneA,
    title: "Custom iOS Development",
    desc: "We build custom iOS apps tailored to your vision, ensuring high performance, secure architecture, seamless functionality, and memorable user experiences across all modern Apple devices.",
    link: "/ios-app-development-services",
  },
    {
    img: twoA,
    title: "iOS App UI/UX Design and Consulting",
    desc: "Our experts craft intuitive, pixel-perfect interfaces and offer strategic design consulting to ensure your iOS app delivers exceptional usability, smooth interactions, and strong user satisfaction.",
    link: "",
  },
    {
    img: APIIntegration,
    title: "Apple TV and Watch Development",
    desc: "We develop feature-rich Apple TV and Watch apps, enabling users to enjoy seamless connectivity, responsive interfaces, and powerful functionalities across Apple’s extended device ecosystem.",
    link: "",
  },
    {
    img: CrossPlatform,
    title: "Existing iOS App Audit",
    desc: "Our team performs in-depth audits of existing iOS applications, identifying issues, performance gaps, security risks, and user experience shortcomings to enhance overall app quality.",
    link: "",
  },
    {
    img: UI_Design,
    title: "iOS App Migration",
    desc: "We safely migrate apps to iOS, ensuring clean code restructuring, data integrity, enhanced performance, and full compatibility with Apple guidelines, devices, and operating system versions.",
    link: "#",
  },

  {
    img: SecurityCompliance,
    title: "iOS App Maintenance",
    desc: "We provide continuous maintenance with timely updates, bug fixes, security enhancements, and performance monitoring, ensuring your iOS app operates reliably and stays future-ready always.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. How many hours are typically needed to build a small iOS app?",
    answer: "A small iOS app usually requires 120–250 hours, depending on features, design complexity, integrations, and testing needs. We provide precise estimates after reviewing your requirements."
  },
  {
    question: "2. Can you build one app that works across all major platforms?",
    answer: "Yes, we can develop cross-platform apps using frameworks like Flutter or React Native, ensuring your app runs smoothly on iOS, Android, and tablets with consistent performance."
  },
  {
    question: "3. Can improved UI/UX design help increase app downloads?",
    answer: "Absolutely. A polished UI/UX enhances usability, improves user satisfaction, reduces bounce rates, boosts retention, and directly increases downloads by delivering a modern, intuitive, and engaging app experience."
  },
  {
    question: "4. Do you support third-party integrations for iOS applications?",
    answer: "Yes, we integrate payment gateways, analytics, maps, CRMs, social logins, cloud storage, and other third-party APIs to enrich your iOS app’s functionality and user experience."
  },
  {
    question: "5. What is the average cost of developing an iOS app?",
    answer: "iOS app development typically ranges from $5,000 to $50,000, depending on features, complexity, integrations, UI/UX needs, and development hours. We share accurate costs after project evaluation."
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

/**TECH STACK */
import Android from "../../assets/images/tech-logos/IOS/Android.webp";
import AppStore from "../../assets/images/tech-logos/IOS/AppStore.webp";
import Dart from "../../assets/images/tech-logos/IOS/Dart.webp";
import Firebase from "../../assets/images/tech-logos/IOS/Firebase.webp";
import Flutter from "../../assets/images/tech-logos/IOS/Flutter.webp";
import Gradle from "../../assets/images/tech-logos/IOS/Gradle.webp";
import IosSwift from "../../assets/images/tech-logos/IOS/IosSwift.webp";
import Java from "../../assets/images/tech-logos/IOS/Java.webp";

  const techLogos = [
  { name: "Android", logo: Android },
  { name: "App Store", logo: AppStore },
  { name: "Dart", logo: Dart },
  { name: "Firebase", logo: Firebase },
  { name: "Flutter", logo: Flutter },
  { name: "Gradle", logo: Gradle },
  { name: "IosSwift", logo: IosSwift },
  { name: "Java", logo: Java },
  
];

function HireIOSAppDeveloper() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire iOS App Developers",
          description: "Turn your ideas into high-quality, secure, and scalable iOS apps. Hire skilled iOS developers at Perfect Web Services for exceptional, performance-driven iOS development.",
          buttonText: "Start Your Project Now",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireIOSBanner],
          alt: "Hire iOS App Developers",
        }}
      />

      {/* GROW YOUR BUSINESS*/}

       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Hire iOS Developers for Your App Success"
        subText="Access top-tier iOS talent to develop a powerful, trustworthy app that enhances your brand presence and delivers real results."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="iOS App Developers with Trusted, Proven Expertise"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire iOS App Developer Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}

      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our iOS App Developers Use" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}

    <FreeEstimationSection
        title="Get A Free iOS Development Cost Estimation"
        description="How much will your website or app cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to IOS App Developers at PWS"
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

export default HireIOSAppDeveloper;
