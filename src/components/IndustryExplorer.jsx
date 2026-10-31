import React, { useState } from "react";
import {
  ShoppingCart,
  GraduationCap,
  Coins,
  Home,
  Briefcase,
  Users,
  Code,
  Check,
  AlertTriangle,
  Settings,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const viewTabs = [
  { id: "business", title: "Business view", sub: "Focus on outcomes", icon: Briefcase },
  { id: "approach", title: "Approach", sub: "How we solve it", icon: Users },
  { id: "technical", title: "Technical view", sub: "For technical teams", icon: Code },
];

const industries = [
  {
    id: "retail",
    label: "Retail & grocery",
    icon: ShoppingCart,
    views: {
      business: {
        badge: "Generative AI",
        heading: "Useful when your business needs systems that understand and generate information.",
        text: "Examples: internal knowledge assistants, document Q&A, content generation, customer support assistants.",
        points: ["Reduce manual work", "Get real-time insights", "Improve customer support"],
      },
      approach: {
        badge: "Our approach",
        heading: "We start with one workflow, prove it, then scale it across the business.",
        text: "Discovery in week one, a working pilot by week four, then a measured rollout to every store.",
        points: ["Map your current process", "Ship a working pilot fast", "Scale with measured results"],
      },
      technical: {
        badge: "Under the hood",
        heading: "LLMs with retrieval over your own catalogue, orders and inventory data.",
        text: "Stack: RAG pipelines, vector search, role-based access, audit logs and monitored evals.",
        points: ["Data stays in your cloud", "Observable, testable outputs", "Plugs into current systems"],
      },
    },
    story: {
      problem: "A regional grocery chain had no online ordering and was losing customers to delivery apps.",
      approach: "Built ordering, inventory sync and delivery tracking as one connected platform, live in 11 weeks.",
      outcome: "34% of monthly revenue now comes through the platform they own.",
    },
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    views: {
      business: {
        badge: "Learning platforms",
        heading: "Useful when your institute needs to teach more students without adding more admin.",
        text: "Examples: online classrooms, automated grading, student progress dashboards, parent communication.",
        points: ["Reach more learners", "Cut grading time", "Track every student's progress"],
      },
      approach: {
        badge: "Our approach",
        heading: "We build with teachers in the room, then roll out class by class.",
        text: "Short feedback cycles with staff and students so the product fits how your school actually works.",
        points: ["Workshops with teachers", "Pilot with one batch", "Expand after real feedback"],
      },
      technical: {
        badge: "Under the hood",
        heading: "Scalable web and mobile apps with live video, assessments and analytics.",
        text: "Stack: React, Node, WebRTC, role-based access, encrypted student data and SSO.",
        points: ["Handles exam-day traffic", "Student data stays protected", "SSO with your existing login"],
      },
    },
    story: {
      problem: "A coaching institute ran classes on chat apps and tracked results in spreadsheets.",
      approach: "Built one portal for live classes, tests, results and fee tracking, live in 9 weeks.",
      outcome: "Enrolments grew 2.1x and admin time dropped by half.",
    },
  },
  {
    id: "finance",
    label: "Finance",
    icon: Coins,
    views: {
      business: {
        badge: "Fintech",
        heading: "Useful when your team needs faster decisions on data that can't go wrong.",
        text: "Examples: loan onboarding, KYC automation, reconciliation, fraud alerts and reporting dashboards.",
        points: ["Speed up approvals", "Reduce compliance errors", "See risk in real time"],
      },
      approach: {
        badge: "Our approach",
        heading: "We design for compliance first, then automate the repetitive steps.",
        text: "Every release is reviewed against your audit and security requirements before it goes live.",
        points: ["Compliance-led planning", "Automate step by step", "Audit-ready from day one"],
      },
      technical: {
        badge: "Under the hood",
        heading: "Secure, event-driven services with full traceability on every transaction.",
        text: "Stack: microservices, encrypted storage, role-based access, immutable logs and 2FA.",
        points: ["End-to-end encryption", "Complete audit trail", "Built to scale safely"],
      },
    },
    story: {
      problem: "A lending startup approved loans manually and took days to onboard each customer.",
      approach: "Automated KYC, scoring and document checks inside one secure workflow, live in 14 weeks.",
      outcome: "Approval time fell from 3 days to under 4 hours.",
    },
  },
  {
    id: "realestate",
    label: "Real estate",
    icon: Home,
    views: {
      business: {
        badge: "Property tech",
        heading: "Useful when your team loses leads between listings, enquiries and site visits.",
        text: "Examples: listing portals, lead tracking, virtual tours, agent dashboards and booking tools.",
        points: ["Capture every lead", "Book visits faster", "Close deals sooner"],
      },
      approach: {
        badge: "Our approach",
        heading: "We connect your listings, leads and agents into one simple flow.",
        text: "We start with the biggest drop-off in your sales funnel and fix that first.",
        points: ["Find the funnel leak", "Fix the biggest gap first", "Measure every enquiry"],
      },
      technical: {
        badge: "Under the hood",
        heading: "Search-optimised listings with CRM sync, maps and media handled at scale.",
        text: "Stack: React, Node, Elasticsearch, map APIs, CDN-backed media and CRM integrations.",
        points: ["Fast property search", "Syncs with your CRM", "Handles heavy image traffic"],
      },
    },
    story: {
      problem: "A property agency tracked enquiries across calls, email and spreadsheets.",
      approach: "Built a listing portal with lead routing and site-visit booking, live in 10 weeks.",
      outcome: "Lead response time dropped to under 15 minutes.",
    },
  },
];

const intros = {
  retail: {
    business: {
      tag: "REAL EXAMPLE",
      title: "One idea, explained your way",
      lead: "Every capability on this site reads differently depending on who's looking. Try it — switch the view below the way your team would.",
      link: "See all capabilities",
    },
    approach: {
      tag: "OUR PROCESS",
      title: "From first call to live store, in clear steps",
      lead: "Here is how a retail project runs with us — short cycles, a working demo every week and no surprises at launch.",
      link: "See our process",
    },
    technical: {
      tag: "TECH STACK",
      title: "Built to handle your busiest sale day",
      lead: "Order spikes, stock syncs and delivery tracking need a solid base. This is what runs underneath.",
      link: "See the architecture",
    },
  },
  education: {
    business: {
      tag: "EDUCATION",
      title: "Teach more students, with less admin",
      lead: "From live classes to results and fees, one platform can take the repetitive work off your staff.",
      link: "See education solutions",
    },
    approach: {
      tag: "OUR PROCESS",
      title: "Built with your teachers, not just for them",
      lead: "We run short workshops with staff and students first, so the product fits how your institute really works.",
      link: "See our process",
    },
    technical: {
      tag: "TECH STACK",
      title: "Secure learning platforms that scale",
      lead: "Live video, online tests and student data need to stay fast and protected. Here is how we build it.",
      link: "See the architecture",
    },
  },
  finance: {
    business: {
      tag: "FINTECH",
      title: "Faster decisions, fewer errors",
      lead: "Onboarding, KYC and reporting can run in one secure flow, so your team spends time on judgement, not paperwork.",
      link: "See finance solutions",
    },
    approach: {
      tag: "OUR PROCESS",
      title: "Compliance first, automation second",
      lead: "Every step is checked against your audit and security rules before we automate it.",
      link: "See our process",
    },
    technical: {
      tag: "TECH STACK",
      title: "Secure by design, traceable by default",
      lead: "Encrypted data, role-based access and a full audit trail on every transaction.",
      link: "See the architecture",
    },
  },
  realestate: {
    business: {
      tag: "PROPERTY TECH",
      title: "Turn every enquiry into a site visit",
      lead: "Listings, leads and agent follow-ups in one place, so no buyer slips through the gaps.",
      link: "See real estate solutions",
    },
    approach: {
      tag: "OUR PROCESS",
      title: "One simple flow from listing to deal",
      lead: "We find the biggest drop-off in your sales funnel and fix that first, then build outward.",
      link: "See our process",
    },
    technical: {
      tag: "TECH STACK",
      title: "Fast search, clean data, connected CRM",
      lead: "Property search, maps and media run at scale and sync with the tools your agents already use.",
      link: "See the architecture",
    },
  },
};

const storySteps = [
  { key: "problem", title: "Problem", icon: AlertTriangle, tone: "red" },
  { key: "approach", title: "Approach", icon: Settings, tone: "green" },
  { key: "outcome", title: "Outcome", icon: BarChart3, tone: "blue" },
];

export default function IndustryExplorer() {
  const [industryId, setIndustryId] = useState(industries[0].id);
  const [viewId, setViewId] = useState(viewTabs[0].id);

  const industry = industries.find((i) => i.id === industryId);
  const content = industry.views[viewId];
  const intro = intros[industryId][viewId];

  return (
    <section className="ie-main padd">
      <div className="container ">
        {/* HEADER */}
        <div className="ie__top">
          <div className="col-lg-6 col-12">
            <p className="ie__eyebrow">EXPLORE BY INDUSTRY</p>
            <h3 className="ie__headline">
              10 years in software, automation and AI &nbsp;·&nbsp; 120+ products shipped
            </h3>
          </div>

          <div className="ie__industries col-lg-6 col-12" role="tablist">
            {industries.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={industryId === id}
                className={`ie__pill ${industryId === id ? "is-active" : ""}`}
                onClick={() => setIndustryId(id)}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <hr className="ie__line" />

        {/* MAIN */}
        <div className="ie__main">
          <div className="ie__left" key={`${industryId}-${viewId}-intro`}>
            <span className="ie__tag">{intro.tag}</span>
            <h2 className="ie__title">{intro.title}</h2>
            <p className="ie__lead">{intro.lead}</p>
            <a href="#capabilities" className="ie__link">
              {intro.link} <ArrowRight size={14} />
            </a>
          </div>

          <div className="ie__card">
            <div className="ie__views" role="tablist">
              {viewTabs.map(({ id, title, sub, icon: Icon }) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={viewId === id}
                  className={`ie__view ${viewId === id ? "is-active" : ""}`}
                  onClick={() => setViewId(id)}
                >
                  <span className="ie__view-icon">
                    <Icon size={16} />
                  </span>
                  <span className="ie__view-text">
                    <strong>{title}</strong>
                    <small>{sub}</small>
                  </span>
                </button>
              ))}
            </div>

            <div className="ie__body" key={`${industryId}-${viewId}`}>
              <div className="ie__body-left">
                <span className="ie__badge">{content.badge}</span>
                <h4>{content.heading}</h4>
                <p>{content.text}</p>
              </div>
              <ul className="ie__points">
                {content.points.map((point) => (
                  <li key={point}>
                    <span className="ie__check">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ie__story" key={industryId}>
          <div className="ie__story-grid">
            {storySteps.map(({ key, title, icon: Icon, tone }) => (
              <div className="ie__step" key={key}   >
                <span className={`ie__step-icon ie__step-icon--${tone}`}>
                  <Icon size={18} />
                </span>
                <div>
                  <h5>{title}</h5>
                  <p>{industry.story[key]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ie__story-foot">
            <a href="#case-study">
              See how we did it <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}