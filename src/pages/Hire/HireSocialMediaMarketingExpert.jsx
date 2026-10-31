
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
import Content_Creation_Curation from "../../assets/images/Hire/Content_Creation_Curation.webp";
import Strategic_Planning_and_Adaptability from "../../assets/images/Hire/Strategic_Planning_and_Adaptability.webp";
import Audience_Understanding from "../../assets/images/Hire/Audience_Understanding.webp";
import Data_Analysis_and_Insights from "../../assets/images/Hire/Data_Analysis_and_Insights.webp";
import Paid_Social_Advertising from "../../assets/images/Hire/Paid_Social_Advertising.webp";
import Community_Engagement from "../../assets/images/Hire/Community_Engagement.webp";
import HirePPCBanner from "../../assets/images/Hire/HirePPCBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";

const hiringData = [
  {
    heading: " Full-Time Hiring",
    content:
      "Hire a dedicated Social Media expert to work exclusively on your projects, ensuring consistent performance, faster execution, and complete focus on your marketing goals.",
  },
  {
    heading: "Part-Time Hiring",
    content:
      "Ideal for small businesses or startups, get flexible support for every aspect of ppc services.",
  },
  {
    heading: "Hourly or Project-Based Hiring",
    content:
      "Engage our social media experts for short-term projects or hourly tasks.",
  },
];




const servicesData = [
  {
    img: Content_Creation_Curation,
    title: "Content Creation and Curation",
    desc: "Crafting engaging captions, designing scroll-stopping visuals, producing videos, and sharing meaningful content that connects emotionally and builds a consistent brand identity across platforms.",
    link: "",
  },
    {
    img: Strategic_Planning_and_Adaptability,
    title: "Strategic Planning and Adaptability",
    desc: "Developing cohesive social media strategies with clear goals, the right platform selection, and adaptive content plans aligned with business objectives and evolving trends.",
    link: "",
  },
    {
    img: Audience_Understanding,
    title: "Audience Understanding",
    desc: "Analyzing audience demographics, interests, and behavior to create tailored content strategies that resonate with followers and encourage stronger engagement and loyalty.",
    link: "",
  },
    {
    img: Data_Analysis_and_Insights,
    title: "Data Analysis and Insights",
    desc: "nterpreting engagement metrics, conversion data, and post-performance analytics to optimize campaign strategies and enhance ROI through continuous improvement.",
    link: "",
  },
    {
    img: Paid_Social_Advertising,
    title: "Paid Social Advertising",
    desc: "Designing, managing, and optimizing paid campaigns on platforms like Facebook, Instagram, and LinkedIn to increase reach, conversions, and brand visibility effectively.",
    link: "",
  },

  {
    img: Community_Engagement,
    title: "Community Engagement and Brand Management",
    desc: "Building meaningful conversations, managing feedback, and maintaining brand reputation by actively engaging with followers and fostering a loyal online community.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. How long will social media marketing take for my business?",
    answer: "Social media marketing is an ongoing process. Typically, visible engagement and follower growth start within 2–3 months of consistent posting and strategy execution."
  },
  {
    question: "2. How can I evaluate your efforts’ results for my social media channels?",
    answer: "We provide monthly performance reports that show engagement, reach, traffic, and conversion metrics, enabling you to clearly measure growth, ROI, and campaign effectiveness over time."
  },
  {
    question: "3. Will your social media marketers run paid campaigns too?",
    answer: "Yes, our experts manage both organic and paid campaigns across major platforms, ensuring maximum visibility, audience targeting, and measurable returns on your ad spend."
  },
  {
    question: "4. What is the minimum budget to start social media marketing with PWS?",
    answer: "You can begin with a flexible plan starting at $200 monthly, covering posting, engagement management, and performance tracking tailored to your business."
  },
  {
    question: "5. Does a small business really need social media marketing?",
    answer: "Absolutely! Social media marketing enables small businesses to build brand awareness, attract local customers, and compete effectively with affordable, targeted strategies that drive growth and visibility."
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
import Buffer from "../../assets/images/tech-logos/SMO/Buffer.webp";
import Canva from "../../assets/images/tech-logos/SMO/Canva.webp";
import GoogleAnalytics from "../../assets/images/tech-logos/SMO/GoogleAnalytics.webp";
import Hootsuite from "../../assets/images/tech-logos/SMO/Hootsuite.webp";
import Later from "../../assets/images/tech-logos/SMO/Later.webp";
import MetaBusinessSuite from "../../assets/images/tech-logos/SMO/MetaBusinessSuite.webp";
import SproutSocial from "../../assets/images/tech-logos/SMO/SproutSocial.webp";
import Facebook from "../../assets/images/tech-logos/Android/Facebook.webp";
import Instagram from "../../assets/images/tech-logos/Android/Instagram.webp";
import Linkedin from "../../assets/images/tech-logos/Android/Linkedin.webp";
import Pinterest from "../../assets/images/tech-logos/Android/Pinterest.webp";
import Twitter from "../../assets/images/tech-logos/Android/Twitter.webp";
import Youtube from "../../assets/images/tech-logos/Android/Youtube.webp";





  const techLogos = [
  { name: "Facebook", logo: Facebook },
  { name: "Instagram", logo: Instagram },
  { name: "Linkedin", logo: Linkedin },
  { name: "Twitter", logo: Twitter },
  { name: "Youtube", logo: Youtube },
  { name: "Pinterest", logo: Pinterest },
  { name: "Hootsuite", logo: Hootsuite },
  { name: "Buffer", logo: Buffer },
  { name: "Canva", logo: Canva },
  { name: "Meta Business Suite", logo: MetaBusinessSuite },
  { name: "Later", logo: Later },
  { name: "Sprout Social", logo: SproutSocial },
  { name: "Google Analytics", logo: GoogleAnalytics },
  
];


function HireSocialMediaMarketingExpert() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} />  
      <HireBanner
        content={{
          title: "Hire Social Media Marketing Expert",
          description: "Have social media channels but struggling with engagement? Hire our social media marketing experts to attract, engage, and inspire your audience, driving stronger brand presence and business growth.",
          buttonText: "Start Your Project at $10/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HirePPCBanner],
          alt: "Hire Social Media Marketing Expert",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Grow Faster with Our Social Media Experts"
        subText="Boost your brand’s visibility and engagement with our social media specialists. We create strategic, platform-focused content that builds trust, drives interactions, increases followers, and enhances your online presence across all major networks."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Social Media Marketing Experts’ Key Competencies"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                   Hire Social Media Expert
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Platforms and Technologies for Social Media Marketing" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free Marketing Cost Estimation"
        description="Not sure how much your website or product will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Your Complete Process to Hire Social Media Experts at PWS"
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

export default HireSocialMediaMarketingExpert;
