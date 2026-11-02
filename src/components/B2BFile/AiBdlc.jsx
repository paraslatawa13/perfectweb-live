import "./B2bPartners.css";
;

const steps = [
  {
    title: "Plan",
    text: "AI-assisted requirement docs, user stories and estimates.",
  },
  {
    title: "Design",
    text: "Rapid wireframes and flows, tested with the client before build.",
  },
  {
    title: "Sprints & priorities",
    text: "Short sprints, with features ranked by user value and effort, so release one ships what matters most.",
  },
  {
    title: "Build",
    text: "AI coding agents inside our process, with engineers owning architecture.",
  },
  {
    title: "Review & test",
    text: "AI-assisted code review and generated tests, then human sign-off.",
  },
  {
    title: "Deploy",
    text: "Automated CI/CD, staging first, with a rollback plan before every release.",
  },
  {
    title: "Maintain",
    text: "Monitoring, fixes and iteration after launch, with documentation kept current.",
  },
];

export default function AiBdlc() {
  return (
    <section className="bdlc padd">
      <div className="container">
        <h2 className="main__title">
          An AI-powered SDLC, from planning to deployment.
        </h2>

        <p className="b2b_main_para">
          AI is part of every stage, with an engineer reviewing at each one. You get speed without giving up control.
        </p>

        <ol className="bdlc__steps">
          {steps.map(({ title, text }, i) => (
            <li className="bdlc__step" key={title}>
              <span className="bdlc__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="bdlc__stepTitle">{title}</h3>
              <p className="bdlc__stepText">{text}</p>
            </li>
          ))}
        </ol>

        <div className="bdlc__cta">
          <p className="bdlc__ctaText">
           Tell us about your agency and the kind of projects you take on. We’ll show you how a partnership would work.
          </p>
          <div className="bdlc__actions">
            <button type="button" className="bdlc__btn bdlc__btn--primary">
              Talk to partnership
            </button>
            <button type="button" className="bdlc__btn bdlc__btn--outline">
              Common questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}