import { Fragment } from "react";
const TOOLS = [
  {
    label: "Sales & Customers",
    lines: ["CRMs, forms, helpdesks"],
  },
  {
    label: "Money",
    lines: ["Payment gateways, accounting and invoicing"],
  },
  {
    label: "Messaging",
    lines: ["WhatsApp, email, SMS"],
  },
  {
    label: "Data",
    lines: ["Databases, spreadsheets, analytics"],
  },
  {
    label: "Cloud",
    lines: ["Hosting and storage you already run"],
  },
  {
    label: "Your own systems",
    lines: ["Internal tools and legacy software"],
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
           You don’t have to replace what works. We connect to your existing systems through their APIs wherever one exists, so new capabilities slot into the way your team already operates.
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