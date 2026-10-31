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
import WebCMSclient from "../../../assets/images/Services/WebCMSclient.svg";
import CMSWebDevelopmentBanner from "../../../assets/images/Services/CMSWebDevelopmentBanner.webp";
import CmsBasedWebsite from "../../../assets/images/Services/CmsBasedWebsite.webp";
import Wordpress from "../../../assets/images/Services/Wordpress.webp";
import CMSS3 from "../../../assets/images/Services/CMSS3.webp";
import CMSS4 from "../../../assets/images/Services/CMSS4.webp";
import CMSS5 from "../../../assets/images/Services/CMSS5.webp";
import CMSS6 from "../../../assets/images/Services/CMSS6.webp";
import CMSS7 from "../../../assets/images/Services/CMSS7.webp";
import CMSS8 from "../../../assets/images/Services/CMSS8.webp";
import CMSS9 from "../../../assets/images/Services/CMSS9.webp";
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
import CMSCIcon1 from "../../../assets/images/Services/CMSCIcon1.webp";
import CMSCIcon2 from "../../../assets/images/Services/CMSCIcon2.webp";
import CMSCIcon3 from "../../../assets/images/Services/CMSCIcon3.webp";


import TAndSSupportAvailable from "../../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";



/**TECH STACK */
import TechStack from "../../../components/TechStack";
import Wordpressicon from "../../../assets/images/tech-logos/CMS/Wordpress.webp";
import Bootstrap from "../../../assets/images/tech-logos/CMS/Bootstrap.webp";
import Css3 from "../../../assets/images/tech-logos/CMS/Css3.webp";
import DiviBuilder from "../../../assets/images/tech-logos/CMS/DiviBuilder.webp";
import Drupal from "../../../assets/images/tech-logos/CMS/Drupal.webp";
import Elementor from "../../../assets/images/tech-logos/CMS/Elementor.webp";
import Ghost from "../../../assets/images/tech-logos/CMS//Ghost.webp";
import Guterberg from "../../../assets/images/tech-logos/CMS/Guterberg.webp";
import Html from "../../../assets/images/tech-logos/CMS//Html.webp";
import JavaScript from "../../../assets/images/tech-logos/CMS/JavaScript.webp";
import Joomla from "../../../assets/images/tech-logos/CMS/Joomla.webp";
import Laravel from "../../../assets/images/tech-logos/CMS/Laravel.webp";
import Magento from "../../../assets/images/tech-logos/CMS/Magento.webp";
import MariaDB from "../../../assets/images/tech-logos/CMS/MariaDB.webp";
import MongoDB from "../../../assets/images/tech-logos/CMS/MongoDB.webp";
import MySql from "../../../assets/images/tech-logos/CMS/MySql.webp";
import NodeJS from "../../../assets/images/tech-logos/CMS/NodeJS.webp";
import Oxygen from "../../../assets/images/tech-logos/CMS/Oxygen.webp";
import Php from "../../../assets/images/tech-logos/CMS/Php.webp";
import PostGreSql from "../../../assets/images/tech-logos/CMS/PostGreSql.webp";
import Python from "../../../assets/images/tech-logos/CMS/Python.webp";
import React from "../../../assets/images/tech-logos/CMS/React.webp";
import Scss from "../../../assets/images/tech-logos/CMS/Scss.webp";
import ShopifyIcon from "../../../assets/images/tech-logos/CMS/Shopify.webp";
import Typo3 from "../../../assets/images/tech-logos/CMS/Typo3.webp";
import VueJs from "../../../assets/images/tech-logos/CMS/VueJs.webp";
import WebFlow from "../../../assets/images/tech-logos/CMS/WebFlow.webp";
import WordPress from "../../../assets/images/tech-logos/CMS/WordPress.webp";
import WpBakery from "../../../assets/images/tech-logos/CMS/WpBakery.webp";


   const techLogos = [
    { name: "Wordpress", logo: Wordpressicon },
    { name: "Bootstrap", logo: Bootstrap },
    { name: "CSS3", logo: Css3 },
    { name: "Divi", logo: DiviBuilder },
    { name: "Drupal", logo: Drupal },
    { name: "Elementor", logo: Elementor },
    { name: "Ghost", logo: Ghost},
    { name: "Guterberg", logo: Guterberg },
    { name: "Html", logo: Html },
    { name: "JavaScript", logo: JavaScript },
    { name: "Joomla", logo: Joomla },
    { name: "Laravel", logo: Laravel },  
    { name: "Magento", logo: Magento },
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
    { name: "WordPress", logo: WordPress },
    { name: "WpBakery", logo: WpBakery },
  
];

