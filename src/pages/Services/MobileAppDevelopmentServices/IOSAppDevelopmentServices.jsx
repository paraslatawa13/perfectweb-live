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
import TechStack from "../../../components/TechStack";
import FourStepComponent from "../../../components/Services/FourStepComponent";
import CFAQComponent from "../../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../../components/TestimonialVideoCarousel";
import iosBanner from "../../../assets/images/Services/Banner.webp";
import WebDclient from "../../../assets/images/Services/iosclient.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import sideCircle from "../../../assets/images/side-circle.png";


import CustomiOSApp from "../../../assets/images/Services/Custom-iOS-App -Development.png";
import AppStoreDeployment from "../../../assets/images/Services/App -Store Deployment.png";
import iOSApp from "../../../assets/images/Services/iOS-App.png";
import iOSAppTesting from "../../../assets/images/Services/iOS-App-Testing.png";
import UIUXDesign from "../../../assets/images/Services/UIUX-Design.png";
import MaintenanceUpgrades from "../../../assets/images/Services/Maintenance-Upgrades.png";

import FAQImg from "../../../assets/images/FAQImg.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
 

/**TECH STACK */
import Android from "../../../assets/images/tech-logos/IOS/Android.webp";
import AppStore from "../../../assets/images/tech-logos/IOS/AppStore.webp";
import Dart from "../../../assets/images/tech-logos/IOS/Dart.webp";
import Firebase from "../../../assets/images/tech-logos/IOS/Firebase.webp";
import Flutter from "../../../assets/images/tech-logos/IOS/Flutter.webp";
import Gradle from "../../../assets/images/tech-logos/IOS/Gradle.webp";
import IosSwift from "../../../assets/images/tech-logos/IOS/IosSwift.webp";
import Java from "../../../assets/images/tech-logos/IOS/Java.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";


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

const servicesData = [
  {
    img: CustomiOSApp,
    title: "Custom iOS App Development",
    desc: "We design and develop tailored iOS applications built around your unique business needs, ensuring user-friendly functionality, scalability, and strong performance across Apple devices.",
    link: "",
  },
  {
    img: AppStoreDeployment,
    title: "UI/UX Design for iOS",
    desc: "Our design experts create intuitive, pixel-perfect iOS interfaces that engage users, boost conversions, and deliver seamless navigation optimized for Apple’s design standards and guidelines.",
    link: "",
  },
  {
    img: iOSApp,
    title: "iOS App Integration Services",
    desc: "We integrate third-party APIs, payment gateways, CRMs, and cloud systems into your iOS app to enhance functionality, security, and a streamlined user experience.",
    link: "",
  },
  {
    img: iOSAppTesting,
    title: "iOS App Testing & QA",
    desc: "Comprehensive testing ensures your app performs flawlessly across devices. We handle bug fixes, usability checks, and performance optimization for smooth iOS app delivery.",
    link: "",
  },
  {
    img: UIUXDesign,
    title: "App Store Deployment & Support",
    desc: "We manage the entire App Store submission process, including compliance checks and ongoing support, to maximize visibility, downloads, and user retention for your iOS apps.",
    link: "",
  },
  {
    img: MaintenanceUpgrades,
    title: "iOS App Maintenance & Upgrades",
    desc: "From feature enhancements to OS updates, our team provides reliable maintenance, ensuring your iOS apps remain secure, compatible, and growth-focused post-launch.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. Why should my business invest in iOS app development?",
    answer: "iOS apps offer higher security, premium users, and strong ROI potential. Investing ensures better engagement, brand credibility, and long-term revenue growth."
  },
  {
    question: "2. How long does it take to build an iOS app?",
    answer: "The timeline depends on features, complexity, and integrations. On average, iOS app development takes 3–6 months, including design, coding, and testing phases."
  },
  {
    question: "3. Do you provide support after the iOS app launch?",
    answer: "Yes, we offer continuous support, regular updates, bug fixes, and feature enhancements post-launch to ensure your app stays optimized and successful."
  },
  {
    question: "4. Can you integrate third-party APIs into my iOS app?",
    answer: "Absolutely. We integrate secure, scalable APIs for payments, maps, analytics, and more, enhancing functionality and delivering seamless user experiences on iOS."
  },
    {
    question: "5. Will my iOS app be compatible with all Apple devices?",
    answer: "Yes, our iOS apps are optimized for iPhones, iPads, and the latest iOS versions, ensuring consistent performance across multiple Apple devices."
  },
];

