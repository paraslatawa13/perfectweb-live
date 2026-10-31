import "../../../App.css";
import "../../../Responsive-App.css";
import { useMeta } from "../../../hooks/useMeta";
import MetaHelmet from "../../../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../../../components/CommonHeroSection";
import FreeConsultation from "../../../components/freeConsultation";
import FreeEstimationSection from "../../../components/FreeEstimationSection";
import ImageWithText from "../../../components/ImageWithText";
import ServicesSection from "../../../components/CommonServicesSection";
import GridComponent from "../../../components/Services/GridComponent";
import ExComponent from "../../../components/ExComponent";
import FourStepComponent from "../../../components/Services/FourStepComponent";
import CFAQComponent from "../../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../../components/TestimonialVideoCarousel";
import AndroidBanner from "../../../assets/images/Services/AndroidBanner.webp";
import WebADclient from "../../../assets/images/Services/WebADclient.webp";
import sideCircle from "../../../assets/images/side-circle.png";

import onea from "../../../assets/images/Services/one-a.png";
import twoa from "../../../assets/images/Services/two-a.png";
import threea from "../../../assets/images/Services/three-a.png";
import foura from "../../../assets/images/Services/four-a.png";
import fivea from "../../../assets/images/Services/five-a.png";
import sixa from "../../../assets/images/Services/six-a.png";

import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";



/**TECH STACK */

import TechStack from "../../../components/TechStack";

import Angular from "../../../assets/images/tech-logos/Android/Angular.webp";
import Docker from "../../../assets/images/tech-logos/Android/Docker.webp";
import Flutter from "../../../assets/images/tech-logos/Android/Flutter.webp";
import IntelliJIdea from "../../../assets/images/tech-logos/Android/IntelliJIdea.webp";
import Java from "../../../assets/images/tech-logos/Android/Java.webp";
import JavaScript from "../../../assets/images/tech-logos/Android/JavaScript.webp";
import MicrosoftSqlServer from "../../../assets/images/tech-logos/Android/MicrosoftSqlServer.webp";
import MongoDb from "../../../assets/images/tech-logos/Android/MongoDb.webp";
import MySql from "../../../assets/images/tech-logos/Android/MySql.webp";
import NodeJs from "../../../assets/images/tech-logos/Android/NodeJs.webp";
import PostGreSql from "../../../assets/images/tech-logos/Android/PostGreSql.webp";
import Python from "../../../assets/images/tech-logos/Android/Python.webp";
import React from "../../../assets/images/tech-logos/Android/React.webp";
import Xamarin from "../../../assets/images/tech-logos/Android/Xamarin.webp";


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

const servicesData = [

  {
    img: onea,
    title: "Custom Android App Development",
    desc: "We deliver tailored Android applications designed to match your business goals, integrating unique features, intuitive designs, and high performance across all Android devices.",
    link: "",
  },
  {
    img: twoa,
    title: "UI/UX Design for Android Apps",
    desc: "Our team creates visually appealing and user-centric Android interfaces, ensuring seamless navigation, engaging layouts, and optimized experiences to keep users satisfied and returning.",
    link: "",
  },
  {
    img: threea,
    title: "Cross-Platform Android Development",
    desc: "We build apps that run smoothly across Android and other platforms, reducing development costs while ensuring consistent performance and user experience everywhere.",
    link: "",
  },
  {
    img: foura,
    title: "E-Commerce Android App Development",
    desc: "We design powerful Android e-commerce apps that enhance product visibility, enable smooth shopping experiences, and drive sales with secure payment gateways and personalized features.",
    link: "",
  },
  {
    img: fivea,
    title: "Android App Integration & API Development",
    desc: "Our developers create secure APIs and integrate third-party systems, enhancing Android apps with seamless functionality and connectivity to boost efficiency and user engagement.",
    link: "",
  },
  {
    img: sixa,
    title: "Maintenance & Support for Android Apps",
    desc: "We provide ongoing updates, bug fixes, and performance enhancements, ensuring your Android app stays secure, reliable, and fully optimized for business growth.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. How long does it take to develop an Android app?",
    answer: "The development timeline typically ranges from 4 to 16 weeks, depending on app complexity, required features, integrations, and custom design or functionality."
  },
  {
    question: "2. What technologies do you use for Android app development?",
    answer: "We use Kotlin, Java, Jetpack Compose, Android Studio, and integrate tools like Firebase, REST APIs, and custom backend services to ensure scalability and performance."
  },
  {
    question: "3. Can you build cross-platform apps using Android frameworks?",
    answer: "Yes, we develop cross-platform apps using Flutter and React Native, offering faster deployment and a consistent experience across Android and iOS devices."
  },
  {
    question: "4. Will my Android app be compatible with all devices?",
    answer: "Yes, we test your app across a wide range of screen sizes and Android OS versions to ensure smooth performance on smartphones, tablets, and wearables."
  },
  {
    question: "5. How do you ensure the security of Android applications?",
    answer: "We implement secure coding practices, data encryption, authentication layers, and follow Google’s Android security guidelines to protect your app and user data."
  }
];


