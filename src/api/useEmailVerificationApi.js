import API from "./axiosConfig";

export const useEmailVerificationApi = () => {
  
  // // Step 1: Send OTP
  // const sendOtp = async (email) => {
  //   try {
  //     const response = await API.post("send-otp", { email });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error sending OTP:", error.response?.data || error.message);
  //     throw error;
  //   }
  // };

  // Step 1: Send Verification Code (OTP)
  const sendOtp = async ({ email, first_name, last_name, phone }) => {
    try {
      const response = await API.post("send-otp", {
        email,
        first_name,
        last_name,
        phone,
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error sending verification code:",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  // Step 2: Verify OTP
  const verifyOtp = async (email, otp) => {
    try {
      const response = await API.post("verify-otp", { email, otp });
      return response.data;
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
      throw error;
    }
  };

  return { sendOtp, verifyOtp };
};
