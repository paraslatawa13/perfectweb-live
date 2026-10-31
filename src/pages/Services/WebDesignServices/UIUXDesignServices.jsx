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
import uiuxBanner from "../../../assets/images/Services/uiux-banner.webp";
import WebAPIclient from "../../../assets/images/Services/uiux-2nd.webp";
import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import SMIcon1 from "../../../assets/images/Services/UI And UX Consulting.webp";
import SMIcon2 from "../../../assets/images/Services/UX Research.webp";
import SMIcon3 from "../../../assets/images/Services/Usability Testing.webp";
import SMIcon4 from "../../../assets/images/Services/Wireframing & Prototyping.webp";
import SMIcon5 from "../../../assets/images/Services/UX Audit.webp";
import SMIcon6 from "../../../assets/images/Services/Design System Audit.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";


/**TECH STACK */
import TechStack from "../../../components/TechStack";
import Axure from "../../../assets/images/tech-logos/UI-UX/Axure.webp";
import Balsamiq from "../../../assets/images/tech-logos/UI-UX/Balsamiq.webp";
import Canva from "../../../assets/images/tech-logos/UI-UX/Canva.webp";
import Figma from "../../../assets/images/tech-logos/UI-UX/Figma.webp";
import Illustrator from "../../../assets/images/tech-logos/UI-UX/Illustrator.webp";
import Photoshop from "../../../assets/images/tech-logos/UI-UX/Photoshop.webp";
import Sketch from "../../../assets/images/tech-logos//UI-UX/Sketch.webp";
import Xd from "../../../assets/images/tech-logos/UI-UX/Xd.webp";


const techLogos = [
  { name: "Axure", logo: Axure },
  { name: "Balsamiq", logo: Balsamiq },
  { name: "Canva", logo: Canva },
  { name: "Figma", logo: Figma },
  { name: "Illustrator", logo: Illustrator },
  { name: "Photoshop", logo: Photoshop },
  { name: "Sketch", logo: Sketch },
  { name: "Xd", logo: Xd },
];


const servicesData = [
  {
    img: SMIcon1,
    title: "UI/UX Consulting",
    desc: "We provide expert UI/UX consulting to help businesses align design strategies with goals, ensuring intuitive, engaging, and conversion-focused digital experiences for users across platforms.",
    link: "",
  },
  {
    img: SMIcon2,
    title: "UX Research",
    desc: "Our UX research uncovers user behavior, needs, and pain points. We use data-driven insights to guide design decisions that improve usability, accessibility, and satisfaction.",
    link: "",
  },
  {
    img: SMIcon3,
    title: "Usability Testing",
    desc: "Through usability testing, we identify gaps in user interaction and optimize workflows. This ensures seamless navigation, enhanced engagement, and improved product efficiency for real users.",
    link: "",
  },
  {
    img: SMIcon4,
    title: "Wireframing & Prototyping",
    desc: "We create detailed wireframes and interactive prototypes to validate ideas early. This reduces risks, speeds development, and ensures designs meet user needs effectively.",
    link: "",
  },
  {
    img: SMIcon5,
    title: "UX Audit",
    desc: "Our UX audit evaluates your digital product for usability flaws. We provide actionable improvements to boost customer satisfaction, retention, and conversion rates.",
    link: "",
  },
  {
    img: SMIcon6,
    title: "Design System Audit",
    desc: "We assess and refine your design system to ensure consistency, accessibility, and scalability, maintaining a strong brand identity across all digital platforms.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. How long does a UI/UX design project take?",
    answer: "Project timelines depend on complexity. A simple app or website may take 1– 2 weeks, while enterprise-level solutions may take more time."
  },
  {
    question: "2. What deliverables can I expect from a UI/UX design service?",
    answer: "Deliverables typically include wireframes, interactive prototypes, user flows, visual designs, design systems, and usability testing reports, ensuring a functional and user-friendly final product."
  },
  {
    question: "3. Do you provide post-design support or improvements?",
    answer: "Yes. After delivery, we offer ongoing support, usability audits, and iterative improvements to ensure your design adapts to changing user needs and technology."
  },
  {
    question: "4. Do you also provide development after UI/UX design?",
    answer: "Yes, we provide complete development services along with UI/UX design, offering discounted pricing for clients choosing both design and development from us."
  },
  {
    question: "5. Which tools do you use for UI/UX design?",
    answer: "We utilize industry-leading tools like Figma, Adobe XD, Sketch, InVision, and Axure to craft engaging, user-friendly, and result-driven UI/UX experiences for clients."
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





function UIUXDesignServices() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
     <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="UI/UX Design"
            title="UI/UX Design Services- Trusted by 500+ Brands"
            description="User experience matters most. We deliver SEO-optimized, fast-loading, and clean designs with smooth user flow that perfectly reflect and support your brand’s needs."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={uiuxBanner}
            altText="UI/UX Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services – User-Centric Web Design that Fuels Business Growth"
                description="According to leading agency reports, 80% of websites experience a decline in traffic due to poor user experience. If your site is dropping visitors, it could be next. Perfect Web Services has been delivering professional UI/UX design services for years, and we also offer a complimentary UI/UX audit for websites and mobile apps."
                buttonText="Get Free Audit Now"
                buttonLink="/contact-us"
                image={WebAPIclient}
                altText="User-Centric Web Design"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container"> 
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              <h2 className="text-center">Complete UI/UX Design Solutions Tailored for Your Brand</h2>
              <hr />
            </div>
            <p className="subhead">We craft user-centric UI/UX solutions for websites, apps, and e-commerce platforms like WordPress, Shopify, and Wix, designed to boost engagement, meet Google Web Vitals, and drive conversions. Explore our UI/UX services below.
</p>
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
        title="Get A Free Product Design Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculation"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Complete UI/UX Design Solutions Tailored for Your Brand" techLogos={techLogos} />
          </div>
      </section>

       
    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="6 Strong Reasons to Work with Us"
      cards={[
        {
          plus: "800+",
          bottomText: "Websites Designed & Developed",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "25+",
          bottomText: "Skilled UI/UX Experts",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "100%",
          bottomText: "Transparent Pricing Model",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "95%",
          bottomText: "On-Time Project Delivery",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "100%",
          bottomText: "SEO & Mobile Optimized Designs",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery"
        },
        {
          plus: "85%",
          bottomText: "Returning Clients & Long-Term Partnerships",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Let' Get’s Started"
      buttonLink="/contact-us"
    /></section>


     


      {/*Free Consultation*/}

      <section className="webd-consulation padd">
        <FreeConsultation
          title="What design solution are you envisioning? Share your ideas, and we provide free wireframing and consultation to bring clarity and direction to every aspect of UI/UX."
          buttonText="Get Proposal Now"
          buttonLink="/contact-us"
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
              titles = "A Strategic, Data-Backed Journey to UI/UX Excellence"
                faqDatas={stepsData}
                btntext ="Contact Us Now"
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

export default UIUXDesignServices;