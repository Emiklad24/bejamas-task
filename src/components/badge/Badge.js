import React from "react";
import { CartStore } from "../../store/cart.store";

export default function Badge() {
  const isCartOpen = CartStore((state) => state?.isCartOpen);
  const cart = CartStore((state) => state?.cart);
  const setCart = CartStore((state) => state?.setCart);

  const HandleToggleIsCartOpen = () => {
    setCart(!isCartOpen);
  };

  return (
    <>
      {cart?.length !== 0 && (
        <div
          className="absolute bottom-0 top-6 left-4"
          onClick={HandleToggleIsCartOpen}
        >
          <div className=" opacity-100 w-4 h-4 text-xs leading-3 flex items-center justify-center p-1 bg-black text-white ">
            {cart?.length}
          </div>
        </div>
      )}
    </>
  );
}
