import { ShieldCheck, Link2, Database, BarChart3 } from "lucide-react";
import "./B2bPartners.css";

const highlights = [
  {
    title: "Grounded in best practices",
    text: "Modern technologies, standards, and tools that last.",
    active: true,
  },
  {
    title: "Adapt to market needs",
    text: "Stay flexible as your goals, customers, or the tech landscape change.",
  },
  {
    title: "We deliver it well",
    text: "You get practical recommendations, not just slides.",
  },
];

const steps = [
  {
    title: "Discovery & architecture review",
    text: "We get to know your needs, review your existing systems (code, infra, and tools), and provide a clear plan for the best approach.",
  },
  {
    title: "Sprint-based build",
    text: "We work in sprints, with regular check-ins and progress updates, so you always know what’s happening.",
  },
  {
    title: "Testing & quality assurance",
    text: "Every feature is tested, including automated and manual tests, to ensure the product works as expected.",
  },
  {
    title: "Deployment & documentation",
    text: "We help you launch smoothly, with deployment support and clear documentation, so your team can take over or we can continue to support you.",
  },
];

const approach = [
  {
    title: "End-to-end Security",
    text: "We follow industry best practices to keep your data and your users safe, from development to deployment.",
    Icon: ShieldCheck,
  },
  {
    title: "Access & APIs",
    text: "We design secure, flexible integrations with the tools and services you already use.",
    Icon: Link2,
  },
  {
    title: "Hybrid & stand alone",
    text: "Our solutions work whether you’re using a fully in-house tech stack, a mix of cloud and on-premise tools, or a combination.",
    Icon: Database,
  },
  {
    title: "Scale as needed",
    text: "You can start with a small project and scale to a full platform, with the same security and integration approach.",
    Icon: BarChart3,
  },
];

export default function DeliveryProcess() {
  return (
    <section className="dp_main padd pt-3">
      <div className="container">
        <div className="dp__highlights">
          {highlights.map(({ title, text, active }) => (
            <div
              className={`dp__highlight${active ? " dp__highlight--active" : ""}`}
              key={title}
            >
              <h3 className="dp__highlightTitle">{title}</h3>
              <p className="dp__highlightText">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="dp__heading">Delivery process</h2>

        <ol className="dp__steps">
          {steps.map(({ title, text }, i) => (
            <li className="dp__step" key={title}>
              <span className="dp__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="dp__stepTitle">{title}</h3>
                <p className="dp__stepText">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="dp__heading dp__heading--second">
          Security & integration approach
        </h2>

        <div className="dp__grid">
          {approach.map(({ title, text, Icon }) => (
            <article className="dp__card" key={title}>
              <span className="dp__icon">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div>
                <h3 className="dp__cardTitle">{title}</h3>
                <p className="dp__cardText">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}