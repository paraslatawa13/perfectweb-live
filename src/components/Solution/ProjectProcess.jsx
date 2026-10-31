import React from "react";

const steps = [
  {
    id: 1,
    title: "Scope the problem, not the tech",
    text: "We start with your business priorities — marketing, sales, operations.",
  },
  {
    id: 2,
    title: "Build & test with expertise",
    text: "Develop, test, and refine the solution for top performance.",
  },
  {
    id: 3,
    title: "Launch & improve",
    text: "Deploy with confidence and provide ongoing support.",
  },
];

export default function ProjectProcess() {
  return (
    <section className="process-container">
      <div className="inner container">
        <h2 className="title">
          How a project actually <span>runs</span>
        </h2>
        <p className="subtitle">
          From idea to launch, here’s how we make it happen — step by step.
        </p>

        <ol className="process-steps">
          {steps.map((step) => (
            <li className="step" key={step.id}>
              <span className="number">{step.id}</span>
              <div className="card">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}