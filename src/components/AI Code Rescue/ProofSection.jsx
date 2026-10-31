import React from "react";
import { Link } from "react-router-dom";
import {
    IoWarningOutline,
    IoSettingsOutline,
    IoRocketOutline,
} from "react-icons/io5";

const proof = [
    {
        id: "problem",
        theme: "red",
        icon: IoWarningOutline,
        title: "Problem",
        text: "A founder had an AI-built MVP that buckled under concurrent users and leaked API keys client-side.",
    },
    {
        id: "approach",
        theme: "blue",
        icon: IoSettingsOutline,
        title: "Approach",
        text: "Ran the full diagnostic ladder, rebuilt the auth and data layer, and added test coverage before touching business logic.",
    },
    {
        id: "outcome",
        theme: "green",
        icon: IoRocketOutline,
        title: "Outcome",
        text: "Launched safely three weeks later, with a codebase their in-house team could finally read.",
    },
];

export default function ProofSection() {
    return (
        <section className="proof">
            <div className="proof__inner container">
                <div className="proof__head">
                    <div>
                        <h2 className="proof__title">Proof</h2>
                        <p className="proof__subtitle">Real examples. Real outcomes.</p>
                    </div>

                    <Link to="/work" className="proof__btn">
                        See more rescues in action →
                    </Link>
                </div>

                <div className="proof__grid">
                    {proof.map(({ id, theme, icon: Icon, title, text }) => (
                        <article
                            key={id}
                            className={`proof-card goal-card--${theme}`}
                        >
                            <div className="proof-card__head">
                                <span className={`proof-card__icon proof-card__icon--${theme}`}>
                                    <Icon size={20} />
                                </span>
                                <h3 className="proof-card__title">{title}</h3>
                            </div>
                            <p className="proof-card__text">{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}