const servicesData = [
  {
    img: CmsBasedWebsite,
    title: "Custom CMS Development",
    desc: "We build tailored content management systems from scratch, offering full control, unique functionality, and seamless management to meet specific business needs across any industry.",
    link: "",
  },
  {
    img: Wordpress,
    title: " WordPress Development",
    desc: " From simple blogs to dynamic business websites, we craft high-performance WordPress solutions with customized themes, plugins, and SEO-friendly structures for scalable online success.",
    link: "/custom-wordpress-development-services",
  },
  {
    img: CMSS3,
    title: "Joomla Development",
    desc: "We develop powerful Joomla websites with flexible content structures, multilingual capabilities, and custom extensions, perfect for complex content-heavy or community-driven platforms.",
    link: "",
  },
  {
    img: CMSS4,
    title: " CMS Migration Services",
    desc: "We migrate your website from any platform to a modern CMS like WordPress,shopify or Drupal with zero data loss, preserving functionality, SEO, and design integrity.",
    link: "",
  },
  {
    img: CMSS5,
    title: "CMS Maintenance & Support",
    desc: "We offer continuous CMS maintenance, ensuring your site remains secure, updated, and high-performing with regular backups, troubleshooting, and feature enhancements as your business grows.",
    link: "/website-maintenance-services",
  },
  {
    img: CMSS6,
    title: "CMS Integration Services",
    desc: "We integrate your CMS with third-party tools like CRMs, payment gateways, and marketing platforms to streamline operations and enhance website functionality and automation.",
    link: "",
  },
    {
    img: CMSS7,
    title: "Headless CMS Development",
    desc: "We build fast, API-driven headless CMS solutions that deliver content across multiple platforms—web, mobile, and IoT—providing unmatched flexibility, performance, and scalability.",
    link: "",
  },
    {
    img: CMSS8,
    title: "CMS Theme Design & Customization",
    desc: "Our team designs and customizes CMS themes to align with your brand identity, offering responsive layouts, intuitive navigation, and a seamless user experience.",
    link: " ",
  },
  {
    img: CMSS9,
    title: "E-Commerce CMS Development",
    desc: "We develop feature-rich eCommerce websites using CMS platforms like WooCommerce, Shopify, or Magento, combining content flexibility with robust product and order management systems.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. What is a CMS, and why is it important for my business?",
    answer: "A CMS (Content Management System) allows easy content updates, improves workflow efficiency, and ensures your website stays current, without requiring technical or coding knowledge."
  },
  {
    question: "2. Which CMS platform is best for my business?",
    answer: "The best CMS depends on your needs. WordPress suits flexibility, Shopify is ideal for eCommerce, while Joomla or Drupal offer enterprise-level functionality."
  },
  {
    question: "3. Can a CMS-based website be customized?",
    answer: "Yes, CMS platforms support full customization—from layout and themes to plugins—allowing you to tailor the website's appearance and features to your brand."
  },
  {
    question: "4. Will a CMS website be mobile-friendly and SEO-optimized?",
    answer: " Absolutely. Modern CMS platforms offer mobile-responsive templates and built-in SEO tools to help your website perform well across all devices and search engines."
  },
  {
    question: "5. How secure is a CMS-based website?",
    answer: "CMS websites are highly secure when maintained properly. Regular updates, secure hosting, strong passwords, and trusted plugins help protect your site from vulnerabilities."
  }
];


