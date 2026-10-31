import "../../App.css";
import "../../Responsive-App.css";
import { useMeta } from "../../hooks/useMeta";
import MetaHelmet from "../../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../../components/CommonHeroSection";
import FreeConsultation from "../../components/freeConsultation";
import FreeEstimationSection from "../../components/FreeEstimationSection";
import ImageWithText from "../../components/ImageWithText";
import ServicesSection from "../../components/CommonServicesSection";
import GridComponent from "../../components/Services/GridComponent";
import ExComponent from "../../components/ExComponent";
import TechStack from "../../components/TechStack";
import FourStepComponent from "../../components/Services/FourStepComponent";
import CFAQComponent from "../../components/CFAQComponent";
import TestimonialVideoCarousel from "../../components/TestimonialVideoCarousel";
import DigitalMarkettingBanner from "../../assets/images/Services/DigitalMarkettingBanner.webp";
import Digital2 from "../../assets/images/Services/Digital2.webp";
import sideCircle from "../../assets/images/side-circle.png";

import SearchEngineOptimizationSeo from "../../assets/images/Services/SearchEngineOptimizationSeo.webp";
import PayPerClickAdvertisingPpc from "../../assets/images/Services/PayPerClickAdvertisingPpc.webp";
import SocialMediaMarketingSmm from "../../assets/images/Services/SocialMediaMarketingSmm.webp";
import ContentMarketing from "../../assets/images/Services/ContentMarketing.webp";
import OnlineRreputationManagemenOrm from "../../assets/images/Services/OnlineRreputationManagemenOrm.webp";

import FAQImg from "../../assets/images/FAQImg.webp";
import One from "../../assets/images/Services/one.svg";
import Two from "../../assets/images/Services/two.svg";
import Three from "../../assets/images/Services/three.svg";
import Four from "../../assets/images/Services/four.svg";
import calcfreeImage from "../../assets/images/calcfreeImage.webp";





/**Digital Success Icons */
import ServicesCover from "../../components/ServicesCover";
import Boost from "../../assets/images/Services/Boost.webp";
import BrandingConversions from "../../assets/images/Services/BrandingConversions.webp";
import HighImpactAd from "../../assets/images/Services/HighImpactAd.webp";
import SocialEngagement from "../../assets/images/Services/SocialEngagement.webp";
import SocialMediaImpact from "../../assets/images/Services/SocialMedia Impact.webp";
import AnalyzeImprove from "../../assets/images/Services/AnalyzeImprove.webp";


/**TECH LOGOS */

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


const servicesData = [
  {
    img: SearchEngineOptimizationSeo,
    title: "Search Engine Optimization (SEO)",
    desc: "Rank your website in the top 10 results on search engines like Google and Bing using our keyword optimization, technical SEO, and link-building strategies for sustained, organic traffic.",
    link: "/expert-seo-services",
  },
  {
    img: PayPerClickAdvertisingPpc,
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Run targeted ad campaigns on platforms like Google Ads to instantly drive high-quality traffic, maximize ROI, and generate measurable sales leads.",
    link: "/ppc-marketing-services",
  },
  {
    img: SocialMediaMarketingSmm,
    title: "Social Media Marketing (SMM)",
    desc: "Promote your brand on social platforms like Facebook, Instagram, and LinkedIn to boost engagement, grow followers, and drive conversions effectively.",
    link: "/smo-services",
  },
  {
    img: ContentMarketing,
    title: "Content Marketing",
    desc: "Create and distribute valuable, relevant content that attracts, engages, and retains your target audience while supporting SEO and brand authority.",
    link: "",
  },
  {
    img: OnlineRreputationManagemenOrm,
    title: "Online Reputation Management (ORM)",
    desc: "Monitor and improve your brand’s online image by managing reviews, bad responses, responding to feedback, and creating a positive perception among customers.",
    link: "",
  },

];


const webDevFAQ = [
  {
    question: "What makes Perfect Web Services different from other digital marketing agencies?",
    answer: "We focus on data-driven strategies, transparent reporting, and tailored campaigns. Our approach combines creativity and analytics to deliver measurable results and long-term business growth."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Timelines vary by service. SEO can take 4–6 months, while paid ads and social campaigns often deliver measurable results within weeks of launch."
  },
  {
    question: "Which digital marketing channels do you specialize in?",
    answer: "We excel in SEO, PPC, social media marketing, content creation, email marketing, and conversion optimization—selecting the right mix to fit your goals."
  },
  {
    question: "Can you help my business if I’m targeting international customers?",
    answer: "Yes! We create geo-targeted campaigns, multilingual content strategies, and platform-specific approaches to reach and engage global audiences effectively."
  },
  {
    question: "How do you measure the success of a campaign?",
    answer: " We track KPIs such as traffic growth, lead volume, conversion rates, ROI, and engagement metrics, providing detailed reports and insights for every campaign."
  }
];

