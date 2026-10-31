import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContactFormApi } from "../../api/contactForm";
import "./carrer.css";
import Img6 from "../../assets/images/career/1.svg";
import Img7 from "../../assets/images/career/2.svg";

const CurrentOpening = () => {
  const { postContactForm } = useContactFormApi();

  const openings = [
    {
      id: 1,
      title: "Project Manager",
      experience: "3 Year to 8 Year",
      skills:
        "Excellent Knowledge on Project Handling, Communication Skills, Risk Management, Problem Solving Skills, Project Planning",
      jobType: "Full-time (Work From Office only)",
    },
    {
      id: 2,
      title: "Team Lead",
      experience: "2 Year to 4 Year",
      skills:
        "Excellent Knowledge on Team Handling, Depth proficiency in Technologies, PHP, CodeIgniter skills and Web Development",
      jobType: "Full-time (Work From Office only)",
    },
    {
      id: 3,
      title: "Web Developer",
      experience: "1 Year to 3 Year",
      skills: "Excellent Knowledge on PHP, CodeIgniter, Laravel, Shopify",
      jobType: "Full-time (Work From Office only)",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("service", formData.service);
      if (formData.file) data.append("file", formData.file);

      console.log("Submitting form...");
      for (let pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }

      await postContactForm(data);

      Swal.fire({
        icon: "success",
        title: "Application Sent!",
        text: "Your application has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        service: "",
        file: null,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong",
      });
    }
  };

  return (
    <section className="current-main padd clip-section" id="current-opening-form">
      <div className="container">
        <div className="row ">
         <div className="d-flex flex-lg-row flex-column gap-lg-4 gap-md-5 gap-5">
           <div className="col-lg-6 col-12">
            <div className="col-12 ">
              <div className="header-main mb-5">
                <h2 className="">Current Opening</h2>
                <hr />
              </div>
            </div>
            <div className="d-flex flex-column gap-lg-3 gap-3">
              {openings.map((job) => (
                <div key={job.id} className="opeing">
                  <h4>
                    [{job.id}] {job.title}
                  </h4>
                  <p ><span className="exp-b">Experience</span> - {job.experience}</p>
                  <p><span className="exp-b">Skills</span> - {job.skills}</p>
                  <p><span className="exp-b">Job Type</span> - {job.jobType}</p>
                </div>
              ))}

              <div className="d-flex gap-lg-5 gap-4  flex-lg-row flex-column align-items-start align-content-lg-center">
                <div>
                  <Link to="mailto:hr.perfectweb@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none">
                    <div className="icon">
                      <img src={Img6} alt="career icon" />
                    </div>

                    <div className="text-black d-flex flex-column gap-2">
                      <h5 className="m-0">Our Mailbox</h5>
                      <p>info@softerector.com</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link to="tel:82649 58742" className="d-flex align-items-center gap-3 text-decoration-none">
                    <div className="icon">
                      <img src={Img7} alt="career icon" />
                    </div>

                    <div className="text-black d-flex flex-column gap-2">
                      <h5 className="m-0">Our Phone</h5>
                      <p>+91 82649 58742</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="color-box">
              <div className="header-main mb-3">
                <h2>Ready to Get Started?</h2>
                <hr />
                <p>
                  Your Email address will not be published. Required fields are
                  marked *
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="textarea-field"
                  value={formData.message}
                  onChange={handleChange}
                />

                <input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  className="input-field file-input bg-white text-black"
                  onChange={handleChange}
                />

                <select
                  name="service"
                  className="input-field"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="uiux">UI/UX Design</option>
                </select>

                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentOpening;
