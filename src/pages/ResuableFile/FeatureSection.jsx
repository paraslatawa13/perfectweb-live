import { useState, useEffect, useRef } from "react";
import { TABS } from "./Featuresectioncontent";
import "./FeatureSection.css";

// Sticky header ki height (px). Apne header ke hisaab se change karo.
const HEADER_OFFSET = 90;

export default function FeatureSection() {
  const [active, setActive] = useState(TABS[0].id);
  const rootRef = useRef(null);

  // Fallback: agar id match na ho to pehla tab dikhao, crash nahi hoga
  const t = TABS.find((x) => x.id === active) || TABS[0];

  useEffect(() => {
    const scrollToSection = () => {
      const el = rootRef.current;
      if (!el) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: reduce ? "auto" : "smooth",
      });
    };

    // href (jaise "#machine-learning") se tab kholo, optionally scroll karo
    const openByHref = (href, scroll) => {
      const found = TABS.find((x) => x.href === href);
      if (!found) return;
      setActive(found.id);
      if (scroll) requestAnimationFrame(scrollToSection);
    };

    // CustomerJourney ke button se aaya event
    const onSwitch = (e) => {
      const href = e.detail;
      openByHref(href, true);
      window.history.replaceState(null, "", href); // URL mein hash (optional)
    };

    // Navbar link / back-forward se hash badle to bhi kaam kare
    const onHashChange = () => openByHref(window.location.hash, true);

    window.addEventListener("switch-tab", onSwitch);
    window.addEventListener("hashchange", onHashChange);

    // Page load par sirf tab set karo (scroll nahi)
    openByHref(window.location.hash, false);

    return () => {
      window.removeEventListener("switch-tab", onSwitch);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <div className="st padd" id="features" ref={rootRef}>
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
                <span key={c} className="st-chip">
                  {c}
                </span>
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