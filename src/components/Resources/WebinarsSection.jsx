import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiUser, FiPlay, FiPlayCircle } from "react-icons/fi";
import { webinarApi } from "../../api/bookingApi";

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

/** Maps a webinar from the admin panel onto the card layout below. */
const fromApi = (w, i) => {
  const live = w.type === "live";
  const when = w.starts_at
    ? new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(w.starts_at))
    : null;
  return {
    id: w.slug,
    variant: live ? "live" : "recorded",
    status: live ? (w.is_upcoming ? "Live" : "Past session") : "Recorded",
    schedule: live ? when : null,
    title: w.title,
    text: w.summary || "",
    cta: live ? (w.is_upcoming ? "Reserve a seat" : "Get the materials") : "Watch the recording",
    link: `/webinars/${w.slug}`,
    image: w.cover_image || (i % 2 === 0 ? liveImg : recordedImg),
    liveBadge: live && w.is_upcoming,
    playButton: !live,
    info: w.duration_minutes
      ? { icon: live ? FiUser : FiPlayCircle, value: `${w.duration_minutes} min`, label: live ? "Expert Session" : "Step-by-step" }
      : { icon: FiPlayCircle, value: live ? "Live" : "On demand", label: "Webinar" },
  };
};

export default function WebinarsSection() {
  const [items, setItems] = useState(webinars);

  useEffect(() => {
    let alive = true;
    webinarApi
      .list()
      .then((list) => {
        if (alive && list?.length) setItems(list.map(fromApi));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

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

        <div className={`webinars__grid ${items.length === 1 ? "is-single" : ""}`}>
          {items.map(
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

                  <Link to={link} className="webinar-card__btn">
                    {cta} <FiArrowRight size={16} />
                  </Link>
                </div>

                {/* RIGHT */}
                <Link to={link} className="webinar-card__media" tabIndex={-1} aria-hidden="true">
                  <img src={image} alt={title} />

                  {liveBadge && (
                    <span className="webinar-card__live">
                      <i /> LIVE
                    </span>
                  )}

                  {playButton && variant === "recorded" && (
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
                </Link>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}