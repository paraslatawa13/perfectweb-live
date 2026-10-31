import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieConsentApp = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Delay display by 90 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setShowConsent(true);
    }, 90_000); // 90000 ms = 1.5 minutes

    return () => clearTimeout(timer);
  }, []);

  if (!showConsent) return null;

  return (
    <CookieConsent
      location="bottom"
      cookieName="user_cookie_consent"
      style={{
        background: "#2B373B",
        color: "#fff",
        textAlign: "left",
        padding: "15px",
        display: "block",
        alignItems: "center",
        width: "600px",
        margin: "0 auto",
        borderRadius: "8px",
      }}
      buttonWrapperClasses="cookie-btn-wrapper"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      onAccept={() => console.log("User accepted cookies")}
      onDecline={() => console.log("User rejected cookies")}
      buttonStyle={{
        background: "#295199",
        color: "#fff",
        fontSize: "12px",
        borderRadius: "100px",
        margin: "0px",
      }}
      declineButtonStyle={{
        background: "#f44336",
        color: "#fff",
        fontSize: "12px",
        borderRadius: "100px",
        margin: "0px",
      }}
    >
      <p className="cookies-text">
        This website stores cookies on your computer. These cookies are used to
        improve your website experience and provide more personalized services
        to you, both on this website and through other media. To find out more
        about the cookies we use, see our{" "}
        <Link
          to="/privacy-policy"
          style={{ color: "#ffd700", fontSize: "10px" }}
        >
          Privacy Policy
        </Link>.
      </p>
      <p className="cookies-text">
        We won't track your information when you visit our site if you decline.
        But in order to comply with your preferences, we'll have to use just one
        tiny cookie so that you're not asked to make this choice again.
      </p>
    </CookieConsent>
  );
};

export default CookieConsentApp;