import { Link } from "react-router-dom";
import { useBlogApi } from "../api/blogs";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogSidebar() {
  const { getRecentPost } = useBlogApi();
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getRecentPost()
      .then((res) => {
        if (!isMounted) return;
        const dataArray = Array.isArray(res.data) ? res.data : res;
        if (!Array.isArray(dataArray)) {
          console.error("Expected array but got:", dataArray);
          return;
        }
        setRecent(dataArray.slice(0, 3)); 
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error("Error fetching recent posts:", err);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="blogSidebarinner">
      <div className="sidebarheader">
        <h2>Recent Posts</h2>
        <hr />
      </div>

      {loading ? (
        <div className="recent-skeleton">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="larticlesList"
              style={{ marginBottom: "20px" }}
            >
              <p className="ldate">
                <Skeleton width={100} height={12} />
              </p>
              <p className="ldiscription">
                <Skeleton count={2} />
              </p>
              <span className="readMore">
                <Skeleton width={80} height={12} />
              </span>
            </div>
          ))}
        </div>
      ) : (
        recent.map((b) => (
          <Link
            to={`/blog/${b.slug}`}
            className="larticlesList"
            key={b.id}
            style={{
              textDecoration: "none",
              display: "block",
              marginBottom: "20px",
            }}
          >
            <p className="ldate">
              {new Date(b.created_at).toLocaleDateString()}
            </p>
            <p className="ldiscription">{b.title}</p>
            <span className="readMore">
              Read More <i className="fa fa-angle-right"></i>
            </span>
          </Link>
        ))
      )}
    </div>
  );
}
