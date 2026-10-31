import API from "./axiosConfig";

export const useCaseStudyApi = () => {
  const getCaseStudy = async () => {
    try {
      const response = await API.get(`case-studies`);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };
  
  const getCaseStudyCategories = async () => {
    try {
      const response = await API.get(`case-study-categories`);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };

   const getCaseStudybySlug = async (slug) => {
    try {
      const response = await API.get(`/case-studies/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };

  return { getCaseStudy, getCaseStudyCategories, getCaseStudybySlug };
};