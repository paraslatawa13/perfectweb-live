import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import {
  IoBulbOutline,
  IoSettingsOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";

const options = [
  {
    id: "solutions",
    theme: "blue",
    icon: IoBulbOutline,
    label: "Solutions",
    title: "Not sure which fits?",
    text: "See the two ways businesses typically work with us.",
    cta: "See solutions",
    link: "/solutions",
  },
  {
    id: "work",
    theme: "purple",
    icon: IoSettingsOutline,
    label: "Work",
    title: "Want proof first?",
    text: "Case studies filtered by your industry.",
    cta: "See case studies",
    link: "/work",
  },
  {
    id: "chat",
    theme: "green",
    icon: IoChatbubblesOutline,
    label: "Chat",
    title: "Quick question first?",
    text: "Message us directly — no form, no wait.",
    cta: "WhatsApp us",
    link: "https://wa.me/910000000000", 
    external: true,
  },
];

export default function ReadyToTalk() {
  return (
    <section className="rtt_main padd">
      <div className="rtt__inner container">
        <div className="rtt__left">
          <h2 className="rtt__title">
            Ready <span>to talk</span> instead?
          </h2>
          <p className="rtt__text">
            Skip the reading list — tell us the situation directly and we’ll
            tell you what fits.
          </p>
          <Link to="/contact-us" className="rtt__btn">
            Book a consultation <FiArrowRight size={18} />
          </Link>
        </div>

        <div className="rtt__cards">
          {options.map(
            ({ id, theme, icon: Icon, label, title, text, cta, link, external }) => (
              <article key={id} className={`rtt-card rtt-card--${theme}`}>
                <span className="rtt-card__icon">
                  <Icon size={22} />
                </span>

                <small className="rtt-card__label">{label}</small>
                <h3 className="rtt-card__title">{title}</h3>
                <p className="rtt-card__text">{text}</p>

                {external ? (
                  <a
                    className="rtt-card__link"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cta} <FiArrowRight size={15} />
                  </a>
                ) : (
                  <Link className="rtt-card__link" to={link}>
                    {cta} <FiArrowRight size={15} />
                  </Link>
                )}
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}