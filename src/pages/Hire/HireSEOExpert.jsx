
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
import OnPageSEO from "../../assets/images/Hire/ON_PAGE_WEBP.webp";
import PERFORMANCE_TRACKING_WEBP from "../../assets/images/Hire/PERFORMANCE_TRACKING_WEBP.webp";
import LINK_BUILDING_WEBP from "../../assets/images/Hire/LINK_BUILDING_WEBP.webp";
import TECHNICAL_SEO_WEBP from "../../assets/images/Hire/TECHNICAL_SEO_WEBP.webp";
import KEYWORD_RESEARCH_WEBP from "../../assets/images/Hire/KEYWORD_RESEARCH_WEBP.webp";
import LOCAL_SEO_WEBP from "../../assets/images/Hire/LOCAL_SEO_WEBP.webp";
import HireSEOBanner from "../../assets/images/Hire/HireSEOBanner.webp";
import FAQImg from "../../assets/images/FAQImg.webp";
import { Link } from "react-router-dom";
const hiringData = [
  {
    heading: " Full-Time Hiring",
    content:
      "Hire a dedicated seo expert to work exclusively on your projects, ensuring consistent performance, faster execution, and complete focus on your marketing goals.",
  },
  {
    heading: "Part-Time Hiring",
    content:
      "Ideal for small businesses or startups, get flexible support for link building, Technical SEO, tracking, or on-page without full-time commitments.",
  },
  {
    heading: "Hourly or Project-Based Hiring",
    content:
      "Engage our experts for short-term projects or hourly tasks,  perfect for quick audits, technical fixes, or GSC error fixing.",
  },
];




const servicesData = [
  {
    img: OnPageSEO,
    title: "On-Page SEO Optimization",
    desc: "We refine meta tags, headers, internal links, and content structure to enhance visibility, relevance, and user experience, ultimately improving organic rankings and engagement.",
    link: "/expert-seo-services",
  },
    {
    img: TECHNICAL_SEO_WEBP,
    title: "Technical SEO Audits",
    desc: "Our experts conduct in-depth technical audits to identify crawl errors, site speed issues, and indexing problems, ensuring search engines easily access and understand your website.",
    link: "",
  },
    {
    img: KEYWORD_RESEARCH_WEBP,
    title: "Keyword Research & Strategy",
    desc: "We conduct advanced keyword analysis to identify high-value opportunities that align with your audience's intent, thereby boosting organic traffic and enhancing your business’s search visibility.",
    link: "",
  },
    {
    img: LINK_BUILDING_WEBP,
    title: " Link Building & Authority Growth",
    desc: "Through ethical outreach and quality backlink strategies, we enhance your site’s domain authority and credibility to achieve long-term SEO performance and ranking stability.",
    link: "",
  },
    {
    img: LOCAL_SEO_WEBP,
    title: "Local SEO Optimization",
    desc: "We help your business dominate local searches with optimized Google Business Profiles, localized keywords, and consistent NAP data for better local reach.",
    link: "",
  },

  {
    img: PERFORMANCE_TRACKING_WEBP,
    title: "Analytics & Performance Tracking",
    desc: "Our SEO experts monitor rankings, traffic, and conversion metrics regularly, using data-driven insights to optimize strategies and maximize ROI over time.",
    link: "",
  },
];


