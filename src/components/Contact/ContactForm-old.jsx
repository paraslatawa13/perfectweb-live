// ContactForm.jsx
import React, { useState } from "react";
import Cphone from "../../assets/images/Cphone.svg";
import Cmessage from "../../assets/images/Cmessage.svg";
import Cwhatsapp from "../../assets/images/Cwhatsapp.svg";
import CmapIcon from "../../assets/images/CmapIcon.svg";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("Form Submitted:", formData);

    
    alert("Form submitted successfully! (Backend will handle email)");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="ContactSection padd">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Form */}
          <div className="col-md-9 col-12">
            <div className="contactFormwrapper">
              <div className="formHeader">
                <h2>Send us a message</h2>
                <p>
                  Have a question? Need support? Or want to discuss your next
                  digital project? Our team is here to help you. Simply fill out
                  the form below and we’ll get back to you as soon as possible.
                </p>
              </div>

              <form className="mainForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label>Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="button-flex">
                    <button type="submit" className="btn btn-primary">
                 
                  Send Message
                </button>
                 </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3 col-12">
            <div className="contactSidebar">
              <p>Hi! We are always here to help you.</p>
              <div className="contactDetails">
                <div className="detailsList">
                  <div className="detailIcon">
                    <img src={Cwhatsapp} alt="Phone Number" />
                  </div>
                  <div className="detailData">
                    <h6>WhatsApp:</h6>
                    <a href="tel:917508738954">+91-7508738954</a>
                  </div>
                </div>

                <div className="detailsList">
                  <div className="detailIcon">
                    <img src={Cphone} alt="WhatsApp" />
                  </div>
                  <div className="detailData">
                    <h6>Call Us:</h6>
                    <a href="tel:918264958742">+91-8264958742</a>
                  </div>
                </div>

                <div className="detailsList">
                  <div className="detailIcon">
                    <img src={Cmessage} alt="Message" />
                  </div>
                  <div className="detailData">
                    <h6>Email:</h6>
                    <a href="mailto:contact@perfectwebservices.com">
                      contact@perfectwebservices.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contactLocations">
                <div className="locationIocn">
                  <img src={CmapIcon} alt="Map" />
                </div>
                <div className="detailData">
                  <p>
                    C-127, 4th Floor, Phase-8, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
