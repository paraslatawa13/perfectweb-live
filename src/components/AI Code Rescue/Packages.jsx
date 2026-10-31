import React from "react";
import {
  Rocket,
  Search,
  ShieldCheck,
  Lightbulb,
  Settings,
  Check,
  Send,
  ArrowRight,
} from "lucide-react";

const packages = [
  {
    id: "audit",
    label: "Package 01",
    tag: "Assessment",
    icon: <Search color="#0f2557" size={38} strokeWidth={2.2} />,
    title: "AI Code Audit",
    desc: "Find out if it’s worth saving, and what saving it takes.",
    items: [
      "Code and architecture review",
      "Security and dependency scans",
      "Build and functionality check",
      "Test coverage review",
      "Risk register with priorities",
    ],
    getIcon: <Lightbulb color="#ff6a13" size={38} strokeWidth={1.8} />,
    getText:
      "A technical audit report with risk ratings, a proposed fix plan and an effort estimate.",
  },
  {
    id: "stabilization",
    label: "Package 02",
    tag: "Remediation",
    icon: <ShieldCheck color="#0f2557" size={38} strokeWidth={2.2} />,
    title: "AI Application Stabilization",
    desc: "Turn a fragile prototype into software you can maintain.",
    items: [
      "Critical bug and security fixes",
      "Dependency cleanup",
      "Database and API corrections",
      "Automated regression tests",
      "Documentation and repeatable setup",
    ],
    getIcon: <Settings color="#ff6a13" size={38} strokeWidth={2.2} />,
    getText:
      "Improved source code, test results, an issue-resolution report and a staging deployment where it applies.",
  },
  {
    id: "production",
    label: "Package 03",
    tag: "Production",
    icon: <Rocket color="#0f2557" size={38} strokeWidth={2.2} />,
    title: "Production Engineering & Migration",
    desc: "Get ready for real users, ongoing development and growth.",
    items: [
      "Architecture refactoring",
      "Move to another AI provider or platform if needed",
      "CI/CD pipeline setup",
      "Production infrastructure and deployment",
      "Performance testing, logging and monitoring",
      "Backup, recovery and operations documentation",
    ],
    getIcon: <Rocket color="#ff6a13" size={38} strokeWidth={1.8} />,
    getText:
      "A production-ready application, checked against an agreed acceptance list, with deployment and handover documents.",
  },
];

export default function Packages() {
  return (
    <section className="packages-container">
      <div className="pk-inner container">
            <h2 className="pk-title">
          Three packages, <span>one clear path</span>
        </h2>
        <p className="pk-subtitle">
          Begin with an audit, or jump to the stage you’re at. Each package
          builds on the one before it.
        </p>

        <div className="pk-grid">
          {packages.map((pkg) => (
            <article className="pk-card" key={pkg.id}>
              <div className="pk-card-top">
                <span className="pk-badge">{pkg.label}</span>
                <span className="pk-tag">{pkg.tag}</span>
              </div>

              <div className="pk-head">
                <span className="pk-icon-box">{pkg.icon}</span>
                <h3 className="pk-card-title">{pkg.title}</h3>
              </div>

              <p className="pk-desc">{pkg.desc}</p>
              <span className="pk-divider" />

              <h4 className="pk-included">What’s included</h4>
              <ul className="pk-list">
                {pkg.items.map((item) => (
                  <li className="pk-item" key={item}>
                    <span className="pk-check">
                      <Check color="#fff" size={13} strokeWidth={3.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pk-get">
                <span className="pk-get-icon">{pkg.getIcon}</span>
                <span className="pk-get-body">
                  <strong>What you get</strong>
                  <span>{pkg.getText}</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="pk-banner">
          <Send color="#0f2557" size={32} strokeWidth={2.2} />
          <span className="pk-bar" />
          <strong className="pk-banner-title">Not sure where to start?</strong>
          <span className="pk-banner-text">
            Package 1 tells you honestly what you have, and which of the others
            you actually need.
          </span>
          <span className="pk-bar" />
          <a className="pk-banner-link" href="#">
            Talk to us about your project
            <ArrowRight color="#ff6a13" size={20} strokeWidth={2.6} />
          </a>
        </div>
      </div>
    </section>
  );
}