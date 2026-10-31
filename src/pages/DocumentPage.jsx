import React, { useState, useEffect, useRef } from "react";
import { useEmailVerificationApi } from "../api/useEmailVerificationApi";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";

const OTP_EXPIRY_TIME = 2 * 60; // 2 minutes

const LandingPage = () => {
  const { sendOtp, verifyOtp } = useEmailVerificationApi();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(OTP_EXPIRY_TIME);

  const timerId = useRef(null);
  const modalRef = useRef(null);

  /* TIMER LOGIC */
  useEffect(() => {
    if (otpSent && secondsLeft > 0) {
      timerId.current = setInterval(() => {
        setSecondsLeft((sec) => {
          if (sec <= 1) {
            clearInterval(timerId.current);
            setShowResendButton(true);
            setShowVerifyButton(false);
            return 0;
          }
          return sec - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [otpSent, secondsLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* SAFELY CLOSE MODAL AND CLEAN BACKDROP */
  const closeModalSafely = () => {
    const modalEl = modalRef.current || document.getElementById("otpModal");
    const instance = Modal.getInstance(modalEl) || new Modal(modalEl);
    instance.hide();

    setTimeout(() => {
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "auto";
    }, 400);
  };

  /* SEND OTP */
  const handleSendOtp = async () => {
    // Clear messages before new action
    setErrorMessage("");
    setSuccessMessage("");

    // Validate email
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Validate phone
    if (phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      await sendOtp({
        email,
        first_name: firstName,
        last_name: lastName,
        phone,
      });

      setOtpSent(true);
      setOtp("");
      setSecondsLeft(OTP_EXPIRY_TIME);
      setSuccessMessage(
        "We’ve sent a verification code to your email. Please enter it below."
      );
      setErrorMessage("");
      setShowResendButton(false);
      setShowVerifyButton(true);
    } catch (err) {
      const apiMsg =
        err.response?.data?.error || "Failed to send verification code.";
      setErrorMessage(apiMsg);
    }
    setLoading(false);
  };

  /* VERIFY OTP */
  const handleVerifyOtp = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!otp) {
      setErrorMessage("Please enter the OTP before submitting.");
      return;
    }

    setLoading(true);
    try {
      await verifyOtp(email, otp);
      setSuccessMessage("Email verified successfully!");
      setErrorMessage("");
      clearInterval(timerId.current);

      setTimeout(() => {
        closeModalSafely();
        navigate("/thank-you");
      }, 1500);
    } catch (error) {
      const errMsg = error.response?.data?.error || "Invalid OTP!";
      setErrorMessage(errMsg);
    }
    setLoading(false);
  };

  /* RESEND OTP */
  const handleResendOtp = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    setShowVerifyButton(false);

    await handleSendOtp();

    setSuccessMessage("OTP has been resent to your email.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <>
      <div
        className="modal fade"
        id="otpModal"
        tabIndex="-1"
        ref={modalRef}
        aria-labelledby="otpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered otp-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="otpModalLabel">
                Email OTP Verification
              </h4>
              <button
                type="button"
                className="btn-close"
                onClick={closeModalSafely}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="otp-container">
                {!otpSent ? (
                  <div className="otp-form-group">
                    {/* First Name */}
                    <div className="otp-input-group half">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="otp-input"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="otp-input-group half">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="otp-input"
                      />
                    </div>

                    {/* Phone */}
                    <div className="otp-input-group">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) => {
                          const numericValue = e.target.value.replace(/\D/g, "");
                          if (numericValue.length <= 10) setPhone(numericValue);
                        }}
                        className="otp-input"
                      />
                    </div>

                    {/* Email */}
                    <div className="otp-input-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email to get verified"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="otp-input"
                      />
                    </div>

                    {/* Unified Message Area */}
                    {errorMessage && (
                      <div className="alert alert-danger mt-2 p-2 text-center w-100">
                        {errorMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success mt-2 p-2 text-center w-100">
                        {successMessage}
                      </div>
                    )}

                    <button
                      onClick={handleSendOtp}
                      disabled={loading}
                      className="btn btn-primary otp-button d-flex align-items-center justify-content-center"
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        "Send Verification Code"
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="otp-form-group otp-form-group-main">
                    <div className="otp-input-group">
                      <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="otp-input"
                      />
                    </div>

                    {/* Unified Message Area */}
                    {errorMessage && (
                      <div className="alert alert-danger mt-2 p-2 text-center w-100">
                        {errorMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success mt-2 p-2 text-center w-100">
                        {successMessage}
                      </div>
                    )}

                    {showVerifyButton && (
                      <button
                        onClick={handleVerifyOtp}
                        disabled={loading || secondsLeft === 0}
                        className="btn btn-primary otp-button d-flex align-items-center justify-content-center"
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Verifying...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    )}

                    {secondsLeft > 0 ? (
                      <span className="otp-timer">
                        Time left: <strong>{formatTime(secondsLeft)}</strong>
                      </span>
                    ) : (
                      <>
                        <span className="otp-expired-text">
                          OTP expired. Please resend.
                        </span>

                        {showResendButton && (
                          <button
                            onClick={handleResendOtp}
                            disabled={loading}
                            className="btn btn-primary otp-button resend-btn"
                          >
                            {loading ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                Sending...
                              </>
                            ) : (
                              "Resend Verification Code"
                            )}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
