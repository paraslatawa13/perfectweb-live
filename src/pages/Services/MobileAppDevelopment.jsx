import "../../App.css";
import "../../Responsive-App.css";
import { useMeta } from "../../hooks/useMeta";
import MetaHelmet from "../../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../../components/CommonHeroSection";
import FreeConsultation from "../../components/freeConsultation";
import FreeEstimationSection from "../../components/FreeEstimationSection";
import ImageWithText from "../../components/ImageWithText";
import ServicesSection from "../../components/CommonServicesSection";
import GridComponent from "../../components/Services/GridComponent";
import CommonExComponent from "../../components/CommonExComponent";
import FourStepComponent from "../../components/Services/FourStepComponent";
import CFAQComponent from "../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../components/TestimonialVideoCarousel";
import AppDesignBanner from "../../assets/images/Services/AppDesignBanner.webp";
import AppDS from "../../assets/images/Services/AppDS.webp";
import sideCircle from "../../assets/images/side-circle.png";
import FAQImg from "../../assets/images/FAQImg.webp";
import One from "../../assets/images/Services/one.svg";
import Two from "../../assets/images/Services/two.svg";
import Three from "../../assets/images/Services/three.svg";
import Four from "../../assets/images/Services/four.svg";
import Five from "../../assets/images/Services/Five.webp";
import Six from "../../assets/images/Services/Six.webp";
import calcfreeImage from "../../assets/images/calcfreeImage.webp";
import ServicesCover from "../../components/ServicesCover";
import AppComplexity from "../../assets/images/Services/AppComplexity.webp";
import PlatformAndTechnology from "../../assets/images/Services/PlatformAndTechnology.webp";
import DesignAndUser from "../../assets/images/Services/DesignAndUser.webp";

import IOSAppDevelopment from "../../assets/images/Services/IOSAppDevelopment.webp";
import AndroidAppDevelopment from "../../assets/images/Services/AndroidAppDevelopment.webp";
import CrossPlatformAap from "../../assets/images/Services/CrossPlatformAap.webp";
import CustomAppDevelopment from "../../assets/images/Services/CustomAppDevelopment.webp";
import EcommerceWebsite from "../../assets/images/Services/EcommerceWebsite.webp";
import AppMaintance from "../../assets/images/Services/AppMaintance.webp";

import ieIcon from "../../assets/images/Home/ie-icon.webp";
import cIcon from "../../assets/images/Home/cs-icon.webp";
import pDIcon from "../../assets/images/Home/pd-icon.webp";




/**TECH STACK */

import TechStack from "../../components/TechStack";
import Python from "../../assets/images/tech-logos/Phython.webp";
import Java from "../../assets/images/tech-logos/Java.webp";
import JS from "../../assets/images/tech-logos/JS.webp";
import NodeJs from "../../assets/images/tech-logos/NodeJs.webp";
import Angular from "../../assets/images/tech-logos/Angular.webp";
import ReactNative from "../../assets/images/tech-logos/React.webp";
import Flutter from "../../assets/images/tech-logos/Flutter.webp";
import RubyRails from "../../assets/images/tech-logos/RubyRails.webp";
import MySQL from "../../assets/images/tech-logos/MySQL.webp";
import MongoDB from "../../assets/images/tech-logos/MongoDB.webp";
import PostgreSQL from "../../assets/images/tech-logos/PostgreSQL.webp";
import SQLServer from "../../assets/images/tech-logos/SQLServer.webp";
import Docker from "../../assets/images/tech-logos/Docker.webp";
import Xamarin from "../../assets/images/tech-logos/Xamarin.webp";
import IntelliJIDEA from "../../assets/images/tech-logos/IntelliJIDEA.webp";


  const techLogos = [
  { name: "Python", logo: Python },
  { name: "Java", logo: Java },
  { name: "JavaScript", logo: JS },
  { name: "Node.js", logo: NodeJs },
  { name: "Angular", logo: Angular },
  { name: "React Native", logo: ReactNative },
  { name: "Flutter", logo: Flutter },
  { name: "Ruby on Rails", logo: RubyRails },
  { name: "MySQL", logo: MySQL },
  { name: "MongoDB", logo: MongoDB },
  { name: "PostgreSQL", logo: PostgreSQL }, 
  { name: "Microsoft SQL Server", logo: SQLServer},
  { name: "Docker", logo: Docker },
  { name: "Xamarin", logo: Xamarin },
  { name: "IntelliJ IDEA", logo: IntelliJIDEA },

];

