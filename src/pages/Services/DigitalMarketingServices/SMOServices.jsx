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
import sideCircle from "../../../assets/images/side-circle.png";
import smoDevelopmentBanner from "../../../assets/images/Services/2NDsmo.webp";
import smoDclient from "../../../assets/images/Services/1STsmo.webp";


import ProfileOptimization from "../../../assets/images/Services/Profile-Optimizationsmo.png";
import ContentStrategyCreation from "../../../assets/images/Services/Content-Strategy-Creationsmo.png";
import CommunityEngagement from "../../../assets/images/Services/Community-Engagementsmo.png";
import HashtagTrend from "../../../assets/images/Services/Hashtag-Trend-Optimizationsmo.png";
import SocialMediaMarketing from "../../../assets/images/Services/Social-Media-Marketingsmo.png";
import CrossPlatform from "../../../assets/images/Services/Cross-Platform-Promotionsmo.png";


import FAQImg from "../../../assets/images/FAQImg.webp";
import One from "../../../assets/images/Services/one.svg";
import Two from "../../../assets/images/Services/two.svg";
import Three from "../../../assets/images/Services/three.svg";
import Four from "../../../assets/images/Services/four.svg";
import Five from "../../../assets/images/Services/Five.webp";
import Six from "../../../assets/images/Services/Six.webp";
import calcfreeImage from "../../../assets/images/calcfreeImage.webp";
import ServicesCover from "../../../components/ServicesCover";
import DSCIcon1 from "../../../assets/images/Services/SocialSearchRanking.png";
import DSCIcon2 from "../../../assets/images/Services/CustomerBehaviorInsights.png";
import DSCIcon3 from "../../../assets/images/Services/TrustCredibilityBuilding.png";
import DSCIcon4 from "../../../assets/images/Services/CrisisManagementReputationControl.png";
import DSCIcon5 from "../../../assets/images/Services/CompetitiveEdgeThrough TrendAdaptation.png";
import DSCIcon6 from "../../../assets/images/Services/CrossChannelConsistency.png";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";



/**TECH STACK */

import TechStack from "../../../components/TechStack";

import Buffer from "../../../assets/images/tech-logos/SMO/Buffer.webp";
import BuzzSumo from "../../../assets/images/tech-logos/SMO/BuzzSumo.webp";
import Canva from "../../../assets/images/tech-logos/SMO/Canva.webp";
import GoogleAnalytics from "../../../assets/images/tech-logos/SMO/GoogleAnalytics.webp";
import Hootsuite from "../../../assets/images/tech-logos/SMO/Hootsuite.webp";
import Hotjar from "../../../assets/images/tech-logos/SMO/Hotjar.webp";
import HubSpot from "../../../assets/images/tech-logos/SMO/HubSpot.webp";
import Later from "../../../assets/images/tech-logos/SMO/Later.webp";
import MetaBusinessSuite from "../../../assets/images/tech-logos/SMO/MetaBusinessSuite.webp";
import SemRush from "../../../assets/images/tech-logos/SMO/SemRush.webp";
import SocialBee from "../../../assets/images/tech-logos/SMO/SocialBee.webp";
import SproutSocial from "../../../assets/images/tech-logos/SMO/SproutSocial.webp";


  const techLogos = [
  { name: "Buffer", logo: Buffer },
  { name: "BuzzSumo", logo: BuzzSumo },
  { name: "Canva", logo: Canva },
  { name: "Google Analytics", logo: GoogleAnalytics },
  { name: "Hootsuite", logo: Hootsuite },
  { name: "Hotjar", logo: Hotjar },
  { name: "HubSpot Social Tools", logo: HubSpot },
  { name: "Later", logo: Later },
  { name: "Meta Business Suite", logo: MetaBusinessSuite },
  { name: "Sprout Social", logo: SproutSocial },
  { name: "SocialBee", logo: SocialBee },
  { name: "SEMrush ", logo: SemRush },
  
];

