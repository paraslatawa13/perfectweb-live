
import React from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  TbFolderSearch,
  TbShieldLock,
  TbCode,
  TbShieldCheck,
  TbBug,
  TbChecklist,
  TbHierarchy3,
  TbPackages,
  TbGauge,
  TbSettingsCog,
  TbArrowsExchange,
  TbTargetArrow,
} from "react-icons/tb";

const steps = [
  {
    id: "acquire-project",
    theme: "blue",
    icon: TbFolderSearch,
    title: "Acquire the project",
    text: "We gather everything needed to understand and run your project: source code, repository, database schema, deployment details and access credentials, all shared through secure channels.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "isolated-environment",
    theme: "purple",
    icon: TbShieldLock,
    title: "Set up an isolated development environment",
    text: "We recreate the project in a separate sandbox with its own code, database and configuration. This lets us investigate, test and fix issues without touching your live system or customer data.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "code-quality",
    theme: "red",
    icon: TbCode,
    title: "Code quality",
    text: "We review the existing codebase, identify unreadable or duplicated code, and uncover hidden logic problems that make the project difficult to maintain.",
    showLine: false,
    showArrow: true,
  },
  {
    id: "security",
    theme: "orange",
    icon: TbShieldCheck,
    title: "Security",
    text: "Exposed credentials, unvalidated inputs, broken authentication and vulnerable endpoints — we identify and address security risks before they become incidents.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "bugs",
    theme: "amber",
    icon: TbBug,
    title: "Bug detection and fixing",
    text: "We find and fix actual functional problems: broken workflows, incorrect calculations, unexpected behavior and logic that produces the wrong results.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "test-coverage",
    theme: "green",
    icon: TbChecklist,
    title: "Test coverage",
    text: "What's untested is unproven. We add meaningful tests where coverage is missing so future changes and fixes don't silently break existing functionality.",
    showLine: false,
    showArrow: true,
  },
  {
    id: "architecture",
    theme: "slate",
    icon: TbHierarchy3,
    title: "Architecture",
    text: "We evaluate the application's structure, scalability and technical foundation to determine whether it can support your future requirements or needs restructuring.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "dependencies",
    theme: "indigo",
    icon: TbPackages,
    title: "Dependency management",
    text: "Outdated, conflicting or abandoned packages are identified and resolved to prevent security vulnerabilities, compatibility issues and build failures.",
    showLine: true,
    showArrow: false,
  },
  {
    id: "performance",
    theme: "cyan",
    icon: TbGauge,
    title: "Performance optimization",
    text: "Slow database queries, unnecessary re-renders, bloated bundles and inefficient operations are optimized where they directly affect the user experience.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "maintenance",
    theme: "teal",
    icon: TbSettingsCog,
    title: "Maintainability and documentation",
    text: "We improve code organization, technical documentation and development workflows so your internal team can confidently maintain and extend the project.",
    showLine: true,
    showArrow: true,
  },
  {
    id: "ai-platform-migration",
    theme: "violet",
    icon: TbArrowsExchange,
    title: "AI platform migration",
    text: "If the platform or AI tool you originally used is limiting your project, we migrate it to a flexible, maintainable technology stack your team can own long-term.",
    showLine: false,
    showArrow: false,
  },
];

export default function HowWeUnstuck() {
  return (
    <section className="unstuck">
      <div className="container">

        {/* Section Heading */}
        <div className="unstuck__head">
          <div>
            <h2 className="unstuck__title">
              How we <span>get you unstuck</span>
            </h2>

            <p className="unstuck__subtitle">
              Every rescue follows a structured process. We identify the
              underlying problems, fix what matters and verify that
              everything works as intended before delivery.
            </p>
          </div>

          <span className="unstuck__badge">
            Our process
          </span>
        </div>

        {/* Process Steps */}
        <ol className="unstuck__list">
          {steps.map(
            (
              {
                id,
                theme,
                icon: Icon,
                title,
                text,
                showLine,
                showArrow,
              },
              index
            ) => (
              <li key={id} className={`step step--${theme}`}>

                {/* Step Number */}
                <span className="step__num">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Connector */}
                <span
                  className="step__connector"
                  aria-hidden="true"
                >
                  {showLine && (
                    <i className="step__line" />
                  )}

                  {showArrow && (
                    <FiArrowRight
                      className="step__arrow"
                      size={15}
                    />
                  )}
                </span>

                {/* Step Icon */}
                <span className="step__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>

                {/* Step Content */}
                <div className="step__body">
                  <h3 className="step__title">
                    {title}
                  </h3>

                  <p className="step__text">
                    {text}
                  </p>
                </div>

              </li>
            )
          )}
        </ol>

        {/* Business Requirement */}
        <div className="unstuck__business">

          <span className="unstuck__business-icon">
            <TbTargetArrow
              size={30}
              aria-hidden="true"
            />
          </span>

          <div className="unstuck__business-body">
            <h3 className="unstuck__business-title">
              Solves the business requirement —{" "}
              <span>not a placeholder</span>
            </h3>

            <p className="unstuck__business-text">
              The finish line isn't code that simply compiles. It's
              software that actually solves the problem you hired us
              to solve, verified against your original business
              requirements — not just the technology underneath it.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
