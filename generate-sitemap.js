import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import axios from "axios";

const BASE_URL = "https://perfectwebservices.com/";
const API_BLOG_URL = "https://perfectwebservices.com/pws_admin/api/blogs";
const API_CASE_URL = "https://perfectwebservices.com/pws_admin/api/case-studies";

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // --- Static Routes ---
    const staticRoutes = [
      "/",
      "/about-us",
      "/contact-us",
      "/blog",
      "/hire-dedicated-web-developer",
      "/hire-wordpress-developer",
      "/hire-shopify-developer",
      "/hire-cms-developers",
      "/hire-api-developers",
      "/hire-digital-marketing-experts",
      "/hire-seo-experts",
      "/hire-ppc-expert",
      "/hire-social-media-expert",
      "/hire-a-web-designer",
      "/hire-mobile-app-developer",
      "/hire-ios-app-developers",
      "/case-study",
      "/web-development-services",
      "/custom-wordpress-development-services",
      "/shopify-website-development-services",
      "/cms-development-services",
      "/custom-api-development-services",
      "/website-maintenance-services",
      "/affordable-digital-marketing-services",
      "/expert-seo-services",
      "/ppc-marketing-services",
      "/smo-services",
      "/web-design-services",
      "/privacy-policy",
      "/ui-ux-design-services",
      "/mobile-app-development-services",
      "/ios-app-development-services",
      "/android-app-development-services",
      "/real-estate-web-solutions-dubai",
      "/seo-for-plumbers",
      "/product-cost-calculator",
    ];

    const today = new Date().toISOString();
    staticRoutes.forEach((url) => sitemap.write({ url, lastmod: today }));

    // --- Fetch Blogs & Case Studies concurrently ---
    const [blogResponse, caseResponse] = await Promise.all([
      axios.get(API_BLOG_URL),
      axios.get(API_CASE_URL),
    ]);

    // --- Handle Blogs ---
    const blogs = blogResponse.data?.data || [];
    if (Array.isArray(blogs)) {
      blogs.forEach((blog) => {
        if (blog.slug) {
          sitemap.write({
            url: `/blog/${blog.slug}`,
            lastmod: new Date(blog.updated_at || blog.created_at || today).toISOString(),
          });
        }
      });
    } else {
      console.warn(" Blog API did not return a valid array");
    }

    // --- Handle Case Studies ---
    const caseStudies = caseResponse.data?.data || [];
    if (Array.isArray(caseStudies)) {
      caseStudies.forEach((cs) => {
        if (cs.slug) {
          sitemap.write({
            url: `/case-study/${cs.slug}`,
            lastmod: new Date(cs.updated_at || cs.created_at || today).toISOString(),
          });
        }
      });
    } else {
      console.warn(" Case Study API did not return a valid array");
    }

    // --- End stream and write file ---
    sitemap.end();
    const data = await streamToPromise(sitemap);

    writeFileSync("./dist/sitemap.xml", data.toString());
    console.log(" Sitemap generated successfully with lastmod tags!");
  } catch (error) {
    console.error(" Error generating sitemap:", error.message);
  }
}

generateSitemap();
