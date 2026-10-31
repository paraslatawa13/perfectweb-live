import API from "./axiosConfig";
import { useRegion } from "../context/RegionContext";

export const useCharacterDetailApi = () => {
  const { region } = useRegion();
  const effectiveRegion = region === "GB" ? "UK" : region;
  const getCharacterDetail = async (id) => {
    try {
      const response = await API.get(`/character-detail/${id}/${effectiveRegion}`);
      return response.data;
    } catch (error) {
      console.error("No data found:", error.response?.data || error.message);
      throw error;
    }
  };

  return { getCharacterDetail };
};