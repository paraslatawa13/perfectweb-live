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
import webDevelopmentBanner from "../../../assets/images/Services/1STseo.webp";
import WebDclient from "../../../assets/images/Services/2NDseo.webp";
import sideCircle from "../../../assets/images/side-circle.png";
import TechStack from "../../../components/TechStack";
import OffPageSEO from "../../../assets/images/Services/Off-Page-SEO.png";
import OnPageSEO from "../../../assets/images/Services/On-Page-SEO.png";
import TechnicalSEO from "../../../assets/images/Services/Technical-SEO.png";
import LocalSEO from "../../../assets/images/Services/Local-SEO.png";
import EcommerceSEO from "../../../assets/images/Services/E-commerce-SEO.png";
import SEOAudits from "../../../assets/images/Services/SEO-Audits.png";
import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import ieIcon from "../../../assets/images/Home/ie-icon.webp";
import cIcon from "../../../assets/images/Home/cs-icon.webp";
import pDIcon from "../../../assets/images/Home/pd-icon.webp";
import ServicesCover from "../../../components/ServicesCover";
import DSCIcon1 from "../../../assets/images/Services/Higher-Search Rankingsseo.png";
import DSCIcon2 from "../../../assets/images/Services/Increased-Targeted-Trafficseo.png";
import DSCIcon3 from "../../../assets/images/Services/Improved-User-Experienceseo.png";
import DSCIcon4 from "../../../assets/images/Services/Cost-Effective-Lead-Generationseo.png";
import DSCIcon5 from "../../../assets/images/Services/Stronger-Brand-Authorityseo.png";
import DSCIcon6 from "../../../assets/images/Services/Long-Term-Revenue-Growthseo.png";


import TAndSSupportAvailable from "../../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";
 

/**TECH STACK */

