import "../../App.css";
import "../../Responsive-App.css";
import CommonHeroSection from "../../components/CommonHeroSection";
import FreeConsultation from "../../components/freeConsultation";
import FreeEstimationSection from "../../components/FreeEstimationSection";
import ImageWithText from "../../components/ImageWithText";
import ServicesSection from "../../components/CommonServicesSection";
import GridComponent from "../../components/Services/GridComponent";
import ExComponent from "../../components/ExComponent";
import FourStepComponent from "../../components/Services/FourStepComponent";
import CFAQComponent from "../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../components/TestimonialVideoCarousel";
import WebDesignBanner from "../../assets/images/Services/WebDesignBanner.webp";
import WebDS from "../../assets/images/Services/WebDS.webp";
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
import BrandIdentity from "../../assets/images/Services/BrandIdentity.webp";
import BusinessGrowth from "../../assets/images/Services/BusinessGrowth.webp";
import Engagement from "../../assets/images/Services/Engagement.webp";
import ResponsiveWebsite from "../../assets/images/Services/ResponsiveWebsite.webp";
import UIDesign from "../../assets/images/Services/UIDesign.webp";
import EcommerceWebsite from "../../assets/images/Services/EcommerceWebsite.webp";
import AppDesign from "../../assets/images/Services/AppDesign.webp";
import WebsiteRedesign from "../../assets/images/Services/WebsiteRedesign.webp";
import CmsBasedWebsite from "../../assets/images/Services/CmsBasedWebsite.webp";
import { useMeta } from "../../hooks/useMeta";
import MetaHelmet from "../../reusablecomponents/MetaHelmet";



/**TECH STACK */
import TechStack from "../../components/TechStack";

import Wordpress from "../../assets/images/Services/Wordpress.webp";
import Shopify from "../../assets/images/Services/Shopify.webp";
import Wix from "../../assets/images/tech-logos/Wix.webp";
import Figma from "../../assets/images/tech-logos/Figma.webp";
import Xd from "../../assets/images/tech-logos/Xd.webp";
import SketchLogo from "../../assets/images/tech-logos/SketchLogo.webp";
import Canva from "../../assets/images/tech-logos/Canva.webp";
import Photoshop from "../../assets/images/tech-logos/Photoshop.webp";
import Html5 from "../../assets/images/tech-logos/Html5.webp";
import CSS3 from "../../assets/images/tech-logos/CSS3.webp";
import JS from "../../assets/images/tech-logos/JS.webp";
import ReactLogo from "../../assets/images/tech-logos/React.webp";
import Vuejs from "../../assets/images/tech-logos/Vuejs.webp";
import Tailwind from "../../assets/images/tech-logos/Tailwind.webp";
import Bootstrap from "../../assets/images/tech-logos/Bootstrap.webp";
import FramerMotion from "../../assets/images/tech-logos/FramerMotion.webp";
import Lottie from "../../assets/images/tech-logos/Lottie.webp";
import InVision from "../../assets/images/tech-logos/Invision.webp";
import Zeplin from "../../assets/images/tech-logos/Zeplin.webp";
import GoogleLighthouse from "../../assets/images/tech-logos/GoogleLighthouse.webp";
import Browserstack from "../../assets/images/tech-logos/Browserstack.webp";


  const techLogos = [
  { name: "Wordpress", logo: Wordpress },
  { name: "Shopify", logo: Shopify },
  { name: "Wix", logo: Wix },
  { name: "Figma", logo: Figma },
  { name: "Adobe XD", logo: Xd },
  { name: "Sketch", logo: SketchLogo },
  { name: "Canva", logo: Canva },
  { name: "Photoshop", logo: Photoshop },
  { name: "Html5", logo: Html5 },
  { name: "CSS3", logo: CSS3 },
  { name: "JavaScript(ES6+)", logo: JS }, 
  { name: "React.js", logo: ReactLogo },
  { name: "Vue.js", logo: Vuejs },
  { name: "Tailwind", logo: Tailwind },
  { name: "Bootstrap", logo: Bootstrap },
  { name: "Framer Motion", logo: FramerMotion },
  { name: "Lottie", logo: Lottie },
  { name: "InVision", logo: InVision },
  { name: "Zeplin", logo: Zeplin },
  { name: "Google Lighthouse", logo: GoogleLighthouse },
  { name: "BrowserStack", logo: Browserstack },
  
];

