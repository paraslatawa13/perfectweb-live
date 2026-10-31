import { useParams, Link } from "react-router-dom";
import BlogSidebar from "../components/blogSidebar";
import { useBlogApi } from "../api/blogs";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";

export default function BlogDetail() {
  const { getBlogbySlug } = useBlogApi();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await getBlogbySlug(slug);
        console.log("blog--data", response);
        if (response?.status && response?.data) {
          const blogData = { ...response.data };
          const rawHtml =
            blogData.main_content || blogData.meta_description || "";
          const parser = new DOMParser();
          const doc = parser.parseFromString(rawHtml, "text/html");

          // Extract headings for TOC
          let selector = "h2";
          if (
            doc.querySelectorAll("h2").length === 0 &&
            doc.querySelectorAll("h3").length > 0
          ) {
            selector = "h3";
          }

          const usedIds = new Set();
          const nodeList = doc.querySelectorAll(selector);
          const headingList = Array.from(nodeList).map((node, index) => {
            const base =
              node.textContent
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .slice(0, 60) || `${selector}-${index + 1}`;

            let id = base;
            let counter = 1;
            while (usedIds.has(id)) {
              id = `${base}-${counter}`;
              counter++;
            }
            usedIds.add(id);
            node.setAttribute("id", id);
            return { id, text: node.textContent.trim(), level: selector };
          });

          blogData.main_content = doc.body.innerHTML;

          setHeadings(headingList);
          setPost(blogData);
        } else {
          setError("No blog data found.");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Blog not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Show loader
  if (loading) {
    return (
      <div className="blogDetail container">
        <div className="row">
          <div className="col-md-8 col-12">
            <Skeleton height={40} width="80%" />
            <Skeleton width={120} height={15} style={{ margin: "10px 0" }} />
            <Skeleton height={300} borderRadius={10} />
            <Skeleton count={6} />
          </div>
          <div className="col-md-4 col-12">
            <Skeleton height={30} width="70%" />
            <Skeleton count={8} />
          </div>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="container">
        <p>{error}</p>
      </div>
    );
  if (!post)
    return (
      <div className="container">
        <p>No blog found.</p>
      </div>
    );

  // Dynamic meta fields
  const metaTitle = post.meta_tittle || post.title;
  const metaDescription = post.meta_description
    ? post.meta_description.replace(/<[^>]+>/g, "").slice(0, 160)
    : "";
  const metaKeywords = post.meta_keywords || "";
  const featuredImage =
    post.featured_image || "https://perfectwebservices.com/logo512.png";
  const canonicalUrl = `https://perfectwebservices.com/blog/${post.slug}`;

  return (
    <>
      {/* DYNAMIC META TAGS */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Perfect Web Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={featuredImage} />
        <meta name="twitter:url" content={canonicalUrl} />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/*  Blog content */}
      <div className="blogDetail">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-md-8 col-12">
              <div className="BlogDetailHeader">
                <h1>{post.title}</h1>
              </div>

              <div className="topdateMain">
                <div className="dateMain">
                  <i className="fas fa-calendar-check"></i>
                  {post.created_at && (
                    <p className="blogDateMain">{post.created_at}</p>
                  )}
                </div>
                <hr />
              </div>

              {post.featured_image && (
                <div className="BlogDetailMain">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>
              )}

              <div
                className="blogContent"
                dangerouslySetInnerHTML={{
                  __html: post.main_content || post.meta_description || "",
                }}
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-4 col-12">
              <aside className="blogSidebar">
                <div className="blogSidebarinner">
                  <div className="sidebarheader">
                    <h2>Table of Contents</h2>
                    <hr />
                  </div>

                  {headings.length > 0 ? (
                    <ol className="toc-list">
                      {headings.map((heading) => (
                        <li
                          key={heading.id}
                          style={{
                            marginBottom: "8px",
                            marginLeft: heading.level === "h3" ? "15px" : "0",
                          }}
                        >
                          <a className="tocinnerlist" href={`#${heading.id}`}>
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="nodatafound">No data found.</p>
                  )}
                </div>

                <div className="latestAriticles">
                  <BlogSidebar />
                </div>
              </aside>
            </div>
          </div>

          {/* AUTHOR SECTION */}
          {post.author && post.author.name ? (
            <Link
              to={`/author/${post.author.name.toLowerCase().replace(/\s+/g, "-")}`}
              state={{ author: post.author }}
              className="bloglinks"
            >
              <div className="authorSection mt-5">
                <div className="about-ah d-flex flex-column">
                  <h4>About author</h4>

                  <div className="authorBox d-flex align-items-start gap-3">
                    <div className="authorImage">
                      <img
                        src={
                          post.author.image || "https://via.placeholder.com/120"
                        }
                        alt={post.author.name}
                        className="img-fluid rounded-circle"
                      />
                    </div>

                    <div className="authorContent">
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <h3 className="authorName">{post.author.name}</h3>

                        <span className=" linker ">
                          <a
                            href={
                              post.author.linkedin || "https://www.linkedin.com/in/paraslatawa/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </span>
                      </div>

                      {post.author.bio && (
                        <p className="authorBio mb-0">{post.author.bio}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
