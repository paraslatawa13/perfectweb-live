import React from "react";
import {
    IoBugOutline,
    IoExtensionPuzzleOutline,
    IoPeopleOutline,
    IoRocketOutline,
} from "react-icons/io5";

const problems = [
    {
        id: "trust",
        theme: "red",
        icon: IoBugOutline,
        title: "It technically runs, but you don't trust it",
        text: "The app works in the demo, but you have no idea what happens under real traffic, bad input, or a second user.",
    },
    {
        id: "stalled",
        theme: "blue",
        icon: IoExtensionPuzzleOutline,
        title: "It stalled halfway through a feature",
        text: "The agent got stuck in a loop, or kept \"fixing\" one bug by introducing three more.",
    },
    {
        id: "architecture",
        theme: "orange",
        icon: IoPeopleOutline,
        title: "No one on your team can explain the architecture",
        text: "The code exists, but nobody — including whoever prompted it — could describe how the pieces fit together.",
    },
    {
        id: "launch",
        theme: "green",
        icon: IoRocketOutline,
        title: "You're ready to launch but not confident it's safe",
        text: "Before this goes in front of real customers or real data, you want a second set of eyes that isn't another AI tool.",
    },
];

export default function SoundFamiliar() {
    return (
        <section className="familiar">
            <div className="familiar__inner container">
                <h2 className="familiar__title">Sound familiar?</h2>
                <p className="familiar__subtitle">
                    You don't need to know exactly what's wrong — just that something is.
                    These are the most common starting points.
                </p>

                <div className="familiar__grid">
                    {problems.map(({ id, theme, icon: Icon, title, text }) => (
                        <article key={id} className={`familiar-card goal-card--${theme}`}>
                            <div className="familiar-card__head">
                                <span className={`familiar-card__icon familiar-card__icon--${theme}`}>
                                    <Icon size={24} />
                                </span>
                                <h3 className="familiar-card__title">{title}</h3>
                            </div>
                            <p className="familiar-card__text">{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}