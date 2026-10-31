import "../App.css";
import "../Responsive-App.css";
import ContactForm from "../components/contactUs";
import BlogsCarousel from "../components/BlogsCarousel";
import CostEstimatorHeader from "../components/Cost/CostEstimatorHeader";
import CostEstimator from "../components/Cost/CostEstimator";
import CostTextBlock from "../components/Cost/costTextBlock";
import CFAQComponent from "../components/CFAQComponent";
import FAQImg from "../assets/images/FAQImg.webp";

const webDevFAQ = [
  {
    question: "What is included in your web development services?",
    answer: "Our web development services cover custom websites, CMS, e-commerce stores, responsive design, API integration, SEO optimization, and ongoing maintenance."
  },
  {
    question: "What technologies do you use?",
    answer: "We use React, Next.js, WordPress, Shopify, APIs, and modern front-end and back-end technologies to deliver scalable solutions."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Depending on the project scope, timelines typically range from 2 weeks to 3 months for complex projects."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes, we provide ongoing maintenance, updates, and support to ensure your website runs smoothly."
  }
];

function Cost() {
  return (
    <>

      <CostEstimatorHeader /> 
      <CostEstimator/>
      <CostTextBlock />
      
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

      <section className="contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    
      <section className="Blogs-section  padd">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-header stories-head">
                <h2 className="mb-5 text-center">Latest Stories, Tips & Tech Trends</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <BlogsCarousel />
            </div>
          </div>
        </div>
      </section>
     </>
  );
}

export default Cost;
