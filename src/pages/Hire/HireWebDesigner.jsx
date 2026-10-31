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
import WEBSITE_REDESIGN from "../../assets/images/hire/WEBSITE_REDESIGN.webp";
import E_commerce_SEO from "../../assets/images/hire/E_commerce_SEO.webp";
import Custom_Website_Design_Logo from "../../assets/images/hire/Custom_Website_Design_Logo.webp";
import Responsive_Website from "../../assets/images/hire/Responsive_Website.webp";
import Landing_Page_Creation from "../../assets/images/hire/Landing_Page_Creation.webp";

import { Link } from "react-router-dom";
import HireWebBanner from "../../assets/images/Hire/HireWebBanner.webp";
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
    img: UI_Design,
    title: "UI/UX Design",
    desc: "We craft intuitive, user-centered designs that enhance usability, improve engagement, and ensure every visitor enjoys a seamless and memorable browsing experience.",
    link: "/ui-ux-design-services",
  },
    {
    img: WEBSITE_REDESIGN,
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, high-performing designs that align with your brand identity, improve navigation, and boost user retention and conversions.",
    link: "",
  },
    {
    img: Responsive_Website,
    title: "Responsive Web Design",
    desc: " Our designers create fully responsive websites that deliver smooth performance and stunning visuals across desktops, tablets, and mobile devices for maximum reach.",
    link: "",
  },
    {
    img: Landing_Page_Creation,
    title: "Landing Page Design",
    desc: "We design high-converting landing pages focused on user intent, compelling visuals, and clear calls-to-action to maximize leads and sales opportunities.",
    link: "",
  },
    {
    img: E_commerce_SEO,
    title: "E-commerce Website Design",
    desc: "From product layouts to checkout flow, we design e-commerce websites that balance aesthetics and functionality to drive higher conversions and customer satisfaction.",
    link: "",
  },

  {
    img: Custom_Website_Design_Logo,
    title: "Custom Website Design",
    desc: "Our experts build tailored website designs from scratch that reflect your brand personality, align with business goals, and deliver a unique digital identity.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Why should I hire a professional web designer for my business?",
    answer: "A professional web designer ensures your website is visually engaging, mobile-friendly, SEO-optimized, and delivers a smooth user experience that builds credibility and drives conversions."
  },
  {
    question: "2. How long does it take to design and develop a website?",
    answer: "Depending on project complexity, web design typically takes 2–6 weeks, including research, design, revisions, and development to ensure a fully functional, custom-built website."
  },
  {
    question: "3. Will my website be mobile-friendly and SEO-optimized?",
    answer: "Yes, every website we design is fully responsive and SEO-optimized to ensure fast loading, better rankings, and excellent user experience on all devices."
  },
  {
    question: "4. Can you redesign my existing website to make it more modern and effective?",
    answer: "Absolutely! We can revamp your current website with a fresh design, improved navigation, and performance enhancements to match modern trends and brand identity."
  },
  {
    question: "5. What information do you need from me to start the web design process?",
    answer: "We’ll need your brand guidelines, content, preferred style, target audience details, and functionality goals to create a website that perfectly aligns with your vision."
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


function HireWebDesigner() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire a Dedicated Web Designer",
          description: "Create visually stunning, user-friendly, and high-performing websites that elevate your brand and drive results with Perfect Web Services’ dedicated web designers.",
          buttonText: "Start Your Project at $15/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireWebBanner],
          alt: "Hire a Dedicated Web Designer",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Bring Your Vision to Life With Our Web Design Experts"
        subText="From concept to launch, we blend creativity with strategy to deliver designs that enhance engagement, strengthen credibility, and support your business goals with a seamless digital experience."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our Web Designers’ Range of Creative Services"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire Web Designer Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our Web Designer Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free Web Design Cost Estimation"
        description="Not sure how much your website or app will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring Web Designers at PWS"
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

export default HireWebDesigner;