const stepsData = [
  {
    img: One,
    title: " Idea & Requirement Analysis",
    desc: "We begin by understanding your business objectives, target users, and app goals, ensuring every requirement is aligned with iOS app success.",
  },
  {
    img: Two,
    title: "Wireframing & Prototyping",
    desc: "Our team creates interactive wireframes and prototypes to visualize user journeys, ensuring smooth navigation and seamless functionality before moving into full design.",
  },
  {
    img: Three,
    title: "UI/UX Design",
    desc: "We craft visually stunning, user-centric interfaces designed to maximize engagement, improve usability, and deliver an intuitive iOS app experience across all Apple devices.",
  },
  {
    img: Four,
    title: "iOS App Development",
    desc: "Using Swift, Objective-C, and advanced iOS frameworks, we develop robust, scalable, and secure mobile apps tailored to your specific business and customer needs.",
  },
  {
    img: Five,
    title: "Testing & Quality Assurance",
    desc: "Comprehensive testing across multiple iOS devices ensures your app runs flawlessly, is bug-free, highly secure, and optimized for performance before App Store submission.",
  },
  {
    img: Six,
    title: "Deployment & Ongoing Support",
    desc: "We launch your app on the App Store, provide regular updates, continuous improvements, and 24/7 support to ensure sustainable long-term app success.",
  },
];


function IOSAppDevelopmentServices() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="IOS App Development"
            title="iOS App Development Services"
            description="From intuitive UI/UX to full-cycle development, we deliver iOS solutions across industries, helping businesses grow and succeed on the iOS platform"
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={iosBanner}
            altText="IOS App Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services – Your Trusted iOS Development Company"
                description="With over 1.8 billion active Apple devices, iOS apps lead in engagement and revenue. Perfect Web Services creates innovative iOS apps that boost user retention, accelerate conversions, and drive measurable business success."
                buttonText="Hire iOS App Developer Now"
                buttonLink="/contact-us"
                image={WebDclient}
                altText="IOS Development Company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              <h2 className="text-center">Complete iOS App Solutions<br></br> Designed to Drive Growth</h2>
              <hr />
            </div>
            <p className="subhead">We create high-performance, secure, and feature-rich iOS apps tailored for Apple devices, ensuring smooth user experiences and compliance with App Store guidelines to maximize engagement.</p>
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
        title="Get A Free App Development Cost Estimation"
        description="How much will your app cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />


    {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Tech Stack Our iOS App Developers Use" techLogos={techLogos} />
          </div>
      </section>

    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="6 Strong Reasons to Choose Our iOS Development Services"
      cards={[
        {
          plus: "100+ Apps Delivered",
          bottomText: "Proven track record of successful projects",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "95% On-Time Delivery",
          bottomText: "Projects completed without delays.",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "24/7 Dedicated Support",
          bottomText: "Always available when you need us.",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "100% Scalable Apps",
          bottomText: "Future-ready solutions for growth.",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "50+ Industries Served",
          bottomText: "Wide domain knowledge & solutions.",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery"
        },
        {
          plus: "99.9% App Uptime",
          bottomText: "Reliable apps with near-zero downtime.",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Let's Get Started"
      buttonLink="/contact-us"
    /></section>

    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="What type of app are you looking for? Share your ideas, and we provide free wireframing and consultation to bring clarity and direction to every aspect of app development."
        buttonText="Get Free Consultation Now"
        buttonLink="/contact-us"
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


      {/*Testimonial Video carousel*/}
      <section className="fourSteps  padd pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <FourStepComponent 
                titles = "Our Step-by-Step Approach to Building iOS Mobile Apps"
                faqDatas={stepsData}
                btntext ="Contact Us Now"
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
              <CFAQComponent faqData={webDevFAQ} image={FAQImg} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default IOSAppDevelopmentServices;