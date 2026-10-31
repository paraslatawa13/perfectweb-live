import API from "./axiosConfig";

export const useContactFormApi = () => {

  const postContactForm = async (formData) => {
    try {
      const response = await API.post(`contact`, formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting contact form:", error.response?.data || error.message);
      throw error;
    }
  };

  const postSubscribeForm = async (formData) => {
    try {
      const response = await API.post(`subscribed-emails`, formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting contact form:", error.response?.data || error.message);
      throw error;
    }
  };

  return { postContactForm, postSubscribeForm };
};