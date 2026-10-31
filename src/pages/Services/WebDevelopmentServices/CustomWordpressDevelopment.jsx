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
import CommonExComponent from "../../../components/CommonExComponent";
import FourStepComponent from "../../../components/Services/FourStepComponent";
import CFAQComponent from "../../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../../components/TestimonialVideoCarousel";
import CWebDevelopmentBanner from "../../../assets/images/Services/CWebDevelopmentBanner.webp";
import CWebDclient from "../../../assets/images/Services/CWebDclient.webp";
import sideCircle from "../../../assets/images/side-circle.png";
import Wordpress from "../../../assets/images/Services/Wordpress.webp";
import CMS from "../../../assets/images/Services/CMS.webp";
import ApiDevelopment from "../../../assets/images/Services/ApiDevelopment.webp";
import WebsitMaintainance from "../../../assets/images/Services/WebsitMaintainance.webp";
import ThemePluginDevelopment from "../../../assets/images/Services/ThemePluginDevelopment.webp";
import WebDesign from "../../../assets/images/Services/WebDesign.webp";
import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import ServicesCover from "../../../components/ServicesCover";
import DSCIcon1 from "../../../assets/images/Services/DSCIcon1.svg";
import DSCIcon2 from "../../../assets/images/Services/DSCIcon2.svg";
import DSCIcon3 from "../../../assets/images/Services/DSCIcon3.svg";
import TAndSSupportAvailable from "../../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";

/**TECH STACK */
import TechStack from "../../../components/TechStack";
import PHP from "../../../assets/images/tech-logos/PHP.webp";
import Html5 from "../../../assets/images/tech-logos/Html5.webp";
import CSS3 from "../../../assets/images/tech-logos/CSS3.webp";
import JS from "../../../assets/images/tech-logos/JS.webp";
import RestApi from "../../../assets/images/tech-logos/RestApi.webp";
import Elementor from "../../../assets/images/tech-logos/Elementor.webp";
import WPBakery from "../../../assets/images/tech-logos/WPBakery.webp";
import BeaverBuilder from "../../../assets/images/tech-logos/BeaverBuilder.webp";
import DiviBuilder from "../../../assets/images/tech-logos/DiviBuilder.webp";
import GenesisFramework from "../../../assets/images/tech-logos/GenesisFramework.webp";
import AstraTheme from "../../../assets/images/tech-logos/AstraTheme.webp";
import OceanWP from "../../../assets/images/tech-logos/OceanWP.webp";
import GeneratePress from "../../../assets/images/tech-logos/GeneratePress.webp";
import WooCommerce from "../../../assets/images/tech-logos/WooCommerce.webp";
import YoastSEO from "../../../assets/images/tech-logos/YoastSEO.webp";
import RankMath from "../../../assets/images/tech-logos/RankMath.webp";
import WPForms from "../../../assets/images/tech-logos/WPForms.webp";
import W3TotalCache from "../../../assets/images/tech-logos/W3TotalCache.webp";
import Updraftplus from "../../../assets/images/tech-logos/Updraftplus.webp";
import GoogleAnalytics from "../../../assets/images/tech-logos/GoogleAnalytics.webp";
import Mailchimp from "../../../assets/images/tech-logos/Mailchimp.webp";

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