/**FAQ */
const webDevFAQ = [
  {
    question: "1. How long does SEO take to show visible results?",
    answer: "SEO is a long-term strategy. You typically start seeing noticeable improvements in traffic and rankings within 3 to 6 months of consistent optimization efforts."
  },
  {
    question: "2. Is SEO a one-time task or an ongoing process?",
    answer: "SEO is an ongoing process requiring regular updates, audits, and optimization to maintain rankings and adapt to algorithm changes, competition, and evolving user behavior."
  },
  {
    question: "3. How often will the SEO expert audit my website?",
    answer: "Our SEO experts perform monthly audits to identify performance gaps, technical issues, and ranking opportunities to keep your website optimized and competitive."
  },
  {
    question: "4. How can I track whether my SEO strategy is working?",
    answer: "We share detailed performance reports showing keyword rankings, traffic growth, and lead conversions to help you monitor progress and SEO effectiveness transparently."
  },
  {
    question: "5.  What are your starting SEO plans for new websites?",
    answer: "Our initial SEO plans start from $200 and include keyword research, on-page setup, technical optimization, and content strategy to build a strong foundation for organic growth."
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
import Ahrefs from "../../assets/images/tech-logos/SEO/Ahrefs.webp";
import CopyScape from "../../assets/images/tech-logos/SEO/CopyScape.webp";
import GoogleAnalytics from "../../assets/images/tech-logos/SEO/GoogleAnalytics.webp";
import GoogleKeywordPlanner from "../../assets/images/tech-logos/SEO/GoogleKeywordPlanner.webp";
import GoogleSearchConsole from "../../assets/images/tech-logos/SEO/GoogleSearchConsole.webp";
import GoogleSurferSeo from "../../assets/images/tech-logos/SEO/GoogleSurferSeo.webp";
import GoogleTagManager from "../../assets/images/tech-logos/SEO/GoogleTagManager.webp";
import GtMatrix from "../../assets/images/tech-logos/SEO/GtMatrix.webp";
import KeywordTool from "../../assets/images/tech-logos/SEO/KeywordTool.webp";
import Moz from "../../assets/images/tech-logos/SEO/Moz.webp";
import PageSpeedInsights from "../../assets/images/tech-logos/SEO/PageSpeedInsights.webp";
import ScreamingFrogSEOSpider from "../../assets/images/tech-logos/SEO/ScreamingFrogSEOSpider.webp";
import SemRush from "../../assets/images/tech-logos/SEO/SemRush.webp";
import SiteBulb from "../../assets/images/tech-logos/SEO/SiteBulb.webp";
import Yoast from "../../assets/images/tech-logos/SEO/Yoast.webp";

  const techLogos = [
  { name: "Ahrefs", logo: Ahrefs },
  { name: "Page Speed Insights", logo: PageSpeedInsights },
  { name: "Copyscape", logo: CopyScape },
  { name: "Google Analytics", logo: GoogleAnalytics },
  { name: "Google Keyword Planner", logo: GoogleKeywordPlanner },
  { name: "Google Search Console", logo: GoogleSearchConsole },
  { name: "SurferSEO", logo: GoogleSurferSeo },
  { name: "Google Tag Manager", logo: GoogleTagManager },
  { name: "GtMatrix", logo: GtMatrix },
  { name: "KeywordTool.io", logo: KeywordTool },
  { name: "Moz Pro", logo: Moz },  
  { name: "Screaming Frog SEO Spider", logo: ScreamingFrogSEOSpider },
  { name: "SEMrush", logo: SemRush },
  { name: "Sitebulb", logo: SiteBulb },
  { name: "Yoast SEO", logo: Yoast },
  
];



function HireSEOExpert() {
 const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
      <HireBanner
        content={{
          title: "Hire Certified SEO Experts",
          description: "We go beyond keywords and technical audits. Hire SEO experts who understand your business goals and customer intent to craft strategies that truly drive measurable revenue growth.",
          buttonText: "Start Your Project at $10/Hr",
          buttonLink: "/contact-us",
        }}
        media={{
          images: [HireSEOBanner],
          alt: "Hire Certified SEO Experts",
        }}
      />

      {/* GROW YOUR BUSINESS*/}
       <GrowYourBusiness
        buttonText ="Get a Free Quote"

        onClick={() => window.location.href = "/contact-us"}
      />

      <HeadingWithText
        heading="Achieve Top Rankings for Your Website"
        subText="Hire our SEO experts to boost your website’s search visibility and secure top positions on Google. We optimize every element to drive qualified traffic, improve authority, and deliver measurable growth in a shorter time."
      />

        <section className="Grid-section padd clip-section">
          <div className="container">
            <ServicesSection 
            title="Our SEO Experts’ Areas of Excellence"
            />
            <div className="row align-items-center">
              <div className="col-12">
                  <GridComponent data={servicesData} />
              </div>
            </div>
            <div className="row text-center">
                <div className="button-flex mt-5">
                  <a href="/contact-us" className="btn btn-primary">
                    Hire SEO Expert Now
                  </a>
              </div>
            </div>
          </div>
        </section>
      
      {/*Tech stack section*/}
      <section className="tech-stack padd">
        <div className="container">
          <TechStack title = "Tech Stack Our SEO Expert Uses" techLogos={techLogos} />
        </div>
      </section>

       {/*Free Prouct Estimation*/}
    <FreeEstimationSection
        title="Get A Free SEO Cost Estimation"
        description="Not sure how much your website or product will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Start Calculation"
      />
     
    <section className="stepBySection padd text-center">
        <StepByIcon 
        title="Step-by-Step Guide to Hiring SEO Experts at PWS"
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

export default HireSEOExpert;
