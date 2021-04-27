import React from "react";
import { useQuery } from "react-query";
import { fetchArtworkPriceRangeKey } from "../../util/queryKeys";
import "./checkbox.css";
import { fetchArtworkPriceRange } from "../../services/fetchArtworkPriceRange.service";
import LoadingPriceMenu from "./LoadingPriceMenu";
import { ProductStore } from "../../store/productList.store";

export default function PriceMenu() {
  const { data, isLoading, isError } = useQuery(
    fetchArtworkPriceRangeKey,
    fetchArtworkPriceRange
  );

  const setPriceFilterValue = ProductStore(
    (state) => state?.setPriceFilterValue
  );
  const setStartPostion = ProductStore((state) => state?.setStartPostion);
  const priceFilterValue = ProductStore((state) => state?.priceFilterValue);

  const HandleSetPriceFilterValue = () => {
    setStartPostion(0);
    if (priceFilterValue === data?.minimumPrice) {
      setPriceFilterValue(null);
    } else {
      setPriceFilterValue(data?.minimumPrice);
    }
  };

  return (
    <>
      {isLoading && !isError ? (
        <LoadingPriceMenu />
      ) : (
        <div className="mt-3 w-full">
          <ul className="flex flex-col pl-0 pb-3">
            <div className="text-black font-bold text-xl capitalize mb-3">
              price range
            </div>
            <label className="checkbox relative flex flex-row items-center mb-4">
              <input
                className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white"
                type="checkbox"
                onChange={HandleSetPriceFilterValue}
                checked={priceFilterValue !== null}
              />
              <span className="text-xl font-semibold md:text-lg xl:text-2xl ml-3 text-black flex flex-row items-center">
                Higher than{" "}
                <span className="ml-1 font-light text-lg">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                {data?.minimumPrice}
              </span>
            </label>
          </ul>
        </div>
      )}
    </>
  );
}
