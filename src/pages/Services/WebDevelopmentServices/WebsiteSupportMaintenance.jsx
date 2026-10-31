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
import WmaintanceBanner from "../../../assets/images/Services/WmaintanceBanner.webp";
import WmaintanceClient from "../../../assets/images/Services/WmaintanceClient.webp";
import MSIcon1 from "../../../assets/images/Services/MSIcon1.webp";
import MSIcon2 from "../../../assets/images/Services/MSIcon2.webp";
import MSIcon3 from "../../../assets/images/Services/MSIcon3.webp";
import MSIcon4 from "../../../assets/images/Services/MSIcon4.webp";
import MSIcon5 from "../../../assets/images/Services/MSIcon5.webp";
import MSIcon6 from "../../../assets/images/Services/MSIcon6.webp";
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
import SMIcon1 from "../../../assets/images/Services/SMIcon1.webp";
import SMIcon2 from "../../../assets/images/Services/SMIcon2.webp";
import SMIcon3 from "../../../assets/images/Services/SMIcon3.webp";
import SMIcon4 from "../../../assets/images/Services/SMIcon4.webp";
import SMIcon5 from "../../../assets/images/Services/SMIcon5.webp";
import SMIcon6 from "../../../assets/images/Services/SMIcon6.webp";
import SMIcon7 from "../../../assets/images/Services/SMIcon7.webp";
import SMIcon8 from "../../../assets/images/Services/SMIcon8.webp";
import SMIcon9 from "../../../assets/images/Services/SMIcon9.webp";



/**TECH STACK */

import TechStack from "../../../components/TechStack";
import Ahrefs from "../../../assets/images/tech-logos/Maintenance/Ahrefs.webp";
import Cloudflare from "../../../assets/images/tech-logos/Maintenance/Cloudflare.webp";
import Drupal from "../../../assets/images/tech-logos/Maintenance/Drupal.webp";
import GoogleAnalytics from "../../../assets/images/tech-logos/Maintenance/GoogleAnalytics.webp";
import GoogleSearchConsole from "../../../assets/images/tech-logos/Maintenance/GoogleSearchConsole.webp";
import GTmetrix from "../../../assets/images/tech-logos/Maintenance/GTmetrix.webp";
import Hotjar from "../../../assets/images/tech-logos/Maintenance/Hotjar.webp";
import Joomla from "../../../assets/images/tech-logos/Maintenance/Joomla.webp";
import Magento from "../../../assets/images/tech-logos/Maintenance/Magento.webp";
import Pingdom from "../../../assets/images/tech-logos/Maintenance/Pingdom.webp";
import ScreamingFrog from "../../../assets/images/tech-logos/Maintenance/ScreamingFrog.webp";
import SEMrush from "../../../assets/images/tech-logos/Maintenance/SEMrush.webp";
import ShopifyIcon from "../../../assets/images/tech-logos/Maintenance/Shopify.webp";
import UptimeRobot from "../../../assets/images/tech-logos/Maintenance/UptimeRobot.webp";
import WordPressIcon from "../../../assets/images/tech-logos/Maintenance/WordPress.webp";


import TAndSSupportAvailable from "../../../assets/images/badge/TAndSSupportAvailable.webp";
import HundredClientSatisfactionrate from "../../../assets/images/badge/HundredClientSatisfactionrate.webp";
import CommittedToOnTimeResults from "../../../assets/images/badge/CommittedToOn-TimeResults.webp";
import HundredQualityAssurance from "../../../assets/images/badge/HundredQualityAssurance.webp";
import ProvenTrackRecordOfExcellence from "../../../assets/images/badge/ProvenTrackRecordOfExcellence.webp";
import ExperiencedAndCertifiedProfessionals from "../../../assets/images/badge/ExperiencedAndCertifiedProfessionals.webp";
import TrustedByGlobalBussinesses from "../../../assets/images/badge/TrustedByGlobalBussinesses.webp";


 const techLogos = [
  { name: "Ahrefs", logo: Ahrefs },
  { name: "Cloudflare", logo: Cloudflare },
  { name: "Drupal", logo: Drupal },
  { name: "GoogleAnalytics", logo: GoogleAnalytics },
  { name: "GoogleSearchConsole", logo: GoogleSearchConsole },
  { name: "GTmetrix", logo: GTmetrix },
  { name: "Hotjar", logo: Hotjar },
  { name: "Joomla", logo: Joomla },
  { name: "Magento", logo: Magento },
  { name: "Pingdom", logo: Pingdom },
  { name: "ScreamingFrog", logo: ScreamingFrog },
  { name: "SEMrush", logo: SEMrush },  
  { name: "Shopify", logo: ShopifyIcon },
  { name: "UptimeRobot", logo: UptimeRobot },
  { name: "WordPress", logo: WordPressIcon },
];

