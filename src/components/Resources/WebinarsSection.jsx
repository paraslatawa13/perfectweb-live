import React from "react";
import { FiArrowRight, FiUser, FiPlay, FiPlayCircle } from "react-icons/fi";

import liveImg from "../../assets/images/Resources/webinar-live.webp";
import recordedImg from "../../assets/images/Resources/webinar-recorded.webp";

const webinars = [
  {
    id: "scoping-ai-project",
    variant: "live", 
    status: "Live",
    schedule: "Every second Thursday, 5:00 PM IST",
    title: "Scoping an AI project",
    text: "A 30-minute session on what to ask before you commit budget to an AI or automation project.",
    cta: "Reserve a seat",
    link: "/webinars/scoping-an-ai-project",
    image: liveImg,
    liveBadge: true, 
    playButton: true, 
    info: { icon: FiUser, value: "30 min", label: "Expert Session" },
  },
  {
    id: "manual-to-automated",
    variant: "recorded",
    status: "Recorded",
    title: "From manual to automated: a walkthrough",
    text: "A 20-minute recorded walkthrough of an ops automation project, start to finish.",
    cta: "Watch the recording",
    link: "/webinars/manual-to-automated",
    image: recordedImg,
    liveBadge: false,
    playButton: true,
    info: { icon: FiPlayCircle, value: "20 min", label: "Step-by-step" },
  },
];

export default function WebinarsSection() {
  return (
    <section className="webinars">
      <div className="container">
        <div className="webinars__head">
          <div>
            <h2 className="webinars__title">Webinars</h2>
            <p className="webinars__subtitle">
              Live and on-demand sessions to learn from our experts.
            </p>
          </div>
          <span className="webinars__badge">Medium commitment</span>
        </div>

        <div className="webinars__grid">
          {webinars.map(
            ({
              id,
              variant,
              status,
              schedule,
              title,
              text,
              cta,
              link,
              image,
              liveBadge,
              playButton,
              info: { icon: InfoIcon, value, label },
            }) => (
              <article key={id} className={`webinar-card webinar-card--${variant}`}>
                {/* LEFT */}
                <div className="webinar-card__content">
                  <div className="webinar-card__meta">
                    <span className="webinar-card__status">
                      <i className="webinar-card__dot" />
                      {status}
                    </span>
                    {schedule && (
                      <span className="webinar-card__schedule">{schedule}</span>
                    )}
                  </div>

                  <h3 className="webinar-card__title">{title}</h3>
                  <p className="webinar-card__text">{text}</p>

                  <a href={link} className="webinar-card__btn">
                    {cta} <FiArrowRight size={16} />
                  </a>
                </div>

                {/* RIGHT */}
                <div className="webinar-card__media">
                  <img src={image} alt={title} />

                  {liveBadge && (
                    <span className="webinar-card__live">
                      <i /> LIVE
                    </span>
                  )}

                  {playButton && (
                    <span className="webinar-card__play" aria-hidden="true">
                      <FiPlay size={18} />
                    </span>
                  )}

                  <div className="webinar-card__info">
                    <InfoIcon size={22} />
                    <div>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}