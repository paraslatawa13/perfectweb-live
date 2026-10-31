import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingCart,
  GraduationCap,
  BarChart3,
  Home,
  Settings,
  Wand2,
  TrendingUp,
  User,
  Clock,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaUsers } from "react-icons/fa";


import divsIndia from "../../assets/images/Work/divsIndia.webp";
import legendArc from "../../assets/images/Work/legendArc.webp";
import goldenTriangle from "../../assets/images/Work/goldenTriangle.webp";
import quickLoan from "../../assets/images/Work/quickLoan.webp";
import logiTrack from "../../assets/images/Work/logiTrack.webp";
import supportDesk from "../../assets/images/Work/SupportDesk.webp";

const PAGE_SIZE = 15; // projects per page

const tabs = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "retail", label: "Retail & grocery", icon: ShoppingCart },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "finance", label: "Finance", icon: BarChart3 },
  { id: "realestate", label: "Real estate", icon: Home },
  { id: "automation", label: "Automation", icon: Settings },
  { id: "ai", label: "AI in product", icon: Wand2 },
];

const categories = {
  retail: { label: "Retail & grocery", theme: "green" },
  education: { label: "Education", theme: "purple" },
  finance: { label: "Finance", theme: "blue" },
  realestate: { label: "Real estate", theme: "orange" },
  automation: { label: "Automation", theme: "teal" },
  ai: { label: "AI in product", theme: "pink" },
};

const projects = [
  {
    id: "divs-india",
    category: "retail",
    image: divsIndia,
    title: "Divs India – From 0 to Consistent Sales",
    text: "We redesigned the website and launched targeted Meta campaigns, resulting in consistent sales and higher brand visibility.",
    metric: { icon: TrendingUp, value: "300%", label: "Increase in Monthly Revenue" },
    link: "/work/divs-india",
  },
  {
    id: "mylegendarc",
    category: "education",
    image: legendArc,
    title: "MyLegendArc – Personalized Storybooks for Kids",
    text: "A complete brand and eCommerce setup with performance ads to reach parents across the USA.",
    metric: { icon: User, value: "5x", label: "Increase in Online Orders" },
    link: "/work/mylegendarc",
  },
  {
    id: "golden-triangle",
    category: "realestate",
    image: goldenTriangle,
    title: "Luxury Golden Triangle – Premium Travel Experience",
    text: "A luxury website with high-converting landing pages and Google & Meta campaigns targeting the UK market.",
    metric: { icon: BarChart3, value: "2.5x", label: "Return on Ad Spend (ROAS)" },
    link: "/work/golden-triangle",
  },
  {
    id: "quickloan",
    category: "finance",
    image: quickLoan,
    title: "ScImage – Enterprise Imaging Solutions",
    text: "SEO, content, and Google Ads for multiple landing pages, improving global visibility and lead generation.",
    metric: { icon: FaUsers, value: "150%", label: "Increase in Qualified Leads" },
    link: "/work/quickloan",
  },
  {
    id: "logitrack",
    category: "automation",
    image: logiTrack,
    title: "VegastVMounting – CRM Integration",
    text: "Website development with CRM integration and advanced tracking to capture and manage leads efficiently.",
    metric: { icon: Clock, value: "40%", label: "Reduction in Manual Work" },
    link: "/work/logitrack",
  },
  {
    id: "supportdesk",
    category: "ai",
    image: supportDesk,
    title: "Jostar Online – Modern eCommerce Brand",
    text: "Clean, premium design with performance marketing leading to higher traffic and sales.",
    metric: { icon: TrendingUp, value: "3x", label: "Increase in Conversions" },
    link: "/work/supportdesk",
  },
  
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  // 1) filter by tab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // 2) paginate (15 per page)
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const handleTabChange = (id) => {
    setActiveTab(id);
    setCurrentPage(1); // always start from page 1 on a new filter
  };

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="cs_main padd" ref={sectionRef}>
      <div className="container">
        <div className="cs__tabs" role="tablist">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              className={`cs__tab ${activeTab === id ? "is-active" : ""}`}
              onClick={() => handleTabChange(id)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        <div className="cs__list" key={`${activeTab}-${currentPage}`}>
          {visibleProjects.length === 0 && (
            <p className="cs__empty">No case studies yet for this industry.</p>
          )}

          {visibleProjects.map(
            ({ id, category, image, title, text, metric, link }) => {
              const { label, theme } = categories[category];
              const MetricIcon = metric.icon;

              return (
                <article className="cs-card" key={id}>
                  <div className="cs-card__image">
                    <img src={image} alt={title} />
                  </div>

                  <div className="cs-card__content">
                    <span className={`cs-tag cs-tag--${theme}`}>{label}</span>
                    <h3 className="cs-card__title">{title}</h3>
                    <p className="cs-card__text">{text}</p>
                  </div>

                  <div className={`cs-metric cs-metric--${theme}`}>
                    <MetricIcon size={30} />
                    <div>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  </div>

                  <Link to={link} className="cs-card__link">
                    Read case study <ArrowRight size={13} />
                  </Link>
                </article>
              );
            }
          )}
        </div>

        {/* PAGINATION (shows only when there are more than 15 projects) */}
        {totalPages > 1 && (
          <nav className="cs__pagination" aria-label="Case studies pages">
            <button
              type="button"
              className="cs__page-btn cs__page-btn--arrow"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={`cs__page-btn ${
                  currentPage === page ? "is-active" : ""
                }`}
                onClick={() => goToPage(page)}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="cs__page-btn cs__page-btn--arrow"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}