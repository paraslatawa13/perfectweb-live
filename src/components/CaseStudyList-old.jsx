
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

const PAGE_SIZE = 6;

export default function CaseStudyList({ apiBase = "/mock-case-studies.json", category = "All" }) {
  const [cases, setCases] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);


    const timeout = setTimeout(() => {
      fetch(apiBase)
        .then((r) => r.json())
        .then((data) => {
          let filtered = category === "All" ? data : data.filter((c) => c.category === category);

          setTotalPages(Math.ceil(filtered.length / PAGE_SIZE));
          const start = (page - 1) * PAGE_SIZE;
          setCases(filtered.slice(start, start + PAGE_SIZE));
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(timeout);
  }, [page, category, apiBase]);

  return (
    <div className="caseListContent">
      
      {loading && <div className="Cloader">Loading...</div>}
      <div className="caseListFlex">
        
        {cases.map((c) => (
          <div className="caseListItem" key={c.id}>
            <div className="caseSudyTop">
              <div className="caseImage">
                <img
                  src={new URL(`../assets/images/CaseStudies/${c.image}`, import.meta.url).href}
                  alt={c.title}
                  className="img-fluid"
                />
              </div>
              <div className="caseCategroy">
                <p className="caseCategory">{c.category}</p>
              </div>
            </div>
            <div className="caseStudybtm">
              <div className="caseContent">
                
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <Link to={`/case-study/${c.slug}`} className="readMore">
                  Read More <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {!loading && cases.length === 0 && <div className="NoCase">No case studies found.</div>}
      </div>

     
      <div className="casePaginations">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
}