const servicesData = [
  {
    img: IOSAppDevelopment,
    title: "iOS App Development",
    desc: "We create high-performance, secure, and feature-rich iOS apps tailored for Apple devices, ensuring smooth user experiences and compliance with App Store guidelines to maximize engagement.",
    link: "/ios-app-development-services",
  },
  {
    img: AndroidAppDevelopment,
    title: "Android App Development",
    desc: "Our team builds scalable, fast, and user-friendly Android applications compatible across devices, leveraging the latest technologies to ensure your app stands out on Google Play.",
    link: "/android-app-development-services",
  },
  {
    img: CrossPlatformAap,
    title: "Cross-Platform App Development",
    desc: "We design and develop cross-platform apps using frameworks like Flutter and React Native, delivering consistent performance and unified experiences across iOS and Android with reduced cost.",
    link: "",
  },
  {
    img: CustomAppDevelopment,
    title: "Custom App Development",
    desc: "We develop tailored apps aligned with your business goals, offering unique features, intuitive interfaces, and robust functionality that meet your exact requirements and drive business growth.",
    link: "",
  },
  {
    img: EcommerceWebsite,
    title: "E-Commerce App Development",
    desc: "Our e-commerce app solutions offer smooth navigation, secure payments, and personalized shopping experiences, enabling businesses to increase conversions, customer loyalty, and online sales across all platforms.",
    link: "",
  },
  {
    img: AppMaintance,
    title: "App Maintenance & Support",
    desc: "We provide continuous app maintenance, updates, bug fixes, and performance enhancements to ensure your application stays relevant, secure, and optimized for evolving user needs and technologies.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. Which platform works best for building business apps?",
    answer: "The choice depends on goals—native ensures performance, while cross-platform offers wider reach. We recommend solutions tailored to budget, scalability, and long-term business needs."
  },
  {
    question: "2. Are there performance differences between cross-platform and native apps?",
    answer: "Yes. Native apps deliver faster performance and deeper integration, while cross-platform apps save cost and time. We help businesses choose the best fit for their goals."
  },
  {
    question: "3. Do apps need fixed screen sizes like websites?",
    answer: "No. Modern apps use responsive layouts, adapting automatically to various screen sizes and devices, ensuring consistent usability and seamless experience across all platforms."
  },
  {
    question: "4. How does Perfect Web Services ensure app security?",
    answer: "lement encryption, secure APIs, data protection, and regular testing to ensure your mobile app remains safe, reliable, and compliant with industry security standards."
  },
  {
    question: "5. What trending technologies are shaping mobile app development today?",
    answer: "Emerging trends include AI integration, AR/VR experiences, cloud-based apps, 5G optimization, and IoT connectivity—helping businesses enhance engagement, functionality, and user experience with innovation."
  }, 

];


const stepsData = [
  {
    img: One,
    title: "Discovery & Requirement Analysis",
    desc: "We start by identifying your goals, target audience, and technical needs, creating a clear roadmap to ensure your app aligns with your business vision.",
  },
  {
    img: Two,
    title: "UX/UI Strategy & Design",
    desc: "Our design team builds intuitive wireframes and engaging interfaces, ensuring a seamless, user-friendly journey that enhances customer satisfaction and strengthens brand identity.",
  },
  {
    img: Three,
    title: "Architecture & Development",
    desc: "We plan robust backend architecture and write clean, scalable code, integrating essential APIs and features to deliver fast, secure, cross-platform app performance.",
  },
  {
    img: Four,
    title: "Quality Assurance & Testing",
    desc: "Rigorous testing ensures your app functions flawlessly across devices, covering usability, security, and performance checks to guarantee a smooth experience for every user.",
  },
  {
    img: Five,
    title: "Deployment & Launch",
    desc: "After successful testing, we deploy the app to app stores and platforms, ensuring a seamless release that maximizes user adoption and market readiness.",
  },
  {
    img: Six,
    title: "Continuous Support & Optimization",
    desc: "We provide ongoing support with updates, bug fixes, and feature enhancements, ensuring your app remains secure, relevant, and effective for long-term business growth.",
  },
];





function MobileAppDevelopment() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Mobile App Development Services"
            title="Mobile App Development Services"
            description="We create custom, business-focused mobile apps that transform ideas into revenue, delivering seamless experiences across Android, iOS, and all leading technologies."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={AppDesignBanner}
            altText="Mobile App Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services – Mobile App Development Company for Every Platform"
                description="According to leading agency reports, 90% of users spend their time on mobile apps rather than browsers, with apps driving significantly higher conversions. We deliver multi-purpose, cross-platform mobile applications designed to accelerate business growth."
                buttonText="Hire App Developer Now"
                buttonLink="/contact-us"
                image={AppDS}
                altText="Mobile App Development Company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Full-Cycle Mobile App Solutions Tailored to Your Needs"
           subtitle="Your app needs a full-stack team to handle everything from idea to launch and beyond. Our end-to-end app development services ensure growth and customer acquisition."
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
        title="Get A Free App Development Cost Estimation"
        description="Not sure how much your app will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Technologies We Use for App Development" techLogos={techLogos} />
          </div>
        </section>

         
   {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="6 Strong Reasons to Choose Our App Development Services"
      cards={[
        {
          plus: "100+ ",
          bottomText: "Apps Delivered with a proven record of success.",
          icon: ieIcon,
          alt: "Industry"
        },
        {
          plus: "95%",
          bottomText: "On-Time Delivery, ensuring projects meet every deadline",
          icon: cIcon,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "24/7",
          bottomText: "Dedicated Support available anytime you need us",
          icon: pDIcon,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: "Scalable Apps built for future growth and flexibility.",
          icon: cIcon,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "50+",
          bottomText: "Industries Served with deep domain expertise.",
          icon: ieIcon,
          alt: "Product Delivery"
        },
        {
          plus: "99.9%",
          bottomText: "App Uptime guaranteeing unmatched reliability and performance.",
          icon: cIcon,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Hire Dedicated Team Now"
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



      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Key Factors Influencing App Development Costs"
        sectionSubText=""
        services={[
          {
            icon: AppComplexity,
            heading: "App Complexity",
            text: "The more features, integrations, and custom functionalities your app requires, the higher the development cost. Complex UI/UX, backend logic, and third-party APIs add to the overall budget."
          },
          {
            icon: PlatformAndTechnology,
            heading: "Platform and Technology",
            text: " Developing for iOS, Android, or both significantly impacts pricing. Native apps often cost more than hybrid ones due to separate coding, testing, and optimization requirements for each platform."
          },
          {
            icon: DesignAndUser,
            heading: "Design and User Experience",
            text: " A visually engaging and intuitive design demands expert designers and additional testing. Investing in premium UI/UX ensures user satisfaction but slightly increases the overall development expenditure."
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
            titles = "Our Proven Process for Custom Mobile App Development"
              faqDatas={stepsData}
              btntext ="Get Web Design Proposa"
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

export default MobileAppDevelopment;