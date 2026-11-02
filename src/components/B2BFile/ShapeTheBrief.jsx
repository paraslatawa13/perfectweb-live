import { ClipboardList, Target, ListChecks, BarChart3 } from "lucide-react";
import "./B2bPartners.css";


const cards = [
  {
    title: "Requirement gathering",
    text: "Structured questions that turn a loose idea into written, testable requirements.",
    Icon: ClipboardList,
    tone: "blue",
  },
  {
    title: "Scoping",
    text: "What is in version one, what waits, and what it will realistically cost and take.",
    Icon: Target,
    tone: "orange",
  },
  {
    title: "Feature priorities",
    text: "Must-haves first. We push back, with reasons, on features that don’t earn their place.",
    Icon: ListChecks,
    tone: "blue",
  },
  {
    title: "User behaviour",
    text: "Flows and screens designed around how people actually use software, not how clients imagine they will.",
    Icon: BarChart3,
    tone: "blue",
  },
];

export default function ShapeTheBrief() {
  return (
    <section className="stb_main padd">
      <div className="container">
        <h2 className="main__title">
         We help shape the brief, so your clients don’t drift.
        </h2>

        <p className="b2b_main_para">
          Many of the people who come to agencies are new to business, new to software design, and haven’t thought about how real users will behave inside the product. We bring that thinking into the project early, so you present clear options and not guesswork.
        </p>

        <div className="stb__grid">
          {cards.map(({ title, text, Icon, tone }) => (
            <article className="stb__card" key={title}>
              <span className={`stb__icon stb__icon--${tone}`}>
                <Icon size={28} strokeWidth={2.2} />
              </span>
              <h3 className="stb__cardTitle">{title}</h3>
              <p className="stb__cardText">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}