const servicesData = [
  {
    img: SMIcon1,
    title: "Content Updates",
    desc: "We regularly help update your website's text, images, banners, and blogs to keep your content fresh, relevant, and engaging for your audience.",
    link: "",
  },
  {
    img: SMIcon2,
    title: " Plugin & Theme Updates",
    desc: " Ensure your website runs smoothly and securely by updating plugins and themes to their latest versions, minimizing compatibility issues and vulnerabilities.",
    link: "",
  },
  {
    img: SMIcon3,
    title: " Website Security Monitoring",
    desc: "We implement firewalls, malware scans, and real-time threat detection to protect your website from hackers, viruses, and unauthorized access.",
    link: "",
  },
  {
    img: SMIcon4,
    title: "Website Backup & Restore",
    desc: "Scheduled backups and quick restore options ensure that your data is safe and can be recovered instantly in the event of website failure or loss.",
    link: "",
  },
  {
    img: SMIcon5,
    title: " Speed & Performance Optimization",
    desc: "Enhance page loading speed with caching, image compression, and script minification to deliver a superior user experience and improved search engine rankings.",
    link: "",
  },
  {
    img: SMIcon6,
    title: "SEO Maintenance",
    desc: "Ongoing SEO support, including keyword optimization, meta tag updates, and technical SEO audits to keep your site competitive and search engine-friendly.",
    link: "",
  },
  {
    img: SMIcon7,
    title: "Mobile Responsiveness Fixes",
    desc: "We ensure your website functions perfectly across all devices and screen sizes, delivering a consistent user experience everywhere.",
    link: "#",
  },
  {
    img: SMIcon8,
    title: "Uptime Monitoring & Support",
    desc: "We track your website's uptime 24/7 and provide instant support if your website goes down, ensuring maximum availability and reliability.",
    link: "#",
  },
  {
    img: SMIcon9,
    title: "Technical Troubleshooting",
    desc: "We diagnose and resolve bugs, script issues, and functionality problems quickly, ensuring your website remains stable and delivers a smooth user experience.",
    link: "#",
  },
];


const webDevFAQ = [
  {
    question: "1. What are the typical costs associated with website maintenance?",
    answer: "Website maintenance cost varies based on your site’s size, platform, and required services. Perfect Web Services offers maintenance on a monthly, weekly, and hourly basis as needed."
  },
  {
    question: "2. How can I check if my website is currently under maintenance?",
    answer: "You can check if your website is under maintenance by visiting the site directly. If it displays a maintenance message or is inaccessible, it’s likely undergoing updates or fixes."
  },
  {
    question: "3. How many hours are generally required for website maintenance tasks?",
    answer: "Website maintenance typically requires 5–20 hours per month for a small website. For a big website, it depends on complexity, updates needed, security checks, content edits, and performance optimizations required for smooth operation."
  },
  {
    question: "4. Why do websites go offline during maintenance, and how long does it usually last?",
    answer: " Websites experience downtime to implement updates, fix issues, or enhance performance. Duration varies but typically ranges from a few minutes to a couple of hours based on complexity."
  },
  {
    question: "5. Can I manage and maintain my website on my own?",
    answer: "If you're not a technical person using a CMS like WordPress, you can handle content updates easily, but for speed, security, and advanced technical tasks, a developer's support is essential."
  }
];


const stepsData = [
  {
    img: One,
    title: "Initial Website Audit",
    desc: "We begin with a complete audit to analyze performance, security, SEO, and functionality, identifying issues and improvement areas before implementing maintenance strategies.",
  },
  {
    img: Two,
    title: " Backup and Data Security Setup",
    desc: "Regular backups and robust security configurations ensure your website’s data remains protected, recoverable, and safe from malware, breaches, or accidental losses.",
  },
  {
    img: Three,
    title: "Performance Optimization",
    desc: "We enhance loading speed, compress images, clean unused files, and refine code to ensure your website runs smoothly across devices and browsers.",
  },
  {
    img: Four,
    title: " Plugin and CMS Updates",
    desc: "Our team keeps your CMS, themes, and plugins up to date to maintain compatibility, strengthen security, and improve your website’s overall stability and performance.",
  },

    {
    img: Five,
    title: "Continuous Monitoring & Reporting",
    desc: "Our team keeps your CMS, themes, and plugins up to date to maintain compatibility, strengthen security, and improve your website’s overall stability and performance.",
  },

    {
    img: Six,
    title: " Ongoing Support & Enhancements",
    desc: "Perfect Web Services offers continuous support, handling technical issues, feature upgrades, and UX enhancements to keep your website future-ready and performing flawlessly.",
  },

];





