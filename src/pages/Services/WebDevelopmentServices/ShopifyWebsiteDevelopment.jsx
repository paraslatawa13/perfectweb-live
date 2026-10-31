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
import SYWebDevelopmentBanner from "../../../assets/images/Services/SYWebDevelopmentBanner.webp";
import WebSYclient from "../../../assets/images/Services/WebSYclient.webp";
import Shopify from "../../../assets/images/Services/Shopify.webp";
import StoreOptimization from "../../../assets/images/Services/StoreOptimization.webp";
import ProductManagement from "../../../assets/images/Services/ProductManagement.webp";
import APIintegration from "../../../assets/images/Services/APIintegration.webp";
import MaintenanceCro from "../../../assets/images/Services/MaintenanceCro.webp";
import CustomThemeDesign from "../../../assets/images/Services/CustomThemeDesign.webp";
import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import Seven from "../../../assets/images/Services/Seven.webp";
import Eight from "../../../assets/images/Services/Eight.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import ieIcon from "../../../assets/images/Home/ie-icon.webp";
import cIcon from "../../../assets/images/Home/cs-icon.webp";
import pDIcon from "../../../assets/images/Home/pd-icon.webp";
import ServicesCover from "../../../components/ServicesCover";
import SSCIcon1 from "../../../assets/images/Services/SSCIcon1.webp";
import SSCIcon2 from "../../../assets/images/Services/SSCIcon2.webp";
import SSCIcon3 from "../../../assets/images/Services/SSCIcon3.webp";


import TAndSSupportAvailable from "../../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";


/**TECH STACK */
import TechStack from "../../../components/TechStack";

import Algolia from "../../../assets/images/tech-logos/Shopify/Algolia.webp";
import Bitbucket from "../../../assets/images/tech-logos/Shopify/Bitbucket.webp";
import Bootstrap from "../../../assets/images/tech-logos/Shopify/Bootstrap.webp";
import Cloudflare from "../../../assets/images/tech-logos/Shopify/Cloudflare.webp";
import Express from "../../../assets/images/tech-logos/Shopify/Express.webp";
import GraphQl from "../../../assets/images/tech-logos/Shopify/GraphQl.webp";
import HTML5 from "../../../assets/images/tech-logos/Shopify/HTML5.webp";
import Insomnia from "../../../assets/images/tech-logos/Shopify/Insomnia.webp";
import JavaScript from "../../../assets/images/tech-logos/Shopify/JavaScript.webp";
import JQuery from "../../../assets/images/tech-logos/Shopify/JQuery.webp";
import Liquid from "../../../assets/images/tech-logos/Shopify/Liquid.webp";
import Netlify from "../../../assets/images/tech-logos/Shopify/Netlify.webp";
import PayPal from "../../../assets/images/tech-logos/Shopify/PayPal.webp";
import PostgreSQL from "../../../assets/images/tech-logos/Shopify/PostgreSQL.webp";
import Postman from "../../../assets/images/tech-logos/Shopify/Postman.webp";
import Razorpay from "../../../assets/images/tech-logos/Shopify/Razorpay.webp";
import React from "../../../assets/images/tech-logos/Shopify/React.webp";
import ShopifyCli from "../../../assets/images/tech-logos/Shopify/ShopifyCli.webp";
import ShopifyPlus from "../../../assets/images/tech-logos/Shopify/ShopifyPlus.webp";
import Vercel from "../../../assets/images/tech-logos/Shopify/Vercel.webp";
import VsCode from "../../../assets/images/tech-logos/Shopify/VsCode.webp";
import Zendesk from "../../../assets/images/tech-logos/Shopify/Zendesk.webp";

