import "../../App.css";
import "../../Responsive-App.css";
import { Link } from "react-router-dom";
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
import webDevelopmentBanner from "../../assets/images/Web-Development-Banner.webp";
import WebDclient from "../../assets/images/Services/WebDclient.webp";
import sideCircle from "../../assets/images/side-circle.png";
import Wordpress from "../../assets/images/Services/Wordpress.webp";
import Shopify from "../../assets/images/Services/Shopify.webp";
import CMS from "../../assets/images/Services/CMS.webp";
import ApiDevelopment from "../../assets/images/Services/ApiDevelopment.webp";
import WebsitMaintainance from "../../assets/images/Services/WebsitMaintainance.webp";
import WebDesign from "../../assets/images/Services/WebDesign.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import One from "../../assets/images/Services/one.svg";
import Two from "../../assets/images/Services/two.svg";
import Three from "../../assets/images/Services/three.svg";
import Four from "../../assets/images/Services/four.svg";
import calcfreeImage from "../../assets/images/calcfreeImage.webp";
import ServicesCover from "../../components/ServicesCover";
import DSCIcon1 from "../../assets/images/Services/DSCIcon1.svg";
import DSCIcon2 from "../../assets/images/Services/DSCIcon2.svg";
import DSCIcon3 from "../../assets/images/Services/DSCIcon3.svg";
import TAndSSupportAvailable from "../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../assets/images/badge/TrustedByGlobalBussinesses.webp";


/**TECH STACK */

import TechStack from "../../components/TechStack";
import Angular from "../../assets/images/tech-logos/Angular.webp";
import Codelgniter from "../../assets/images/tech-logos/Codelgniter.webp";
import CSS3 from "../../assets/images/tech-logos/CSS3.webp";
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
import SQL_Server from "../../assets/images/tech-logos/SQL_Server.webp";
import MySQL from "../../assets/images/tech-logos/SQL.webp";
import Squarespace from "../../assets/images/tech-logos/Squearespace.webp";
import Weebly from "../../assets/images/tech-logos/Weebly.webp";
import Wix from "../../assets/images/tech-logos/Wix.webp";

  const techLogos = [
  { name: "Angular", logo: Angular },
  { name: "React", logo: ReactLogo },
  { name: "PHP", logo: PHP },
  { name: "Node.js", logo: NodeJs },
  { name: "Wordpress", logo: Wordpress },
  { name: "Shopify", logo: Shopify },
  { name: "SQL Server", logo: SQL_Server },
  { name: "JavaScript", logo: JS },
  { name: "CSS3", logo: CSS3 },
  { name: "MongoDB", logo: MongoDB },
  { name: "MySQL", logo: MySQL },
  { name: "JQuery", logo: Jquery },
  { name: "Laravel", logo: Laravel },
  { name: "Squarespace", logo: Squarespace },
  { name: "Weebly", logo: Weebly },
  { name: "Wix", logo: Wix },
  { name: "Codelgniter", logo: Codelgniter },
  { name: "Magento", logo: Magento },
  { name: "Joomla", logo: Joomla },
  { name: "Python", logo: Python },
  
];

const servicesData = [
  {
    img: Shopify,
    title: "E-Commerce and Shopify Development Services",
    desc: "Let our eCommerce development experts elevate your business by crafting a cutting-edge online store that delivers a seamless and engaging shopping experience.",
    link: "/shopify-website-development-services",
  },
  {
    img: Wordpress,
    title: "WordPress Development Services",
    desc: "Leverage the power of WordPress with our expert developers to build dynamic, customizable, and SEO-friendly websites that elevate your brand and deliver exceptional user experiences.",
    link: "/custom-wordpress-development-services",
  },
  {
    img: CMS,
    title: "CMS Development Services",
    desc: "As a trusted custom website development company, we utilize the latest tools and technologies to create feature-rich web solutions that captivate and convert visitors.",
    link: "/cms-development-services",
  },
  {
    img: ApiDevelopment,
    title: "API Development and Integration",
    desc: "Enhance your digital ecosystem with our API development and integration services, enabling seamless data exchange, improved functionality, and smooth connectivity across platforms and applications.",
    link: "/custom-api-development-services",
  },
  {
    img: WebsitMaintainance,
    title: "Website Maintenance & Support",
    desc: "Ensure your website runs flawlessly with our reliable maintenance and support services, covering updates, security, performance optimization, and technical issue resolution around the clock.",
    link: "/website-maintenance-services",
  },
  {
    img: WebDesign,
    title: "Website Design and Redesign Services",
    desc: "Revamp your online presence with our creative design and redesign services that deliver visually stunning, user-centric, and conversion-focused websites tailored to your brand identity.",
    link: "/web-design-services",
  },
];


