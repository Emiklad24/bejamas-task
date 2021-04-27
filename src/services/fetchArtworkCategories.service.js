import axios from "axios";
import { apiBaseURL } from "../util/appURl";

export const fetchArtworkCategories = async () => {
  const res = await axios.get(`${apiBaseURL}/categories`);
  return res?.data;
};
