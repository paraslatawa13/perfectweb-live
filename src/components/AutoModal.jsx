import React, { useEffect, useState } from "react";
import { useContactFormApi } from "../api/contactForm";
import Happynewyear from "../assets/images/christmis.png";

const AutoModal = () => {
  const { postSubscribeForm } = useContactFormApi();
  const [formData, setFormData] = useState({ email_address: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Show popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setSuccess(false);

  //   try {
  //     await postSubscribeForm(formData);
  //     setSuccess(true);
  //     setFormData({ emailAddress: "" });

  //     setTimeout(() => setShowModal(false), 1500);
  //   } catch (error) {
  //     console.error("Failed to submit form:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await postSubscribeForm(formData);
      setSuccess(true);
      setFormData({ email_address: "" });

      // Close after short delay
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className={`popup-overlay ${showModal ? "show" : ""}`} onClick={() => setShowModal(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={() => setShowModal(false)}>
          &times;
        </button>
        <img src={Happynewyear} alt="Holiday Offer" className="popup-image" />
         <div className="offer-form">
        <form onSubmit={handleSubmit} className="popup-form">
          <input
            type="email"
            name="email_address"
            placeholder="Enter Email to Get Offer"
            value={formData.email_address}
            onChange={handleChange}
            required
            className="popup-input"
          />
          <button type="submit" className="popup-button" disabled={loading}>
            {loading ? (
              <>
                <span className="loader"></span> Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {success && <small className="popup-success">Offer sent successfully!</small>}
        </div>

      </div>
    </div>
  );
};

export default AutoModal;
