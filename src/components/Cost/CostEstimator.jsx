// CostEstimator.jsx
import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Collapse } from "bootstrap";
import { useServiceApi } from "../../api/useServiceApi";
import 'react-phone-number-input/style.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PhoneInput from 'react-phone-number-input';


const CostEstimator = () => {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [plans, setPlans] = useState([]);
  const [options, setOptions] = useState([]);
  const [timer, setTimer] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("Functionality");
  const [activeService, setActiveService] = useState(null);
  const [activePlatform, setActivePlatform] = useState(null);
  const [activePlan, setActivePlan] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");  
  const [messageType, setMessageType] = useState(""); 
  const [otpMessage, setOtpMessage] = useState("");
  const [otpMessageType, setOtpMessageType] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

 const resetOtpFlow = () => {
    setOtpSent(false);
    setOtp("");     
    setTimer(0); 
  };


  const { getServices, getPlans, getPlanOptions, sendOtp, verifyOtp, sendContact, sendClaimOffer  } = useServiceApi();

  const showMessage = (text, type = "success", duration = 3000) => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, duration);
  };

    const showOtpMessage = (text, type = "success", duration = 3000) => {
    setOtpMessage(text);
    setOtpMessageType(type);
    setTimeout(() => {
      setOtpMessage("");
      setOtpMessageType("");
    }, duration);
  };

  /* ================= LOAD SERVICES ================= */
  useEffect(() => {
    (async () => {
      const data = await getServices();
      console.log ("getServices", data);
      setServices(data || []);
    })();
  }, []);

  /* ================= LOAD OPTIONS ================= */
  useEffect(() => {
    if (activePlan) {
      (async () => {
        const data = await getPlanOptions(activePlan.id);
        console.log ("getPlanOptions", data);
        setOptions(data || []);
      })();
    }
  }, [activePlan]);

  useEffect(() => {
    if (step === 3 && !otpVerified) {
      const hasOpened = localStorage.getItem("otpModalShown");
      if (!hasOpened) {
        setShowOtpModal(true);
        localStorage.setItem("otpModalShown", "true");
      }
    }
  }, [step, otpVerified]);

  useEffect(() => {
    if (timer <= 0) {
      if (otpSent) {
        resetOtpFlow();
        showOtpMessage("OTP expired. Please resend OTP.", "error");
      }
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, otpSent]);




  /* ================= HELPERS ================= */
  const toggleOption = (child) => {
    setSelectedOptions((prev) =>
      prev.some((o) => o.id === child.id)
        ? prev.filter((o) => o.id !== child.id)
        : [...prev, child]
    );
  };

  const extractWeeks = (v) => {
    if (!v) return 0;
    const m = v.match(/\d+/);
    return m ? parseInt(m[0]) : 0;
  };

  const totalCost = selectedOptions.reduce(
    (s, o) => s + Number(o.price || 0),
    0
  );

  const totalDuration = selectedOptions.reduce(
    (s, o) => s + extractWeeks(o.weeks),
    0
  );

  const handleSendOtp = async () => {
    if (!phone) {
      showOtpMessage("Please enter phone number", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await sendOtp(phone);

      // If user already verified
      if (res.already_verified) {
      showOtpMessage(res.message || "This number is already verified.", "error");

        setTimeout(() => {
          setShowOtpModal(false);
        }, 2000);

        return;
      }

      if (res.success) {
        setOtpSent(true);
        setTimer(120);
        showOtpMessage(res.message || "OTP sent successfully!", "success");
      }

    } catch (err) {
      showOtpMessage(
        err.response?.data?.message || "Failed to send OTP",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      showOtpMessage("Please enter OTP", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await verifyOtp(phone, otp);

      if (res.success) {
        setOtpVerified(true);
        localStorage.setItem("otpVerified", "true");

        showOtpMessage(res.message || "OTP verified successfully!", "success");

        // Fade-out animation before closing
        const modal = document.querySelector(".otp-popup.fade-in");
        if (modal) {
          modal.classList.remove("fade-in");
          modal.classList.add("fade-out");
        }

        setTimeout(() => setShowOtpModal(false), 500);
      }

    } catch (err) {
      showOtpMessage(
        err.response?.data?.message || "OTP verification failed",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleContactUs = async () => {
    try {
      const payload = {
        service: activeService?.service,
        platform: activePlatform?.sub_service,
        plan: activePlan?.name,
        options: selectedOptions.map((o) => o.name),
        totalCost,
        totalDuration,
        phone,
      };

      const res = await sendContact(payload);
      showMessage(res.message, "success");
    } catch (err) {
      showMessage(err.response?.data?.message || "Something went wrong!", "error");
    }
  };

  const handleClaimOffer = async () => {
    try {
      const payload = {
        service: activeService?.service,
        platform: activePlatform?.sub_service,
        plan: activePlan?.name,
        options: selectedOptions.map((o) => o.name),
        totalCost,
        totalDuration,
        phone,
      };

      const res = await sendClaimOffer(payload);
      showMessage(res.message, "success");
    } catch (err) {
      showMessage(err.response?.data?.message || "Something went wrong!", "error");
    }
  };

// remember OTP verification even after page reload
  useEffect(() => {
    const verified = localStorage.getItem("otpVerified");
    if (verified === "true") {
      setOtpVerified(true);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const collapses = document.querySelectorAll(".accordion-collapse");
      collapses.forEach((collapseEl) => {
        new Collapse(collapseEl, { toggle: false });
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, [options]);


  return (
    <section className="costEstimator">
      <div className="container">
        <div className="cEwrapper">

          {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <div className="serviceStep">
              <div className="main_header">
                <h2>Select Your Service</h2>
                <p>Choose the service that best fits your needs.</p>
              </div>

              <div className="d-flex gap-4">
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    loop={true}
                    grabCursor={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 20 },
                      768: { slidesPerView: 1, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="scase-swiper"
                  >
                {services.map((service, i) => (
                  <SwiperSlide key={service.id}>
                  <div className={`case-studylistwer ${activeIndex === i ? "center-slide" : "" }`} >
                    <button
                      key={service.id}
                      className="service-tab btn btn-outline-primary"
                      onClick={() => {
                        setActiveService(service);
                        setPlatforms(service.platforms || []);
                        setStep(2);
                      }}
                    >
                      <div className="tab-image">
                        {service.icon && (
                          <img src={service.icon} alt={service.service} width={48} />
                        )}
                      </div>

                      <h5 className="tabtitle">{service.service}</h5>
                      <p className="mb-0">{service.description}</p>
                    </button>
                  </div>
                  </SwiperSlide>
                ))}

                </Swiper>      
              </div>


            </div>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <div className="serviceStep">
              <div className="main_header">
                <h2>Choose Platform for {activeService?.service}</h2>
                <p>Select the platform that fits your project.</p>
              </div>
              <div className="d-flex gap-4">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    className={`service-tab btn btn-outline-primary ${
                      activePlatform?.id === platform.id ? "active" : ""
                    }`}
                    onClick={async () => {
                      setActivePlatform(platform);
                      const data = await getPlans(platform.id);
                      console.log ("get plan", data);
                      setPlans(data || []);
                      setActivePlan(data?.[0] || null);
                      setStep(3);
                    }}
                  >
                    <div className="tab-image">
                      {platform.sub_service_icon && (
                        <img
                          src={platform.sub_service_icon}
                          alt={platform.sub_service}
                          width={48}
                        />
                      )}
                    </div>

                    <h5 className="tabtitle">{platform.sub_service}</h5>
                    <p className="mb-0">{platform.sub_service_description}</p>
                  </button>
                ))}
              </div>
               <a
                className="btn btn-link"
                onClick={() => {
                  setStep(1);
                  setActiveService(null);
                }}
              >
                ← Want to change your service? Go back
              </a>
            </div>
          )}

          {/* ================= STEP 3 ================= */}
          {step === 3 && (
            <div className="row mt-4">
              <div className="col-12 mb-3">
                <button
                  className="btn btn-link"
                  onClick={() => setStep(2)}
                >
                  ← Want to change your platform? Go back
                </button>
              </div>
              <div className="col-md-8">
                <h2>Customize & Plan Your Project</h2>
                <div className="formTabs d-flex gap-2 mb-3">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      className={`btn btn-outline-secondary ${
                        activePlan?.id === plan.id ? "active" : ""
                      }`}
                      onClick={() => setActivePlan(plan)}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
                <div className="accordion" id="costAccordion">
                  {options.map((opt, idx) => (
                    <div className="accordion-item" key={opt.id}>
                      <h2 className="accordion-header" id={`heading-${opt.id}`}>
                        <button
                          className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${opt.id}`}
                          aria-expanded={idx === 0 ? "true" : "false"}
                          aria-controls={`collapse-${opt.id}`}
                        >
                          {opt.name}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${opt.id}`}
                        className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                        aria-labelledby={`heading-${opt.id}`}
                        data-bs-parent="#costAccordion"
                      >
                        <div className="accordion-body">
                          {(opt.children || []).map((child) => (
                            <label key={child.id} className="form-check">
                              <p className="labelCheck"> 
                                <input
                                type="checkbox"
                                className="form-check-input"
                                checked={selectedOptions.some((o) => o.id === child.id)}
                                onChange={() => toggleOption(child)}
                              />
                              {child.name}
                              </p>

                              <span className="ms-2">
                                ${child.price} ({child.weeks})
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className="costSummary">
                  <h4>Estimated Cost</h4>
                  <div className="estimatedCost">${totalCost}</div>

                  <h4>Timeline (weeks)</h4>
                  <div className="timeline">{totalDuration}</div>

                  <button className="btn btn-primary w-100 mt-3" onClick={handleContactUs}>
                    Contact Us
                  </button>
                  {message && (
                    <div className={`mt-2 alert ${messageType === "success" ? "alert-success" : "alert-danger"}`}>
                      {message}
                    </div>
                  )}
                  {totalCost > 2000 && (
                    <div className="claimOffer mt-3">
                      <p>
                        Hurry! Projects over $2000 are eligible for an exclusive
                        discount. Lock your savings today.
                      </p>
                      <div className="btnflex">
                        <button className="btn btn-primary" onClick={handleClaimOffer}>
                          Claim Offer Now
                        </button>
                        {message && (
                            <div className={`mt-2 alert ${messageType === "success" ? "alert-success" : "alert-danger"}`}>
                              {message}
                            </div>
                          )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


      {/* ================= OTP MODAL ================= */}
          {showOtpModal && (
            <div
              className="modal fade show"
              style={{
                display: "block",
                background: "rgba(0,0,0,0.6)",
                transition: "opacity 0.3s ease",
              }}
            >
            <div className="modal-dialog modal-dialog-centered otp-popup cost">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Verify Your Phone Number</h4>
                </div>

                <div className="modal-body">
                    <div className="otp-container">
                  {!otpSent ? (
                    <>
                    <div className="otp-form-group">
                      <div className="otp-input-group">
                        <PhoneInput
                         className="custom-phone-input"
                          placeholder="Enter phone number"
                          defaultCountry="IN"
                          withCountryCallingCode
                          value={phone}
                          onChange={setPhone}
                          disabled={otpVerified}
                        />

                      <button
                        className="btn btn-primary otp-button d-flex align-items-center justify-content-center"
                        onClick={handleSendOtp}
                        disabled={loading}
                      >
                        {loading ? "Submiting..." : "Submit"}
                      </button>

                      {otpMessage && (
                        <div
                          className={`mt-2 alert ${
                            otpMessageType === "success"
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                        >
                          {otpMessage}
                        </div>
                      )}
                      </div>
                    </div>

                    </>
                  ) : (
                    <>
                    <div className="otp-form-group otp-form-group-main">
                      <label className="form-label">Enter OTP</label>
                      <div className="otp-input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      </div>
                      {timer > 0 ? (
                        <small className="text-muted d-block mt-2">
                          OTP expires in {Math.floor(timer / 60)}:
                          {(timer % 60).toString().padStart(2, "0")}
                        </small>
                      ) : (
                        <small className="text-danger d-block mt-2">
                          OTP expired. Please resend OTP.
                        </small>
                      )}
                      <button
                        className="btn btn-success w-100 mt-3"
                        onClick={handleVerifyOtp}
                        disabled={loading || timer <= 0}
                      >
                        {loading ? "Verifying..." : "Verify OTP"}
                      </button>
                      {otpMessage && (
                        <div
                          className={`mt-2 alert ${
                            otpMessageType === "success"
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                        >
                          {otpMessage}
                        </div>
                      )}
                      </div>
                    </>
                  )}
                </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default CostEstimator;