const stepsData = [
  {
    img: One,
    title: "Understanding Your Vision",
    desc: "We start by diving deep into your business goals, audience, and idea to shape a clear strategy for your Android app’s success.",
  },
  {
    img: Two,
    title: "Designing Intuitive Experiences",
    desc: "Our team creates engaging UI/UX designs, ensuring every screen is user-friendly, visually appealing, and optimized for smooth user journeys.",
  },
  {
    img: Three,
    title: "Building the App Core",
    desc: "We develop secure, scalable, and high-performing Android apps tailored to your business needs, using modern technologies for maximum reliability.",
  },
  {
    img: Four,
    title: "Quality Testing at Every Stage",
    desc: "Rigorous testing ensures your app is bug-free, responsive, and compatible across Android devices for a flawless user experience.",
  },
  {
    img: Five,
    title: "Launching Your App Successfully",
    desc: "From Google Play Store publishing to final deployment, we handle the launch process to ensure smooth delivery and maximum visibility.",
  },
  {
    img: Six,
    title: "Ongoing Support & Growth",
    desc: "We don’t stop at launch—our experts provide continuous updates, maintenance, and feature enhancements to keep your app competitive and growing.",
  },
];





function AndroidAppDevelopmentServices() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle=""
            title="Android App Development Services"
            description="Explore limitless opportunities with our Android app development services, creating powerful, scalable, and engaging apps that drive business growth across various industries."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={AndroidBanner}
            altText="Android App Development Company"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- Trusted Android App Development Company"
                description="With over 3.6 billion active Android devices worldwide, Android dominates mobile usage. Perfect Web Services builds dynamic Android apps that maximize reach, enhance engagement, and drive scalable growth for businesses of all sizes."
                buttonText="Hire Android App Developer Now"
                buttonLink="/contact-us"
                image={WebADclient}
                altText="Android App Development Company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Complete Android App Solutions We Offer"
           subtitle="We develop innovative Android applications designed for performance, security, and usability, giving your business a competitive edge while adhering to Google Play requirements for lasting growth."
          />
          <div className="row align-items-center">
            <div className="col-12">
                <GridComponent data={servicesData} />
            </div>
          </div>
         
        </div>
      </section>


     {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free Android App Development Cost Estimation"
        description="How much will your app cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />


      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Tech Stack Our Android App Developers Use" techLogos={techLogos} />
          </div>
        </section>

       
    {/*Right Partner Section*/}
    <section className="experience-section padd clip-section pb-0">
      <ExComponent 
       title="Why Choose Our Android Development Services"
       
       plus ="50+"
       plusText = "Apps Delivered"
      leftOneh = "Proven track record of successful projects."
       
      clientSH = "95% On-Time Delivery"
       clientSP = "Maximum Projects completed without delays."
       
       leftTwoh = "24/7"
       leftThreeh = "Dedicated Support"
       leftfourh = "Always available when you need us."
       
       leftfour = "100% Scalable Apps"
       leftfive = "Future-ready solutions for growth."
       
       middleOne = "50+"
       middleTwo = "Industries Served"
       middleTwoP = "Wide domain knowledge & solutions."
       
       rightOne = " 99.9% App Uptime"
       rightTwo = "Reliable apps with near-zero downtime."
      />
    </section>

     


    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="What type of Android app are you looking for? Share your ideas, and we provide free wireframing and consultation to bring clarity and direction to every aspect of app development."
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


      <section className="fourSteps  padd pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <FourStepComponent 
                titles = "Our Process of Building Android Mobile Apps"
                faqDatas={stepsData}
                btntext ="Get App Proposal"
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

export default AndroidAppDevelopmentServices;