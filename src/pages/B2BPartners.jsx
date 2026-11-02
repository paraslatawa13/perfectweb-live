import { Cpu, Zap, Layers, Users } from "lucide-react";
import WhatMakesUsDifferent from "../components/B2BFile/WhatMakesUsDifferent";
import BenchOfEngineers from "../components/B2BFile/BenchOfEngineers";
import LittleInTheCode from "../components/B2BFile/LittleInTheCode";
import ShapeTheBrief from "../components/B2BFile/ShapeTheBrief";
import AiBdlc from "../components/B2BFile/AiBdlc";
import ChooseArchitecture from "../components/B2BFile/ChooseArchitecture";
import B2bFaq from "../components/B2BFile/B2bFaq";
import ConsultationCta from "../components/ConsultationCta";

import b2bHero from "../assets/images/Home/b2b-hero.webp";
import DeliveryProcess from "../components/B2BFile/DeliveryProcess";


const cards = [
  {
    title: "CTO / IT Head",
    text: "Vetting us before a build begins, or before handing off an existing codebase.",
    Icon: Cpu,
    tone: "blue",
  },
  {
    title: "Tech evaluator",
    text: "Comparing vendors on architecture fit, not just price or timeline.",
    Icon: Zap,
    tone: "orange",
  },
  {
    title: "Product company",
    text: "Extending an existing engineering team rather than starting from zero.",
    Icon: Layers,
    tone: "blue",
  },
  {
    title: "Agency or freelancer",
    text: "Want an engineering team behind your brand. White-label partnership.",
    Icon: Users,
    tone: "orange",
  },
];

export default function B2BPartners() {
  return (
    <>
      <section className="ph_main pb padd ">
        <div className="container">
          <div className="ph__head_main">
            <div className="b2b-text col-lg-8">
              <nav className="ph__breadcrumb" aria-label="Breadcrumb">
                <a href="/" className="ph__home">
                  HOME
                </a>
                <span className="ph__sep">/</span>
                <span>FOR PARTNERS</span>
              </nav>

              <h1 className="ph__title">
                The technical layer,
                <br />
                upfront
              </h1>

              <span className="ph__bar" aria-hidden="true" />

              <p className="ph__lead">
                No business framing here — architecture, delivery process, and security posture, the way you'd actually evaluate a partner.
              </p>
            </div>
            <div className="ph__img col-lg-4">
              <img src={b2bHero} alt="B2B Partners" />
            </div>
          </div>

          <div className="ph__grid">
            {cards.map(({ title, text, Icon, tone }) => (
              <article className={`ph__card ph__card--${tone}`} key={title}>
                <div className="ph__cardHead container">
                  <span className={`ph__icon ph__icon--${tone}`}>
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="ph__cardTitle">{title}</h3>
                </div>
                <p className="ph__cardText">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WhatMakesUsDifferent />
      <BenchOfEngineers />
      <LittleInTheCode />
      <ShapeTheBrief />
      <AiBdlc />
      <ChooseArchitecture />
      <DeliveryProcess />
      <B2bFaq />
      <ConsultationCta />
    </>
  );
}