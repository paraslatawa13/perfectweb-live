
import { useState } from "react";
import { Plus, Sprout } from "lucide-react";
import "./B2bPartners.css";

const leftFaqs = [
  {
    q: "Will our clients know we’re working with you?",
    a: "Only if you want them to. We work under NDA and can operate as part of your team, under your brand and communication channels.",
  },
  {
    q: "Who owns the code and the client relationship?",
    a: "You keep the client relationship. The codebase and infrastructure are owned by you and your client from day one, as with every project we do.",
  },
  {
    q: "Can you join a project mid-way, or only start new ones?",
    a: "Both. We can take over an in-progress build, or review and finish one that AI tools left incomplete.",
  },
  {
    q: "How is pricing structured?",
    a: "Per project or on a monthly capacity basis, depending on how your pipeline looks. We discuss it on the first call.",
  },
];

const rightFaqs = [
  {
    q: "Can our team review code before go-live?",
    a: "Yes — staging access is set up in the first sprint, and every merge is reviewable on request.",
  },
  {
    q: "Do you work with an existing codebase, or only greenfield builds?",
    a: "Both. Most of our automation and AI work is added on top of systems that already exist.",
  },
  {
    q: "Where does data reside, and who has access to it?",
    a: "In your chosen cloud environment by default; access is scoped per engineer and revoked at handover.",
  },
  {
    q: "What happens if we want to bring this in-house later?",
    a: "You can — documentation and full ownership transfer are part of every handover, not an add-on.",
  },
];

function FaqColumn({ items, name, withLeadIcon, heading }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq__colWrapper">
      <p className="arc__eyebrow">{heading}</p>

      <ul className="faq__col">
        {items.map(({ q, a }, i) => {
          const isOpen = openIndex === i;
          const panelId = `faq-${name}-panel-${i}`;
          const buttonId = `faq-${name}-button-${i}`;

          return (
            <li
              className={`faq__item${isOpen ? " faq__item--open" : ""}`}
              key={q}
            >
              <button
                type="button"
                id={buttonId}
                className="faq__question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {withLeadIcon && (
                  <Sprout
                    className="faq__lead"
                    size={13}
                    strokeWidth={2.2}
                  />
                )}

                <span className="faq__qText">{q}</span>

                <Plus
                  className="faq__plus"
                  size={16}
                  strokeWidth={2.4}
                />
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="faq__panel"
              >
                <div className="faq__panelInner">
                  <p className="faq__answer">{a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="b2b_faq padd pt-2">
      <div className="container">
        <h2 className="main__title">
          Frequently asked questions
        </h2>

        <div className="faq__grid">
          <FaqColumn
            items={leftFaqs}
            name="left"
            withLeadIcon
            heading="Questions agencies usually ask"
          />

          <FaqColumn
            items={rightFaqs}
            name="right"
            heading="Questions technical teams usually ask"
          />
        </div>
      </div>
    </section>
  );
}
