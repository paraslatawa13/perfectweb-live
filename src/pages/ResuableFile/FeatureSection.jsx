import { useState } from "react";
import { TABS } from "./Featuresectioncontent";
import "./FeatureSection.css";


export default function FeatureSection() {
  const [active, setActive] = useState(TABS[0].id);
  const t = TABS.find((x) => x.id === active);

  return (
    <div className="st padd">
      <div className="st-top container">
        <div className="st-tabs" role="tablist">
          {TABS.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={x.id === active}
              className={"st-tab" + (x.id === active ? " on" : "")}
              onClick={() => setActive(x.id)}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="st-body" role="tabpanel">
          <div>
            <span className="st-badge">{t.num}</span>
            <h2 className="st-h">{t.title}</h2>
            <p className="st-sub">{t.sub}</p>
            <div className="st-lab">About this</div>
            <p className="st-about">{t.about}</p>
            <div className="st-chips">
              {t.tech.map((c) => (
                <span key={c} className="st-chip">{c}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="st-lab">How businesses use it</div>
            <div className="st-grid">
              {t.cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.t} className="st-card">
                    <div className={"st-ic " + c.c}>
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="st-ct">{c.t}</h3>
                    <p className="st-cd">{c.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}