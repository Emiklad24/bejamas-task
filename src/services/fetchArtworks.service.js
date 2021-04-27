import axios from "axios";
import { apiBaseURL } from "../util/appURl";
import qs from "qs";

export const fetchArtworks = async ({ queryKey }) => {
  const query = qs.stringify({
    _where: [{ category: queryKey?.[1] }, { price_gt: queryKey?.[3] }],
    _start: queryKey?.[2] * 6,
    _limit: 6,
  });

  const res = await axios.get(`${apiBaseURL}/products?${query}`);

  return res?.data;
};
