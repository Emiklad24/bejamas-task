import React from "react";
import { apiBaseURL } from "../../util/appURl";
import HoverButton from "../button/HoverButton";
import FeatureTag from "../featureTag/FeatureTag";
import "./GalleryImage.css";

export default function GalleryImage({ product }) {
  return (
    <div className="w-80 sm:w-96 md:w-64 lg:w-72 mb-5">
      <div className=" flex flex-col items-end">
        <div className="group relative">
          <img
            className="w-full fade-in"
            src={`${apiBaseURL}${product?.image?.formats?.large?.url}`}
            alt={product?.name}
          />
          {/* <!--Feature Tag--> */}
          <div className="absolute top-0 bottom-0">
            {product?.bestseller && <FeatureTag tag="best seller" />}
          </div>
          {/* <!--Add to cart Button--> */}
          <div className="absolute bottom-0 left-0 right-0">
            <HoverButton product={product} />
          </div>
        </div>
      </div>
      {/* <!--Image Category Tag--> */}
      <div className="text-sm text-left text-gray-600 capitalize pt-2 font-semibold">
        {product?.category?.name}
      </div>
      {/* <!--Image Title--> */}
      <div className="font-bold text-left text-black text-2xl capitalize">
        {product?.name}
      </div>
      {/* <!--Image Price--> */}
      <div className="text-gray-600  flex flex-row justify-start items-center">
        {" "}
        <span className="text-sm">
          <i className="fas fa-dollar-sign"></i>
        </span>
        <span className="text-xl">{product?.price}</span>
      </div>
    </div>
  );
}
