import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { useCaseStudyApi } from "../api/case_studies";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PAGE_SIZE = 6;

export default function CaseStudyList({ category }) {
  const { getCaseStudy } = useCaseStudyApi();
  const [cases, setCases] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const stripHtml = (html, limit = 150) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  // Reset page when category changes
  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getCaseStudy()
      .then((res) => {
        if (!isMounted) return;

        const dataArray = Array.isArray(res?.data) ? res.data : [];

        const filtered =
          !category || category === "all"
            ? dataArray
            : dataArray.filter((item) =>
                item.categories?.some((cat) => cat.id === category)
              );

        const total = filtered.length;
        setTotalPages(Math.ceil(total / PAGE_SIZE));

        const start = (page - 1) * PAGE_SIZE;
        setCases(filtered.slice(start, start + PAGE_SIZE));
      })
      .catch((err) => console.error("Error fetching case studies:", err))
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [category, page]);

  return (
    <div className="caseListContent">
      <div className="caseListFlex">

        {loading
          ? Array(PAGE_SIZE)
              .fill(0)
              .map((_, idx) => (
                <div className="caseListItem" key={idx}>
                  <div className="caseSudyTop">
                    <div className="caseImage">
                      <Skeleton height={180} />
                    </div>
                    <div className="caseCategroy">
                      <Skeleton width={80} />
                    </div>
                  </div>

                  <div className="caseStudybtm">
                    <div className="caseContent">
                      <h3>
                        <Skeleton width="60%" />
                      </h3>
                      <p>
                        <Skeleton count={3} />
                      </p>
                      <Skeleton width={100} height={20} />
                    </div>
                  </div>
                </div>
              ))
          : cases.map((c) => (
              <Link
                to={`/case-study/${c.slug}`}
                className="caseListItem"
                key={c.id}
                style={{ textDecoration: "none" }}
              >
                <div className="caseSudyTop">
                  <div className="caseCategroy">
                    {Array.isArray(c.categories) &&
                      c.categories.map((cat) => (
                        <p key={cat.id} className="caseCategory">
                          {cat.name}
                        </p>
                      ))}
                  </div>

                  <div className="caseImage">
                    <img
                      src={c.featured_image}
                      alt={c.title}
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="caseStudybtm">
                  <div className="caseContent">
                    <h3>{c.title}</h3>
                    <p>{stripHtml(c.summary)}</p>

                    {/* ✅ Read More as text only */}
                    <span className="readMore">
                      Read More <i className="fa fa-angle-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}

        {!loading && cases.length === 0 && (
          <div className="NoCase">No case studies found.</div>
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="casePaginations">
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />
        </div>
      )}
    </div>
  );
}
