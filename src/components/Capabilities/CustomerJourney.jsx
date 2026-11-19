import { ArrowRight } from "lucide-react";

// href yahan wahi hona chahiye jo Featuresectioncontent.js ke TABS mein hai.
// Isi href se FeatureSection sahi tab dhoondta hai (koi alag id nahi chahiye).
const STEPS = [
  {
    num: "01",
    color: "blue",
    title: "Get found",
    desc: "SEO and marketing to bring the right people to you.",
    link: "SEO & marketing",
    href: "#seo-marketing",
  },
  {
    num: "02",
    color: "orange",
    title: "Explore & enquire",
    desc: "Your website to show your offers and capture the leads.",
    link: "Websites",
    href: "#websites",
  },
  {
    num: "03",
    color: "purple",
    title: "Stay connected",
    desc: "Your app to keep customers close, with notifications and offers.",
    link: "Mobile apps",
    href: "#mobile-apps",
  },
  {
    num: "04",
    color: "blue",
    title: "Handled automatically",
    desc: "Routine steps run in the background, with no extra re-keying data.",
    link: "Automation",
    href: "#automation",
  },
  {
    num: "05",
    color: "orange",
    title: "Followed up with care",
    desc: "AI agents reply, triage and answer from your own documents.",
    link: "Agentic AI & RAG",
    href: "#agentic-ai-rag",
  },
  {
    num: "06",
    color: "purple",
    title: "Getting smarter",
    desc: "Models learn from the results to predict and personalize.",
    link: "Machine learning",
    href: "#machine-learning",
  },
];

export default function CustomerJourney() {
  const goToTab = (e, href) => {
    e.preventDefault(); // default anchor jump roko
    // FeatureSection is event ko sunta hai: tab active karta hai + scroll karta hai
    window.dispatchEvent(new CustomEvent("switch-tab", { detail: href }));
  };

  return (
    <section className="cjc padd pt-5">
      <div className="container">
        <span className="cjc__bar" />

        <h2 className="cjc__heading">
          Each one is useful alone. Together, they run the whole{" "}
          <span>customer journey.</span>
        </h2>

        <p className="cjc__subtitle">
          Because one team builds all of it, the pieces are designed to
          connect, so nothing gets lost between vendors.
        </p>

        <div className="cjc__grid">
          {STEPS.map(({ num, color, title, desc, link, href }) => (
            <article key={num} className={`cjc__card cjc__card--${color}`}>
              <span className="cjc__num">{num}</span>

              <h3 className="cjc__title">{title}</h3>
              <p className="cjc__desc">{desc}</p>

              <a
                className="cjc__link"
                href={href}
                onClick={(e) => goToTab(e, href)}
              >
                {link}
                <ArrowRight size={18} strokeWidth={2.4} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}