import { Rocket, Layers, UsersRound } from "lucide-react";

const OPTIONS = [
  {
    id: "mvp",
    color: "blue",
    Icon: Rocket,
    option: "Option 1",
    title: "Focused MVP",
    desc: "Prove the idea with the core journey that matters most, built and launched quickly.",
    bestFor: "New ideas, tight budgets, and anyone who wants real user feedback early.",
    youGet: "A working first version in the hands of real users, plus a clear list of what comes next.",
  },
  {
    id: "system",
    color: "purple",
    Icon: Layers,
    option: "Option 2",
    title: "Complete system",
    desc: "A full product with the connected pieces around it: integrations, admin tools and automation.",
    bestFor: "Businesses with a clear plan, or a proven MVP ready to scale.",
    youGet: "A finished, documented solution built in stages, with your team trained to run it.",
  },
  {
    id: "partnership",
    color: "orange",
    Icon: UsersRound,
    option: "Option 3",
    title: "Ongoing partnership",
    desc: "A team on call each month to improve what you have and add features as your needs change.",
    bestFor: "Live products that need steady care, new features, or growth work.",
    youGet: "Regular releases, monitoring, and results reviewed against your business goals.",
  },
];

export default function ThreeWaysToGetStarted() {
  return (
    <section className="twgs padd">
      <div className="container">
        <span className="twgs__bar" />
        <h2 className="twgs__heading">
          Three ways to <span>get started</span>
        </h2>
        <p className="twgs__subtitle">
          Whichever solution you choose, you can begin at the size that suits you today and grow
          from there.
        </p>

        <div className="twgs__grid">
          {OPTIONS.map(({ id, color, Icon, option, title, desc, bestFor, youGet }) => (
            <article key={id} className={`twgs__card twgs__card--${color}`}>
              <div className="twgs__icon">
                <Icon size={32} strokeWidth={1.6} />
              </div>
              <p className="twgs__option">{option}</p>
              <h3 className="twgs__title">{title}</h3>
              <p className="twgs__desc">{desc}</p>

              <h4 className="twgs__label">Best for</h4>
              <p className="twgs__text">{bestFor}</p>

              <h4 className="twgs__label">You get</h4>
              <p className="twgs__text">{youGet}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}