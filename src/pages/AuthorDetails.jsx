import { Link, useLocation } from "react-router-dom";
import BlogSidebar from "../components/blogSidebar";
// import { useBlogApi } from "../api/blogs";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";

export default function AuthorDetails() {
  // const { name } = useParams();
  const location = useLocation();
  const author = location.state?.author;

  useEffect(() => {
    // Optional: if user reloads page, location.state will be undefined.
    // You can handle that gracefully.
    if (!author) {
      console.warn(
        "No author data found — you might need to fetch it again if needed.",
      );
    }
  }, [author]);

  return (
    <div className="authorListWrapper">
      <div className="Common-hero-section p-0">
        <div className="author-hero"></div>
        <div className="container auth-hero details-auth">
          <div className="row align-items-center author-card px-lg-4 py-5 text-white rounded-4 shadow-lg">
            <div className="col-md-5 text-center mt-4 mt-md-0 order-1 order-md-2">
              <img
                src={author.image}
                alt={author.name}
                className="author-img  img-fluid  w-sm-75"
              />
            </div>

            <div className="col-md-7 d-flex flex-column order-2 order-md-1">
              <div className="social-icons d-flex justify-content-center justify-content-md-start gap-4 fs-5 pt-4 order-1 order-md-3 mb-4 mb-lg-0" >
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <a
                    href="https://www.linkedin.com/in/paraslatawa/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="sociallinks-p"
                  >
                <i className="fa-brands fa-linkedin"> </i>
                </a>
                <i className="fa-brands fa-youtube"></i>
              </div>
              <h1 className="author-name order-2 order-md-1">{author.name}</h1>
              <p className="author-bio my-4 order-3 order-md-2">{author.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
