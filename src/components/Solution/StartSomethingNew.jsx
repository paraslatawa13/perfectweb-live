import React from "react";
import { House, CodeXml, Users } from "lucide-react";

const cards = [
  {
    id: "online-business",
    icon: <House color="#fff" size={26} />,
    iconClass: "blue",
    title: "Start an online business",
    text: "Grow, do food delivery, D2C, or a service business — go from idea to a live, orderable product.",
    href: "#",
  },
  {
    id: "modernize",
    icon: <CodeXml color="#fff" size={26} />,
    iconClass: "orange",
    title: "Modernize my website or app",
    text: "Your current site or app is holding the business back — we rebuild it without losing what already works.",
    href: "#",
  },
  {
    id: "marketplace",
    icon: <Users color="#fff" size={26} />,
    iconClass: "purple",
    title: "Build a marketplace or platform",
    text: "Connect buyers and sellers, or multiple locations, on one platform — your own Swiggy or Airbnb.",
    href: "#",
  },
];

export default function StartSomethingNew() {
  return (
    <section className="start-container padd">
      <div className="inner-solution container">
        <h2 className="title">
          Start something <span>new</span>
        </h2>
        <p className="subtitle">
          You need a website, app, or an online business that doesn't exist yet
          — or needs a full rebuild.
        </p>

        <div className="grid">
          {cards.map((card) => (
            <article className="card" key={card.id}>
              <div className={`icon ${card.iconClass}`}>{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <a className="link" href={card.href}>
                See examples <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}