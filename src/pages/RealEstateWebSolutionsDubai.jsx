import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";
import CommonHeroSection from "../components/CommonHeroSection";
import ServicesSection from "../components/CommonServicesSection";
import GridComponent from "../components/Services/GridComponent";
import ImageWithText from "../components/ImageWithText";
import CFAQComponent from "../components/CFAQComponent";
import FAQImg from "../assets/images/FAQImg.webp";
import aboutBanner from "../assets/images/about/aboutBanner.webp";
import sideCircle from "../assets/images/side-circle.png"
import bannerimg from "../assets/images/marketing-images/banner-img.webp"
import Localcontenting from "../assets/images/marketing-images/localized-content.webp"
import Marketinsight from "../assets/images/marketing-images/marketinsights.webp"
import Testimonialsimg from "../assets/images/marketing-images/testimonilas-display-img.webp"
import virtualpropertytoursimg from "../assets/images/marketing-images/virtualpropertytours.webp"
import strategiclocations from "../assets/images/marketing-images/strategiclocations.webp"
import websiteimg from "../assets/images/marketing-images/websitedevelopment.svg"
import digitalmarketingimg from "../assets/images/marketing-images/digital-marketing-img.svg"
import imgcircle from "../assets/images/marketing-images/circle.svg"
import showcaseimg from "../assets/images/marketing-images/showcase.webp"
import OnlineVisibility from "../assets/images/marketing-images/OnlineVisibility.svg"
import GeneratingLeads from "../assets/images/marketing-images/GeneratingLeads.svg"
import BrandIdentity from "../assets/images/marketing-images/BrandIdentity.svg"
import LimitedAccess from "../assets/images/marketing-images/LimitedAccess.svg"
import ReducedCredibility from "../assets/images/marketing-images/ReducedCredibility.svg"
import Dependency from "../assets/images/marketing-images/Dependency.svg"


const servicesData = [
  {
    img: OnlineVisibility,
    title: "Limited/No Online Visibility",
    desc: "Having no website makes it difficult to have a strong online presence; hence, attracts no prospective customers to find you through online directories or search engines.",
    link: "",
  },
  {
    img: GeneratingLeads,
    title: "Difficulty in Generating Leads",
    desc: "Doing business offline often results in reduced lead generation as compared to online business. Websites can open many opportunities through contact forms, newsletter sign-ups, etc.",
    link: "",
  },
  {
    img: BrandIdentity,
    title: "No Brand Identity",
    desc: "Many real-estate service providers in Dubai face severe competition which leaves them with no strong brand identity. However, a website can help you in building your unique identity.",
    link: "",
  },
  {
   img: LimitedAccess,
    title: "Limited Access to Analytics",
    desc: "Without websites, it becomes difficult for you to understand your customer behavior and patterns as you cannot gather data to make informed marketing decisions.",
    link: "",
  },
  {
    img: ReducedCredibility,
    title: "Reduced Credibility",
    desc: "Do you feel like being less reputed or under-established in Dubai's competitive real estate market? Get a professional website to enhance your credibility and legitimacy.",
    link: "",
  },
  {
     img: Dependency,
    title: "Dependency on Third-party Platforms",
    desc: "Many of you might be relying on 3-party platforms such as social media channels to showcase your services, but it limits your control over branding, content, and customer interactions.",
    link: "",
  },
];

const webDevFAQ = [
  {
    question: "1. Why build a real estate website?",
    answer: "For companies looking to expand online and generate more leads, creating a website might be a profitable choice. You can interact with clients more readily and achieve a better return on investment with a website."
  },
  {
    question: "2. What are the 6 stages of website development?",
    answer: "There are six steps in the process of creating a website: analysis, design, coding, testing, deployment, and maintenance. To meet your goals, it's crucial to work with seasoned web developers."
  },
  {
    question: "3. How to grow the online presence?",
    answer: "Using several digital marketing services, including SEO, SMO, email marketing, content marketing, PPC, etc., is one efficient way to get recognition on a global level.."
  },
  {
    question: "4. Why hire Perfect Web Services for real-estate web design, development, and marketing services?",
    answer: " We have a team of experts offering robust solutions to our real estate clients. Our strategic approach towards development and marketing services makes us the top service provider in Dubai."
  }
];