const servicesData = [
  {
    img: ResponsiveWebsite,
    title: "Custom & Responsive Website Design",
    desc: "We craft tailored websites that reflect your brand identity, fully responsive across all devices, ensuring seamless navigation, stunning visuals, and engaging user experiences for maximum impact.",
    link: "#",
  },
  {
    img: UIDesign,
    title: "UI/UX Design Services",
    desc: "We design intuitive user interfaces and seamless experiences that enhance customer satisfaction, reduce bounce rates, and drive higher engagement with visually appealing, conversion-focused layouts.",
    link: "#",
  },
  {
    img: EcommerceWebsite,
    title: "E-Commerce Website Design",
    desc: "Our e-commerce designs deliver optimized product pages, secure checkout, and smooth navigation on Shopify, WooCommerce, and Magento—helping businesses maximize conversions and grow online revenue.",
    link: "#",
  },
  {
    img: CmsBasedWebsite,
    title: "CMS-Based Website Design",
    desc: "We build scalable, SEO-friendly websites using WordPress, Joomla, and Wix, enabling easy content management while ensuring speed, performance, and long-term business growth.",
    link: "#",
  },
  {
    img: WebsiteRedesign,
    title: "Website Redesign Services",
    desc: "We revamp outdated websites with modern, conversion-driven designs, improved SEO, and enhanced performance to attract more customers and keep your brand competitive.",
    link: "#",
  },
  {
    img: AppDesign,
    title: "App Design (iOS & Android)",
    desc: "We create engaging mobile app designs with intuitive navigation, sleek interfaces, and interactive elements—delivering an excellent user experience that improves retention and satisfaction.",
    link: "#",
  },
];


const webDevFAQ = [
  {
    question: "1. How long does it take to design a website?",
    answer: "A website typically takes 1–6 weeks, depending on size, complexity, and revisions. Custom features or e-commerce functionality may extend the timeline."
  },
  {
    question: "2. What is included in your web design services?",
    answer: "Our services include responsive design, UI/UX optimization, CMS integration, SEO-ready structure, speed optimization, testing, and ongoing support for flawless performance and conversions."
  },
  {
    question: "3. Do you provide SEO-friendly websites?",
    answer: "Yes, every website is built with SEO best practices, fast loading speed, clean code, and optimized structures to help rank better on search engines."
  },
  {
    question: "4. Will Website Redesigning Cost be the same as a new website?",
    answer: "The cost of website redesign depends on the total pages and additional functionalities required. Share your requirements with us today and receive a tailored custom quote."
  },
  {
    question: "5. What platforms do you design websites on?",
    answer: "We work with WordPress, Shopify, Wix, Webflow, Magento, and custom-coded solutions to create powerful, scalable, and easy-to-manage websites tailored to your business."
  }, 

  {
    question: "6. Do you provide support after the website goes live?",
    answer: "Yes, we offer ongoing support, updates, bug fixes, and enhancements after launch to ensure your website continues to perform smoothly and securely."
  }
];


const stepsData = [
  {
    img: One,
    title: "Discovery & Define",
    desc: "We begin by understanding your business goals, target audience, and project requirements, ensuring the design strategy perfectly aligns with your brand vision.",
  },
  {
    img: Two,
    title: "Creative Design",
    desc: "Our designers craft engaging layouts, stunning visuals, and intuitive interfaces focused on user experience, ensuring your website reflects professionalism while captivating visitors effectively.",
  },
  {
    img: Three,
    title: "Smart Development",
    desc: "We transform approved designs into functional, responsive, and SEO-friendly websites using the latest technologies, ensuring performance, scalability, and seamless integration across all devices.",
  },
  {
    img: Four,
    title: "Rigorous Testing",
    desc: "Every element is tested for speed, responsiveness, functionality, and usability. We ensure your website performs flawlessly across browsers, devices, and user scenarios before launch.",
  },
  {
    img: Five,
    title: "Smooth Deployment",
    desc: "Once tested and approved, your website goes live with zero disruptions. We manage a hassle-free launch, ensuring optimal performance and immediate availability to users.",
  },
  {
    img: Six,
    title: "Ongoing Support",
    desc: "We provide continuous monitoring, timely updates, and dedicated support to keep your website secure, up-to-date, and optimized for long-term growth and business success.",
  },
];





