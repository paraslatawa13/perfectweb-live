import {
  Target,
  Clock,
  Gauge,
  ShieldCheck,
  Users,
  MessagesSquare,
  Cloud,
  FileText,
  BadgeCheck,
} from "lucide-react";
import "./B2bPartners.css";


const drivers = [
  {
    title: "The business goal",
    text: "Testing an idea, or scaling something proven?",
    Icon: Target,
  },
  {
    title: "Users and load",
    text: "Who will use it, how many, and how often.",
    Icon: Clock,
  },
  {
    title: "Existing systems",
    text: "What it has to plug into, and what must stay as it is.",
    Icon: Gauge,
  },
  {
    title: "Budget and timeline",
    text: "What’s realistic for version one, and what can wait.",
    Icon: ShieldCheck,
  },
  {
    title: "Security and compliance",
    text: "The data involved and the rules around it.",
    Icon: Users,
  },
  {
    title: "Who maintains it next",
    text: "So the choice suits the team that inherits it.",
    Icon: ShieldCheck,
  },
];

const approach = [
  {
    title: "An architecture conversation",
    text: "A working session with you, and with your client if you prefer. We bring the trade-offs; you leave with a clear recommendation.",
    Icon: MessagesSquare,
  },
  {
    title: "Options, not a verdict",
    text: "Two or three workable approaches compared on cost, speed, scalability and risk, so the decision is informed and yours.",
    Icon: Cloud,
  },
  {
    title: "A summary you can pass on",
    text: "Plain-language notes and diagrams you can drop into your own proposal, so you look prepared in front of the client.",
    Icon: FileText,
  },
  {
    title: "Built to grow",
    text: "Version one stays affordable, and the next version builds on it instead of starting over.",
    Icon: BadgeCheck,
  },
];

export default function ChooseArchitecture() {
  return (
    <section className="arc_main padd pt-0">
      <div className="container">
        <div className="arc__head">
          <div>
            <p className="arc__eyebrow">Architecture & stack</p>
            <h2 className="main__title">
             We choose the architecture after we understand the problem.
            </h2>
          </div>
          <p className="b2b_main_para">
            There’s no default stack and no template we push on every project. We sit down with you, look at what your client actually needs, and recommend the setup that fits, with the reasons in plain language you can repeat to them.
          </p>
        </div>

        <div className="arc__panels">
          <div className="arc__panel">
            <p className="arc__label">What shapes the decision</p>
            <ul className="arc__drivers">
              {drivers.map(({ title, text, Icon }) => (
                <li className="arc__driver" key={title}>
                  <span className="arc__driverIcon">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="arc__driverTitle">{title}</h3>
                    <p className="arc__driverText">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="arc__panel">
            <p className="arc__label">How we help you get it right</p>
            <div className="arc__cards">
              {approach.map(({ title, text, Icon }) => (
                <article className="arc__card" key={title}>
                  <span className="arc__cardIcon">
                    <Icon size={24} strokeWidth={2.2} />
                  </span>
                  <h3 className="arc__cardTitle">{title}</h3>
                  <p className="arc__cardText">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}