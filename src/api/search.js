import API from "./axiosConfig"; 
import { useRegion } from "../context/RegionContext";

export const searchProducts = async (region, searchTerm) => {
  //const { region } = useRegion();
  const effectiveRegion = region === "GB" ? "UK" : region;
  try {
    const response = await API.get(`advanced-search/region/${effectiveRegion}`, {
      params: { search_term: searchTerm },
    });
    return response.data;
  } catch (error) {
    console.error("Search failed:", error.response?.data || error.message);
    throw error;
  }
};
