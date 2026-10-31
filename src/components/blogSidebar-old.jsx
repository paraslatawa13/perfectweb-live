import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogSidebar({ apiBase = "/mock-blogs.json" }) {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    fetch(apiBase)
      .then((r) => r.json())
      .then((data) => setRecent(data.slice(0, 6)))
      .catch((err) => console.error(err));
  }, [apiBase]);

  return (
    <aside className="blogSidebar">
      <div className="sidebarheader">
        <h2>Recent Posts</h2>
      </div>

      <div className="latestAriticles">
        {recent.map((b) => (
          <div className="larticlesList" key={b.id}>
            <p className="ldate">{b.date}</p>
            <p className="ldiscription">{b.title}</p>
            <Link to={`/blog/${b.slug}`} className="readMore">
              Read More <i className="fa fa-angle-right"></i>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
