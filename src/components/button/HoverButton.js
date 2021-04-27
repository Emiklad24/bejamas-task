import React from "react";
import { CartStore } from "../../store/cart.store";

export default function HoverButton({ product }) {
  const addProductToCart = CartStore((state) => state?.addProductToCart);
  const HandleAddToCart = () => {
    addProductToCart(product);
  };
  return (
    <>
      <button
        className="opacity-0 w-full h-11  bg-black text-white uppercase group-hover:opacity-100"
        onClick={HandleAddToCart}
      >
        add to cart
      </button>
    </>
  );
}
