import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useCaseStudyApi } from '../api/case_studies';
import CaseStudySidebar from "../components/casestudySidebar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getCaseStudybySlug } = useCaseStudyApi();

  useEffect(() => {
    if (!slug) return;

    const fetchCaseStudy = async () => {
      try {
        setLoading(true);
        const res = await getCaseStudybySlug(slug);
        console.log("Case study data:", res);
        if (res?.data) {
          let content = res.data.summary || res.data.description || "";
          content = content
            .replace(/<h3>/g, "<h2>")
            .replace(/<\/h3>/g, "</h2>");
          setPost({ ...res.data, content });
        } else {
          setError("No Case Study found.");
        }
      } catch (err) {
        console.error("Case Study Error:", err);
        setError("Error loading Case Study.");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  // Skeleton Loader
  if (loading) {
    return (
      <div className="caseStudyDetail container">
        <div className="row">
          <div className="col-md-8">
            <Skeleton width="70%" height={35} style={{ marginBottom: 15 }} />
            <Skeleton width={120} height={15} style={{ marginBottom: 20 }} />
            <Skeleton height={300} borderRadius={10} style={{ marginBottom: 20 }} />
            <Skeleton count={6} />
          </div>

          <div className="col-md-4">
            <Skeleton height={400} />
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div className="container"><p>{error}</p></div>;
  if (!post) return <div className="container"><p>No Case Study found.</p></div>;

  // Dynamic meta data
  const metaTitle = post.meta_tittle || post.title || "Case Study | Perfect Web Services";
  const metaDescription = post.meta_description
    ? post.meta_description.replace(/<[^>]+>/g, "").slice(0, 160)
    : (post.summary?.replace(/<[^>]+>/g, "").slice(0, 160) || "");
  const metaKeywords = post.meta_keywords || "";
  const featuredImage = post.featured_image ;
  const canonicalUrl = `https://perfectwebservices.com/case-study/${post.slug}`;

  return (
    <>
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}

        {/* Open Graph (Facebook, LinkedIn) */}
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

      {/*Actual Case Study Content */}
      <div className="caseStudyDetail">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="caseStudyheading">{post.title}</h1>
              <p className="caseStudyDate">{post.created_at}</p>

              {post.featured_image && (
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="img-fluid mb-3 caseStudyimg"
                />
              )}

              <div
                className="caseStudyContent"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="col-md-4">
              <CaseStudySidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
