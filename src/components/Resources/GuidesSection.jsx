import React from "react";
import { FiArrowRight } from "react-icons/fi";

import aiGuideImg from "../../assets/images/Resources/guide-ai.webp";
import firstProjectImg from "../../assets/images/Resources/guide-checklist.webp";
import architectureImg from "../../assets/images/Resources/guide-architecture.webp";

const guides = [
  {
    id: "ai-operations",
    theme: "blue",
    tag: "Guide",
    title: "AI for operations teams",
    text: "A practical read on where automation actually pays off — and where it doesn’t yet.",
    cta: "Download the guide",
    file: "/downloads/ai-for-operations-teams.pdf",
    image: aiGuideImg,
  },
  {
    id: "first-ai-project",
    theme: "purple",
    tag: "Guide",
    title: "Choosing your first AI project",
    text: "How to pick a starting point small enough to ship in weeks, not quarters.",
    cta: "Download the guide",
    file: "/downloads/choosing-your-first-ai-project.pdf",
    image: firstProjectImg,
  },
  {
    id: "architecture",
    theme: "green",
    tag: "Guide",
    title: "Architecture overview (for technical teams)",
    text: "Our stack, delivery process and security posture in one document you can share internally.",
    cta: "Download the guide",
    file: "/downloads/architecture-overview.pdf",
    image: architectureImg,
  },
];

export default function GuidesSection() {
  return (
    <section className="guides ">
      <div className="guides__inner container">
        <div className="guides__head">
          <div>
            <h2 className="guides__title">Guides</h2>
            <p className="guides__subtitle">
              Practical resources to help you plan, build and grow with
              confidence.
            </p>
          </div>
          <span className="guides__badge">Low commitment</span>
        </div>

        <div className="guides__grid">
          {guides.map(({ id, theme, tag, title, text, cta, file, image }) => (
            <article key={id} className={`guide-card guide-card--${theme}`}>
              <span className="guide-card__tag">{tag}</span>

              <h3 className="guide-card__title">{title}</h3>
              <p className="guide-card__text">{text}</p>

              <img className="guide-card__image" src={image} alt="" />

              <a className="guide-card__link" href={file} download>
                {cta} <FiArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}