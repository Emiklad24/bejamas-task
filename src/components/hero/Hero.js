import React from "react";
import RelatedPosts from "../relatedPosts/relatedPosts";
import { useQuery } from "react-query";
import { fetchFeaturedArtworkKey } from "../../util/queryKeys";
import { fetchFeaturedArtwork } from "../../services/fetchFeaturedArtwork.service";
import { apiBaseURL } from "../../util/appURl";
import { CartStore } from "../../store/cart.store";
import LoadingHero from "./LoadingHero";
export default function Hero() {
  const { data, isLoading, isError } = useQuery(
    fetchFeaturedArtworkKey,
    fetchFeaturedArtwork
  );

  const addProductToCart = CartStore((state) => state?.addProductToCart);

  const HandleAddProductToCart = () => {
    addProductToCart(data?.products?.[0]);
  };

  return (
    <>
      {isLoading && !isError ? (
        <LoadingHero />
      ) : (
        <>
          <div className="container">
            <div className="flex flex-row justify-between py-4">
              <h3 className="capitalize text-2xl md:text-3xl font-bold">
                {data?.products?.[0]?.name}
              </h3>

              <div className="hidden md:block">
                <button
                  className="bg-black text-white uppercase h-12 w-64 text-xl md:text-xl"
                  onClick={HandleAddProductToCart}
                >
                  add to cart
                </button>
              </div>
            </div>

            <div className="relative py-3 ">
              <img
                className="z-20"
                src={`${apiBaseURL}${data?.products?.[0]?.image?.formats?.large?.url}`}
                alt={data?.products?.[0]?.name}
                style={{ width: "100%" }}
              />
              <div className="absolute bottom-0 left-0">
                <div className="bg-white font-semibold text-sm text-black w-64 h-16 text-center py-3">
                  Photo of the day
                </div>
              </div>
            </div>

            <button
              className="mt-2 md:hidden bg-black text-white uppercase h-12 w-full text-2xl"
              onClick={HandleAddProductToCart}
            >
              add to cart
            </button>
          </div>
          <div className="container border-b-4 border-b-gray-300">
            <div className="flex flex-col xl:flex-row py-3">
              {/* <!--About Photo of the Day--> */}
              <div className="w-full  xl:w-2/3">
                <h4 className="text-black font-bold text-lg md:text-xl">
                  About {data?.products?.[0]?.name}
                </h4>
                <span className="py-5-5 text-gray-700 text-lg md:text-xl font-bold text-capitalize mb-2">
                  {data?.products?.[0]?.category?.name}
                </span>
                {/* <!--Text--> */}
                <div className="mr-3">
                  <p className="text-lg xl:text-xl text-gray-600">
                    {data?.products?.[0]?.description}
                  </p>
                </div>
              </div>

              <div className="w-full xl:w-1/3">
                {/* <!--Related Posts--> */}
                <div className="grid grid-rows-1 justify-start xl:justify-end">
                  <RelatedPosts
                    recommendations={data?.products?.[0]?.recommendations}
                  />
                </div>

                {/* { PHOTO OF THE DAY DETAILS} */}
                <ul className="text-left xl:text-right md:mt-7 p-0">
                  <div className=" text-black font-bold text-xl capitalize pb-3">
                    details
                  </div>
                  <li className=" font-normal text-base text-gray-600">
                    Size: 1020 x 1020 pixel
                  </li>
                  <li className=" font-normal text-base text-gray-600">
                    Size: 15 mb
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
