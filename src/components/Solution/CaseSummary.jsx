import React from "react";
import { TriangleAlert, Settings, ChartNoAxesColumn } from "lucide-react";

const items = [
    {
        id: "problem",
        icon: <TriangleAlert color="#dc2626" size={18} />,
        iconClass: "red",
        title: "Problem",
        text: "A regional grocery chain had no online ordering and was losing customers to delivery apps.",
    },
    {
        id: "approach",
        icon: <Settings color="#059669" size={18} />,
        iconClass: "green",
        title: "Approach",
        text: "Built ordering, inventory sync and delivery tracking as one connected platform, live in 11 weeks.",
    },
    {
        id: "outcome",
        icon: <ChartNoAxesColumn color="#4f46e5" size={18} />,
        iconClass: "purple",
        title: "Outcome",
        text: "34% of monthly revenue now comes through the platform they own.",
    },
];

export default function CaseSummary() {
    return (
        <section className="case-container">
            <div className="container">
                <div className="cs-grid">
                    {items.map((item) => (
                        <article className="cs-card" key={item.id}>
                            <div className={`cs-icon ${item.iconClass}`}>{item.icon}</div>
                            <div className="cs-body">
                                <h3 className="cs-title">{item.title}</h3>
                                <p className="cs-text">{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}