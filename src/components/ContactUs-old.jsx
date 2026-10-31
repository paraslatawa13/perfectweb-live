// ContactUs.jsx
import React from "react";

// Dynamic images import
import PhoneIcon from "../assets/Images/Phone.svg";
import MailIcon from "../assets/Images/mail.svg";

// Config data (Dynamic)
const contactData = {
  heading: "Let's Work Together",
  description:
    "We denounce with righteous indignation and like men beguiled and demoralized by the charms",
  phones: ["+91-8264958742", "+91-7508738954"],
  email: "contact@perfectwebservices.com",
  images: {
    phone: PhoneIcon,
    mail: MailIcon,
  },
  services: [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app-development", label: "Mobile App Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "software-development", label: "Custom Software Development" },
    { value: "ecommerce-solutions", label: "E-Commerce Solutions" },
    { value: "cloud-services", label: "Cloud Services" },
  ],
};

const ContactForm = () => {
  return (
    <div className="contact-us-form">
      <div className="container-fluid p-0">
        <div className="row align-items-center m-0">
          {/* Left Side Content */}
          <div className="col-md-6 col- 12 bg-side-outer">
            <div className="side-content-form bg-side">
              <h2>{contactData.heading}</h2>
              <p>{contactData.description}</p>

              {/* Phone Section */}
              <div className="Inquiry d-flex align-items-center mb-3">
                <img src={contactData.images.phone} alt="Phone" />
                <div className="Inquiry-content">
                  <h6>Call For Inquiry</h6>
                  <div className="c-flex">
                  {contactData.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone}`} className="d-block">
                      {phone}
                    </a>
                  ))}
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="Inquiry d-flex align-items-center">
                <img src={contactData.images.mail} alt="Mail" />
                <div className="Inquiry-content">
                  <h6>Send Us Email</h6>
                  <div className="c-flex">
                    <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 col-12">
            <div className="contact-us">
              <form>
                <div className="form-group d-flex mb-3">
                  <div className="form-field me-2">
                    <input type="text" placeholder="Full Name*" required className="form-control" />
                  </div>
                  <div className="form-field">
                    <input type="email" placeholder="Email Address*" required className="form-control" />
                  </div>
                </div>

                <div className="form-group d-flex mb-3">
                  <div className="form-field me-2">
                    <input type="text" placeholder="Phone Number*" required className="form-control" />
                  </div>
                  <div className="form-field">
                    <select required className="form-select">
                      <option value="">Services you are interested in*</option>
                      {contactData.services.map((service, i) => (
                        <option key={i} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <textarea
                    placeholder="How can we help you?"
                    required
                    className="form-control"
                    rows={4}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
