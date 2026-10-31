
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
import Google_Ads_Campaign_Management from "../../assets/images/Hire/Google_Ads_Campaign_Management.webp";
import Multi_Platform_Advertising_Expertise from "../../assets/images/Hire/Multi_Platform_Advertising_Expertise.webp";
import Performance_Tracking_Reporting from "../../assets/images/Hire/Performance_Tracking_Reporting.webp";
import Keyword_Research_Bid_Optimization from "../../assets/images/Hire/Keyword_Research_Bid_Optimization.webp";
import Landing_Page_Optimization from "../../assets/images/Hire/Landing_Page_Optimization.webp";
import Remarketing_Audience_Targeting from "../../assets/images/Hire/Remarketing_Audience_Targeting.webp";
import HirePPCBanner from "../../assets/images/Hire/HirePPCBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";


const hiringData = [
  {
    heading: " Full-Time Hiring",
    content:
      "Hire a dedicated PPC expert to work exclusively on your projects, ensuring consistent performance, faster execution, and complete focus on your marketing goals.",
  },
  {
    heading: "Part-Time Hiring",
    content:
      "Ideal for small businesses or startups, get flexible support for every aspect of ppc services.",
  },
  {
    heading: "Hourly or Project-Based Hiring",
    content:
      "Engage our ppc experts for short-term projects or hourly tasks,  perfect for quick campaign audits, conversion fixes, or keyword research.",
  },
];




const servicesData = [
  {
    img: Google_Ads_Campaign_Management,
    title: "Google Ads Campaign Management",
    desc: "We create, manage, and optimize Google Ads campaigns to ensure every click counts, driving high-quality leads and maximizing ROI for your business.",
    link: "",
  },
    {
    img: Keyword_Research_Bid_Optimization,
    title: "Keyword Research & Bid Optimization",
    desc: "Our experts identify profitable keywords, manage bids smartly, and continuously refine targeting strategies to achieve better visibility and cost-efficient conversions.",
    link: "",
  },
    {
    img: Landing_Page_Optimization,
    title: "Landing Page Optimization",
    desc: "We design and test high-converting landing pages focused on relevance, clarity, and user intent to reduce bounce rates and boost conversion rates.",
    link: "",
  },
    {
    img: Performance_Tracking_Reporting,
    title: " Performance Tracking & Reporting",
    desc: "Detailed analytics and transparent reports help you measure CTR, conversions, and ad spend efficiency, ensuring your campaign always performs at its best.",
    link: "",
  },
    {
    img: Remarketing_Audience_Targeting,
    title: " Remarketing & Audience Targeting",
    desc: "Our specialists re-engage past visitors with personalized remarketing campaigns and audience segmentation strategies to increase return visits and conversion opportunities",
    link: "",
  },

  {
    img: Multi_Platform_Advertising_Expertise,
    title: " Multi-Platform Advertising Expertise",
    desc: "From Google to Meta, LinkedIn, and Bing Ads, we manage cross-platform PPC campaigns to expand your reach and deliver consistent business growth.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. How can a PPC expert help my business grow?",
    answer: "A PPC expert helps you reach the right audience, optimize ad spend, and generate high-quality leads that convert into measurable business growth."
  },
  {
    question: "2. How long does it take to see PPC results?",
    answer: "You can start seeing measurable PPC results within 1–2 weeks, depending on campaign setup, keyword strategy, budget size, and ad optimization quality."
  },
  {
    question: "3. Do I need a large budget to start PPC advertising?",
    answer: "Not necessarily. Our PPC experts tailor strategies for any budget, focusing on ROI-driven keyword targeting and campaign efficiency to maximize your returns."
  },
  {
    question: "4. How do you measure the success of PPC campaigns?",
    answer: "We track KPIs like CTR, CPC, conversions, and ROAS using real-time dashboards and detailed reports to measure and optimize campaign performance continuously."
  },
  {
    question: "5. Will I get reports and regular campaign updates?",
    answer: "Yes, you’ll receive weekly and monthly performance reports with insights, optimization actions, and ROI tracking to ensure campaign transparency and accountability."
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

import Ahrefs from "../../assets/images/tech-logos/PPC/Ahrefs.webp";
import GoogleAds from "../../assets/images/tech-logos/PPC/GoogleAds.webp";
import GoogleAnalytics from "../../assets/images/tech-logos/PPC/GoogleAnalytics.webp";
import GoogleKeywordPlanner from "../../assets/images/tech-logos/PPC/GoogleKeywordPlanner.webp";
import GoogleTagManager from "../../assets/images/tech-logos/PPC/GoogleTagManager.webp";
import Hotjar from "../../assets/images/tech-logos/PPC/Hotjar.webp";
import HubSpot from "../../assets/images/tech-logos/PPC/HubSpot.webp";
import LinkedInCampaignManager from "../../assets/images/tech-logos/PPC/LinkedInCampaignManager.webp";
import LookerStudio from "../../assets/images/tech-logos/PPC/LookerStudio.webp";
import MetaAdsManager from "../../assets/images/tech-logos/PPC/MetaAdsManager.webp";
import MicrosoftAdvertising from "../../assets/images/tech-logos/PPC/MicrosoftAdvertising.webp";
import Optmyzr from "../../assets/images/tech-logos/PPC/Optmyzr.webp";
import SemRush from "../../assets/images/tech-logos/PPC/SemRush.webp";
import SpyFu from "../../assets/images/tech-logos/PPC/SpyFu.webp";
import Unbounce from "../../assets/images/tech-logos/PPC/Unbounce.webp";

 
  const techLogos = [
  { name: "Ahrefs", logo: Ahrefs },
  { name: "Google Ads, ", logo: GoogleAds },
  { name: "Google Analytic", logo: GoogleAnalytics },
  { name: "Google Keyword Planner", logo: GoogleKeywordPlanner },
  { name: "Google Tag Manager", logo: GoogleTagManager },
  { name: "Hotjar", logo: Hotjar },
  { name: "HubSpot", logo: HubSpot },
  { name: "LinkedIn Campaign Manager", logo: LinkedInCampaignManager },
  { name: " Looker Studio", logo: LookerStudio },
  { name: "Meta Ads Manager", logo: MetaAdsManager },
  { name: "Microsoft Advertising", logo: MicrosoftAdvertising },
  { name: "Optmyzr", logo: Optmyzr },
  { name: "SEMrush", logo: SemRush },
  { name: "SpyFu", logo: SpyFu },
  { name: "Unbounce", logo: Unbounce },
  
];


function HirePPCExpert() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire PPC Experts from PWS",
          description: "We understand the value of your hard-earned money. If your ads are wasting budget on random keywords without delivering ROI, it’s time to let our PPC experts optimize your campaigns for sustainable ROAS and profitable clicks.",
          buttonText: "Start Your Project at $10/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HirePPCBanner],
          alt: "Hire PPC Experts",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Boost ROI with Our PPC Specialists"
        subText="Partner with our PPC experts to maximise every ad spend. We create targeted, data-driven campaigns that increase conversions, reduce wasted budget, and deliver profitable results across Google, Meta, and other paid platforms."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Core Expertise of Our PPC Specialists"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                   Hire PPC Expert Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our PPC Expert Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free PPC Cost Estimation"
        description="Not sure how much your website or product will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring PPC Experts at PWS"
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

export default HirePPCExpert;