const servicesData = [
  {
    img: ProfileOptimization,
    title: "Profile Optimization",
    desc: "We optimize your social media profiles with compelling bios, visuals, and keywords to strengthen brand identity, attract followers, and boost search visibility across platforms.",
    link: "",
  },
  {
    img: ContentStrategyCreation,
    title: "Content Strategy & Creation",
    desc: "Our team crafts engaging, audience-focused content calendars with trending topics, creatives, and captions to consistently deliver value, increase reach, and foster brand loyalty.",
    link: "",
  },
  {
    img: CommunityEngagement,
    title: "Community Engagement",
    desc: "We actively engage with followers through comments, messages, and discussions, building strong relationships, trust, and encouraging meaningful interactions that drive long-term brand advocacy.",
    link: "",
  },
  {
    img: HashtagTrend,
    title: "Hashtag & Trend Optimization",
    desc: "We research trending and niche hashtags to maximize content visibility, improve discovery, and place your brand in conversations your audience already cares about.",
    link: "",
  },
  {
    img: SocialMediaMarketing,
    title: "Social Media Marketing",
    desc: "We run targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to expand reach, attract customers, and generate measurable conversions for your business.",
    link: "",
  },
  {
    img: CrossPlatform,
    title: "Cross-Platform Promotion",
    desc: "We connect your content seamlessly across Facebook, Instagram, LinkedIn, and more, ensuring consistent branding, wider reach, and improved audience targeting for maximum impact.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. How does SMO differ from just posting on social media?",
    answer: "SMO goes beyond posting; it involves strategy, optimization, engagement, and analytics to build visibility, attract followers, and generate measurable brand growth."
  },
  {
    question: "2. Can SMO help build trust with my audience?",
    answer: "Yes, SMO focuses on authentic content, consistent interaction, and community-building, which fosters credibility, transparency, and long-term trust with your target audience."
  },
  {
    question: "3. Is SMO only about increasing followers and likes?",
    answer: "No, SMO is about meaningful engagement, optimizing profiles, boosting search visibility, and converting social presence into business growth, not just vanity metrics."
  },
  {
    question: "4. How soon can I see results from SMO?",
    answer: "SMO is a long-term approach, but businesses often see better engagement, organic follower growth, and improved brand visibility within 2–3 months."
  },
  {
    question: "5. Can SMO support SEO performance too?",
    answer: "Yes, SMO indirectly supports SEO by driving traffic, increasing brand mentions, and boosting engagement signals that search engines consider in ranking websites."
  }
];


const stepsData = [
  {
    img: One,
    title: "Profile Audit & Optimization",
    desc: "We analyze and optimize your social profiles with the right visuals, bios, and keywords to establish credibility, enhance visibility, and attract followers organically.",
  },
  {
    img: Two,
    title: "Content Strategy Development",
    desc: "A tailored content plan designed around your audience’s interests, trending topics, and brand goals to ensure consistent engagement and strong community interaction.",
  },
  {
    img: Three,
    title: "Creative Content Production",
    desc: "From eye-catching graphics to engaging posts and reels, we create scroll-stopping content that resonates, strengthens brand presence, and drives meaningful audience actions.",
  },
  {
    img: Four,
    title: "Posting & Scheduling",
    desc: "We maintain consistency by scheduling optimized posts at peak times, ensuring maximum visibility, reach, and interaction across all major social media platforms.",
  },
  {
    img: Five,
    title: "Audience Engagement & Trust Building",
    desc: "We engage with followers through comments, messages, and polls to nurture trust, build authentic relationships, and encourage loyal, long-term brand advocacy.",
  },
  {
    img: Six,
    title: "Monitoring & Performance Improvement",
    desc: "Constant tracking of performance metrics helps us measure success, identify gaps, and fine-tune strategies for continuous growth and improved social media ROI.",
  },
];





