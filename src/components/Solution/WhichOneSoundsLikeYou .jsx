import {
  Lightbulb,
  Laptop,
  Users,
  BarChart3,
  Wrench,
  ArrowDown,
  ArrowRight,
} from "lucide-react";

const OPTIONS = [
  { id: "idea", text: "I have an idea but no product yet", href: "#idea", Icon: Lightbulb },
  { id: "outdated", text: "My website or app feels outdated", href: "#outdated", Icon: Laptop },
  { id: "manual", text: "My team does too much manual work", href: "#manual", Icon: Users },
  { id: "enquiries", text: "I get visitors but few enquiries", href: "#enquiries", Icon: Users },
  { id: "ai", text: "I want to add AI to what I already run", href: "#ai", Icon: BarChart3 },
  {
    id: "stuck",
    text: "An AI tool built my app and it\u2019s stuck",
    href: "#stuck",
    Icon: Wrench,
    accent: true,
  },
];

export default function WhichOneSoundsLikeYou() {
  return (
    <section className="wos padd">
      <div className="container">
        <h2 className="wos__heading">
          Which one sounds like <span>you?</span>
        </h2>
        <p className="wos__subtitle">
          Pick the sentence closest to your situation and we’ll take you to the right place.
        </p>

        <div className="wos__grid">
          {OPTIONS.map(({ id, text, href, Icon, accent }) => {
            const Arrow = accent ? ArrowRight : ArrowDown;
            return (
              <a
                key={id}
                href={href}
                className={`wos__card${accent ? " wos__card--accent" : ""}`}
              >
                <span className="wos__icon">
                  <Icon size={30} strokeWidth={1.6} />
                </span>
                <span className="wos__text">{text}</span>
                <span className="wos__arrow">
                  <Arrow size={22} strokeWidth={2} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}