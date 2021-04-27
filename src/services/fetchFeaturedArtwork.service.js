import axios from "axios";
import { apiBaseURL } from "../util/appURl";

export const fetchFeaturedArtwork = async () => {
  const res = await axios.get(`${apiBaseURL}/products?_limit=1&featured=true`);
  return res?.data;

  // .products?.[0]?.image?.formats?.large?.url
};
