import API from "./axiosConfig";

export const useBlogApi = () => {
  const getBlog = async () => {
    try {
      const response = await API.get(`blogs`);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };

    const getRecentPost = async () => {
    try {
      const response = await API.get(`recent-posts`);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };


const getBlogbySlug = async (slug) => {
  try {
    const response = await API.get(`/blogs/slug/${slug}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching blog:", error.response?.data || error.message);
    throw error;
  }
};


  return { getBlog, getBlogbySlug, getRecentPost };
};