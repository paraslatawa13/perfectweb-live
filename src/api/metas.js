import API from "./axiosConfig";

export const useMetaApi = () => {
  const getMeta = async () => {
    try {
      const response = await API.get(`meta`);
      console.log("logs", response);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };




const geMetabySlug = async (slug) => {
  try {
    const response = await API.get(`/meta/${slug}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching blog:", error.response?.data || error.message);
    throw error;
  }
};


  return { getMeta, geMetabySlug };
};