const stepsData = [
  {
    img: One,
    title: "Discovery & Research",
    desc: "We begin by aligning on goals, understanding your brand vision, analyzing market trends, researching your audience, and auditing existing channels to set a solid strategic foundation.",
  },
  {
    img: Two,
    title: "Strategic Planning",
    desc: "Our experts craft an integrated strategy and roadmap, selecting the right platforms, tools, and content approach to deliver consistent results aligned with your business objectives.",
  },
  {
    img: Three,
    title: "Campaign Execution",
    desc: "From building engaging creatives to launching targeted campaigns, we ensure every ad, post, and message connects with your audience and drives measurable conversions effectively.",
  },
  {
    img: Four,
    title: "Optimization & Growth",
    desc: "We monitor performance, run experiments, refine strategies, provide detailed reporting, and scale successful campaigns to achieve sustainable growth and long-term business expansion.",
  },
];




function DigitalMarketing() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Digital Marketing Services"
            title="Affordable Digital Marketing Services"
            description="Perfect Web Services offers Affordable Digital Marketing Services with the lowest cost per result. Boost sales, enhance visibility, and achieve measurable growth through our targeted, budget-friendly strategies."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={DigitalMarkettingBanner}
            altText="Digital Marketing Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- A White Label Digital Marketing Agency"
                description="Perfect Web Services provides expert white label digital marketing services, backed by years of experience. We help brands scale their revenue by 4x to 5x with proven, result-driven strategies. Our white-label solutions empower agencies to deliver exceptional marketing outcomes under their brand, driving consistent growth and long-term client success with affordable pricing."
                buttonText="Get Free Consultation Now"
                buttonLink="/contact-us"
                image={Digital2}
                altText="Digital Marketing Services"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Affordable Digital Marketing Services Tailored to Your Needs"
           subtitle="We are offering a full range of digital marketing services. Check out our services below."
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
          title="Get A Free Marketing Cost Estimation"
          description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
          buttonText="Start Calculations"
          buttonLink="/contact-us"
          image={calcfreeImage}
          altText="Website Cost Estimation"
        />

         {/*Tech stack section*/}
       <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Digital Marketing Tools We Use to Drive Business Growth" techLogos={techLogos} />
          </div>
        </section>


        
    {/*Right Partner Section*/}
    <section className="experience-section padd clip-section pb-0">
      <ExComponent 
       title="Why Our Affordable Digital Marketing Services for Your Brand?"
       
       plus ="6+"
       plusText = "Years of Expertise"
      leftOneh = "Proven track record in delivering measurable marketing results across industries."
       
      clientSH = "70% Client Retention Rate"
       clientSP = "Long-term partnerships built on trust and consistent performance."
       
       leftTwoh = "4x–5x "
       leftThreeh = "ROAS"
       leftfourh = "Strategies designed to maximize returns while minimizing ad spend."
       
       leftfour = "30% Lower Cost per Result"
       leftfive = " Optimized campaigns to deliver high-quality leads at the lowest possible cost."
       
       middleOne = "200%+"
       middleTwo = ""
       middleTwoP = "Organic Brand Growth through strategic SEO campaigns."
       
       rightOne = "30+ Industries"
       rightTwo = "Served with proven digital marketing solutions."
      />
    </section>



    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="Share your business goals and objectives, give us a small brief, and we’ll deliver big results with strategies designed to amplify your growth and revenue"
        description =""
        buttonText="Start Calculation"
        buttonLink="/contact-us"
      />
    </section>


    {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="How We Drive Digital Success"
        sectionSubText="Want to take your brand to the next level? Perfect Web Services delivers result-driven digital marketing solutions designed to boost your visibility, engage your audience, and turn clicks into loyal customers."
        services={[
          {
            icon: Boost,
            heading: "Discover & Strategizey",
            text: "We start by understanding your business goals, audience, and competition to create a personalized digital strategy that aligns with your growth vision."
          },
          {
            icon: HighImpactAd,
            heading: "Optimize Your Online Presence",
            text: "Our experts enhance website performance with technical SEO, speed optimization, and keyword targeting to boost rankings and maximize search visibility."
          },
          {
            icon: SocialEngagement,
            heading: "Engage Through Compelling Content",
            text: "We craft SEO-friendly blogs, social posts, and visuals that connect emotionally, strengthen brand identity, and encourage audience engagement across digital platforms."
          },
          {
            icon: BrandingConversions,
            heading: "Launch Targeted Ad Campaigns",
            text: "Drive measurable results with ROI-focused PPC, Google Ads, and social campaigns tailored to attract qualified leads and improve conversion rates."
          },

           {
            icon: SocialMediaImpact,
            heading: "Strengthen Social Media Impact",
            text: "We manage and grow your social channels through strategic posting, influencer collaborations, and audience interactions that build trust and brand loyalty."
          },
          {
            icon: AnalyzeImprove,
            heading: "Analyze & Improve Continuously",
            text: "Using real-time analytics, we monitor campaign performance, track KPIs, and refine strategies to ensure consistent growth and long-term digital success."
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


      {/*Testimonial Video carousel*/}
      <section className="fourSteps  padd pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <FourStepComponent 
              titles = "Our Step-by-Step Digital Marketing Process"
              faqDatas={stepsData}
              btntext ="Contact Us  Now"
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
              <CFAQComponent faqData={webDevFAQ} image={FAQImg} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default DigitalMarketing;