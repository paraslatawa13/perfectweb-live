import React, { useState } from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";

const newsletter = {
  heading: "Newsletter",
  subtitle:
    "One useful email a month on shipping software, automation and AI well. No sales pitch.",
  badge: "Ongoing",
  title: "Field notes",
  text: "Get practical insights, case studies and resources directly in your inbox.",
  placeholder: "you@company.com",
  cta: "Subscribe",
  note: ["No spam.", "Just useful insights."],
};

function PaperPlane() {
  return (
    <svg
      className="news-card__plane"
      width="70"
      height="44"
      viewBox="0 0 70 44"
      fill="none"
      aria-hidden="true"
    >
      <polygon points="2,24 68,2 38,26" fill="#3b82f6" />
      <polygon points="2,24 38,26 27,41" fill="#1e40af" />
      <polygon points="38,26 68,2 34,40" fill="#2563eb" />
    </svg>
  );
}

export default function NewsletterSection({ onSubscribe }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (onSubscribe) onSubscribe(email.trim());

    setEmail("");
  };

  return (
    <section className="news">
      <div className="container ">
        <div className="news__head">
          <div>
            <h2 className="news__title">{newsletter.heading}</h2>
            <p className="news__subtitle">{newsletter.subtitle}</p>
          </div>
          <span className="news__badge">{newsletter.badge}</span>
        </div>

        <div className="news-card">
          <span className="news-card__icon">
            <FiMail size={42} strokeWidth={1.4} />
          </span>

          <div className="news-card__content">
            <h3 className="news-card__title">{newsletter.title}</h3>
            <p className="news-card__text">{newsletter.text}</p>
          </div>

          <form className="news-card__form" onSubmit={handleSubmit}>
            <label className="news-card__field">
              <FiMail size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                required
              />
            </label>
            <button type="submit" className="news-card__btn">
              {newsletter.cta} <FiArrowRight size={16} />
            </button>
          </form>

          <div className="news-card__visual" aria-hidden="true">
            <PaperPlane />
            <span className="news-card__note">
              {newsletter.note.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
            <i className="news-card__dash" />
          </div>
        </div>
      </div>
    </section>
  );
}