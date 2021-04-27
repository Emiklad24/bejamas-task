import React from "react";
import { ProductStore } from "../../store/productList.store";
import CategoryMenu from "./CategoryMenu";
import PriceMenu from "./PriceMenu";

export default function MobileMenu({ onClose }) {
  const clearQueries = ProductStore((state) => state?.clearQueries);
  const categoryIds = ProductStore((state) => state?.categoryIds);
  const priceFilterValue = ProductStore((state) => state?.priceFilterValue);

  return (
    <div className="bg-white w-80 mx-0 block md:hidden">
      {/* <!--Category Menu--> */}
      <CategoryMenu title="filter" />
      <PriceMenu />
      {/* <!--CONTROL BUTTONS--> */}
      <div className="bg-white  w-96 h-28 z-50 flex flex-row items-center justify-between border-t-4 border-t-gray-300 px-5">
        {(categoryIds?.length !== 0 || priceFilterValue !== null) && (
          <button
            className="w-44 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase"
            onClick={clearQueries}
          >
            clear
          </button>
        )}
        <button
          className="w-44 h-16 bg-black border-2 border-black text-2xl font-medium text-white uppercase ml-5"
          onClick={onClose}
        >
          save
        </button>
      </div>
    </div>
  );
}
