
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../components/CommonHeroSection";
import ServicesSection from "../components/CommonServicesSection";
import GridComponent from "../components/Services/GridComponent";
import ServicesCover from "../components/ServicesCover";
import HighImpactAd from "../assets/images/Services/HighImpactAd.webp";
import Boost from "../assets/images/Services/Boost.webp";
import BrandingConversions from "../assets/images/Services/BrandingConversions.webp";
import SocialEngagement from "../assets/images/Services/SocialEngagement.webp";
import AnalyzeImprove from "../assets/images/Services/AnalyzeImprove.webp";
import CFAQComponent from "../components/CFAQComponent";
import FreeConsultation from "../components/freeConsultation";
import FAQImg from "../assets/images/FAQImg.webp";
import SfPBanner from "../assets/images/marketing-images/SfPBanner.webp"
import OnlineVisibility from "../assets/images/marketing-images/OnlineVisibility.svg"
import GeneratingLeads from "../assets/images/marketing-images/GeneratingLeads.svg"
import BrandIdentity from "../assets/images/marketing-images/BrandIdentity.svg"
import LimitedAccess from "../assets/images/marketing-images/LimitedAccess.svg"
import ReducedCredibility from "../assets/images/marketing-images/ReducedCredibility.svg"
import Dependency from "../assets/images/marketing-images/Dependency.svg"


const servicesData = [
  {
    img: OnlineVisibility,
    title: "Limited/Low Online Visibility",
    desc: "Difficulty ranking on search engines, reducing discoverability. No more reviews on Google Maps. No Traffic on the Website.",
    link: "",
  },
  {
    img: GeneratingLeads,
    title: "Limited Local SEO Optimization",
    desc: "Limited local SEO optimization for plumbing companies can lead to reduced visibility in local search results, making it harder to attract nearby customers and compete with other local service providers.",
    link: "",
  },
  {
    img: BrandIdentity,
    title: "Poor Website Design",
    desc: "Poor website design for a plumbing company or a plumber can result in a cluttered, outdated, or non-responsive site, driving potential customers away and reducing trust, ultimately leading to lost business opportunities.",
    link: "",
  },
  {
   img: LimitedAccess,
    title: "Limited Phone Calls and Queries",
    desc: "Getting Zero or Limited phone calls regarding their services as compared to their competitors. Limited phone calls and queries indicate a lack of engagement from potential customers, often due to poor visibility, and weak marketing efforts.",
    link: "",
  },
  {
    img: ReducedCredibility,
    title: "Minimal Content Marketing",
    desc: "Minimal content marketing limits a plumbing company’s ability to showcase expertise, engage potential customers, and improve SEO. Without valuable content, it's harder to attract leads and build a strong online presence.",
    link: "",
  },
  {
     img: Dependency,
    title: "Inconsistent Online Reviews",
    desc: "Inconsistent online reviews can create a mixed impression, undermining trust and deterring potential customers. Fluctuations in feedback may also impact local SEO rankings, reducing visibility and business credibility.",
    link: "",
  },
];


const webDevFAQ = [
  {
    question: "1. What’s included in plumber SEO services?",
    answer: "Our plumbing SEO package includes a comprehensive digital competitive analysis, optimization of website content and code, local SEO strategies, detailed measurement and tracking reports, and ongoing adjustments to ensure optimal performance and results."
  },
  {
    question: "2. How much time does SEO take to show results for plumbing companies?",
    answer: "While other agencies may promise results within a year, Perfect Web Services delivers noticeable outcomes in just 3-6 months. True success is reflected in the growth of organic leads and newly booked jobs."
  },
  {
    question: "3. Can I get SEO or Digital Marketing for Non-Plumbing Businesses?",
    answer: "Yes, Perfect Web Services offers comprehensive design, development, and marketing solutions for nearly every industry and sector. Feel free to reach out with any business inquiries or needs."
  },
  {
    question: "4. Why Perfect Web Services for Plumbing Business Marketing?",
    answer: "Our team of experts provides tailored solutions for plumbing services and local businesses, using a strategic approach to development and marketing. As a leading digital marketing partner, we are committed to delivering results and driving success for our clients."
  }
];

