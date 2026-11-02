import { useState } from "react";
import "./B2bPartners.css";

const tabs = [
  "Software engineering",
  "Platform and API expansion",
  "Infrastructure & modernization",
  "Product consulting and strategy",
];

export default function WhatMakesUsDifferent() {
  const [active, setActive] = useState(0);

  return (
    <section className="wmd padd">
      <div className="container">
        <p className="wmd__eyebrow">What makes us different</p>

        <h2 className="main__title">
          Be the face. We’ll be your engineering team.
        </h2>

        <p className="b2b_main_para">
          If you run, or are starting, a software or marketing agency, you don’t need a large in-house team to deliver serious work. Join hands with us: we become your backend team, working quietly behind your brand, delivering quality solutions at a cost that keeps your margins healthy.
        </p>

        {/* <div className="wmd__tabs" role="tablist">
          {tabs.map((label, i) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`wmd__tab${active === i ? " wmd__tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {label}
            </button>
          ))}
        </div> */}
        <div className="wmd__tabs" role="tablist">
          {tabs.map((label, i) => (
            <div
              key={label}
              role="tab"
              className={`wmd__tab${active === i ? " wmd__tab--active" : ""}`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}