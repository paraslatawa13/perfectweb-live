import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { useBlogApi } from "../api/blogs";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PAGE_SIZE = 6;

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const { getBlog } = useBlogApi();

  const stripHtml = (html, limit = 100) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    getBlog()
      .then((res) => {
        if (!isMounted) return;
        const dataArray = res.data;
        console.log("pop",dataArray);
        if (!Array.isArray(dataArray)) {
          console.error("Expected array but got:", dataArray);
          return;
        }

        setTotalPages(Math.ceil(dataArray.length / PAGE_SIZE));
        const start = (page - 1) * PAGE_SIZE;
        setBlogs(dataArray.slice(start, start + PAGE_SIZE));
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error(err);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [page]);

  return (
    <div className="blogsListWrapper">
      <div className="blogListflex">
        {loading
          ? // Skeleton loader while data loads
            Array.from({ length: PAGE_SIZE }).map((_, index) => (
              <div className="blogList" key={index}>
                <div className="blogListWrapper">
                  <div className="blogListop">
                    <div className="blogImage">
                      <Skeleton height={220} borderRadius={10} />
                    </div>
                    <div className="blogDate">
                      <Skeleton width={100} height={15} />
                    </div>
                  </div>

                  <div className="blogLisbtm">
                    <div className="BlogContent">
                      <h3>
                        <Skeleton width={`80%`} />
                      </h3>
                      <p className="blogDiscrption">
                        <Skeleton count={3} />
                      </p>
                      <p className="colorOrange">
                        <Skeleton width={80} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : // Actual blog data once loaded
            blogs.map((blog) => (
              <div className="blogList" key={blog.id}>
                <Link to={`/blog/${blog.slug}`} className="bloglinks">
                  <div className="blogListWrapper">
                    <div className="blogListop">
                      <div className="blogImage">
                        <img
                          src={blog.featured_image}
                          alt={blog.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="blogDate">
                        <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="blogLisbtm">
                      <div className="BlogContent">
                        <h3>{blog.title}</h3>
                        <p className="blogDiscrption">
                          {stripHtml(blog.main_content)}
                        </p>
                        <p className="colorOrange">
                          Read More <i className="fa fa-angle-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

        {!loading && blogs.length === 0 && <p>No posts found.</p>}
      </div>

      {/* Pagination only visible when not loading */}
      {!loading && blogs.length > 0 && (
        <div className="blogPaginations">
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