const webDevFAQ = [
  {
    question: "1. What is included in your web development services?",
    answer: "Our web development services cover custom websites, CMS, e-commerce stores, responsive design, API integration, SEO optimization, and ongoing maintenance."
  },
  {
    question: "2. How much does web development cost?",
    answer: "The cost depends on website size, features, and technology stack. Our pricing starts affordably and scales with complexity, ensuring value-driven, business-oriented web development solutions."
  },
  {
    question: "3. How long does it take to develop a website?",
    answer: "A standard website takes 4–6 weeks, while complex platforms require longer. Timelines depend on design, functionality, revisions, and your business requirements for completion."
  },
  {
    question: "4. Do you develop mobile-friendly and SEO-optimized websites?",
    answer: " Yes, every website we build is mobile-responsive, SEO-optimized, and aligned with Google Web Vitals, ensuring faster load speeds, improved rankings, and better user engagement."
  },
  {
    question: "5. Do you provide post-launch support and maintenance?",
    answer: "  Absolutely. We offer ongoing support, updates, bug fixes, and security enhancements, ensuring your website performs seamlessly and continues driving results after launch."
  }
];


const stepsData = [
  {
    img: One,
    title: "Tell Us Your Vision",
    desc: "Share your requirements, goals, and target audience with our team on a call or through a document to ensure alignment with your vision from the very beginning.",
  },
  {
    img: Two,
    title: "Choose the Right Fit",
    desc: "Based on your needs, we recommend the best engagement model, whether it's a dedicated developer team or a project-based approach, to ensure optimal delivery.",
  },
  {
    img: Three,
    title: "Plan & Prepare",
    desc: "Once approved, we lay a solid foundation by defining the project roadmap, timelines, and technical structure to guarantee a smooth and efficient workflow.",
  },
  {
    img: Four,
    title: "Deliver with Precision",
    desc: "Development kicks off and delivery begins within days. We ensure a seamless, high-performance website built to exceed expectations and deliver measurable results.",
  },
];





function WebDevelopment() {
   const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    
    <div className="maint">
     
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Web Development"
            title="Custom Web Development Services- Client-focused, Customer-Centric Solutions"
            description="Creating website solutions that deliver tangible business results, Perfect Web Services' web developers help brands navigate the ever-changing digital landscape."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={webDevelopmentBanner}
            altText="Web Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- A Trusted Web Development Company by 1000+ Clients"
                description="Perfect Web Services is home to expert offshore web developers committed to building powerful, user-friendly, and scalable websites. We help you strengthen your brand presence, boost conversion rates, and stand out in the competitive digital landscape. Trusted by 1000+ clients worldwide, we deliver results-driven solutions that align with your business goals and drive long-term success."
                buttonText="Get Quote Now"
                buttonLink="/contact-us"
                image={WebDclient}
                altText="Web development company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Our Professional Web Development Services Include:"
           subtitle="Here are our professional web services and solutions. Explore Now."
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
        title="Get A Free Product Cost Estimation"
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
      title="What Makes Perfect Web Services the Right Partner for You?"
      cards={[
        {
          plus: "1000+ ",
          bottomText: "Websites and Applications Developed Worldwide",
          icon: CommittedToOnTimeResults,
          alt: "Industry"
        },
        {
          plus: "99%",
          bottomText: "Client Satisfaction with Timely Project Delivery",
          icon: HundredClientSatisfactionrate,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "20+",
          bottomText: "Skilled Developers, Designers & Strategists",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery"
        },
        {
          plus: "95%",
          bottomText: "Repeat Client Rate Reflecting Trust and Quality",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "6+",
          bottomText: "Years of Proven Web Development Expertise",
          icon: TAndSSupportAvailable,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: "Mobile-Responsive & SEO-Optimized Websites",
          icon: HundredQualityAssurance,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Hire Dedicated Team Now"
      buttonLink="/contact-us"
    />
    </section>

    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="We don’t just empower big brands, we’re dedicated to helping startups and small businesses grow online with powerful solutions that won’t strain your budget."
        buttonText="Share Your Budget Estimation "
        buttonLink="/contact-us"
      />
    </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Our Full Stack Web Development Services Cover"
        sectionSubText="We are a dynamic web development company and consulting firm offering full-stack development services, including front-end and back-end web development, at affordable prices. From high-quality design to complete development, we handle everything."
        services={[
          {
            icon: DSCIcon1,
            heading: "Front-End Development",
            text: "With the help of the latest and high-quality front-end technologies like HTML, CSS, and JavaScript, our developers are ready to deliver innovative user interfaces that add unmatched value to your business."
          },
          {
            icon: DSCIcon2,
            heading: "Back-End Development",
            text: "We provide web and cloud-based solutions across various domains, with expert back-end developers ensuring a stable, value-driven environment using technologies like Node.js and Laravel."
          },
          {
            icon: DSCIcon3,
            heading: "Database Development",
            text: "As a trusted web development company, we design and manage a wide range of databases and seamlessly integrate them into your project to enhance data security and accessibility."
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
              titles = "Kickstart Your Journey with Us in 4 Simple Steps"
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
    </div>
     </>
  );
}

export default WebDevelopment;