function WebDesigns() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Web Design Services"
            title="Professional Web Design Services to Drive More Traffic & Sales"
            description="Have a website but no traffic? Need a design that converts visitors into customers? You’re at the right place. We craft designs tailored to your brand."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={WebDesignBanner}
            altText="Professional Web Design Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="High Quality Website Design with Affordable Pricing"
                description="Perfect Web Services has been crafting professional web design solutions for years. We don’t just design websites, we build digital experiences that elevate brands and drive results. If your website fails to attract traffic or convert visitors into customers, it’s time to invest in a design that works."
                buttonText="Get Free Consultation Now"
                buttonLink="/contact-us"
                image={WebDS}
                altText="Website Design with Affordable Pricing"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Comprehensive Web Design Solutions We Provide"
           subtitle="We provide custom design solutions across leading CMS, app technologies, and e-commerce platforms like WordPress, Shopify, and Wix, SEO-optimized and aligned with Google Web Vitals. Explore our design services below."
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
        title="Get A Free Product Design Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Modern Web Design Technologies Powering Our Solutions" techLogos={techLogos} />
          </div>
        </section>

         
    {/*Right Partner Section*/}
    <section className="experience-section padd clip-section pb-0">
      <ExComponent 
       title="Why Choose Perfect Web Services for Web Design Services"
       
       plus ="800+"
       plusText = "Designing Projects Delivered"
      leftOneh = "Proven track record in delivering measurable marketing results across industries."
       
      clientSH = "24/7 Support Available"
       clientSP = "Round-the-clock assistance to keep your brand always moving forward."
       
       leftTwoh = "95% "
       leftThreeh = "On-Time Delivery"
       leftfourh = "Reliable processes ensure your projects are delivered on schedule."
       
       leftfour = "100% Quality Assurance"
       leftfive = " We deliver pixel-perfect designs with unmatched attention to detail."
       
       middleOne = "100%"
       middleTwo = "Transparent Pricing Model"
       middleTwoP = "Clear, honest pricing with no hidden costs or surprises."
       
       rightOne = "20+ Designing Experts"
       rightTwo = "Skilled professionals bringing creativity, strategy, and innovation to every project."
      />
    </section>


     


    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="We term our services as “affordable web design services” because we provide top-quality designs that enhance your brand without adding extra strain to your budget."
        buttonText="Get Design Proposal Now "
        buttonLink="/contact-us"
      />
    </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Benefits of Investing in a High-End Website Design"
        sectionSubText=""
        services={[
          {
            icon: BrandIdentity,
            heading: "Build a Strong Brand Identity",
            text: "A premium website design strengthens your brand presence, communicates professionalism, and creates a lasting impression that builds trust and recognition among your target audience across all digital platforms."
          },
          {
            icon: BusinessGrowth,
            heading: "Enhance User Experience and Engagement",
            text: "High-end designs ensure smooth navigation, fast loading, and intuitive layouts that keep visitors engaged, reduce bounce rates, and encourage users to explore more of your products or services."
          },
          {
            icon: Engagement,
            heading: "Improve Conversions and Business Growth",
            text: "A strategically designed website guides users toward key actions, like inquiries or purchases, boosting conversions, customer retention, and overall revenue growth while maximizing your online marketing ROI effectively."
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
              titles = "Step-by-Step Website Design Workflow"
                faqDatas={stepsData}
                btntext ="Get Web Design Proposal"
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

export default WebDesigns;