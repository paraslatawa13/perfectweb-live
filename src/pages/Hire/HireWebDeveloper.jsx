import "../../App.css";
import "../../Responsive-App.css";
import { useMeta } from "../../hooks/useMeta";
import MetaHelmet from "../../reusablecomponents/MetaHelmet";
import GrowYourBusiness from "../../components/GrowYourBusiness";
import HireBanner from "../../components/Hire/HireBanner";
import HeadingWithText from "../../components/HeadingWithText";
import TechStack from "../../components/TechStack";
import FreeEstimationSection from "../../components/FreeEstimationSection";
import HiringModel from "../../components/Hire/HiringModel";
import CFAQComponent from "../../components/CFAQComponent";
import StepByIcon from "../../components/Hire/StepByIcon";
import ServicesSection from "../../components/CommonServicesSection";
import GridComponent from "../../components/Services/GridComponent";
import calcfreeImage from "../../assets/images/calcfreeImage.webp";
import CMS from "../../assets/images/Services/CMS.webp";
import ApiDevelopment from "../../assets/images/Services/ApiDevelopment.webp";
import WebsitMaintainance from "../../assets/images/Services/WebsitMaintainance.webp";
import AndroidAppDevelopment from "../../assets/images/Services/AndroidAppDevelopment.webp";
import WebHireBannerimage from "../../assets/images/Hire/WebHireBannerimage.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";


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
    img: Shopify,
    title: "E-Commerce and Shopify Development",
    desc: "We create scalable, secure, and conversion-focused e-commerce stores on Shopify and other platforms, helping businesses maximize sales and deliver seamless online shopping experiences.",
    link: "/shopify-website-development-services",
  },
    {
    img: CMS,
    title: "CMS Development",
    desc: "Our experts build robust, user-friendly CMS solutions like WordPress, Drupal, or Joomla, empowering businesses with easy content management, flexibility, and scalable websites tailored to unique needs.",
    link: "/cms-development-services",
  },
     {
    img: ApiDevelopment,
    title: "API Development",
    desc: "We design and integrate custom APIs that connect applications seamlessly, enhancing functionality, improving data flow, and delivering smooth experiences across platforms, apps, and third-party tools.",
    link: "/custom-api-development-services",
  },
    {
    img: ApiDevelopment,
    title: "Full Stack Web Development",
    desc: "Our developers handle front-end and back-end development, ensuring responsive design, smooth performance, and scalable architectures for websites and web applications tailored to your business.",
    link: "",
  },
    {
    img: WebsitMaintainance,
    title: "Web Portals Development",
    desc: "We build secure, interactive, and scalable web portals for businesses, offering personalized dashboards, data access, and collaboration tools to enhance user experience and productivity.",
    link: "",
  },

  {
    img: AndroidAppDevelopment,
    title: "App Development",
    desc: "Our team crafts high-performing mobile and web apps tailored to business goals, delivering intuitive UI/UX, seamless functionality, and cross-platform compatibility for maximum impact.",
    link: "#",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Which hiring model is most suitable for my business needs?",
    answer: "We offer hourly, part-time, and full-time hiring models, allowing you to choose the best fit for your project’s scope, budget, and timeline."
  },
  {
    question: "2. How long will it take to complete my web development project?",
    answer: "Project duration depends on complexity, features, and size. On average, small projects take weeks, while larger, feature-rich solutions may require a few months."
  },
  {
    question: "3. Do your developers also handle SEO during web development?",
    answer: "Yes, our developers follow SEO-friendly coding, optimized structure, and fast-loading design, ensuring your website ranks better and drives more organic visibility from launch."
  },
  {
    question: "4. Why should I hire dedicated web developers from Perfect Web Services?",
    answer: "Our developers bring expertise in modern technologies, deliver high-quality solutions, and work as an extension of your team to achieve business goals."
  },
  {
    question: "5. How much does it cost to hire a web developer?",
    answer: "The cost depends on experience, skills, and project needs. We offer flexible hiring models starting from competitive rates tailored to your requirements."
  }, 
  {
    question: "6. Can I scale my development team as the project grows?",
    answer: "Absolutely. Our flexible hiring models allow you to easily add or reduce developers as per your project scope and business requirements."
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


/**LOGOS */

import Android from "../../assets/images/tech-logos/Andriod.webp";
import Angular from "../../assets/images/tech-logos/Angular.webp";
import Codelgniter from "../../assets/images/tech-logos/Codelgniter.webp";
import CSS3 from "../../assets/images/tech-logos/CSS3.webp";
import IOS from "../../assets/images/tech-logos/IOS.webp";
import Java from "../../assets/images/tech-logos/Java.webp";
import Joomla from "../../assets/images/tech-logos/Joomla.webp";
import Jquery from "../../assets/images/tech-logos/Jquery.webp";
import JS from "../../assets/images/tech-logos/JS.webp";
import Laravel from "../../assets/images/tech-logos/laravel.webp";
import Magento from "../../assets/images/tech-logos/Magento.webp";
import MongoDB from "../../assets/images/tech-logos/MongoDB.webp";
import NodeJs from "../../assets/images/tech-logos/NodeJs.webp";
import PHP from "../../assets/images/tech-logos/PHP.webp";
import Python from "../../assets/images/tech-logos/Phython.webp";
import ReactLogo from "../../assets/images/tech-logos/React.webp";
import Shopify from "../../assets/images/tech-logos/Shopify.webp";
import SQL_Server from "../../assets/images/tech-logos/SQL_Server.webp";
import MySQL from "../../assets/images/tech-logos/SQL.webp";
import Squarespace from "../../assets/images/tech-logos/Squearespace.webp";
import Weebly from "../../assets/images/tech-logos/Weebly.webp";
import Wix from "../../assets/images/tech-logos/Wix.webp";
import Wordpress from "../../assets/images/tech-logos/Wordpress.webp";


  const techLogos = [
  { name: "Angular", logo: Angular },
  { name: "PHP", logo: PHP },
  { name: "MongoDB", logo: MongoDB },
  { name: "MySQL", logo: MySQL },
  { name: "Codelgniter", logo: Codelgniter },
  { name: "Wix", logo: Wix },
  { name: "CSS3", logo: CSS3 },
  { name: "JavaScript", logo: JS },
  { name: "Wordpress", logo: Wordpress },
  { name: "Weebly", logo: Weebly },
  { name: "JQuery", logo: Jquery },
  { name: "Node.js", logo: NodeJs },
  { name: "Laravel", logo: Laravel },
  { name: "Python", logo: Python },
  { name: "Java", logo: Java },
  { name: "IOS", logo: IOS },
  { name: "Android", logo: Android },
  { name: "Squarespace", logo: Squarespace },
  { name: "Shopify", logo: Shopify },
  { name: "Magento", logo: Magento },
  { name: "SQL Server", logo: SQL_Server },
  { name: "React", logo: ReactLogo },
  { name: "Joomla", logo: Joomla },
];


function HireWebDeveloper() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire a Dedicated Web Developer for Your Projects",
          description: "Whether you are looking for a single web expert or a team of web developers for your dream project. We have talented resources who are specialized in developing products as per our clients' needs at competitive prices.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [WebHireBannerimage],
         alt: "Hire a Dedicated Web Developer",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Web Developers for Modern, Scalable Websites"
        subText="Bring top talent to your project with our pre-vetted experts. We help you design, develop, and implement effective solutions that drive results and expand your brand visibility."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Hire Our Web Developers to Avail These Expertise"
            subtitle="We are offering a full range of digital marketing services. Check out our services below."
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <Link to="/contact-us" className="btn btn-primary">
                    Hire Web Developer
                  </Link>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "The Tech Stack We Covered" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free Development Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring Expert Developers at PWS"
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

export default HireWebDeveloper;
