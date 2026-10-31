import { Link } from "react-router-dom";
import { Plus, Settings, AlertTriangle, ScanLine } from "lucide-react";

const goals = [
  {
    id: "01",
    theme: "blue",
    title: "Start something new",
    description:
      "A new website, app, or an online business from scratch — grocery, food delivery, marketplace, or a fresh digital product.",
    cta: "See build paths",
    href: "/web-development-services",
    icon: Plus,
  },
  {
    id: "02",
    theme: "orange",
    title: "Run things better",
    description:
      "Automate repeatable work, get more out of your data, or bring AI into a product you already run.",
    cta: "See operations paths",
    href: "/affordable-digital-marketing-services",
    icon: Settings,
  },
  {
    id: "03",
    theme: "green",
    title: "Rescue a stuck AI project",
    description:
      "Cursor, Copilot or Claude got you most of the way, then stalled — we take over the code and finish it properly.",
    cta: "Get it reviewed",
    href: "/website-maintenance-services",
    icon: AlertTriangle,
  },
  {
    id: "04",
    theme: "purple",
    title: "Evaluate a partner",
    description:
      "You're technical — you want the architecture, stack, delivery process and security posture, not the pitch.",
    cta: "Go to technical hub",
    href: "/case-studies",
    icon: ScanLine,
  },
];

export default function GoalsSection() {
  return (
   <>
   <section className="goals__badge_main ">
     <div className="container ">
      <span className="goals__badge">TAILORED FOR YOUR GOALS</span>
      <h2 className="goals__title">What brings you here today?</h2>
      <p className="goals__subtitle">
        Pick the one that fits — everything after this is built around your
        answer, not a service list.
      </p>

      <div className="goals__grid">
        {goals.map(({ id, theme, title, description, cta, href, icon }) => {
          const Icon = icon;
          return (
            <Link key={id} to={href} className={`goal-card goal-card--${theme}`}>
              <span className="goal-card__number">{id}</span>
              <div className="goal-card__icon">
                <Icon size={18} />
              </div>
              <h3 className="goal-card__title">{title}</h3>
              <p className="goal-card__text">{description}</p>
              <span className="goal-card__link">{cta} →</span>
            </Link>
          );
        })}
      </div>
    </div>
   </section>
   </>
  );
}