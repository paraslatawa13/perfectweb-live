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
import ExComponent from "../../../components/ExComponent";
import FourStepComponent from "../../../components/Services/FourStepComponent";
import CFAQComponent from "../../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../../components/TestimonialVideoCarousel";
import webDevelopmentBanner from "../../../assets/images/Services/1STppc.webp";
import WebDclient from "../../../assets/images/Services/2NDppc.webp";
import sideCircle from "../../../assets/images/side-circle.png";
import GoogleAdsManagement from "../../../assets/images/Services/Social-Media-Ads.png";
import BingAdsManagement from "../../../assets/images/Services/Display-Advertising.png";
import SocialMediaAds from "../../../assets/images/Services/Remarketing-Campaigns.png";
import DisplayAdvertising from "../../../assets/images/Services/Shopping-Ads.png";
import RemarketingCampaigns from "../../../assets/images/Services/Remarketing-Campaigns.png";
import ShoppingAds from "../../../assets/images/Services/Shopping-Ads.png";
import CampaignAudit from "../../../assets/images/Services/PPC-Campaign-Audit.png";
import PageCreation from "../../../assets/images/Services/Landing-Page-Creation.png";
import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import ServicesCover from "../../../components/ServicesCover";
import DSCIcon1 from "../../../assets/images/Services/Fast-Resultsppc.png";
import DSCIcon2 from "../../../assets/images/Services/Instant-Trafficppc.png";
import DSCIcon3 from "../../../assets/images/Services/Website-Performanceppc.png";
import DSCIcon4 from "../../../assets/images/Services/Experimentation-ppc.png";
import DSCIcon5 from "../../../assets/images/Services/Granular-Targetingppc.png";
import DSCIcon6 from "../../../assets/images/Services/Conversion-Trackingppc.png";


/**TECH STACK */

import TechStack from "../../../components/TechStack";
import Ahrefs from "../../../assets/images/tech-logos/PPC/Ahrefs.webp";
import GoogleAds from "../../../assets/images/tech-logos/PPC/GoogleAds.webp";
import GoogleAnalytics from "../../../assets/images/tech-logos/PPC/GoogleAnalytics.webp";
import GoogleKeywordPlanner from "../../../assets/images/tech-logos/PPC/GoogleKeywordPlanner.webp";
import GoogleTagManager from "../../../assets/images/tech-logos/PPC/GoogleTagManager.webp";
import Hotjar from "../../../assets/images/tech-logos/PPC/Hotjar.webp";
import HubSpot from "../../../assets/images/tech-logos/PPC/HubSpot.webp";
import LinkedInCampaignManager from "../../../assets/images/tech-logos/PPC/LinkedInCampaignManager.webp";
import LookerStudio from "../../../assets/images/tech-logos/PPC/LookerStudio.webp";
import MetaAdsManager from "../../../assets/images/tech-logos/PPC/MetaAdsManager.webp";
import MicrosoftAdvertising from "../../../assets/images/tech-logos/PPC/MicrosoftAdvertising.webp";
import Optmyzr from "../../../assets/images/tech-logos/PPC/Optmyzr.webp";
import SemRush from "../../../assets/images/tech-logos/PPC/SemRush.webp";
import SpyFu from "../../../assets/images/tech-logos/PPC/SpyFu.webp";
import Unbounce from "../../../assets/images/tech-logos/PPC/Unbounce.webp";

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

