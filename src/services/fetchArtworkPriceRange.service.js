import axios from "axios";
import { apiBaseURL } from "../util/appURl";

export const fetchArtworkPriceRange = async () => {
  const res = await axios.get(`${apiBaseURL}/price-range`);
  return res?.data;
};
