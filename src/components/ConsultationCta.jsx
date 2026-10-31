import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Video, Mail, ArrowRight } from "lucide-react";
import ctaBg from "../assets/images/Home/cta-bg.png";



const resources = [
  {
    tag: "Guide",
    icon: BookOpen,
    title: "AI for operations teams",
    text: "A short, practical read on where automation actually pays off.",
    cta: "Get The Guide",
    link: "/guides/ai-for-operations",
  },
  {
    tag: "Webinar",
    icon: Video,
    title: "Scoping an AI project",
    text: "A live 30-minute session on what to ask before you commit budget.",
    cta: "Reserve a seat",
    link: "/webinars/scoping-an-ai-project",
  },
  {
    tag: "Newsletter",
    icon: Mail,
    title: "Field notes",
    text: "One useful email a month on shipped software and automation well.",
    cta: "Subscribe",
    link: "/newsletter",
  },
];

export default function ConsultationCta() {
  return (
    <section
      className="cta padd"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="container cta__inner">
        <div className="cta__left">
          <h2 className="cta__title">
            Not Ready To Talk Yet?
            <br />
            Start Smaller.
          </h2>
          <p className="cta__text">
            Read, watch, or ask a quick question first the consultation is here
            whenever you are.
          </p>
          <Link to="/contact" className="cta__btn">
            Book a consultation
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="cta__cards">
          {resources.map(({ tag, icon: Icon, title, text, cta, link }) => (
            <article className="cta-card" key={tag}>
              <span className="cta-card__tag">
                <Icon size={11} />
                {tag}
              </span>
              <h3 className="cta-card__title">{title}</h3>
              <p className="cta-card__text">{text}</p>
              <Link to={link} className="cta-card__link">
                {cta} <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}