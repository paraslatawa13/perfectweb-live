import React from "react";
import { Settings, TrendingUp, Box } from "lucide-react";

import illustration from "../../assets/images/Resources/run.webp"

const items = [
    {
        id: "automate",
        icon: <Settings color="#fff" size={22} />,
        iconClass: "blue",
        title: "Automate operations",
        text: "Repetitive tasks, manual data entry, and back-and-forth between tools — handled without a person in the loop.",
    },
    {
        id: "leads",
        icon: <TrendingUp color="#fff" size={22} />,
        iconClass: "blue",
        title: "Generate & convert leads",
        text: "Move visitors, better forms, and a site that actually turns visits into consultations or sales.",
    },
    {
        id: "ai",
        icon: <Box color="#fff" size={22} />,
        iconClass: "purple",
        title: "Add AI to my product",
        text: "Bring generative AI or machine learning into a product — whether it's support, search, recommendations.",
    },
];

export default function RunThingsBetter() {
    return (
        <section className="run-container padd">
            <div className="inner-solution inner container">
                <div className="left">
                    <h2 className="title">
                        Run things <span>better</span>
                    </h2>
                    <p className="subtitle">
                        You already have a business or product running — you want it to do
                        more with less manual work.
                    </p>

                    <ul className="list">
                        {items.map((item) => (
                            <li className="item" key={item.id}>
                                <div className={`icon ${item.iconClass}`}>{item.icon}</div>
                                <div className="item-body">
                                    <h3 className="item-title">{item.title}</h3>
                                    <p className="item-text">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <a className="button" href="#">
                        See capabilities <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className="right">
                    <img src={illustration}
                        alt="Run things better"
                        className="illustration" />
                </div>
            </div>
        </section>
    );
}