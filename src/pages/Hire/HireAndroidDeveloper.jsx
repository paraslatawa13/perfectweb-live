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
import HireAndroidBanner from "../../assets/images/Hire/HireAndroidBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";

const hiringData = [
  {
    heading: "Hire Android App Developers on Demand",
    content:
      "Bring skilled Android app developers on board whenever you need them, whether it’s a single specialist or an entire development team. Access the right expertise to build, scale, and refine your app.",
  },
  {
    heading: "Dedicated Android App Developer Model",
    content:
      "Hire a dedicated full-time Android app developer who focuses solely on your project, ensuring faster execution, smooth communication, and complete alignment with your technical vision and delivery goals.",
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
      "Hire Android app developers part-time for continuous updates, maintenance, or smaller development activities, offering flexibility, cost savings, and reliable expertise whenever your project needs support.",
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
    title: "Custom Android App Development",
    desc: "Our developers build fully customized Android applications tailored to your business needs, ensuring high performance, a seamless user experience, and a future-ready architecture that works across all device types.",
    link: "/android-app-development-services",
  },
    {
    img: twoA,
    title: "Android UI/UX Design Excellence",
    desc: "We craft intuitive, modern, and user-centric interfaces that enhance engagement. Every design ensures smooth navigation, visual consistency, and improved retention across diverse Android screens and resolutions.",
    link: "",
  },
    {
    img: APIIntegration,
    title: "API & Third-Party Integrations",
    desc: "Our experts integrate payment gateways, CRMs, analytics tools, and custom APIs to expand functionality, streamline processes, and deliver a connected Android app ecosystem that scales effortlessly.",
    link: "/custom-api-development-services",
  },
    {
    img: CrossPlatform,
    title: "Android App Migration & Upgrades",
    desc: "We securely migrate existing apps to Android or upgrade outdated versions, improving performance, UI, and stability while retaining core functionality and minimizing operational downtime.",
    link: "",
  },
    {
    img: UI_Design,
    title: "Quality Assurance & Performance Testing",
    desc: "Our QA team performs rigorous functional, performance, and device testing to ensure your Android app runs flawlessly across all versions, devices, networks, and usage conditions.",
    link: "",
  },

  {
    img: SecurityCompliance,
    title: "Ongoing Maintenance & Support",
    desc: "We provide continuous monitoring, updates, bug fixes, and feature enhancements to keep your Android app secure, optimized, and compatible with the latest devices and OS versions.",
    link: "",
  },
];

const webDevFAQ = [
  {
    question: "How long does it take to develop an Android app?",
    answer: "The Android development timeline depends on features, complexity, integrations, and design needs. Most basic apps take 4–8 weeks, while advanced, large-scale apps require more time."
  },
  {
    question: "2. Can I hire an Android developer only for app maintenance?",
    answer: "Yes, you can hire our Android developers exclusively for maintenance, updates, bug fixes, performance improvements, and ongoing support to ensure your app stays stable and secure."
  },
  {
    question: "3. Can you enhance or upgrade my existing Android application?",
    answer: "Absolutely. We improve UI/UX, add new features, optimize performance, update frameworks, and modernize your existing Android app for better functionality, speed, and user satisfaction."
  },
  {
    question: "4. Can you integrate third-party APIs and tools into my Android app?",
    answer: "Yes, our experts integrate payment gateways, CRMs, analytics tools, cloud services, social logins, and custom APIs to enhance your Android app’s functionality and user experience."
  },
  {
    question: "5. Do you also provide UI/UX design for Android applications?",
    answer: "Yes, we offer complete UI/UX design services, including audits, wireframes, prototypes, and modern Android-friendly interfaces that improve engagement, usability, and overall app performance."
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
import Java from "../../assets/images/tech-logos/Android/Java.webp";
import JetpackCompose from "../../assets/images/tech-logos/Android/JetpackCompose.webp";
import AndroidStudio from "../../assets/images/tech-logos/Android/AndroidStudio.webp";
import AndroidJetpackLibraries from "../../assets/images/tech-logos/Android/AndroidJetpackLibraries.webp";
import OkHttp from "../../assets/images/tech-logos/Android/OkHttp.webp";
import Coroutines from "../../assets/images/tech-logos/Android/Coroutines.webp";
import RoomDatabase from "../../assets/images/tech-logos/Android/RoomDatabase.webp";
import Firebase from "../../assets/images/tech-logos/Android/Firebase.webp";
import Glide from "../../assets/images/tech-logos/Android/Glide.webp";
import SQLite from "../../assets/images/tech-logos/Android/SQLite.webp";
import JUnit from "../../assets/images/tech-logos/Android/JUnit.webp";
import Xml from "../../assets/images/tech-logos/Api/Xml.webp";
import Kotlin from "../../assets/images/tech-logos/IOS/Kotlin.webp";
import Gradle from "../../assets/images/tech-logos/IOS/Gradle.webp";




  const techLogos = [
  { name: "Kotlin", logo: Kotlin },
  { name: "Java", logo: Java },
  { name: "Jetpack Compose", logo: JetpackCompose },
  { name: "XML Layouts", logo: Xml },
  { name: "Android Studio", logo: AndroidStudio },
  { name: "Android Jetpack Libraries", logo: AndroidJetpackLibraries },
  { name: "Retrofit / OkHttp", logo: OkHttp },
  { name: "Coroutines", logo: Coroutines },
  { name: "RoomDatabase", logo: RoomDatabase },
  { name: "Firebase", logo: Firebase },
  { name: "Glide / Coil", logo: Glide },
  { name: "SQLite", logo: SQLite },
  { name: "JUnit / Espresso", logo: JUnit },
  { name: "Gradle", logo: Gradle },  
];


function HireAndroidDeveloper() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} />
      <HireBanner
        content={{
          title: "Hire Android App Developers with Ease",
          description: "Hire top Android developers from Perfect Web Services for premium, scalable Android solutions. Bring an expert onto your project in as little as 4–8 hours.",
          buttonText: "Start Your Project Now",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireAndroidBanner],
          alt: "Hire Android App Developers",
        }}
      />

      {/* GROW YOUR BUSINESS*/}

       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Android App Developers to Build Your Next Big App"
        subText="Have a fresh app idea or need seamless Android migration? Our skilled Android developers transform concepts into high-performance, scalable apps tailored to your business goals."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Core Competencies of Our Android App Experts"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                   Hire Android App Developer Now
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
        title="Get A Free Android App Development Cost Estimation"
        description="How much will your website or app cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring an Android  App Developer"
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

export default HireAndroidDeveloper;