const techLogos = [
  { name: "ShopifyCli", logo: ShopifyCli },
  { name: "ShopifyPlus", logo: ShopifyPlus },
  { name: "Algolia", logo: Algolia },
  { name: "Bitbucket", logo: Bitbucket },
  { name: "Bootstrap", logo: Bootstrap },
  { name: "Cloudflare", logo: Cloudflare },
  { name: "Express", logo: Express },
  { name: "GraphQL", logo: GraphQl },
  { name: "HTML5", logo: HTML5 },
  { name: "Insomnia", logo: Insomnia },
  { name: "JavaScript", logo: JavaScript },
  { name: "JQuery", logo: JQuery },
  { name: "Liquid", logo: Liquid },  
  { name: "NetlifyP", logo: Netlify },
  { name: "PayPal", logo: PayPal },
  { name: "PostgreSQL", logo: PostgreSQL },
  { name: "Postman", logo: Postman },
  { name: "Razorpay", logo: Razorpay },
  { name: "React", logo: React },
  
  { name: "Vercel", logo: Vercel },
  { name: "VsCode", logo: VsCode },
   { name: "Zendesk", logo: Zendesk },

];

const servicesData = [
  {
    img: Shopify,
    title: "Shopify Store Setup & Configuration",
    desc: "We set up and configure Shopify stores aligned with your business goals, ensuring smooth functionality, quick launch, and professional assistance for a flawless online start.",
    link: "",
  },
  {
    img: CustomThemeDesign,
    title: "Custom Theme Design & Development",
    desc: " Our experts create visually stunning, responsive, and conversion-focused Shopify themes tailored to your brand identity, delivering engaging shopping experiences across all devices and audiences.",
    link: "",
  },
  {
    img: StoreOptimization,
    title: "Store Optimization & SEO Services",
    desc: "We optimize store speed, mobile responsiveness, and on-page SEO to boost visibility, enhance user experience, and improve search rankings for maximum organic reach.",
    link: "",
  },
  {
    img: ProductManagement,
    title: "Product Management & Custom Features",
    desc: "We efficiently manage products and collections, develop tailored functionalities, and ensure streamlined navigation to enhance engagement, retention, and overall shopping satisfaction.",
    link: "",
  },
  {
    img: APIintegration,
    title: "API Integration & Migration Services",
    desc: "We integrate APIs, plug-ins, and migrate stores securely from other platforms to Shopify, maintaining data integrity, SEO performance, and complete design consistency.",
    link: "/custom-api-development-services",
  },
  {
    img: MaintenanceCro,
    title: "Maintenance, CRO & Analytics Setup",
    desc: "We provide continuous support, implement conversion optimization, and set up analytics to track performance, identify opportunities, and maximize your Shopify store’s profitability.",
    link: "/website-maintenance-services",
  },
];


const webDevFAQ = [
  {
    question: "1. How long does it take to develop a Shopify store?",
    answer: "Typically, 2–4 weeks, depending on design complexity, features, product count, and third-party integrations."
  },
  {
    question: "2. Can you customize my existing Shopify theme?",
    answer: "Yes, we can fully customize your current theme to match your branding, improve UX, and add new functionalities as needed."
  },
  {
    question: "3. Will my Shopify store be mobile-friendly?",
    answer: "Absolutely. We ensure your Shopify store is fully responsive, optimized for mobile performance, and delivers a smooth user experience on all devices."
  },
  {
    question: "4. Do you offer SEO optimization for Shopify websites?",
    answer: " Yes, we implement on-page SEO, speed enhancements, and structured data to improve your store’s search visibility and organic traffic."
  },
  {
    question: "5. Can you migrate my website to Shopify from another platform?",
    answer: " Yes, we handle full migrations from platforms like WooCommerce, Magento, or Wix with secure data transfer and zero disruption."
  }
];


