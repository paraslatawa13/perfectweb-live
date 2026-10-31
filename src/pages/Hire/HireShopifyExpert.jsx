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
import StoreOptimization from "../../assets/images/services/StoreOptimization.webp";
import APicon4 from "../../assets/images/Services/APicon4.webp";
import WebsitMaintainance from "../../assets/images/Services/WebsitMaintainance.webp";
import SMIcon4 from "../../assets/images/Services/SMIcon4.webp";
import CustomThemeDesign from "../../assets/images/Services/CustomThemeDesign.webp";
import AppDesign from "../../assets/images/Services/AppDesign.webp";
import { Link } from "react-router-dom";
import HireSBanner from "../../assets/images/Hire/HireSBanner.webp";
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
    img: StoreOptimization,
    title: "Shopify Store Setup & Configuration",
    desc: "Launch your online store quickly with expert Shopify setup. From theme installation to payment gateways, we configure everything for smooth functionality and hassle-free selling.",
    link: "/shopify-website-development-services",
  },
    {
    img: CustomThemeDesign,
    title: "Custom Shopify Theme Design",
    desc: "Stand out with a unique, conversion-focused theme. Our designers craft visually appealing, responsive, and user-friendly Shopify designs aligned with your brand identity.",
    link: "",
  },
    {
    img: AppDesign,
    title: "Shopify App Integration",
    desc: " Boost store performance with powerful apps. We integrate essential Shopify apps for marketing, analytics, inventory, and customer engagement to streamline your eCommerce operations.",
    link: "",
  },
    {
    img: SMIcon4,
    title: "Shopify Store Migration",
    desc: "Switch platforms seamlessly with zero data loss. We migrate products, customers, and orders to Shopify while ensuring optimized performance, accurate mapping, and improved functionality.",
    link: "",
  },
    {
    img: APicon4,
    title: "Shopify API Integration",
    desc: " Unlock advanced functionality with Shopify APIs. We develop and integrate custom API solutions to connect third-party tools, automate workflows, and enhance store capabilities.",
    link: "",
  },

  {
    img: WebsitMaintainance,
    title: "Shopify Maintenance & Support",
    desc: "Keep your store running at peak performance. Our ongoing support covers updates, security, troubleshooting, and enhancements for a reliable, growth-ready Shopify store.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. How long does it take to build a Shopify store?",
    answer: "A Shopify store can be launched within days, depending on requirements. Custom features, design complexity, and integrations may extend the overall development timeline."
  },
  {
    question: "2. Can you migrate my existing store to Shopify with SEO?",
    answer: "We seamlessly migrate products, customers, and orders from WooCommerce, Magento, or other platforms while preserving your website’s SEO rankings and overall performance."
  },
  {
    question: "3. Do you offer ongoing Shopify support?",
    answer: "Yes, we provide regular updates, troubleshooting, performance monitoring, and security support to keep your Shopify store stable, secure, and optimized for continuous growth."
  },
  {
    question: "4. Can you optimize my Shopify store for speed?",
    answer: "Definitely. We improve site speed by optimizing images, themes, and code. A faster store ensures higher conversions, better SEO rankings, and improved customer experience."
  },
  {
    question: "5. Do you also work on non-Shopify projects?",
    answer: "Yes, our team handles diverse eCommerce and web development projects beyond Shopify, including WooCommerce, Magento, WordPress, and custom API solutions with complete support."
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
  { img: HIconOne, text:   "Share Your Requirements" },
  { img: HIconTwo, text:   "Talent Shortlisting" },
  { img: HIconThree, text: "Interview & Selection" },
  { img: HIconFour, text:  "Flexible Engagement Models" },
  { img: HIconFive, text:  "Onboarding & Kickoff" },
  { img: HIconSix, text:   "Continuous Support" }, 
];


/**TECH STACK */
import TechStack from "../../components/TechStack";

import Algolia from "../../assets/images/tech-logos/Shopify/Algolia.webp";
import Bitbucket from "../../assets/images/tech-logos/Shopify/Bitbucket.webp";
import Bootstrap from "../../assets/images/tech-logos/Shopify/Bootstrap.webp";
import Cloudflare from "../../assets/images/tech-logos/Shopify/Cloudflare.webp";
import Express from "../../assets/images/tech-logos/Shopify/Express.webp";
import GraphQl from "../../assets/images/tech-logos/Shopify/GraphQl.webp";
import HTML5 from "../../assets/images/tech-logos/Shopify/HTML5.webp";
import Insomnia from "../../assets/images/tech-logos/Shopify/Insomnia.webp";
import JavaScript from "../../assets/images/tech-logos/Shopify/JavaScript.webp";
import JQuery from "../../assets/images/tech-logos/Shopify/JQuery.webp";
import Liquid from "../../assets/images/tech-logos/Shopify/Liquid.webp";
import Netlify from "../../assets/images/tech-logos/Shopify/Netlify.webp";
import PayPal from "../../assets/images/tech-logos/Shopify/PayPal.webp";
import PostgreSQL from "../../assets/images/tech-logos/Shopify/PostgreSQL.webp";
import Postman from "../../assets/images/tech-logos/Shopify/Postman.webp";
import Razorpay from "../../assets/images/tech-logos/Shopify/Razorpay.webp";
import React from "../../assets/images/tech-logos/Shopify/React.webp";
import ShopifyCli from "../../assets/images/tech-logos/Shopify/ShopifyCli.webp";
import ShopifyPlus from "../../assets/images/tech-logos/Shopify/ShopifyPlus.webp";
import Vercel from "../../assets/images/tech-logos/Shopify/Vercel.webp";
import VsCode from "../../assets/images/tech-logos/Shopify/VsCode.webp";
import Zendesk from "../../assets/images/tech-logos/Shopify/Zendesk.webp";

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


function HireShopifyExpert() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire a Dedicated Shopify Developer for Your Shopify Store",
          description: "Whether you need a single Shopify expert or a dedicated team, our professionals deliver end-to-end solutions, from store setup to marketing success.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireSBanner],
          alt:"Hire a Dedicated Shopify Developer",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Shopify Developers for Fast, Profitable Stores"
        subText="Bring trusted Shopify developers to your project through our carefully selected experts. We deliver fast, revenue-focused Shopify stores that boost performance and maximise conversions."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our Shopify Developers’ Expertise to Build and Scale Your Store"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire Shopify Expert Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our Shopify Developers Use" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free Shopify Development Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring Shopify Developers at PWS"
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

export default HireShopifyExpert;