const stepsData = [
  {
    img: One,
    title: "Deep-Dive Requirement Discovery",
    desc: "We begin with a detailed consultation to understand your business goals, audience, and expectations, ensuring every step aligns with your unique vision and objectives.",
  },
  {
    img: Two,
    title: "Strategic Planning & Roadmapping",
    desc: "Based on your goals, we craft a tailored strategy, defining the store’s structure, features, and functionality to ensure maximum engagement, usability, and growth potential.",
  },
  {
    img: Three,
    title: "Custom Design & Seamless Development",
    desc: "Our designers and developers bring your vision to life with a high-performing, fully responsive Shopify store optimized for user experience and business conversion.",
  },
  {
    img: Four,
    title: "Launch, Support & Optimization",
    desc: "We deploy your store with precision, followed by ongoing maintenance, performance monitoring, and updates to ensure long-term success and uninterrupted growth.",
  },

];





function CMSDevelopment() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
     <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="CMS Development Services"
            title="CMS Development Services: High-Performance Web Solutions"
            description="Whether you need a custom content management system (CMS) or a platform like WordPress or Joomla, our skilled CMS experts are here to help you."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={CMSWebDevelopmentBanner}
            altText="Shopify Website Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- Custom CMS Design & Development Company"
                description="As a leading CMS development company, we understand the impact of content placement and user interface. Since 2019, we’ve enhanced 150+ websites with tailored designs at affordable prices. Share your requirements now."
                buttonText="Request Free Consultation"
                buttonLink="/contact-us"
                image={WebCMSclient}
                altText="Custom CMS Design & Development Company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              <h2 className="text-center">Our CMS Web Development Services Include:</h2>
              <hr />
            </div>
            <p className="subhead">Here are our fully scalable and SEO-optimized content management system development services.</p>
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
        title="Get A Free CMS Development Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
        <div className="container">
          <TechStack title = "The Tech Stack We Covered" techLogos={techLogos} />
        </div>
      </section>

       
    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="Why Choose Perfect Web Services for CMS Development?"
      cards={[
        {
          plus: "120+ ",
          bottomText: "CMS Websites Enhanced with Modern Design & Features",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "100%",
          bottomText: " Transparent Pricing with Detailed Progress Reporting",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "99%",
          bottomText: "Client Satisfaction Through On-Time Project Delivery",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: " Mobile-Friendly & SEO-Ready CMS Solutions",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "80%",
          bottomText: "of Our Clients Experience Business Growth",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery"
        },
        {
          plus: "70+",
          bottomText: "Websites Successfully Migrated to WordPress",
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
          title="Simply share your vision and requirements with our CMS developer. Free consultation available. "
          buttonText="Share Your Budget Estimation "
          buttonLink="/contact-us"
        />
      </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Why CMS Development Services for Your Business? "
        sectionSubText="If you're not tech-savvy, lack code access, and want a hassle-free way to manage your website, a CMS is your solution. It lets you easily edit, update, and publish content, no coding needed. Here’s why a CMS is the smart choice."
        services={[
          {
            icon: CMSCIcon1,
            heading: " Effortless Content Management",
            text: "Easily update, edit, and publish website content without technical help. Empower your team to maintain accurate, engaging information with complete control and minimal effort."
          },
          {
            icon: CMSCIcon2,
            heading: "Scalable and Flexible Structure",
            text: "CMS platforms grow with your business—add new pages, features, and integrations effortlessly as your needs evolve, without complex redevelopment or technical dependency."
          },
          {
            icon: CMSCIcon3,
            heading: "Cost-Effective & Secure Management",
            text: "Reduce ongoing costs by managing content in-house while assigning specific roles and permissions for secure, efficient, and organized website operations."
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
              titles = "Step-by-Step CMS Development Process"
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

export default CMSDevelopment;