const stepsData = [
  {
    img: One,
    title: "Shopify Strategy & Planning",
    desc: "We begin by understanding your business goals, market, and audience to craft a focused Shopify strategy that supports long-term growth and brand success.",
  },
  {
    img: Two,
    title: "Detailed Requirement Gathering",
    desc: "We analyze your specific needs, features, and functional requirements to ensure the development plan aligns perfectly with your business objectives and target customers.",
  },
  {
    img: Three,
    title: "Custom Design & UX Wireframes",
    desc: "Our designers create unique wireframes and mockups to visualize the user journey, ensuring an engaging, responsive, and brand-aligned store experience for all devices.",
  },
  {
    img: Four,
    title: "Theme Development & Functionality Coding",
    desc: "We bring your design to life using clean, efficient code and Liquid templating, integrating essential features, apps, and custom functionalities tailored to your store.",
  },
  {
    img: Five,
    title: "Comprehensive Testing & Quality Checks",
    desc: "Each element undergoes rigorous quality assurance, including browser testing, mobile responsiveness, and performance validation to deliver a flawless, bug-free online store.",
  },
  {
    img: Six,
    title: "Content Population & Secure Migration",
    desc: "We handle content entry and seamlessly migrate product data, customer info, and orders from your old system to Shopify without any loss or disruption.",
  },

  {
    img: Seven, 
    title: "Speed & SEO Optimization",
    desc: "We optimize site speed, structure, and on-page SEO to improve user experience, boost rankings, and drive more traffic to your Shopify store.",
  },
  {
    img: Eight,
    title: "Launch, Training & Final Deployment",
    desc: "After final approval, we launch your store, provide training if needed, and ensure everything runs smoothly with post-deployment checks and support.",
  },
];





function ShopifyWebsiteDevelopment() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
     <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Shopify Website Development Services"
            title="Shopify Development Services: Boost Sales with Our Code Expertise"
            description="Transform your basic Shopify store into a high-performing sales machine. Drive rapid growth and long-term stability with our Shopify development services."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={SYWebDevelopmentBanner}
            altText="Shopify Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- Increase ROI with Our Custom Shopify Development Services"
                description="We understand the value of your investment in your Shopify store and the importance of optimizing it to reach a wider audience of customers. The right themes and designs can significantly boost sales. Our Shopify development services are tailored to meet the needs of every business type and product."
                buttonText="Get Quote Now"
                buttonLink="/contact-us"
                image={WebSYclient}
                altText="Custom Shopify Development Services"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              <h2 className="text-center">Shopify Development Services We Offer</h2>
              <hr />
            </div>
            <p className="subhead">Here is our tailored set of Shopify Development Services. Explore Now.</p>
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
        title="Get A Free Shopify Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Our Technology Stack for Scalable Shopify Development" techLogos={techLogos} />
          </div>
        </section>

       
    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="What Makes Perfect Web Services the Right Partner for You?"
      cards={[
        {
          plus: "100+ ",
          bottomText: "Shopify Websites Delivered Successfully",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "300+",
          bottomText: "custom features and integrations implemented",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "99%",
          bottomText: "Client Satisfaction with Timely Project Delivery",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: "Mobile-Responsive & SEO-Optimized WordPress Websites",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "$200",
          bottomText: "Starting WordPress Development Package",
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
      buttonText="Hire Dedicated Team Now"
      buttonLink="/contact-us"
    /></section>


     


    {/*Free Consultation*/}

      <section className="webd-consulation padd">
        <FreeConsultation
          title="Simply share your vision and requirements with our Shopify experts, and we’ll provide you with a tailored solution to bring your ideas to life."
          buttonText="Share Your Budget Estimation "
          buttonLink="/contact-us"
        />
      </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="What Makes Perfect Web Services a Leading Shopify Development Company"
        sectionSubText="Partner with a team of certified Shopify experts committed to transforming your online store into a high-performing eCommerce platform. At Perfect Web Services, we blend innovative design, modern development practices, and deep platform expertise to deliver scalable, conversion-focused Shopify solutions that give your brand a competitive edge."
        services={[
          {
            icon: SSCIcon1,
            heading: "Strategic Shopify Consultation",
            text: "We analyze your business goals and target audience to craft a customized Shopify strategy that aligns with your growth vision, functionality needs, and long-term success."
          },
          {
            icon: SSCIcon2,
            heading: "Conversion-Driven Development Process",
            text: "Our experts design and develop responsive, high-performing Shopify stores focused on seamless navigation, enhanced engagement, and maximizing sales conversions across all devices."
          },
          {
            icon: SSCIcon3,
            heading: "Transparent Delivery & Quality Assurance",
            text: "Enjoy clear communication, progress visibility, and thorough testing at every stage to ensure your Shopify store performs flawlessly and meets industry best standards"
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
              titles = "Process We follow for Shopify Development"
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

export default ShopifyWebsiteDevelopment;