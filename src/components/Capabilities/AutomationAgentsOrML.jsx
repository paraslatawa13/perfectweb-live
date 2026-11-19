import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    id: "automation",
    color: "blue",
    title: "Automation",
    tagline: "Follows fixed rules, every time.",
    bestWhen: "The steps are the same each time and the inputs are predictable.",
    example: "A new order updates stock, notifies the supplier and emails the customer.",
    skipWhen: "Every case needs reading or judgment.",
  },
  {
    id: "agent",
    color: "orange",
    title: "AI agent",
    tagline: "Plans the steps and decides as it goes.",
    bestWhen: "The work spans several steps and varies from case to case.",
    example: "It reads an enquiry, researches the company, drafts a reply and books a call.",
    skipWhen: "A simple rule would do the job, and cheaper.",
  },
  {
    id: "rag",
    color: "blue",
    title: "RAG assistant",
    tagline: "Answers from your own documents.",
    bestWhen: "People keep asking questions that your documents already answer.",
    example: "Staff ask about a policy and get the exact clause, with the source.",
    skipWhen: "You have little written material to draw on.",
  },
  {
    id: "ml",
    color: "orange",
    title: "Machine learning",
    tagline: "Learns patterns from your past data.",
    bestWhen: "You have history to learn from and a decision worth predicting.",
    example: "Forecasting demand, or recommending what each customer will want.",
    skipWhen: "You have very little data so far.",
  },
];

export default function AutomationAgentsOrML() {
  return (
    <section className="aam padd pt-5">
      <div className="container">
        <span className="aam__bar" />
        <h2 className="aam__heading">
          Automation, agents or ML: which one do <span>you need?</span>
        </h2>
        <p className="aam__subtitle">
          They sound similar and solve different problems. Here’s the short way to tell them apart.
        </p>

        <div className="aam__grid">
          {CARDS.map(({ id, color, title, tagline, bestWhen, example, skipWhen }) => (
            <article key={id} className={`aam__card aam__card--${color}`}>
              <h3 className="aam__title">{title}</h3>
              <p className="aam__tagline">{tagline}</p>

              <div className="aam__block">
                <h4 className="aam__label">Best when</h4>
                <p className="aam__text">{bestWhen}</p>
              </div>

              <div className="aam__block">
                <h4 className="aam__label">Example</h4>
                <p className="aam__text">{example}</p>
              </div>

              <div className="aam__block">
                <h4 className="aam__label">Skip it when</h4>
                <p className="aam__text">{skipWhen}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="aam__footer">
          <span>
            <strong>Still unsure?</strong> That’s normal, and it’s the first thing we sort out on a
            call.
          </span>
          <a className="aam__cta" href="/contact-us">
            Talk to us
            <ArrowRight size={20} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}