const servicesData = [
  {
    img: GoogleAdsManagement,
    title: "Google Ads Management",
    desc: "We create and manage highly targeted Google Ads campaigns, focusing on the right keywords, audience, and bidding strategies to maximize clicks, conversions, and overall ROI.",
    link: "",
  },
  {
    img: BingAdsManagement,
    title: "Bing Ads Management",
    desc: "Our experts optimize Bing Ads campaigns to capture additional traffic, expand audience reach, and deliver cost-effective conversions through precise targeting and performance-driven strategies.",
    link: "",
  },
  {
    img: SocialMediaAds,
    title: "Social Media Ads",
    desc: "We design and run engaging ad campaigns on Facebook, Instagram, and LinkedIn, helping your brand connect with the right audience and drive measurable business growth.",
    link: "",
  },
  {
    img: DisplayAdvertising,
    title: "Display Advertising",
    desc: "Our display advertising strategies create visually compelling ads across the Google Display Network, boosting brand awareness, retargeting past visitors, and converting prospects into loyal customers.",
    link: "",
  },
  {
    img: RemarketingCampaigns,
    title: "Remarketing Campaigns",
    desc: "We re-engage potential customers who previously interacted with your website, using tailored remarketing campaigns that nurture leads, increase conversions, and maximize your ad spend effectiveness.",
    link: "",
  },
  {
    img: ShoppingAds,
    title: "Shopping Ads (PLA)",
    desc: "Our team optimizes product listing ads (PLAs) to increase eCommerce sales, showcase products effectively, and drive high-quality traffic from Google Shopping and other platforms.",
    link: "",
  },
  {
    img: CampaignAudit,
    title: "PPC Campaign Audit",
    desc: "We perform detailed PPC campaign audits to identify wasted spend, uncover opportunities, and deliver actionable strategies that enhance performance and maximize your advertising ROI.",
    link: "",
  },
  {
    img: PageCreation,
    title: "Landing Page Creation",
    desc: "Our optimized landing pages are designed to convert clicks into customers, with persuasive copy, engaging visuals, and strong CTAs that boost PPC campaign performance.",
    link: "",
  },
];

const webDevFAQ = [
  {
    question: "1. What results can I expect from your PPC campaigns?",
    answer: "From our PPC campaigns, you can expect 2x–3x ROAS in the initial stage. With a strong audience base, returns can grow significantly higher."
  },
  {
    question: "2. How much budget should I allocate for PPC campaigns?",
    answer: "Budget allocation is totally dependent on the business niche and competition. For a local business, you can start PPC campaigns from $500."
  },
  {
    question: "3. Which platforms do you manage PPC campaigns on?",
    answer: "We manage campaigns across Google Ads, Bing, Meta Ads, LinkedIn, and Amazon to capture targeted traffic and ensure high performance across multiple advertising platforms."
  },
  {
    question: "4. How quickly can I see results from PPC advertising?",
    answer: "PPC provides immediate visibility and traffic once campaigns launch. While optimization improves results over time, you can begin seeing measurable leads and conversions within days"
  },
  {
    question: "5. Do you provide performance reports for PPC campaigns?",
    answer: "Yes, we deliver transparent reports with key metrics, clicks, conversions, ROI, and cost-per-result, so you always know how effectively your campaigns are performing and scalin"
  }
];

const stepsData = [
  {
    img: One,
    title: "Discovery & Planning",
    desc: "We begin with questionnaires and kickoff meetings to understand your business goals, target audience, and budget, ensuring a customized PPC roadmap for success.",
  },
  {
    img: Two,
    title: "Account & Keyword Research",
    desc: "Our experts audit existing accounts and conduct in-depth keyword analysis to uncover opportunities, remove inefficiencies, and build a foundation for cost-effective, high-impact campaigns.",
  },
  {
    img: Three,
    title: "Campaign Setup & Optimization",
    desc: "We create or restructure campaigns with smart targeting, bidding strategies, and optimization techniques designed to maximize ROI while maintaining budget efficiency.",
  },
  {
    img: Four,
    title: "Ad Copy & Creative Design",
    desc: "Compelling ad copywriting and eye-catching visuals are crafted to highlight your brand, grab attention, and inspire clicks, ensuring strong engagement across PPC platforms.",
  },
  {
    img: Five,
    title: "Landing Page Development",
    desc: "We design and optimize landing pages tailored for conversions, ensuring that ad traffic leads to measurable actions like purchases, inquiries, or sign-ups.",
  },
  {
    img: Six,
    title: "Reporting & Ongoing Management",
    desc: "Through detailed reporting and weekly meetings, we track performance, share insights, and continuously optimize campaigns for long-term growth and sustained profitability.",
  },
];

