import { XCircle, CircleCheck } from "lucide-react";
import "./B2bPartners.css";


const getItems = [
  "Salaries, payroll taxes and employment compliance",
  "Months to hire designers, developers and QA",
  "Paying for idle capacity between projects",
  "One skill gap can stall a client project",
];

const differentItems = [
  "A ready team across web, mobile, automation and AI",
  "Start on a project as soon as you win it",
  "Scale capacity up or down with your pipeline",
  "Competitive pricing with senior-level quality",
];

export default function BenchOfEngineers() {
  return (
    <section className="boe padd">
      <div className="container">
        <h2 className="main__title">
          A bench of engineers is expensive to build. Renting ours isn’t.
        </h2>

        <p className="b2b_main_para">
          In the US, Europe and other high-cost markets, a full team under one roof means salaries, payroll taxes, compliance, benefits and long hiring cycles, whether or not there is work this month.
        </p>

        <div className="boe__grid">
          <article className="boe__card boe__card--orange">
            <p className="boe__label boe__label--orange">Building the team yourself</p>
            <h3 className="boe__cardTitle">
              Fixed cost, before the first client pays
            </h3>
            <ul className="boe__list">
              {getItems.map((item) => (
                <li className="boe__item" key={item}>
                  <XCircle
                    className="boe__icon boe__icon--orange"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="boe__card boe__card--blue">
            <p className="boe__label boe__label--blue">Partnering with us</p>
            <h3 className="boe__cardTitle">
              Variable cost, matched to your projects
            </h3>
            <ul className="boe__list">
              {differentItems.map((item, i) => (
                <li className="boe__item" key={item}>
                  <CircleCheck
                    className="boe__icon boe__icon--blue"
                    size={16}
                    strokeWidth={2.2}
                  />
                  <span className={i === 0 ? "boe__highlight" : undefined}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}