function WebsiteSupportMaintenance() {
  const { meta } = useMeta();
  return (
    <>
      <MetaHelmet meta={meta} /> 
     <section className="Common-hero-section">
        <CommonHeroSection
            subtitle="Website Support and Maintenance Services"
            title="Website Support and Maintenance Services: 100% Up to Date and Secure Websites"
            description="Get complete website care with fully managed support, including content edits, security monitoring, SEO optimization, plugin updates, and more, available on monthly or hourly plans."
            buttonText="Let's Get Started"
            buttonLink="/contact-us"
            image={WmaintanceBanner}
            altText="Website Support and Maintenance Services"
            />   
    </section>
    
    <section className="service-i-w-t padd">
        <ImageWithText
                title="Perfect Web Services- All Website Maintenance Services Under One Roof"
                description="Perfect Web Services offers complete website maintenance solutions under one roof, including regular content updates, plugin and theme upgrades, security monitoring, speed optimization, SEO improvements, backup & restore, bug fixes, and performance audits. Our expert team ensures your website runs smoothly, securely, and stays up-to-date, month after month, hassle-free."
                buttonText="Get Quote Now"
                buttonLink="/contact-us"
                image={WmaintanceClient}
                altText="All Website Maintenance Services"
                sideCircle={sideCircle}
                reverse={true}
            />
    </section>

     <section className="Grid-section padd clip-section">
        <div className="container">
          <div className="row align-items-center justify-content-center flex-column">
            <div className="header-main">
              <h2 className="text-center">Our Website Support and Maintenance Services include:</h2>
              <hr />
            </div>
            <p className="subhead">Here is our tailored set of Maintenance Services. Explore Now.</p>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
                <GridComponent data={servicesData} />
            </div>
          </div>
        </div>
      </section>


    
    <FreeEstimationSection
        title="Get A Free Product Cost Estimation"
        description="Not sure how much your website will cost? Use our quick cost calculator to discover pricing, features, and timelines tailored to your business needs."
        buttonText="Start Calculations"
        buttonLink="/contact-us"
        image={calcfreeImage}
        altText="Website Cost Estimation"
      />
    
      <section className="tech-stack padd bg-color-white">
          <div className="container">
            <TechStack title = "Technologies & Tools for Website Support and Maintenance" techLogos={techLogos} />
          </div>
        </section>

       
   
     <section className="experience-section padd clip-section pb-0">
     <CommonExComponent
      title="Why Perfect Web Services for Website Support And Maintenance?"
      cards={[
        {
          plus: "100+ ",
          bottomText: "Websites Successfully Maintained",
          icon: HundredClientSatisfactionrate,
          alt: "Industry"
        },
        {
          plus: "24/7",
          bottomText: "Monitoring & Emergency Support",
          icon: CommittedToOnTimeResults,
          alt: "Client Success",
          h4Class: "bgc"
        },
        {
          plus: "98%",
          bottomText: "Client Retention Rate",
          icon: HundredQualityAssurance,
          alt: "Product Delivery"
        },
        {
          plus: "100%",
          bottomText: " Secure Backup & Restore Implementations",
          icon: ProvenTrackRecordOfExcellence,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
        {
          plus: "500+",
          bottomText: "Plugin & Theme Updates Handled",
          icon: ExperiencedAndCertifiedProfessionals,
          alt: "Product Delivery"
        },
        {
          plus: "300+",
          bottomText: "Performance & Speed Optimizations Completed",
          icon: TrustedByGlobalBussinesses,
          alt: "Product Delivery",
          h4Class: "bgc"
        },
      ]}
      buttonText="Get Quote Now"
      buttonLink="/contact-us"
    /></section>


     


    {/*Free Consultation*/}

      <section className="webd-consulation padd">
        <FreeConsultation
          title="We provide comprehensive website support and maintenance services for nearly all CMS platforms and technologies, whether it’s WordPress, Shopify, or others, at highly competitive and reasonable pricing."
          buttonText="Share Your Requirement "
          buttonLink="/contact-us"
        />
      </section>

      {/*ServicesCover*/}
      <section className="ServiceCoverSection padd pt-0">
        <ServicesCover
        sectionTitle="Why Regular Website Maintenance for Your Website?"
        sectionSubText="With years of expertise in custom API solutions, Perfect Web Services empowers businesses with future-ready, secure, and scalable APIs that streamline operations and drive growth."
        services={[
          {
            icon: MSIcon1,
            heading: "Enhanced Website Security",
            text: "Regular updates fix vulnerabilities, secure plugins, and protect sensitive data from cyber threats, ensuring your website remains safe, compliant, and reliable for users."
          },
          {
            icon: MSIcon2,
            heading: "Improved Performance & Speed",
            text: "Maintenance enhances website speed by cleaning up unused plugins, optimizing images, and updating code—boosting user experience, engagement, and conversion potential."
          },
          {
            icon: MSIcon3,
            heading: "Better SEO & Visibility",
            text: "Frequent SEO audits and technical fixes keep your website optimized, error-free, and search engine-friendly, helping maintain or improve rankings on Google."
          },

          {
            icon: MSIcon4,
            heading: "Consistent User Experience",
            text: "Ongoing maintenance ensures bug-free navigation, fast loading, and mobile compatibility—creating a seamless experience across devices and improving user satisfaction."
          },
          {
            icon: MSIcon5,
            heading: "Reliable Backup & Recovery",
            text: "Scheduled backups and proactive monitoring protect your data, enabling quick recovery and minimal downtime in case of hacks, crashes, or system failures."
          },
          {
            icon: MSIcon6,
            heading: " Fresh Content & Functionality",
            text: "Regular updates keep your content relevant, design modern, and features aligned with business goals, helping maintain user interest and trust over time."
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
              titles = "Our Proven Website Support and Maintenance Process at Perfect Web Services"
                faqDatas={stepsData}
                btntext ="Let's Discuss"
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

export default WebsiteSupportMaintenance;