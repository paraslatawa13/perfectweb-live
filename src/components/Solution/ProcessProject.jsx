import React from "react";
import { Target, CodeXml, Rocket, Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Scope the problem, not the tech",
    text: "We start with your business priorities — marketing, sales, operations, automation, scalability or analytics — and then define the right solution around those goals, from a focused MVP to a complete system.",
  },
  {
    id: 2,
    title: "Build in visible stages",
    text: "Clear scope, timelines and deliverables, broken into manageable stages. We test with real users, gather feedback, spot what falls short and refine the solution as we go.",
  },
  {
    id: 3,
    title: "Launch, measure, and improve",
    text: "We track real business results, fix what falls short, and add features as your needs evolve — continuously improving performance, profitability and growth.",
  },
];

const visualRows = [
  { id: 1, icon: <Target color="#fff" size={18} />, done: true },
  { id: 2, icon: <CodeXml color="#fff" size={18} />, done: true },
  { id: 3, icon: <Rocket color="#fff" size={18} />, done: false },
];



export default function ProjectProcess() {
  return (
    <section className="process-container padd">
      <div className="inner-solution container">
        <h2 className="title">
          How a project actually <span>runs</span>
        </h2>
        <p className="subtitle">
          From idea to launch, here's how we make it happen — step by step.
        </p>

        <div className="pp-body">
          <div className="pp_image">
            <img
              src="https://perfectwebservices.com/assets/CWebDevelopmentBanner-Dpql7IV3.webp"
              alt="Project Process Illustration"/>
          </div>
          <ol className="pp-steps">
            {steps.map((step) => (
              <li className="pp-step" key={step.id}>
                <span className="pp-number">{step.id}</span>
                <div className="pp-card">
                  <h3 className="pp-card-title">{step.title}</h3>
                  <p className="pp-card-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  );
}