import API from "./axiosConfig";

/** Turns an API error into one readable sentence for the user. */
export const apiError = (error, fallback = "Something went wrong. Please try again.") => {
  const data = error?.response?.data;
  if (error?.response?.status === 429 && !data?.message) {
    return "Too many attempts. Please wait a minute and try again.";
  }
  if (data?.errors) {
    const first = Object.values(data.errors)[0];
    if (Array.isArray(first) && first[0]) return first[0];
  }
  if (!error?.response) return "We couldn't reach the server. Check your connection and try again.";
  return data?.message || fallback;
};

export const bookingApi = {
  config: () => API.get("booking/config").then((r) => r.data),
  /** Returns { slots: free times, taken: booked times } */
  slots: () => API.get("booking/slots").then((r) => ({ slots: r.data.slots || [], taken: r.data.taken || [] })),
  sendOtp: (payload) => API.post("booking/otp/send", payload).then((r) => r.data),
  verifyOtp: (payload) => API.post("booking/otp/verify", payload).then((r) => r.data),
  start: (payload) => API.post("booking/start", payload).then((r) => r.data),
  confirm: (payload) => API.post("booking/confirm", payload).then((r) => r.data),
  manage: (token) => API.get(`booking/manage/${encodeURIComponent(token)}`).then((r) => r.data),
  reschedule: (token, payload) =>
    API.post(`booking/manage/${encodeURIComponent(token)}/reschedule`, payload).then((r) => r.data),
};

export const webinarApi = {
  list: () => API.get("webinars").then((r) => r.data.webinars),
  get: (slug) => API.get(`webinars/${encodeURIComponent(slug)}`).then((r) => r.data.webinar),
  register: (slug, payload) =>
    API.post(`webinars/${encodeURIComponent(slug)}/register`, payload).then((r) => r.data),
};
