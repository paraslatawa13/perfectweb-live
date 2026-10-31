// CostEstimator.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Images
import WebsiteIcon from "../../assets/Images/WebsiteIcon.svg";
import MAIcon from "../../assets/Images/MAIcon.svg";
import DigitalIcon from "../../assets/Images/digitalIcon.svg";

// Step data
const tabs = [
  { name: "Website", icon: WebsiteIcon },
  { name: "Mobile App", icon: MAIcon },
  { name: "Digital Marketing", icon: DigitalIcon },
];

const formTabs = ["Functionality", "Design", "Marketing"];

const optionsData = {
  Functionality: [
    {
      heading: "User Managements",
      options: [
        { name: "User Registration", cost: 500, duration: 2 },
        { name: "User Login", cost: 800, duration: 3 },
      ],
    },
    {
      heading: "Product Catalog",
      options: [
        { name: "Payment Gateway", cost: 1000, duration: 4 },
        { name: "API Integration", cost: 1200, duration: 5 },
      ],
    },
  ],
  Design: [
    {
      heading: "UI",
      options: [
        { name: "UI/UX Design", cost: 700, duration: 2 },
        { name: "Custom Animations", cost: 600, duration: 2 },
      ],
    },
  ],
  Marketing: [
    {
      heading: "SEO & Ads",
      options: [
        { name: "SEO Optimization", cost: 300, duration: 1 },
        { name: "Social Media Ads", cost: 900, duration: 3 },
      ],
    },
  ],
};

const domainOptions = {
  Website: ["WordPress Customization", "Shopify Customization", "E-commerce"],
  "Mobile App": ["iOS App", "Android App", "Flutter App"],
  "Digital Marketing": ["SEO Campaign", "Social Media Ads", "Email Marketing"],
};

const CostEstimator = () => {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [activeFormTab, setActiveFormTab] = useState("Functionality");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const calculateSummary = () => {
    let totalCost = 0;
    let totalDuration = 0;

    Object.values(optionsData).forEach((groups) => {
      groups.forEach((group) => {
        group.options.forEach((opt) => {
          if (selectedOptions.includes(opt.name)) {
            totalCost += opt.cost;
            totalDuration += opt.duration;
          }
        });
      });
    });

    return { totalCost, totalDuration };
  };

  const { totalCost, totalDuration } = calculateSummary();

  return (
    <section className="costEstimator padd">
      <div className="container">
        <div className="cEwrapper">
          
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="serviceStep">
              <div className="main_header">
                  <h2>Select Your Service</h2>
                  <p>Choose the service that best fits your needs. Whether you want a professional website, a custom mobile app, or a digital marketing campaign, we’ll guide you step by step to get the right solution.</p>
              </div>
               <div className="d-flex gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    className="btn btn-outline-primary"
                    onClick={() => {
                      setActiveTab(tab.name);
                      setStep(2);
                    }}
                  >
                    <img src={tab.icon} alt={tab.name} width={24} height={24} />
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Domain */}
          {step === 2 && (
            <div className="domainStep">
              <button
                className="btn btn-link mb-3"
                onClick={() => {
                  setStep(1);
                  setActiveTab("");
                  setSelectedDomain("");
                }}
              >
                ← Want to change your platform? Go back
              </button>
               <div className="main_header">
                  <h2>Choose Platform for {activeTab}</h2>
                  <p>Select the platform or domain that best represents your project. This helps us provide accurate estimates and tailored options for your chosen service.</p>
              </div>
              
              <select
                className="form-select w-50"
                value={selectedDomain}
                onChange={(e) => {
                  setSelectedDomain(e.target.value);
                  if (e.target.value) setStep(3);
                }}
              >
                <option value="">-- Choose an option --</option>
                {domainOptions[activeTab].map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Step 3: Options & Summary */}
          {step === 3 && (
            <div className="row mt-4">
              <div className="col-12 mb-3">
                <button
                  className="btn btn-link mb-3"
                  onClick={() => setStep(2)}
                >
                  ← Want to change your platform? Go back
                </button>
              </div>

              <div className="col-md-8 col-12">
                 <div className="accWrapper">
                 <div className="mainHeader">
                    <h2>Customize & Plan Your Project</h2>
                    <p>Choose the right options for your project's functionality, design, and marketing. Get a clear view of cost and timeline as you decide.</p>
                </div>
              
                <div className="formTabs d-flex ">
                  {formTabs.map((ft) => (
                    <button
                      key={ft}
                      className={`btn btn-outline-secondary ${
                        activeFormTab === ft ? "active" : ""
                      }`}
                      onClick={() => setActiveFormTab(ft)}
                    >
                      {ft}
                    </button>
                  ))}
                </div>

                <div className="accordion" id="optionsAccordion">
                  {optionsData[activeFormTab].map((group, idx) => (
                    <div className="accordion-item" key={idx}>
                      <h2 className="accordion-header" id={`heading-${idx}`}>
                        <button
                          className={`accordion-button ${
                            idx !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${idx}`}
                          aria-expanded={idx === 0 ? "true" : "false"}
                          aria-controls={`collapse-${idx}`}
                        >
                          {group.heading}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${idx}`}
                        className={`accordion-collapse collapse ${
                          idx === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading-${idx}`}
                        data-bs-parent="#optionsAccordion"
                      >
                        <div className="accordion-body">
                          {group.options.map((opt, i) => (
                            <label key={i} className="form-check d-block mb-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={selectedOptions.includes(opt.name)}
                                onChange={() => handleOptionChange(opt.name)}
                              />
                              <span className="form-check-label">
                                {opt.name} - ${opt.cost} ({opt.duration} weeks)
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              <div className="col-md-4 col-12">
                <div className="costSummary">
                  <div className="costTop">
                    <h4>Estimated Cost</h4>
                    <div className="estimatedCost">${totalCost}</div>
                    <h4>Suggested Timeline (weeks)</h4>
                    <div className="timeline">{totalDuration}</div>
                    <p>
                      Not sure about things? Our team is ready to guide you with
                      the right solution.
                    </p>
                    <div className="btnflex">
                      <button className="btn btn-primary">Contact us</button>
                    </div>
                  </div>

                  {totalCost > 2000 && (
                    <div className="claimOffer mt-3">
                      <p>
                        Hurry! Projects over $2000 are eligible for an exclusive
                        discount. Lock your savings today.
                      </p>
                      <div className="btnflex">
                        <button className="btn btn-primary">Claim Offer Now</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CostEstimator;
