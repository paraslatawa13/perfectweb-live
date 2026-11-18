import { Fragment } from "react";
const TOOLS = [
  {
    label: "Website / Online store",
    lines: ["Connects with your existing", "site, CMS or store."],
  },
  {
    label: "CRM / ERP",
    lines: ["Keeps your customer, sales and", "order data in sync."],
  },
  {
    label: "Integrations",
    lines: ["Works with your email, SMS", "and other apps."],
  },
  {
    label: "Data",
    lines: ["Uses the data you already have, safely."],
  },
  {
    label: "Auth",
    lines: ["Fits with your existing sign-in and access."],
  },
  {
    label: "AI & Automation tools",
    lines: ["Runs alongside the tools you already use."],
  },
];

export default function BuildAroundYourTools() {
  return (
    <section className="bayt padd pt-5">
      <div className="bayt__inner container">
        <div className="bayt__left">
          <span className="bayt__bar" />
          <h2 className="bayt__heading">
            We build around the tools <br className="bayt__br" />
            you <span>already use.</span>
          </h2>
          <p className="bayt__intro">
            You don’t have to change what already works. We connect to the tools you use today,
            keep your data in sync, and build what you need around them, so everything works
            smoothly together.
          </p>
        </div>

        <div className="bayt__card">
          {TOOLS.map(({ label, lines }) => (
            <div key={label} className="bayt__cell">
              <h3 className="bayt__label">{label}</h3>
              <p className="bayt__text">
                {lines.map((line, i) => (
                  <Fragment key={line}>
                    {line}
                    {i < lines.length - 1 && (
                      <>
                        {" "}
                        <br className="bayt__br" />
                      </>
                    )}
                  </Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}