import "../App.css";
import "../Responsive-App.css";
import blogHeader from "../assets/images/Blogs/blogHeader.webp";
import BlogList from "../components/BlogList";
import BlogSidebar from "../components/blogSidebar";
import CommonHeroSection from "../components/CommonHeroSection";
import { useMeta } from "../hooks/useMeta";
import MetaHelmet from "../reusablecomponents/MetaHelmet";

function Blog() {
   const { meta } = useMeta();
  return (
    <div className="BlogMain">
    <MetaHelmet meta={meta} />
      <div className="Common-hero-section blogs">
        <CommonHeroSection
          subtitle="Blogs"
          title="Latest Stories, Tips & Tech Trends"
          description=" We have helped 600+ companies accelerate their business with top-notch technology solutions."
          buttonText="Contact Us Now"
          buttonLink="/contact-us"
          image={blogHeader}
          altText="Blog header"
        />
      </div>

      <div className="blogWrapper padd">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blogsmallHeader">
                <p>Explore and stay ahead with the latest updates</p>
                <h2>Latest Updates</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <BlogList />
            </div>
            <div className="col-md-3">
              <aside className="blogSidebar">
                <div className="latestAriticles">
                  <BlogSidebar />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
