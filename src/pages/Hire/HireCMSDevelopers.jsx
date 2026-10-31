
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
import Wix from "../../assets/images/tech-logos/Wix.webp";
import Magento from "../../assets/images/tech-logos/Magento.webp";
import Joomla from "../../assets/images/tech-logos/Joomla.webp";
import WordPress from "../../assets/images/Services/WordPress.webp";
import Shopify from "../../assets/images/Services/Shopify.webp";
import Drupal from "../../assets/images/tech-logos/Drupal.webp";

import { Link } from "react-router-dom";
import HireCBanner from "../../assets/images/Hire/HireCBanner.webp";
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
    img: Wix,
    title: "Wix",
    desc: "Hire expert Wix developers from Perfect Web Services to build visually stunning, user-friendly websites with customizable features, seamless integrations, and reliable performance for businesses of any size.",
    link: "",
  },
    {
    img: WordPress,
    title: "WordPress",
    desc: "Our WordPress developers deliver secure, scalable, and SEO-friendly websites. From custom themes to plugins, we create tailored WordPress solutions to manage and grow your digital presence.",
    link: "/custom-wordpress-development-services",
  },
    {
    img: Shopify,
    title: "Shopify",
    desc: " Perfect Web Services’ Shopify developers craft high-performing online stores with custom themes, app integrations, and smooth checkout experiences—helping businesses scale and maximize eCommerce sales effectively.",
    link: "/shopify-website-development-services",
  },
    {
    img: Joomla,
    title: "Joomla",
    desc: "Hire Joomla developers to build dynamic, secure, and versatile websites. We specialize in extensions, templates, and customization to meet unique business needs and scalability goals.",
    link: "",
  },
    {
    img: Drupal,
    title: "Drupal",
    desc: "Our skilled Drupal developers design robust, enterprise-level websites. With advanced modules, customization, and security, we deliver CMS solutions that are flexible, scalable, and future-ready.",
    link: "",
  },

  {
    img: Magento,
    title: "Magento",
    desc: "Perfect Web Services’ Magento developers create powerful eCommerce platforms with advanced functionality, multi-store support, and seamless integrations, helping brands drive sales and deliver exceptional customer experiences.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Which CMS platforms do your developers specialize in?",
    answer: "Our CMS developers specialize in WordPress, Joomla, Drupal, Magento, Shopify, Wix, and Umbraco, covering a wide range of content management and e-commerce platforms."
  },
  {
    question: "2. How much does it cost to hire a CMS developer?",
    answer: "Costs vary based on project scope, CMS type, and hiring model. We offer flexible, transparent pricing with hourly, part-time, and full-time engagement options."
  },
  {
    question: "3. Can you migrate my website to another CMS?",
    answer: "Yes, we migrate websites across CMS platforms like WordPress, Drupal, Joomla, and Magento, preserving data, structure, and SEO performance during the transition process."
  },
  {
    question: "4. Do your CMS developers provide custom plugin or module development?",
    answer: "Absolutely. Our developers create custom plugins, modules, and extensions tailored to your business needs, extending CMS functionality with seamless, reliable, and secure integrations."
  },
  {
    question: "5. Do you provide post-launch support for CMS projects?",
    answer: "We offer ongoing maintenance, updates, bug fixes, and performance monitoring to ensure your CMS website stays secure, updated, and optimized after project delivery."
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
import Wordpressicon from "../../assets/images/tech-logos/CMS/Wordpress.webp";
import Bootstrap from "../../assets/images/tech-logos/CMS/Bootstrap.webp";
import Css3 from "../../assets/images/tech-logos/CMS/Css3.webp";
import DiviBuilder from "../../assets/images/tech-logos/CMS/DiviBuilder.webp";
import Drupall from "../../assets/images/tech-logos/CMS/Drupal.webp";
import Elementor from "../../assets/images/tech-logos/CMS/Elementor.webp";
import Ghost from "../../assets/images/tech-logos/CMS//Ghost.webp";
import Guterberg from "../../assets/images/tech-logos/CMS/Guterberg.webp";
import Html from "../../assets/images/tech-logos/CMS//Html.webp";
import JavaScript from "../../assets/images/tech-logos/CMS/JavaScript.webp";
import JoomlaB from "../../assets/images/tech-logos/CMS/Joomla.webp";
import Laravel from "../../assets/images/tech-logos/CMS/Laravel.webp";
import Magentoo from "../../assets/images/tech-logos/CMS/Magento.webp";
import MariaDB from "../../assets/images/tech-logos/CMS/MariaDB.webp";
import MongoDB from "../../assets/images/tech-logos/CMS/MongoDB.webp";
import MySql from "../../assets/images/tech-logos/CMS/MySql.webp";
import NodeJS from "../../assets/images/tech-logos/CMS/NodeJS.webp";
import Oxygen from "../../assets/images/tech-logos/CMS/Oxygen.webp";
import Php from "../../assets/images/tech-logos/CMS/Php.webp";
import PostGreSql from "../../assets/images/tech-logos/CMS/PostGreSql.webp";
import Python from "../../assets/images/tech-logos/CMS/Python.webp";
import React from "../../assets/images/tech-logos/CMS/React.webp";
import Scss from "../../assets/images/tech-logos/CMS/Scss.webp";
import ShopifyIcon from "../../assets/images/tech-logos/CMS/Shopify.webp";
import Typo3 from "../../assets/images/tech-logos/CMS/Typo3.webp";
import VueJs from "../../assets/images/tech-logos/CMS/VueJs.webp";
import WebFlow from "../../assets/images/tech-logos/CMS/WebFlow.webp";
import WordPresss from "../../assets/images/tech-logos/CMS/WordPress.webp";
import WpBakery from "../../assets/images/tech-logos/CMS/WpBakery.webp";


   const techLogos = [
    { name: "Wordpress", logo: Wordpressicon },
    { name: "Bootstrap", logo: Bootstrap },
    { name: "CSS3", logo: Css3 },
    { name: "Divi", logo: DiviBuilder },
    { name: "Drupal", logo: Drupall },
    { name: "Elementor", logo: Elementor },
    { name: "Ghost", logo: Ghost},
    { name: "Guterberg", logo: Guterberg },
    { name: "Html", logo: Html },
    { name: "JavaScript", logo: JavaScript },
    { name: "Joomla", logo: JoomlaB },
    { name: "Laravel", logo: Laravel },  
    { name: "Magento", logo: Magentoo },
    { name: "MariaDB", logo: MariaDB },
    { name: "MongoDB", logo: MongoDB },
    { name: "MySql", logo: MySql },
    { name: "Node.JS", logo: NodeJS },
    { name: "Oxygen", logo: Oxygen},
    { name: "Php", logo: Php },
    { name: "PostGreSql", logo: PostGreSql },
    { name: "Python", logo: Python },
    { name: "React", logo: React },
    { name: "SCSS", logo: Scss },
    { name: "Shopify", logo: ShopifyIcon },
    { name: "Typo3", logo: Typo3 },
    { name: "Vue.Js", logo: VueJs },
    { name: "WebFlow", logo: WebFlow },
    { name: "WordPress", logo: WordPresss },
    { name: "WpBakery", logo: WpBakery },
  
];



function HireCMSDevelopers() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire CMS Developers to Empower Digital Presence",
          description: "Hire CMS developers from Perfect Web Services specializing in Drupal, Sitefinity, TYPO3, and WordPress to create powerful, flexible, and future-ready content management solutions for your enterprise.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireCBanner],
          alt: "Hire CMS Developers",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Skilled CMS Developers for Powerful Digital Experiences"
        subText="Bring reliable CMS developers to your project with our chosen professionals. We craft optimised CMS websites that boost speed, simplify content management, enhance user experience, and amplify your brand’s overall impact."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our Content Management System Developers’ Expertise"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire CMS Expert Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our CMS Expert Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free CMS Development Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Easy Guide to Hiring Professional CMS Developers from PWS"
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

export default HireCMSDevelopers;