const Marketing = () => {
    const { meta } = useMeta();
    return (
        <main className='marketing-main'>
            <MetaHelmet meta={meta} />
            <section className="Common-hero-section tpm">
                <CommonHeroSection
                    title="Are You A real Estate Service Provider in dubai?"
                    image={bannerimg}
                    altText="bannerimg"
                    />
                    <a href="#common_challenges" className="scroll-bottom">Scroll <i className="fa-solid fa-arrow-down"></i></a>  
            </section>
            <section className="Grid-section padd"  id='common_challenges'>
                <div className="container">
                    <ServicesSection 
                    title="What are the common challenges faced by you?"
                    subtitle=""
                    />
                    <div className="row align-items-center">
                        <div className="col-12">
                            <GridComponent data={servicesData} />
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="websitehelp padd">
                <div className="container">
                    <div className="row">
                        <h2 className='text-center mb-4'>How a website can help?</h2>
                        <div className="col-md-4 col-sm-6">
                            <div className="main-col" >
                                <div className="card h-100 all_card" >
                                    <div className="inner_col"><span className="all_round"> 
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                    </span>
                                    </div>
                                    <div className="img-box-holder">
                                        <img src={showcaseimg} alt="showcaseimg" className="card-img-top all_img" />
                                    </div>
                                </div>
                                <h3>Showcase your
                                    services to wider
                                    audience</h3>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="main-col" bis_skin_checked="1">
                                <div className="card h-100 all_card" bis_skin_checked="1">
                                    <div className="inner_col" bis_skin_checked="1"><span className="all_round">
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                    </span>
                                    </div>
                                    <div className="img-box-holder">
                                        <img src={virtualpropertytoursimg} alt="showcaseimg" className="card-img-top all_img" />
                                    </div>
                                </div>
                                <h3>Virtual property tours</h3>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="main-col" bis_skin_checked="1">
                                <div className="card h-100 all_card" bis_skin_checked="1">
                                    <div className="inner_col" bis_skin_checked="1"><span className="all_round">
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                    </span>
                                    </div>
                                    <div className="img-box-holder">
                                        <img src={Localcontenting} alt="showcaseimg" className="card-img-top all_img" />
                                    </div>
                                </div>
                                <h3>Localized content marketing</h3>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="main-col" bis_skin_checked="1">
                                <div className="card h-100 all_card" bis_skin_checked="1">
                                    <div className="inner_col" bis_skin_checked="1"><span className="all_round">
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                    </span>
                                    </div>
                                    <div className="img-box-holder">
                                        <img src={strategiclocations} alt="showcaseimg" className="card-img-top all_img" />
                                    </div>
                                </div>
                                <h3>Strategic locations</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="main-col" bis_skin_checked="1">
                                <div className="card h-100 all_card" bis_skin_checked="1">
                                    <div className="inner_col" bis_skin_checked="1"><span className="all_round">
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                    </span>
                                    </div>
                                    <div className="img-box-holder">
                                        <img src={Marketinsight} alt="showcaseimg" className="card-img-top all_img" />
                                    </div>
                                </div>
                                <h3>Display Market insights and trends</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="main-col" bis_skin_checked="1">
                                <div className="card h-100 all_card" bis_skin_checked="1">
                                    <div className="inner_col" bis_skin_checked="1"><span className="all_round">
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                        <img src={imgcircle} alt="circle_icon" />
                                    </span>
                                    </div>
                                    <div className="img-box-holder">
                                        <img src={Testimonialsimg} alt="showcaseimg" className="card-img-top all_img" />
                                    </div>
                                </div>
                                <h3>Display testimonials</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="service-i-w-t padd clip-section bg-color-gray rewsd">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-5">
                                <h2>Elevate your brokerage to new heights of success in Dubai</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageWithText
                    title="Website Designing and Development"
                    description={
                        <>
                        A well-designed website is not just a digital placeholder, but it’s a
                        gateway to a global clientele. Having a real-estate business website can
                        strengthen your online profile, attracting many new clients worldwide.
                        With a highly responsive website, you can easily connect with your potential
                        customers; hence, increasing engagement and generating more leads.
                        <br /><br />
                        Through the website, give an immersive experience to your consumer base
                        through the images or videos of the listed property. If you require design
                        and development services for your real-estate business in Dubai, then hire
                        professionals from Perfect Web Services.
                        </>
                    }
                    buttonText="Talk to our experts!"
                    buttonLink="/contact-us"
                    image={websiteimg}
                    altText="Website Designing and Development"
                    sideCircle={sideCircle}
                    reverse={true}
                />
                 <div className="bottom-row mt-5">
                    <div className="container">
                        <div className="row align-items-center">
                          
                            <div className="col-md-6 col-12">
                                <div className="">
                                    <div className="product-cost-left">
                                        <div className="header-main">
                                            <h2>Digital marketing</h2>
                                        </div>
                                        <p>By implementing successful marketing strategies, you can take your real estate business to the next level. You can also make use of paid marketing services where an advertiser pays a particular amount to the publisher every time the ad gets clicked.<br></br> <br></br>Through the use of various tools, you can easily target your right audience, schedule the Ads and other marketing techniques, and can monitor them by tracking CTR, conversion rate, and bounce rate. Thus, ensuring that your brand remains in the top position in Google search engines to attract leads more efficiently.</p>
                                        <div className="button-flex">
                                            <a className="btn btn-primary" href="/contact-us" data-discover="true">Connect Now!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              <div className="col-md-6 col-12">
                                <div className="product-cost-image">
                                    <div className="">
                                         <img src={digitalmarketingimg} alt="digital_marketing_img" />
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className="Common-hero-section about padd">
                <CommonHeroSection
                    title="About Us"
                    description={
                        <>
                        Whether you are a builder, broker, or any real estate firm, looking
                        to expand your business in Dubai by digitizing your services, we will
                        assist you in delivering customized and highly responsive web solutions
                        to meet your business requirements.<br /><br />
                        We offer tailored solutions that combine innovative web development and
                        strategic marketing techniques to revolutionize the real estate industry
                        in the dynamic Dubai real estate market. From captivating website designs highlighting the properties or services
                        to implementing advanced SEO and PPC ad campaigns, we provide
                        comprehensive support at every stage of the process.<br /><br />
                        With our proven track record of success and commitment to staying ahead
                        of industry trends, we are your trusted partner in achieving your
                        business goals in Dubai's dynamic real estate sector.
                        </>
                    }
                    buttonText="Contact us"
                    buttonLink="/contact-us"
                    image={aboutBanner}
                    altText="Perfect Web Services Team"
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

export default Marketing;

