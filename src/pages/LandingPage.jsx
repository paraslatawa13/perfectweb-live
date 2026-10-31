import "./LandingPage.css"
import Img from "../assets/images/ho.png";
import { Link } from "react-router-dom";

const LandingPage = () => {


const challengesData = [
  {
    icon: "bi-globe2",
    title: "No Website or Outdated Website/App",
    description:
      "Businesses still rely on outdated platforms that fail to represent their brand or generate leads effectively.",
  },
  {
    icon: "bi-cursor",
    title: "Poor UI/UX & Low Engagement",
    description:
      "Visitors leave quickly due to confusing navigation, slow speed, or an unprofessional user experience.",
  },
  {
    icon: "bi-currency-dollar",
    title: "High Development Costs",
    description:
      "Agencies charge premium prices, making quality web and app development seem unaffordable for small businesses.",
  },
  {
    icon: "bi-lightbulb",
    title: "Great Idea but No Technical Execution",
    description:
      "Business owners have strong ideas but lack the right technical team to bring them to life.",
  },
  {
    icon: "bi-search",
    title: "No Online Visibility or Digital Strategy",
    description:
      "Even with a website or app, there's no proper SEO, marketing, or optimization to attract customers.",
  },
  {
    icon: "bi-robot",
    title: "No Automation or AI Integration",
    description:
      "Manual processes slow operations, and the absence of AI tools limits efficiency, scalability, and competitive advantage.",
  },
];



  return (
    <>
    
<section className="hero-section hero-section-clip">
  <div className="container position-relative">
    <div className="row align-items-center g-5">
      <div className="col-lg-6">
        <div className="hero-badge">
          <span className="dot"></span>
          Trusted by 850+ Businesses Worldwide
        </div>
        <h1 className="hero-title">
          Web & Mobile App  <br/>Solutions That  <br/><span>Match Your Vision</span>
        </h1>
        <p className="hero-desc">
          We help business owners turn ideas into powerful digital solutions through expert mobile app and web development services — at an affordable price.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <a href="#contact" className="btn btn-primary bg-whitee">Let's Get Started <i className="bi bi-arrow-right ms-1"></i></a>
        </div>
        
      </div>
      <div className="col-lg-6">
        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img src={Img} alt="Web Development Team" />
          </div>
          <div className="hero-float-card card-1">
            <div className="card-icon orange"><i className="bi bi-rocket-takeoff"></i></div>
            <div className="card-text">
              <strong>App Delivered</strong>
              <span>On time, on budget</span>
            </div>
          </div>
          <div className="hero-float-card card-2">
            <div className="card-icon blue"><i className="bi bi-graph-up-arrow"></i></div>
            <div className="card-text">
              <strong>3x Growth</strong>
              <span>Client revenue boost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="challenges-section" id="challenges">
      <div className="container">
        <div className="text-center mb-5  reveal visible visible">
          <h2 className="section-title">
            Challenges Small & Mid-Sized <br />
            Businesses Face
          </h2>
          <p
            className="text-muted mt-3"
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              fontSize: "0.94rem",
              lineHeight: "1.72",
            }}
          >
            In today's AI-driven, high-cost market, small and mid-sized businesses
            face significant challenges in technology adoption and process automation.
          </p>
        </div>

        <div className="row g-4">
          {challengesData.map((challenge, index) => (
            <div key={index} className="col-lg-4 col-md-6  reveal visible">
              <div className="challenge-card">
                <div className="challenge-icon">
                  <i className={`bi ${challenge.icon}`}></i>
                </div>
                <h5>{challenge.title}</h5>
                <p>{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

<section className="tech-gap-section">
  <div className="container position-relative">
    <div className=" reveal visible">
      <h2 className="section-title" style={{ color: "#fff" }}>Experiencing Other Technology Gaps?</h2>
      <p className="mt-3" style={{color: "rgba(255,255,255,0.75)", maxWidth: "540px", margin: "12px auto 32px", fontSize: "0.97rem", lineHeight: "1.75"}}>
        If you're facing challenges not mentioned above, feel free to share them with us. We'll analyze your situation and identify the right solution — because we're passionate about solving problems through smart web and app development.
      </p>
      <a href="#contact" className="btn btn-primary bg-whitee">Share Now <i className="bi bi-send ms-1"></i></a>
    </div>
  </div>
</section>

<section className="services-section" id="services">
  <div className="container">
    <div className="text-center mb-5  reveal visible">
      <h2 className="section-title">End-to-End Web and Mobile  <br/>App Development Services</h2>
    </div>

    <div className="row g-4">
      <div className="col-lg-4 col-md-6  reveal visible">
        <div className="service-card">
          <div className="service-card-icon orange"><i className="bi bi-laptop"></i></div>
          <h5>Web & Mobile App Development</h5>
          <p>Build fast, scalable websites and mobile apps tailored to your business goals and user needs.</p>
          <ul className="service-features">
            <li><i className="bi bi-check-circle-fill"></i> Custom Web Applications</li>
            <li><i className="bi bi-check-circle-fill"></i> iOS & Android App Development</li>
            <li><i className="bi bi-check-circle-fill"></i> Cross-Platform App Development</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6  reveal visible">
        <div className="service-card">
          <div className="service-card-icon blue"><i className="bi bi-palette2"></i></div>
          <h5>UI/UX Optimization</h5>
          <p>Improve user journeys with intuitive interfaces, faster navigation, and conversion-focused design strategies.</p>
          <ul className="service-features">
            <li><i className="bi bi-check-circle-fill"></i> Website & App Redesign</li>
            <li><i className="bi bi-check-circle-fill"></i> User Journey Mapping</li>
            <li><i className="bi bi-check-circle-fill"></i> Conversion Rate Optimization</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6  reveal visible">
        <div className="service-card">
          <div className="service-card-icon orange"><i className="bi bi-people"></i></div>
          <h5>Small CRM Solutions</h5>
          <p>Develop lightweight CRM systems tailored to manage leads, customers, and operations efficiently.</p>
          <ul className="service-features">
            <li><i className="bi bi-check-circle-fill"></i> Customer Data Management</li>
            <li><i className="bi bi-check-circle-fill"></i> Sales Pipeline Automation</li>
            <li><i className="bi bi-check-circle-fill"></i> Business Workflow Management</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6  reveal visible">
        <div className="service-card">
          <div className="service-card-icon blue"><i className="bi bi-plug"></i></div>
          <h5>Third-Party Integration & API</h5>
          <p>Connect your systems with payment gateways, marketing tools, and business platforms seamlessly.</p>
          <ul className="service-features">
            <li><i className="bi bi-check-circle-fill"></i> Payment Gateway Integrations</li>
            <li><i className="bi bi-check-circle-fill"></i> CRM & Marketing Tool Integration</li>
            <li><i className="bi bi-check-circle-fill"></i> Cloud API Connectivity</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6  reveal visible">
        <div className="service-card">
          <div className="service-card-icon orange"><i className="bi bi-graph-up"></i></div>
          <h5>Growth Marketing Optimization</h5>
          <p>Implement digital strategies that improve traffic, engagement, and conversions across your platforms.</p>
          <ul className="service-features">
            <li><i className="bi bi-check-circle-fill"></i> SEO & Performance Optimization</li>
            <li><i className="bi bi-check-circle-fill"></i> Landing Page Optimization</li>
            <li><i className="bi bi-check-circle-fill"></i> Analytics & Conversion Tracking</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6  reveal visible">
        <div className="service-card">
          <div className="service-card-icon blue"><i className="bi bi-cpu"></i></div>
          <h5>Process Automation (AI)</h5>
          <p>Automate repetitive tasks and workflows using intelligent tools and data-driven automation.</p>
          <ul className="service-features">
            <li><i className="bi bi-check-circle-fill"></i> AI Chatbots & Customer Support</li>
            <li><i className="bi bi-check-circle-fill"></i> Workflow Automation Systems</li>
            <li><i className="bi bi-check-circle-fill"></i> AI Data Insights & Reporting</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center mt-5  reveal visible">
      <a href="#contact" className="btn btn-primary">Need Custom Solutions? Share Your Requirement <i className="bi bi-arrow-right ms-1"></i></a>
    </div>
  </div>
</section>

<section className="agency-section" id="agency">
  <div className="container">
    <div className="agency-inner  reveal visible">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <div className="agency-badge"><i className="bi bi-building"></i> For Agencies & Partners</div>
          <h2>Perfect Web Services:  <br/>Trusted Development Partners for Agencies</h2>
          <p>If you're looking for a reliable development partner who delivers high-quality solutions at competitive prices, look no further.</p>
          <ul className="agency-features">
            <li><i className="bi bi-check-circle-fill"></i> Monthly, hourly, or project-based contracts</li>
            <li><i className="bi bi-check-circle-fill"></i> White-label development support available</li>
            <li><i className="bi bi-check-circle-fill"></i> Dedicated developer or team assignment</li>
            <li><i className="bi bi-check-circle-fill"></i> Competitive pricing with enterprise-grade quality</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Let's Discuss Now <i className="bi bi-chat-dots ms-1"></i></a>
        </div>
        <div className="col-lg-5 d-none d-lg-block">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80"
               alt="Agency Team"
               style={{borderRadius: "16px",width: "100%",boxShadow: "0 20px 60px rgba(0,0,0,0.3)"}} />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="industries-section" id="industries">
  <div className="container">
    <div className="text-center mb-5  reveal visible">
      <h2 className="section-title">Industries We Support  <br/>with Our Solutions</h2>
    </div>
    <div className="d-flex flex-wrap gap-3 justify-content-center  reveal visible">
      <div className="industry-pill"><i className="bi bi-heart-pulse"></i> Healthcare & Medical</div>
      <div className="industry-pill"><i className="bi bi-bag-heart"></i> E-Commerce & Retail</div>
      <div className="industry-pill"><i className="bi bi-house-door"></i> Real Estate & Property</div>
      <div className="industry-pill"><i className="bi bi-mortarboard"></i> Education & E-Learning</div>
      <div className="industry-pill"><i className="bi bi-bank"></i> Finance & FinTech</div>
      <div className="industry-pill"><i className="bi bi-airplane"></i> Travel & Hospitality</div>
      <div className="industry-pill"><i className="bi bi-truck"></i> Logistics & Transportation</div>
      <div className="industry-pill"><i className="bi bi-cup-hot"></i> Food & Restaurant Services</div>
      <div className="industry-pill"><i className="bi bi-bicycle"></i> Fitness & Wellness</div>
      <div className="industry-pill"><i className="bi bi-rocket"></i> Startups & Technology</div>
    </div>
  </div>
</section>

<section className="estimate-section">
  <div className="container position-relative">
    <div className=" reveal visible">
      <h2 className="section-title" style={{ color: "#fff" }}>Get Free Website/App  <br/>Cost Estimation</h2>
      <p className="mt-3" style={{color: "rgba(255,255,255,0.85)",maxWidth: "580px",margin: "12px auto 32px", fontSize: "0.97rem",lineHeight: "1.75"}}>
        If you have an idea or need a custom solution, we offer a free consultation along with a development cost estimate. We also support businesses with free idea validation and expert guidance.
      </p>
      <a href="#contact" className="btn btn-primary bg-whitee" >Let's Get Started <i className="bi bi-arrow-right ms-1"></i></a>
    </div>
  </div>
</section>

<section className="pricing-section" id="pricing">
  <div className="container">
    <div className="text-center mb-5  reveal visible">
      <h2 className="section-title">Our Pricing Model</h2>
      <p className="text-muted mt-3" style={{maxWidth: "520px",margin: "0 auto",fontSize: "0.92rem",lineHeight: "1.7"}}>
        Flexible pricing options designed to suit businesses of all sizes.
      </p>
    </div>
    <div className="row g-4 align-items-stretch">
      <div className="col-lg-4  reveal visible">
        <div className="pricing-card standard h-100">
          <div className="pricing-icon"><i className="bi bi-file-earmark-check"></i></div>
          <div className="pricing-label">Fixed Project</div>
          <div className="pricing-price">$1,500<small>/start</small></div>
          <div className="pricing-divider"></div>
          <h4>Fixed Project Model</h4>
          <p className="pricing-desc">Best for clearly defined projects with fixed scope and timeline. Get complete development at a predictable cost with guaranteed delivery and quality.</p>
          <div className="pricing-tag mb-3">✓ Fixed scope &nbsp; ✓ Guaranteed delivery &nbsp; ✓ Predictable cost</div>
          <a href="#" className="pricing-btn-outline text-center" style={{ width: "100%", textDecoration: "none", display: "block" }} >
  Get Started
</a>
        </div>
      </div>
      <div className="col-lg-4  reveal visible">
        <div className="pricing-card featured h-100">
          <div className="pricing-badge">Most Popular</div>
          <div className="pricing-icon"><i className="bi bi-clock-history"></i></div>
          <div className="pricing-label">Hourly Engagement</div>
          <div className="pricing-price">$12<small>/hour</small></div>
          <div className="pricing-divider"></div>
          <h4>Hourly Engagement Model</h4>
          <p className="pricing-desc">Ideal for flexible tasks, updates, or ongoing improvements. Pay only for the time used, ensuring affordable and on-demand development support.</p>
          <div className="pricing-tag mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>✓ Flexible &nbsp; ✓ Pay as you go &nbsp; ✓ Scale anytime</div>
          <a href="#" className="pricing-btn-solid text-center"  style={{ width: "100%", textDecoration: "none", display: "block" }} >Get Started</a>
        </div>
      </div>
      <div className="col-lg-4  reveal visible">
        <div className="pricing-card standard h-100">
          <div className="pricing-icon"><i className="bi bi-person-workspace"></i></div>
          <div className="pricing-label">Dedicated Team</div>
          <div className="pricing-price">$1,000<small>/mo</small></div>
          <div className="pricing-divider"></div>
          <h4>Dedicated Developer / Team</h4>
          <p className="pricing-desc">For agencies or organizations needing a dedicated developer or team for in-house projects without expanding internal staff.</p>
          <div className="pricing-tag mb-3">✓ Your timezone &nbsp; ✓ White-label &nbsp; ✓ Long-term</div>
          <a href="#" className="pricing-btn-outline text-center"  style={{ width: "100%", textDecoration: "none", display: "block" }} >Get Started</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="contact-section padd clip-section" id="contact">
  <div className="container">
    <div className="text-center mb-5  reveal visible">
      <h2 className="section-title">Let's Build Something  <br/>Amazing Together</h2>
    </div>
    <div className="row g-4">
      <div className="col-lg-5  reveal visible">
        <div className="contact-info-card">
          <h3>Talk to Our Experts</h3>
          <p>Ready to transform your idea into a digital product? Reach out to us and get a free consultation within 24 hours.</p>
          <div className="contact-item">
            <div className="contact-item-icon"><i className="bi bi-envelope"></i></div>
            <div className="contact-item-text">
              <strong>Email Us</strong>
              <Link to="mailto:contact@perfectwebservices.com" className=" text-decoration-none"> <span>contact@perfectwebservices.com</span></Link>
              
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><i className="bi bi-whatsapp"></i></div>
            <div className="contact-item-text">
              <strong>WhatsApp</strong>
            <span>+91-7018158742</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><i className="bi bi-telephone"></i></div>
            <div className="contact-item-text">
              <strong>Call Us</strong>
               <Link to="tel:7508738954" className=" text-decoration-none"> <span>+91-7508738954</span></Link>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><i className="bi bi-clock"></i></div>
            <div className="contact-item-text">
              <strong>Response Time</strong>
              <span>Within 5 hours</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon"><i className="bi bi-geo-alt"></i></div>
            <div className="contact-item-text">
              <strong>Available</strong>
              <span>Worldwide – Remote Team</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7  reveal visible">
        <div className="contact-form-card">
          <h3>Send Us a Message</h3>
          <p className="sub">Fill out the form below and we'll get back to you within 24 hours.</p>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-group-custom">
                <label>Full Name *</label>
                <input required type="text" className="form-control-custom" placeholder="John Smith"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group-custom">
                <label>Email Address *</label>
                <input required type="email" className="form-control-custom" placeholder="john@company.com"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group-custom">
                <label>Phone / WhatsApp *</label>
                <input required type="text" className="form-control-custom" placeholder="+1 234 567 8901"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group-custom">
                <label>Service Interested In</label>
                <select className="form-control-custom"style={{ appearance: "auto" }}>
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>CRM Solutions</option>
                  <option>Growth Marketing</option>
                  <option>AI / Process Automation</option>
                  <option>Agency Partnership</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group-custom">
                <label>Budget Range</label>
                <select className="form-control-custom" style={{ appearance: "auto" }}>
                  <option value="">Select budget range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000+</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group-custom">
                <label>Tell Us About Your Project *</label>
                <textarea className="form-control-custom" placeholder="Describe your idea, goals, or challenges..."></textarea>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100" >
                <i className="bi bi-send me-2"></i>Send Message & Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default LandingPage