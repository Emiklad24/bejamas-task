import React from "react";
import { apiBaseURL } from "../../util/appURl";
// import potd from "./potd.jpg";
export default function CartItem({ productDetail }) {
  return (
    <div className="flex flex-row items-center h-auto max-h-36 my-3 border-b-2 border-b-gray-100 p-2">
      {/* <!--ITEM DETAILS--> */}
      <div className="w-2/3">
        <div className="text-lg font-bold capitalize text-black">
          {productDetail?.name}
        </div>
        <div className="flex flex-row items-center text-gray-600 text-2xl">
          <span className="text-lg">
            {" "}
            <i className="fas fa-dollar-sign"></i>
          </span>
          {productDetail?.price}
        </div>
      </div>
      {/* <!--ITEM IMAGE--> */}
      <div className="w-1/3 p-2">
        <img
          alt={productDetail?.name}
          className="w-full"
          src={`${apiBaseURL}${productDetail?.image?.formats?.thumbnail?.url}`}
        />
      </div>
    </div>
  );
}