const SeoforPlumbers = () => {
    const { meta } = useMeta();
    return (
        <main className='marketing-main'>
            <MetaHelmet meta={meta} />
             <section className="Common-hero-section seofp">
                <CommonHeroSection
                    title="SEO Services for Plumbers- Get 5X More Calls & Queries"
                    image={SfPBanner}
                    altText="banner-image"
                    />
                    <a href="#common_challenges" className="scroll-bottom">Scroll <i className="fa-solid fa-arrow-down"></i></a>  
             </section>
            <section className="Grid-section padd"  id='common_challenges'>
                <div className="container">
                    <ServicesSection 
                    title="Common Challenges Faced by Plumbers or Plumbing Companies in Terms of Marketing"
                    subtitle=""
                    />
                    <div className="row align-items-center">
                        <div className="col-12">
                            <GridComponent data={servicesData} />
                        </div>
                    </div>
                    
                </div>
            </section>

            {/*Free Consultation*/}
            <section className="free-consulation padd">
                <FreeConsultation
                title="Don’t have a website! No worries we have a solution Talk with Our Expert"
                buttonText="Contact us"
                buttonLink="/contact-us"
                />
            </section>

            {/*ServicesCover*/}
            <section className="ServiceCoverSection seofp">
                <ServicesCover
                sectionTitle="Why SEO or Digital Marketing Services for Plumbers"
                sectionSubText="Millions of Searches happened with the plumbing-related keywords. For example “24x7 Plumbing Services in Dubai” Emergency Plumber in California” “gas plumbers” and emergency plumbers. In the same way, every local area has its search volume for the Plumbing Services. As the Plumbing Industry has become more competitive in terms of Marketing and maximum ranking agencies or plumbing websites are taking SEO and Digital Marketing help to get rank on top and make strong presence on Google. Here we are going to mention a few factors that make it necessary to take digital marketing services for Plumbing Services."
                services={[
                {
                    icon: HighImpactAd,
                    heading: "Increased Online Visibility",
                    text: "If your business isn't visible on Google when locals search for your services, you're missing out on valuable potential customers. To get more visibility on Google you should take SEO Services. If you want to see your business on top of plumbing-related keywords, contact us to get a plan for it."
                },
                {
                    icon: Boost,
                    heading: "Targeted Local SEO",
                    text: "The Targeted Local SEO means optimizing your GBP (Google Business Profile) to get search clicks on local keywords like 'Plumber in California'. Attracts local customers actively searching for plumbing services, boosting relevant leads. By optimizing this, you will be able to get more calls and queries regarding your services."
                },
                {
                    icon: AnalyzeImprove,
                    heading: "Enhanced Credibility",
                    text: "To build trust with potential customers, showcasing professionalism through positive reviews, certifications, and testimonials. This credibility leads to increased inquiries and a stronger reputation. Get the SEO Services Now."
                },
                {
                    icon: BrandingConversions,
                    heading: "Effective Lead Generation",
                    text: "SEO is crucial for effective lead generation as it improves your website's visibility in search results, attracting targeted traffic. Higher visibility means more qualified leads, more calls, and business growth."
                },
                {
                    icon: SocialEngagement,
                    heading: "Budget-Friendly Marketing",
                    text: "SEO can be more cost-effective compared to traditional marketing campaigns, with benefits that persist long after optimization efforts are completed. You can set your budget for SEO and get SEO services. We have a customized plan for SEO. Contact Us Now."
                },
                ]}
            />
            </section>

              {/*Free Consultation*/}
                <section className="free-consulation padd">
                    <FreeConsultation
                    title="Ready to Rank in 1st Position on Google"
                    buttonText="Contact us"
                    buttonLink="/contact-us"
                    />
                </section>


            {/*ServicesCover*/}
            <section className="ServiceCoverSection padd clip-section seofpt bg-color-gray">
                <ServicesCover
                sectionTitle="What is the growth plan for Plumbing Services? Secret Revealed"
                sectionSubText="We have a proven plan to grow your plumbing business. We always work with a data-driven approach. Ready to start driving leads for your plumbing business? Let’s start. Here is the process"
                services={[
                {
                    
                    heading: "Comprehensive Website Audit and Tracking",
                    text: (
                        <ul>
                            <li>Site Health and Performance</li>
                            <li>On-Page SEO Analysis</li>
                            <li>Analytics and Tracking Setup</li>
                        </ul>
                    )
                },
                {
                    
                    heading: "Finding Top Plumbing-Related Keywords",
                    text: (
                        <ul>
                            <li>Competitors Keyword Tracking</li>
                            <li>Finding Top Business-Oriented Keyword</li>
                        </ul>
                    )
                },
                {
                   
                    heading: "Website Content and Asset Optimization",
                    text: (
                        <ul>
                            <li>Keyword Integration</li>
                            <li>Content Quality and Relevance</li>
                            <li>Optimized Media Assets</li>
                            <li>Internal Linking Strategy</li>
                        </ul>
                    )
                },
                {
                    
                    heading: "Local Business Profile Optimization",
                    text: (
                        <ul>
                            <li>Google Business Profile optimization</li>
                            <li>Local Listing</li>
                            <li>Backlinking On Local Website</li>
                        </ul>
                    )
                },
                {
                   
                    heading: "Content Marketing",
                    text: (
                        <ul>
                            <li>Create Valuable and Relevant Content</li>
                            <li>Optimize for Keywords and User Intent</li>
                            <li>Promote and Distribute Content</li>
                        </ul>
                    )
                },
                {
                    
                    heading: "Growth Tracking",
                    text: (
                        <ul>
                            <li>Monitor Key Metrics</li>
                            <li>Analyze Conversion Rates</li>
                            <li>Review Backlink Growth</li>
                        </ul>
                    )
                },
                ]}
            />
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
        </main>
    )
}

export default SeoforPlumbers;

