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
import Wordpress from "../../assets/images/tech-logos/Wordpress.webp";
import CMS from "../../assets/images/Services/CMS.webp";
import WebsitMaintainance from "../../assets/images/Services/WebsitMaintainance.webp";
import ThemePluginDevelopment from "../../assets/images/Services/ThemePluginDevelopment.webp";
import WebDesign from "../../assets/images/Services/WebDesign.webp";

import { Link } from "react-router-dom";
import HireWBanner from "../../assets/images/Hire/HireWBanner.webp";
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
    img: Wordpress,
    title: "Custom WordPress Development",
    desc: "Our developers create fully customized WordPress websites tailored to your business goals, ensuring unique functionality, responsive design, and seamless performance for your audience.",
    link: "/custom-wordpress-development-services",
  },
    {
    img: WooCommerce,
    title: "WooCommerce Development",
    desc: " We design and develop powerful WooCommerce stores with secure payment gateways, advanced product management, and conversion-focused features to maximize sales and customer satisfaction.",
    link: "",
  },
    {
    img: ThemePluginDevelopment,
    title: "Theme Design & Customization",
    desc: " From scratch or premium themes, we craft visually stunning, mobile-friendly designs tailored to your brand, ensuring smooth user experiences and brand consistency.",
    link: "",
  },
    {
    img: WebDesign,
    title: "Plugin Development & Integration",
    desc: "Our experts create and integrate WordPress plugins to extend your site’s features, enhance performance, and streamline complex business operations with ease.",
    link: "",
  },
    {
    img: CMS,
    title: "WordPress CMS & Migration Services",
    desc: " We provide seamless WordPress CMS setup and hassle-free migration from other platforms, ensuring data security, minimal downtime, and improved performance for your business growth.",
    link: "",
  },

  {
    img: WebsitMaintainance,
    title: "WordPress Maintenance & Support",
    desc: "Get ongoing maintenance, updates, backups, and dedicated support to keep your WordPress site secure, reliable, and always performing at its best.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. How long will it take to develop my WordPress website?",
    answer: "The time estimation depends on project size and complexity. Generally, simple sites take 2–3 weeks, while advanced eCommerce or custom builds may require longer."
  },
  {
    question: "2. Will my website design be SEO-optimized from the start?",
    answer: "Yes, we follow SEO best practices, including fast loading speed, mobile responsiveness, proper heading structures, and clean coding to ensure your website ranks well organically."
  },
  {
    question: "3. How do you ensure WooCommerce store security?",
    answer: "We use SSL certificates, regular updates, secure payment gateways, firewalls, and malware scans to protect your WooCommerce store from vulnerabilities, data breaches, and fraud."
  },
  {
    question: "4. Can you optimize my products in WooCommerce for better visibility?",
    answer: "Absolutely. We optimize product titles, descriptions, images, and metadata with keywords, ensuring improved visibility on search engines and better conversion rates in your online store."
  },
  {
    question: "5. Do you offer customization for existing WordPress themes?",
    answer: "Yes, we customize existing WordPress themes by modifying layouts, colors, features, and functionality to match your brand identity while keeping performance and SEO intact."
  }, 
  {
    question: "6. How efficient is your WordPress migration process?",
    answer: "Our WordPress migration process is smooth and secure, ensuring no data loss, minimal downtime, preserved SEO rankings, and improved site performance after migration."
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
import PHP from "../../assets/images/tech-logos/PHP.webp";
import Html5 from "../../assets/images/tech-logos/Html5.webp";
import CSS3 from "../../assets/images/tech-logos/CSS3.webp";
import JS from "../../assets/images/tech-logos/JS.webp";
import RestApi from "../../assets/images/tech-logos/RestApi.webp";
import Elementor from "../../assets/images/tech-logos/Elementor.webp";
import WPBakery from "../../assets/images/tech-logos/WPBakery.webp";
import BeaverBuilder from "../../assets/images/tech-logos/BeaverBuilder.webp";
import DiviBuilder from "../../assets/images/tech-logos/DiviBuilder.webp";
import GenesisFramework from "../../assets/images/tech-logos/GenesisFramework.webp";
import AstraTheme from "../../assets/images/tech-logos/AstraTheme.webp";
import OceanWP from "../../assets/images/tech-logos/OceanWP.webp";
import GeneratePress from "../../assets/images/tech-logos/GeneratePress.webp";
import WooCommerce from "../../assets/images/tech-logos/WooCommerce.webp";
import YoastSEO from "../../assets/images/tech-logos/YoastSEO.webp";
import RankMath from "../../assets/images/tech-logos/RankMath.webp";
import WPForms from "../../assets/images/tech-logos/WPForms.webp";
import W3TotalCache from "../../assets/images/tech-logos/W3TotalCache.webp";
import Updraftplus from "../../assets/images/tech-logos/Updraftplus.webp";
import GoogleAnalytics from "../../assets/images/tech-logos/GoogleAnalytics.webp";
import Mailchimp from "../../assets/images/tech-logos/Mailchimp.webp";

  const techLogos = [
  { name: "PHP", logo: PHP },
  { name: "Html5", logo: Html5 },
  { name: "CSS3", logo: CSS3 },
  { name: "JavaScript", logo: JS },
  { name: "Rest Api", logo: RestApi },
  { name: "Elementor", logo: Elementor },
  { name: "WP Bakery", logo: WPBakery },
  { name: "Beaver Builder", logo: BeaverBuilder },
  { name: "Divi uilder", logo: DiviBuilder },
  { name: "Genesis Framework", logo: GenesisFramework },
  { name: "Astra Theme", logo: AstraTheme },  
  { name: "Ocean WP", logo: OceanWP },
  { name: "Generate Press", logo: GeneratePress },
  { name: "WooCommerce", logo: WooCommerce },
  { name: "YoastSEO", logo: YoastSEO },
  { name: "RankMath", logo: RankMath },
  { name: "WPForms", logo: WPForms },
  { name: "W3TotalCache", logo: W3TotalCache },
  { name: "Updraftplus", logo: Updraftplus },
  { name: "Google Analytics", logo: GoogleAnalytics },
  { name: "Mailchimp", logo: Mailchimp },
  
];



function HireWordpressDeveloper() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} />  
      <HireBanner
        content={{
          title: "Hire a Dedicated WordPress Developer for Your Project",
          description: "Whether you need a dedicated WordPress expert or a skilled team to handle your project, our professionals deliver tailored solutions that match your requirements with quality and affordability.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireWBanner],
          alt:"Hire a Dedicated WordPress Developer",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="WordPress Developers for Modern Websites"
        subText="Bring skilled WordPress experts to your project with our pre-vetted talent. We help you build, customize, and optimize WordPress solutions that boost performance and elevate your brand visibility."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our WordPress Developers’ Expertise to Power Your Projects"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire Wordpress Developer
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our WordPress Developers Use" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free WordPress Development Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring WordPress Developers at PWS"
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

export default HireWordpressDeveloper;
