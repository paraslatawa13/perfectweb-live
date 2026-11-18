
const BRING = [
  { title: "Your goal", text: "What you want to change in the business, in your own words." },
  { title: "What you already use", text: "Current website, app, tools or logins, if there are any." },
  { title: "Examples you like", text: "Products or sites that feel close to what you imagine." },
  {
    title: "Who decides",
    text: "The person who can approve scope and priorities on your side.",
  },
];

const GET_BACK = [
  { title: "A clear read on your situation", text: "Which path fits, and what is worth doing first." },
  { title: "A scoped plan", text: "Priorities, stages and deliverables, written down." },
  {
    title: "A realistic timeline and next step",
    text: "So you know what happens next and when.",
  },
];

function List({ items }) {
  return (
    <ul className="bws__list">
      {items.map(({ title, text }) => (
        <li key={title} className="bws__item">
          <h4 className="bws__title">{title}</h4>
          <p className="bws__text">{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function BeforeWeStart() {
  return (
    <section className="bws padd">
      <div className="container">
        <span className="bws__bar" />
        <h2 className="bws__heading">
          Before we <span>start</span>
        </h2>
        <p className="bws__subtitle">
          You don’t need a finished brief. A few starting points are enough, and we’ll shape the
          rest together.
        </p>

        <div className="bws__grid">
          <div className="bws__card">
            <h3 className="bws__pill bws__pill--blue">Helpful to bring</h3>
            <List items={BRING} />
          </div>

          <div className="bws__card">
            <h3 className="bws__pill bws__pill--orange">What you get back</h3>
            <List items={GET_BACK} />
            <p className="bws__note">
              Starting with a conversation costs you nothing and commits you to nothing. It’s a
              smaller project the better, and it may so.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}