function SMOServices() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
    <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Social Media Services"
            title="Social Media Optimization Services"
            description="Just posting isn’t enough! That’s right! boost brand reach, grow followers, and drive more engagement through our powerful social media optimization strategies."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={smoDevelopmentBanner}
            altText="Social Media Optimization Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- A Social Media Optimization Company"
                description="Perfect Web Services has been delivering Social Media Optimization services for over 6 years. We don’t just optimize accounts, we guide brands in building a strong presence across social platforms and search engines. If your social media underperforms compared to competitors, it’s time to give it the attention it deserves."
                buttonText="Get Free Consultation Now"
                buttonLink="/contact-us"
                image={smoDclient}
                altText="A Social Media Optimization Company"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <ServicesSection 
           title="Comprehensive SMO Solutions We Provide"
           subtitle="From strategy to execution, our SMO solutions help you grow faster. Explore our services below and unlock the true potential of your social presence."
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
        title="Get A Free Product Cost Estimation"
        description="How much will your website cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
      {/*Tech stack section*/}
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Top Technologies for Social Media Optimization Strategies" techLogos={techLogos} />
          </div>
        </section>

       
    {/*Right Partner Section*/}
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="Why Perfect Web Services for Social Media Optimization"
      cards={[
        {
          plus: "6+",
          bottomText: "Years of SMO Expertise driving strong brand presence and measurable engagement.",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "100+",
          bottomText: "Brands Optimized with tailored strategies to grow followers and authority.",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "3x–4x",
          bottomText: "Engagement Growth achieved through creative and targeted social campaigns.",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "7+",
          bottomText: "Platforms Managed, ensuring consistent performance across Facebook, Instagram, LinkedIn, and more.",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "70%",
          bottomText: "Client Retention Rate built on trust, transparency, and proven SMO success.",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery"
        },
        {
          plus: "200%",
          bottomText: "Organic Reach Boost achieved by amplifying visibility without paid promotions.",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Get Free Social Media Audit"
      buttonLink="/contact-us"
    /></section>

     


    {/*Free Consultation*/}
    <section className="webd-consulation padd">
      <FreeConsultation
        title="From startups to enterprises, every brand needs an effective SMO plan. Our strategies maximize reach, engagement, and audience growth, turning social media into a growth engine."
        buttonText="Get SMO Proposal Now"
        buttonLink="/contact-us"
      />
    </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Why Business Needs Social Media Optimization?"
        sectionSubText=""
        services={[
          {
            icon: DSCIcon1,
            heading: "Social Search Ranking",
            text: "Social signals are now impacting search visibility. Optimized profiles and content help your business appear in platform searches and even influence Google rankings."
          },
          {
            icon: DSCIcon2,
            heading: "Customer Behavior Insights",
            text: "SMO provides access to real-time data on audience preferences, behaviors, and trends, enabling you to refine strategies and align campaigns with what customers want."
          },
          {
            icon: DSCIcon3,
            heading: "Trust & Credibility Building",
            text: "A consistent, active, and optimized presence makes your brand look professional, reliable, and authentic, building trust that turns casual visitors into paying customers."
          },
          {
            icon: DSCIcon4,
            heading: "Crisis Management & Reputation Control",
            text: "With active and optimized profiles, you can respond instantly to negative feedback, control the narrative, and build trust through transparent communication."
          },
          {
            icon: DSCIcon5,
            heading: "Competitive Edge Through Trend Adaptation",
            text: "SMO helps you stay on top of trending topics, hashtags, and platform updates, keeping your brand culturally relevant and ahead of competitors who may be lagging."
          },
          {
            icon: DSCIcon6,
            heading: "Cross-Channel Consistency",
            text: "SMO ensures your brand looks and feels the same across all platforms, building a seamless identity that strengthens recognition and customer trust."
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
              titles = "Our Proven SMO Workflow"
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

export default SMOServices;