const servicesData = [
  {
    img: Wordpress,
    title: "Custom WordPress Website Development",
    desc: "We craft custom WordPress websites with unique themes, optimized performance, and intuitive navigation to deliver seamless, engaging, and conversion-focused user experiences.",
    link: "",
  },
  {
    img: ThemePluginDevelopment,
    title: "Theme & Plugin Development",
    desc: "Our experts design stunning WordPress themes and build powerful plugins that enhance functionality, improve compatibility, and ensure your website performs at its best.",
    link: "",
  },
  {
    img:    CMS,
    title: "WooCommerce & E-Commerce Solutions",
    desc:  "We create scalable WooCommerce stores with secure payment gateways, order tracking, and product management for seamless, mobile-friendly shopping experiences that boost sales.",
    link:  "",
  },
  
  {
    img: WebsitMaintainance,
    title: "Website Optimization & Maintenance",
    desc: "We enhance your website’s speed, security, and performance through optimization, ongoing maintenance, backups, and updates to ensure smooth, reliable, and uninterrupted operation.",
    link: "",
  },
  
  {
    img: ApiDevelopment,
    title: "API Integration & Migration Services",
    desc: "We integrate WordPress with third-party APIs and migrate sites seamlessly from any platform, ensuring data security, full functionality, and zero downtime.",
    link: "",
  },

  {
    img: WebDesign,
    title: "Analytics, CRO & Tracking Setup",
    desc: "We implement analytics tools, conversion rate optimization, and tracking setups to monitor user behavior, improve engagement, and maximize your site’s business performance.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. What is included in WordPress development services?",
    answer: " WordPress development includes theme design, plugin development, customization, performance optimization, SEO setup, security enhancements, and ongoing maintenance."
  },
  {
    question: "2. How long does it take to develop a WordPress website?",
    answer: " Depending on complexity, it typically takes 2–6 weeks to develop a fully functional WordPress website."
  },
  {
    question: "3. Can you customize existing WordPress themes?",
    answer: "Yes, we can fully customize existing themes to match your brand, functionality needs, and design preferences."
  },
  {
    question: "4. Is WordPress good for eCommerce websites?",
    answer: "  Absolutely. With WooCommerce, WordPress becomes a powerful platform for building feature-rich, scalable eCommerce stores."
  },
  {
    question: "5. Do you provide ongoing support after development?",
    answer: " Yes, we offer ongoing maintenance, updates, backups, and support to keep your website secure and up to date."
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

function CustomWordpressDevelopment() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Custom WordPress Development Service"
            title="Custom WordPress Development Services: Get a Secure, Speed Optimized Website"
            description="Boost your website’s performance and drive more leads and sales with our custom WordPress development solutions."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={CWebDevelopmentBanner}
            altText="Custom WordPress Development Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
              title="Perfect Web Services- A Company for White Label WordPress Development Services"
              description="Perfect Web Services is your trusted partner for white label WordPress development services. We empower agencies and businesses by delivering high-quality, scalable, and fully customized WordPress solutions under your brand name. Our expert team ensures seamless execution, timely delivery, and complete confidentiality, helping you expand your offerings without the need for in-house resources."
              buttonText="Get Quote Now"
              buttonLink="/contact-us"
              image={CWebDclient}
              altText="WordPress Development Company"
              sideCircle={sideCircle}
              reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Our WordPress Design And Development Services Include:"
           subtitle="Here are our professional WordPress solutions. Explore Now."
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
        title="Get A Free Website Cost Estimation"
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
          plus: "200+ ",
          bottomText: "WordPress Websites Delivered Successfully",
          icon: TAndSSupportAvailable,
          alt: "Industry"
        },
        {
          plus: "500+",
          bottomText: "custom features and plugin integrations implemented",
          icon: HundredClientSatisfactionrate,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "99%",
          bottomText: "Client Satisfaction with Timely Project Delivery",
          icon: CommittedToOnTimeResults,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: "Mobile-Responsive & SEO-Optimized WordPress Websites",
          icon: HundredQualityAssurance,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "$200",
          bottomText: "Starting WordPress Development Package",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery"
        },
        {
          plus: "70+",
          bottomText: "Websites Successfully Migrated to WordPress",
          icon: ExperiencedAndCertifiedProfessionals,
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
          title="Simply share your vision and requirements with our WordPress experts, and we’ll provide you with a tailored solution to bring your ideas to life."
          buttonText="Share Your Budget Estimation "
          buttonLink="/contact-us"
        />
      </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Perfect Web Services – Your Trusted WordPress Development Partner"
        sectionSubText="Partner with a team of skilled WordPress professionals dedicated to turning your vision into reality. We leverage the latest trends, tools, and best practices across every phase of development strategy and design, from security and code quality to deliver exceptional solutions that stand out in the digital space."
        services={[
          {
            icon: DSCIcon1,
            heading: "Complete WordPress Consulting",
            text: "Get comprehensive consulting to evaluate your project requirements with our WordPress experts. We’ll conduct a detailed feasibility check without breaking your budget."
          },
          {
            icon: DSCIcon2,
            heading: "Results-Driven Process",
            text: "We follow a streamlined, goal-oriented workflow to build feature-rich, engaging WordPress sites that align perfectly with your business objectives."
          },
          {
            icon: DSCIcon3,
            heading: "Transparent Reporting & Quality Control",
            text: "Stay informed with consistent updates and detailed reports. Our thorough testing and QA process ensures you receive a reliable, high-performing final product."
          },
          {
            icon: DSCIcon1,
            heading: "Standards-Compliant Development",
            text: "We adhere strictly to coding standards and industry regulations, ensuring flawless performance in everything from custom themes to plugin development."
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
              titles = "Start Your Journey with Us in 4 Simple Steps"
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

export default CustomWordpressDevelopment;