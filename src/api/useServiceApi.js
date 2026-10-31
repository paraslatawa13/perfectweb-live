import API from "./axiosConfig";

export const useServiceApi = () => {

  const getServices = async () => {
    try {
      const res = await API.get("services");
      return res.data.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getPlans = async (platformId) => {
    try {
      const res = await API.get(`platforms/${platformId}/plans`);
      return res.data.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const getPlanOptions = async (planId) => {
    try {
      const res = await API.get(`plans/${planId}/options`);
      return res.data.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const sendOtp = async (phone) => {
    const response = await API.post("sendOtp", { phone });
    return response.data;
  };

  const verifyOtp = async (phone, otp) => {
    const response = await API.post("verifyOtp", { phone, otp });
    return response.data;
  };

    const sendContact = async (payload) => {
    try {
      const res = await API.post("send-contact", payload);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
    const sendClaimOffer = async (payload) => {
    try {
      const res = await API.post("send-claim-offer", payload);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return { getServices, getPlans, getPlanOptions,sendOtp, verifyOtp, sendContact, sendClaimOffer };
};
