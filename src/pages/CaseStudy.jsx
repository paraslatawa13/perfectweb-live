import React, { useState, useEffect } from "react";
import CommonHeroSection from "../components/CommonHeroSection";
// import caseStudyHeader from "../assets/images/Blogs/blogHeader.webp";
import caseStudyHeader from "../assets/images/CaseStudies/case-study.webp";
import CaseStudyList from "../components/CaseStudyList";
import { useCaseStudyApi } from "../api/case_studies";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";
export default function CaseStudy() {
  const { meta } = useMeta();
  const { getCaseStudyCategories } = useCaseStudyApi();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCaseStudyCategories();
        const categoryArray = Array.isArray(res?.data) ? res.data : [];
        setCategories([{ id: "all", name: "All" }, ...categoryArray]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
<MetaHelmet meta={meta} />
    <div className="CaseStudyMain">
      {/* Hero Section */}
      <div className="Common-hero-section blogs">
        <CommonHeroSection
          subtitle="Case Study"
          title="Latest Case Studies"
          description="We have helped 600+ companies accelerate their business with top-notch technology solutions."
          buttonText="Contact Us Now"
          buttonLink="/contact-us"
          image={caseStudyHeader}
          altText="Case Study header"
        />
      </div>

      {/* Main Content */}
      <div className="caseStudyPage padd">
        <div className="container">
          <div className="row">
            {/* Left Category Tabs */}
            <div className="col-md-3 col-12 mb-4">
              <div className="categoryTabsSidebar">
                <div
                  className="category_header"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  style={{ cursor: "pointer" }}
                >
                  <h3>
                    Filter By Category{" "}
                    <span>
                      <i className="fa fa-list-alt" aria-hidden="true"></i>
                      <i
                        className={`fa fa-angle-${mobileOpen ? "up" : "down"} ms-2`}
                      ></i>
                    </span>
                  </h3>
                </div>

                {/* Category Tabs */}
                <ul className={`categoryTabs ${mobileOpen ? "open" : ""}`}>
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={activeCategory === cat.id ? "active" : ""}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setMobileOpen(false);
                      }}
                    >
                      {cat.name} <i className="fa fa-angle-right"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study List */}
            <div className="col-md-9 col-12">
              <CaseStudyList category={activeCategory} />
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
}
