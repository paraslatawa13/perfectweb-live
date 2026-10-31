import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  TbFileSearch,
  TbShield,
  TbBug,
  TbClipboardCheck,
  TbStack2,
  TbPackage,
  TbGauge,
  TbTool,
  TbCloud,
  TbTarget,
} from "react-icons/tb";

const steps = [
  {
    id: "code-quality",
    theme: "blue",
    icon: TbFileSearch,
    title: "Code quality",
    text: "Read through what exists, flag what's unreadable, duplicated, or quietly doing the wrong thing.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "security",
    theme: "purple",
    icon: TbShield,
    title: "Security",
    text: "Exposed keys, unvalidated input, broken auth — the issues that turn into incidents, checked before anything else.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "bugs",
    theme: "red",
    icon: TbBug,
    title: "Bugs",
    text: "The behavior that's actually wrong — not stylistic nitpicks, but logic that produces the wrong result.",
    showLine: false,
    showArrow: true,
  },
  {
    id: "test-coverage",
    theme: "orange",
    icon: TbClipboardCheck,
    title: "Test coverage",
    text: "What's untested is unknown — we add coverage where it's missing so fixes don't silently break something else.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "architecture",
    theme: "cyan",
    icon: TbStack2,
    title: "Architecture",
    text: "Whether the structure can actually support what you need next, or needs reshaping before it does.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "dependencies",
    theme: "amber",
    icon: TbPackage,
    title: "Dependency problems",
    text: "Outdated, conflicting, or abandoned packages — resolved before they become a security or build problem.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "performance",
    theme: "green",
    icon: TbGauge,
    title: "Performance",
    text: "Slow queries, unnecessary re-renders, bloated bundles — fixed where it actually affects the user.",
    showLine: false,
    showArrow: true,
  },
  {
    id: "maintenance",
    theme: "slate",
    icon: TbTool,
    title: "Maintenance",
    text: "Documentation and structure a human team can actually pick up and keep working on.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "migration",
    theme: "indigo",
    icon: TbCloud,
    title: "AI platform migration",
    text: "If the tool you built with is boxing you in, we move the project onto a stack your team can own long-term.",
    showLine: true,
    showArrow: false,
  },
];

export default function HowWeUnstuck() {
  return (
    <section className="unstuck">
      <div className="container">
        <div className="unstuck__head">
          <div>
            <h2 className="unstuck__title">
              How we <span>get you unstuck</span>
            </h2>
            <p className="unstuck__subtitle">
              Every rescue runs through the same ladder, in the same order —
              each stage has to be sound before the next one means anything.
            </p>
          </div>
          <span className="unstuck__badge">Our process</span>
        </div>

        <ol className="unstuck__list">
          {steps.map(
            ({ id, theme, icon: Icon, title, text, showLine, showArrow }, index) => (
              <li key={id} className={`step step--${theme}`}>
                <span className="step__num">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="step__connector" aria-hidden="true">
                  {showLine && <i className="step__line" />}
                  {showArrow && <FiArrowRight className="step__arrow" size={15} />}
                </span>

                <span className="step__icon">
                  <Icon size={22} />
                </span>

                <div className="step__body">
                  <h3 className="step__title">{title}</h3>
                  <p className="step__text">{text}</p>
                </div>
              </li>
            )
          )}
        </ol>

        <div className="unstuck__business">
          <span className="unstuck__business-icon">
            <TbTarget size={30} />
          </span>
          <div className="unstuck__business-body">
            <h3 className="unstuck__business-title">
              Solve the business requirement — <span>not a placeholder</span>
            </h3>
            <p className="unstuck__business-text">
              The finish line isn't code that compiles. It's software that
              actually does the job you needed it to do, verified against the
              original requirement, not just the technology sitting underneath
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}