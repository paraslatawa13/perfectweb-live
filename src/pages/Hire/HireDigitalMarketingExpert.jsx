
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
import SearchEngineOptimizationSeo from "../../assets/images/Services/SearchEngineOptimizationSeo.webp";
import CloudAPIDevelopment from "../../assets/images/tech-logos/CloudAPIDevelopment.webp";
import ContentMarketing from "../../assets/images/Services/ContentMarketing.webp";
import PPCCampaignAudit from "../../assets/images/Services/PPC-Campaign-Audit.png";
import SocialMediaMarketingsmo from "../../assets/images/Services/Social-Media-Marketingsmo.png";
import EmailMarketingIcon from "../../assets/images/Services/EmailMarketingIcon.webp";
import HireDMBanner from "../../assets/images/Hire/HireDMBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";

const hiringData = [
  {
    heading: " Full-Time Hiring",
    content:
      "Hire dedicated digital marketing experts to work exclusively on your projects, ensuring consistent performance, faster execution, and complete focus on your marketing goals.",
  },
  {
    heading: "Part-Time Hiring",
    content:
      "Ideal for small businesses or startups — get flexible marketing support for specific campaigns, SEO, PPC, or social media without full-time commitments.",
  },
  {
    heading: "Hourly or Project-Based Hiring",
    content:
      "Engage our experts for short-term projects or hourly tasks — perfect for quick audits, ad optimizations, or one-time strategy implementations.",
  },
];




const servicesData = [
  {
    img: SearchEngineOptimizationSeo,
    title: "SEO (Search Engine Optimization)",
    desc: "Enhance your website’s visibility and rankings with our SEO services. We focus on on-page, off-page, and technical optimization to drive consistent organic traffic growth.",
    link: "/expert-seo-services",
  },
    {
    img: PPCCampaignAudit,
    title: "PPC Services",
    desc: "Maximize your ROI with targeted PPC services. Our team manages Google Ads, Bing, and social campaigns designed to attract quality leads and boost online conversions.",
    link: "/ppc-marketing-services",
  },
    {
    img: SocialMediaMarketingsmo,
    title: "Social Media Marketing Services",
    desc: "Build brand awareness and engagement through customized social media marketing services. We create impactful strategies, manage platforms, and deliver measurable audience growth across all channels.",
    link: "",
  },
    {
    img: ContentMarketing,
    title: "Content Marketing Services",
    desc: "Drive engagement and trust with compelling content marketing services. Our team crafts high-quality blogs, web content, and campaigns that connect, educate, and convert effectively.",
    link: "",
  },
    {
    img: EmailMarketingIcon,
    title: " Email Marketing Services",
    desc: "Increase retention and sales with our email marketing services. We design, segment, and automate targeted email campaigns that nurture leads and encourage repeat customers.",
    link: "",
  },

  {
    img: CloudAPIDevelopment,
    title: " Analytics & Conversion Optimization Services",
    desc: "Make data-driven decisions with our analytics and conversion optimization services. We monitor user behavior, refine campaigns, and improve conversion rates for consistent business growth.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. Which type of digital marketing is best for my business?",
    answer: "The ideal marketing strategy depends on your goals, audience, and budget; combining SEO, PPC, and social media usually delivers the best results."
  },
  {
    question: "2. How much revenue can a digital marketing expert generate for my business?",
    answer: "Revenue growth depends on strategy and budget. With consistent optimization, our experts help boost ROI through targeted campaigns and performance-driven marketing approaches."
  },
  {
    question: "3. I need more leads for my services. What marketing strategy works best?",
    answer: "Lead generation strategies like PPC, SEO, and remarketing campaigns attract qualified prospects and convert them into paying customers efficiently and cost-effectively."
  },
  {
    question: "4. Will your digital marketing experts be available across all time zones?",
    answer: "Yes. Our experts are flexible and can work across global time zones to ensure smooth communication, timely updates, and consistent performance management."
  },
  {
    question: "5. What are the key performance indicators that define digital success?",
    answer: "Key metrics include traffic growth, lead quality, conversion rate, ROI, engagement rate, and cost-per-acquisition, all of which are measured regularly to optimize performance."
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


/**TECH LOGOS */
import TechStack from "../../components/TechStack";
import Ahrefs from "../../assets/images/tech-logos/DigitalMarketting/Ahrefs.webp";
import SEMrush from "../../assets/images/tech-logos/DigitalMarketting/SEMrush.webp";
import Moz from "../../assets/images/tech-logos/DigitalMarketting/Moz.webp";
import Hootsuite from "../../assets/images/tech-logos/DigitalMarketting/Hootsuite.webp";
import Buffer from "../../assets/images/tech-logos/DigitalMarketting/Buffer.webp";
import GoogleAds from "../../assets/images/tech-logos/DigitalMarketting/GoogleAds.webp";
import FacebookAdsManager from "../../assets/images/tech-logos/DigitalMarketting/FacebookAdsManager.webp";
import LinkedInAds from "../../assets/images/tech-logos/DigitalMarketting/LinkedInAds.webp";
import Canva from "../../assets/images/tech-logos/DigitalMarketting/Canva.webp";
import AdobeCreativeCloud from "../../assets/images/tech-logos/DigitalMarketting/AdobeCreativeCloud.webp";
import Grammarly from "../../assets/images/tech-logos/DigitalMarketting/Grammarly.webp";
import HubSpot from "../../assets/images/tech-logos/DigitalMarketting/HubSpot.webp";
import ActiveCampaign from "../../assets/images/tech-logos/DigitalMarketting/ActiveCampaign.webp";
import Zapier from "../../assets/images/tech-logos/DigitalMarketting/Zapier.webp";

  const techLogos = [
  { name: "Ahrefs", logo: Ahrefs },
  { name: "SEMrush", logo: SEMrush },
  { name: "Moz", logo: Moz },
  { name: "Hootsuite", logo: Hootsuite },
  { name: "Buffer", logo: Buffer },
  { name: "Google Ads", logo: GoogleAds },
  { name: "Facebook Ads Manager", logo: FacebookAdsManager },
  { name: "LinkedIn Ads", logo:  LinkedInAds},
  { name: "Canva", logo: Canva },
  { name: "Adobe Creative Cloud,", logo: AdobeCreativeCloud, },
  { name: "Grammarly", logo: Grammarly },
  { name: "HubSpot", logo: HubSpot },
  { name: "Active Campaign", logo: ActiveCampaign },
  { name: "Zapier ", logo: Zapier  },
];


function HireDigitalMarketingExpert() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} />  
      <HireBanner
        content={{
          title: "Hire a Dedicated Digital Marketing Expert",
          description: "If your online visibility isn’t improving despite multiple marketing efforts, it’s time to hire our certified digital marketing experts and unlock measurable growth for your business.",
          buttonText: "Start Your Project at $10/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireDMBanner],
          alt: "Hire a Dedicated Digital Marketing Expert",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Boost Your Digital Presence with Our Expert"
        subText="Strengthen your brand’s online impact with our skilled digital experts. From strategy and design to marketing and optimisation, we deliver tailored solutions that improve visibility, engagement, and long-term business growth."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our Digital Marketing Experts’ Areas of Excellence"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                  Hire Digital Marketing Expert Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our Digital Expert Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free Digital Marketing Cost Estimation"
        description="Not sure how much your website or product will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring Digital Marketing Experts at PWS"
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

export default HireDigitalMarketingExpert;