function PPCServices() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="PPC Marketing Services"
            title="ROI-Focused PPC Marketing Services"
            description="We value every click because it directly impacts your revenue. With our PPC marketing services, we aim to deliver 4x–5x ROAS by analyzing campaigns, objectives, and goals."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={webDevelopmentBanner}
            altText="PPC Marketing Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- Affordable White Label PPC Services"
                description="Perfect Web Services is a trusted white label PPC agency helping businesses and agencies deliver high-performing paid advertising solutions under their brand. We provide complete, ROI-driven PPC services, from campaign setup to optimization, designed to maximize clicks, boost conversions, and generate measurable growth for your clients without revealing our identity."
                buttonText="Get Free Consultation Now"
                buttonLink="/contact-us"
                image={WebDclient}
                altText="Affordable White Label PPC Services"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Our Result-Driven PPC Management Solutions"
           subtitle="We provide a complete suite of PPC solutions designed to maximize your results. Explore our services below to see how we can accelerate your growth."
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
        title="Get A Free PPC Cost Estimation"
        description="How much will PPC cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Tech Stack Our PPC Expert Uses" techLogos={techLogos} />
          </div>
        </section>

       
    {/*Right Partner Section*/}
    <section className="experience-section padd clip-section pb-0">
      <ExComponent 
       title="What Makes Us the Right Partner for PPC Success?"
       
       plus ="6+"
       plusText = "Years of Expertise"
      leftOneh = "Proven success across industries with ROI-focused strategies."
       
      clientSH = "70% Client Retention"
       clientSP = "Trusted by businesses for consistent growth."
       
       leftTwoh = "4x–5x "
       leftThreeh = "ROAS"
       leftfourh = "High returns with minimal wasted ad spend."
       
       leftfour = "30% Lower CPC"
       leftfive = "Optimized bidding to cut costs per click."
       
       middleOne = "25+"
       middleTwo = "Platforms Served"
       middleTwoP = "Expertise across Google, Meta, Bing, LinkedIn, Amazon & more."
       
       rightOne = "30K+ Leads Delivered"
       rightTwo = "PPC campaigns driving measurable business results."
      />
    </section>

     


    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="Every brand needs a tailored PPC strategy, whether local or e-commerce. We design and execute campaigns with maximum potential to drive profitability and sustainable business growth."
        buttonText="Get PPC Proposal Now"
        buttonLink="/contact-us"
      />
    </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Why Pay-Per-Click Marketing for Businesses?"
        sectionSubText=""
        services={[
          {
            icon: DSCIcon1,
            heading: "Fast Results",
            text: "PPC delivers measurable outcomes quickly, letting businesses drive leads and sales within days of launch while optimizing campaigns in real time for growth."
          },
          {
            icon: DSCIcon2,
            heading: "Instant Traffic",
            text: "Unlike SEO, PPC generates immediate traffic by placing your brand at the top of search results, ensuring visibility to the right audience instantly."
          },
          {
            icon: DSCIcon3,
            heading: "Website Performance",
            text: "With PPC services, we drive highly relevant traffic directly to your landing pages and analyze performance to ensure content effectively converts visitors into profitable business opportunities."
          },
          {
            icon: DSCIcon4,
            heading: "Experimentation",
            text: "PPC allows A/B testing of ads, keywords, and landing pages, enabling businesses to identify winning strategies faster and continuously enhance campaign performance."
          },
          {
            icon: DSCIcon5,
            heading: "Granular Targeting",
            text: "Reach the exact audience with demographic, geographic, device, and interest-based targeting. PPC ensures your ads are seen by the people most likely to convert."
          },
          {
            icon: DSCIcon6,
            heading: "Conversion Tracking",
            text: "Track clicks, conversions, and revenue with advanced analytics, helping you measure ROI accurately while identifying which campaigns generate the most profitable customer actions."
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
              titles = "How We Set up Winning PPC Campaigns"
                faqDatas={stepsData}
                btntext ="Get PPC Proposal"
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

export default PPCServices;