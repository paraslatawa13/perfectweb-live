import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useBlogApi } from "../api/blogs";
import "swiper/css";
import "swiper/css/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogsCarousel = () => {
  const { getBlog } = useBlogApi();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getBlog();
        if (response?.data && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.warn("Unexpected API response:", response);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const limitWords = (text = "", wordLimit = 15) => {
    const words = text.replace(/<[^>]+>/g, "").split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="Stories-section">
      {loading ? (
      <Swiper
        modules={[Navigation]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
          {Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="stories-inner-box">
                <div className="image-box">
                  <Skeleton height={200} borderRadius={10} />
                </div>
                <h3>
                  <Skeleton width="80%" />
                </h3>
                <p className="story-description">
                  <Skeleton count={3} />
                </p>
                <p className="story-author">
                  <Skeleton width={120} />
                </p>
                <p>
                  <Skeleton width={90} />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="stories-inner-box">
                <div className="image-box">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    loading="lazy"
                  />
                </div>
                <h3>{blog.title}</h3>
                <p className="story-description">
                  {limitWords(blog.main_content, 15)}
                </p>
                <p className="story-author">By PerfectWeb Editorial Team</p>
                <Link to={`/blog/${blog.slug}`} className="readMore">
                  Read More <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default BlogsCarousel;
