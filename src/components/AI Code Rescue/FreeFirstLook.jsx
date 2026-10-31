import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import discoveryImg from "../../assets/images/AICode/ai_last_img.webp";

const cta = {
    eyebrow: "READY FOR A TECHNICAL DISCOVERY",
    title: "Get a free first look",
    text: "Share the repo or a description of where it's stuck — we'll tell you honestly how bad it is and what it takes to fix.",
    buttons: [
        {
            id: "review",
            variant: "primary",
            label: "Get your code reviewed",
            link: "/contact-us",
            arrow: true,
        },
        {
            id: "build",
            variant: "outline",
            label: "See how we build instead",
            link: "/how-we-build",
            arrow: false,
        },
    ],
};

export default function FreeFirstLook() {
    return (
        <section className="ffl_main">
            <div className="container">
                <div className="ffl__box ">
                    <div className="ffl__content">
                        <p className="ffl__eyebrow">{cta.eyebrow}</p>
                        <h2 className="ffl__title">{cta.title}</h2>
                        <p className="ffl__text">{cta.text}</p>

                        <div className="ffl__actions">
                            {cta.buttons.map(({ id, variant, label, link, arrow }) => (
                                <Link key={id} to={link} className={`ffl__btn ffl__btn--${variant}`}>
                                    {label}
                                    {arrow && <FiArrowRight size={15} />}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="ffl__media">
                        <img src={discoveryImg} alt="Secure development workspace" />
                    </div>
                </div>
            </div>
        </section>
    );
}