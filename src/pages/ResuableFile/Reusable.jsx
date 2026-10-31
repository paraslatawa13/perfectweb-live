import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./PageBanner.css";


const toCss = (v) => (typeof v === "number" ? `${v}px` : v);

const clampNegative = (v) =>
  typeof v === "string" && v.trim().startsWith("-") ? "0px" : toCss(v);

const positionVars = (position = {}, mobilePosition) => {
  const mobile =
    mobilePosition ??
    Object.fromEntries(
      Object.entries(position).map(([key, value]) => [key, clampNegative(value)])
    );

  return {
    "--t": toCss(position.top),
    "--r": toCss(position.right),
    "--b": toCss(position.bottom),
    "--l": toCss(position.left),
    "--mt": toCss(mobile.top),
    "--mr": toCss(mobile.right),
    "--mb": toCss(mobile.bottom),
    "--ml": toCss(mobile.left),
  };
};

function Arrow({ type = "dashed", position }) {
  const style = positionVars(position);

  if (type === "solid") {
    return (
      <svg
        className="pb-arrow pb-arrow--solid"
        style={style}
        width="60"
        height="100"
        viewBox="0 0 60 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 96 C 2 50, 20 22, 52 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M36 5 L53 7 L46 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg
      className="pb-arrow pb-arrow--dashed"
      style={style}
      width="56"
      height="48"
      viewBox="0 0 56 48"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 44 C 8 22, 28 10, 48 8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
      <path d="M41 3 L49 8 L43 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PageBanner({
  breadcrumb = [],
  title,
  title2,
  highlight,
  description,
  description2,
  sol_cta,
  image,
  floatingBoxes = [],
  accent = "#2563eb",
  className = "",
}) {
  const variant = image?.variant ?? "frame";

  const sectionStyle = {
    "--pb-accent": accent,
  };

  return (
    <section className={`pb padd pb--${variant} ${className || ""}`} style={sectionStyle}>
      <div className="pb__inner container">
        <div className="pb__left">
          {breadcrumb.length > 0 && (
            <nav className="pb__crumbs" aria-label="Breadcrumb">
              {breadcrumb.map(({ label, to }, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <React.Fragment key={label}>
                    {isLast ? (
                      <span className="is-current">{label}</span>
                    ) : (
                      <Link to={to}>{label}</Link>
                    )}
                    {!isLast && (
                      <span className="sep">
                        <MdKeyboardArrowRight />
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          )}
          <h1 className="pb__title">
            {title}
            {highlight && (
              <>
                <span style={{ color: "#f97316" }}>
                  {highlight}
                </span>
              </>
            )}
            {title2}
          </h1>

          {description && <p className="pb__text">{description}</p>}
          {description2 && (
            <p className="pb__text">
              {description2}
              {sol_cta && (
                <Link to="/solutions" className="pb__text_btn">
                  {sol_cta}
                </Link>
              )}
            </p>
          )}
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="pb__right">
          {/* {decorations.blob && (
            <span className="pb__blob" style={{ background: decorations.blob }} />
          )} */}

          {/* {decorations.circle && (
            <span className="pb__circle" style={{ background: decorations.circle }} />
          )} */}

          {image && (
            <div className="pb__image">
              <img src={image.src} alt={image.alt ?? ""} />
            </div>
          )}

          {/* {arrow && <Arrow type={arrow.type} position={arrow.position} />} */}

          {floatingBoxes.map(
            ({
              id,
              icon: Icon,
              tone = "blue",
              variant: boxVariant = "card",
              label,
              title: boxTitle,
              text,
              emphasis,
              position,
              mobilePosition,
            }) => (
              <div
                key={id}
                className={`pb-box bounce pb-box--${boxVariant}`}
                style={positionVars(position, mobilePosition)}
              >
                {Icon && (
                  <span className={`pb-box__icon pb-box__icon--${tone}`}>
                    <Icon size={boxVariant === "stat" ? 26 : 28} />
                  </span>
                )}
                <div className="pb-box__body">
                  {label && <small className="pb-box__label">{label}</small>}
                  <strong
                    className={`pb-box__title pb-box__title--${emphasis ?? (boxVariant === "stat" ? "accent" : "dark")
                      }`}
                  >
                    {boxTitle}
                  </strong>
                  {text && <span className="pb-box__text">{text}</span>}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}