import Ahrefs from "../../../assets/images/tech-logos/SEO/Ahrefs.webp";
import CopyScape from "../../../assets/images/tech-logos/SEO/CopyScape.webp";
import GoogleAnalytics from "../../../assets/images/tech-logos/SEO/GoogleAnalytics.webp";
import GoogleKeywordPlanner from "../../../assets/images/tech-logos/SEO/GoogleKeywordPlanner.webp";
import GoogleSearchConsole from "../../../assets/images/tech-logos/SEO/GoogleSearchConsole.webp";
import GoogleSurferSeo from "../../../assets/images/tech-logos/SEO/GoogleSurferSeo.webp";
import GoogleTagManager from "../../../assets/images/tech-logos/SEO/GoogleTagManager.webp";
import GtMatrix from "../../../assets/images/tech-logos/SEO/GtMatrix.webp";
import KeywordTool from "../../../assets/images/tech-logos/SEO/KeywordTool.webp";
import Moz from "../../../assets/images/tech-logos/SEO/Moz.webp";
import PageSpeedInsights from "../../../assets/images/tech-logos/SEO/PageSpeedInsights.webp";
import ScreamingFrogSEOSpider from "../../../assets/images/tech-logos/SEO/ScreamingFrogSEOSpider.webp";
import SemRush from "../../../assets/images/tech-logos/SEO/SemRush.webp";
import SiteBulb from "../../../assets/images/tech-logos/SEO/SiteBulb.webp";
import Yoast from "../../../assets/images/tech-logos/SEO/Yoast.webp";

  const techLogos = [
  { name: "Ahrefs", logo: Ahrefs },
  { name: "Page Speed Insights", logo: PageSpeedInsights },
  { name: "Copyscape", logo: CopyScape },
  { name: "Google Analytics", logo: GoogleAnalytics },
  { name: "Google Keyword Planne", logo: GoogleKeywordPlanner },
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

const servicesData = [
  {
    img: OffPageSEO,
    title: "On-Page SEO",
    desc: "We optimize website content, meta tags, headings, images, and internal links to improve search rankings, user experience, and overall site performance for targeted keywords.",
    link: "",
  },
  {
    img: OnPageSEO,
    title: "Off-Page SEO",
    desc: "Our team builds high-quality backlinks, engages in influencer outreach, and promotes content to enhance your site’s authority, credibility, and visibility in search engine results.",
    link: "",
  },
  {
    img: TechnicalSEO,
    title: "Technical SEO",
    desc: "We fix crawl errors, improve site speed, ensure mobile-friendliness, optimize site architecture, and implement structured data to enhance search engine indexing and user experience.",
    link: "",
  },
  {
    img: LocalSEO,
    title: "Local SEO",
    desc: "We optimize Google Business Profile, local citations, and location-based content to help your business rank higher for searches in your targeted geographic area.",
    link: "",
  },
  {
    img: EcommerceSEO,
    title: "E-commerce SEO",
    desc: "Our experts optimize product descriptions, categories, site structure, and user experience to drive organic traffic, boost conversions, and improve visibility for online stores.",
    link: "",
  },
  {
    img: SEOAudits,
    title: "SEO Audits",
    desc: "We conduct comprehensive audits to identify SEO issues, analyze competition, and provide actionable recommendations for improving your website’s rankings, traffic, and search engine performance.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. How long does SEO take to show results?",
    answer: "SEO is a long-term strategy, but local businesses can often see results like improved rankings and leads within 2–3 months, while 3–6 months is ideal for significant growth."
  },
  {
    question: "2. Why is SEO important for my business?",
    answer: "SEO enhances visibility on search engines, attracts qualified traffic, fosters trust, and helps your business generate consistent leads and revenue without incurring expensive advertising costs."
  },
  {
    question: "3. How do you measure the success of SEO campaigns?",
    answer: "We track keyword rankings, organic traffic growth, lead generation, conversion rates, and ROI, providing detailed reports to show exactly how SEO impacts your business."
  },
  {
    question: "4. My website is facing indexing or technical issues. Can you identify them?",
    answer: "Yes! Technical errors are visible in Google Search Console or SEO tools, and our experts help numerous brands fix these issues effectively."
  },
  {
    question: "5. Can you optimize a Shopify website?",
    answer: "Absolutely! We specialize in auditing and optimizing websites across multiple CMS platforms, including Shopify, WordPress, Wix, Squarespace, Magento, and more. Just provide basic details, and our SEO experts will implement the necessary improvements to boost rankings, drive traffic, and generate meaningful results for your business."
  }
];


const stepsData = [
  {
    img: One,
    title: "Discovery & Goal Setting",
    desc: "We start by understanding your business, industry, target audience, and growth goals to create a tailored SEO strategy aligned with your unique objectives.",
  },
  {
    img: Two,
    title: "Website & Competitor Audit",
    desc: "Our team performs a comprehensive website audit and analyzes competitors to identify strengths, weaknesses, and opportunities for improving search rankings and online visibility.",
  },
  {
    img: Three,
    title: "Keyword Research & Strategy",
    desc: "We identify high-value, relevant keywords your audience is searching for, building a strategy to target them effectively for maximum traffic and conversion potential.",
  },
  {
    img: Four,
    title: "On-Page Optimization",
    desc: "We optimize site structure, content, metadata, headings, and images to improve search engine rankings while enhancing user experience for better engagement and conversion rates.",
  },
  {
    img: Five,
    title: "Off-Page SEO & Link Building",
    desc: "Our experts build high-quality backlinks, improve online mentions, and boost your website’s authority to strengthen rankings and expand visibility across search engines.",
  },
  {
    img: Six,
    title: "Tracking, Reporting & Optimization",
    desc: "We monitor results, analyze data, and continuously optimize strategies to improve rankings, increase traffic, and ensure consistent, measurable SEO performance for long-term success.",
  },
];





function SEOServices() {
  const { meta } = useMeta();
  return (
    <>
    <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="SEO Services"
            title="Expert SEO Services: Achieve #1 Google Rankings"
            description="When your competitors’ websites rank higher, why shouldn’t yours? We have the solution! Our expert SEO services boost your rankings, attract more clicks, and turn visitors into loyal customers."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={webDevelopmentBanner}
            altText="Expert SEO Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- A White Label SEO Agency"
                description="Perfect Web Services is a trusted white label SEO agency helping businesses and agencies deliver top-tier SEO solutions under their brand. We offer complete, results-driven SEO services, from keyword research to link building, designed to boost rankings, drive organic traffic, and generate measurable growth for your clients without revealing our identity."
                buttonText="Get Quote Now"
                buttonLink="/contact-us"
                image={WebDclient}
                altText="White Label Seo Services"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Our Comprehensive SEO Solutions:"
           subtitle="We are offering a full range of SEO services. Check out our services below."
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
        title="Get A Free SEO Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Essential Tools and Technologies We Use for SEO Success" techLogos={techLogos} />
          </div>
        </section>

       
    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="Why Our SEO Expert for Your Brand?"
      cards={[
        {
          plus: "6+ ",
          bottomText: "Years of SEO Expertise driving consistent rankings and long-term growth.",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "70%",
          bottomText: "Client Retention Rate built on proven strategies and measurable results.",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "10K+",
          bottomText: "Web Pages Ranked on Google across diverse, competitive industries.",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "100+",
          bottomText: "Satisfied Clients served with tailored SEO solutions for every business.",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "300%",
          bottomText: "Average Organic Traffic Growth powered by data-driven optimization.",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery"
        },
        {
          plus: "30K+",
          bottomText: "Qualified Leads Generated through effective search visibility and strategy.",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Hire SEO Expert Now"
      buttonLink="/contact-us"
    /></section>


     


    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="Share your business goals and objectives, give us a small brief, and we’ll deliver big results with strategies designed to amplify your growth and revenue."
        buttonText="Let's Get Started"
        buttonLink="/contact-us"
      />
    </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="How SEO Accelerates Your Business Revenue"
        sectionSubText=""
        services={[
          {
            icon: DSCIcon1,
            heading: "Higher Search Rankings",
            text: "SEO improves your website’s position on search engines, making it easier for potential customers to find you, click your site, and choose your products or services."
          },
          {
            icon: DSCIcon2,
            heading: "Increased Targeted Traffic",
            text: "By optimizing for relevant keywords, SEO drives high-intent visitors who are actively searching for your offerings, resulting in more qualified leads and better conversion opportunities."
          },
          {
            icon: DSCIcon3,
            heading: "Improved User Experience",
            text: "Technical SEO enhancements like faster load times, mobile optimization, and clear navigation make your website more user-friendly, encouraging longer visits and higher engagement rates."
          },
          {
            icon: DSCIcon4,
            heading: "Cost-Effective Lead Generation",
            text: "Unlike paid ads, SEO provides long-term visibility and lead generation without ongoing ad spend, delivering a higher return on investment and sustainable revenue growth over time."
          },
          {
            icon: DSCIcon5,
            heading: "Stronger Brand Authority",
            text: "Consistently ranking high builds trust and credibility, positioning your brand as an industry leader and making customers more likely to choose your business over competitors."
          },
          {
            icon: DSCIcon6,
            heading: "Long-Term Revenue Growth",
            text: "SEO delivers compounding results—the more optimized your site becomes, the more traffic, leads, and sales it generates, fueling steady and scalable business growth over the years."
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
              titles = "Our Proven SEO Workflow"
                faqDatas={stepsData}
                btntext ="Get SEO Proposal"
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

export default SEOServices;