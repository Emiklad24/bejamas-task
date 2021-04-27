import React from "react";
import CartItem from "./CartItem";
import NoCartItem from "./NoCartItem";
import { CartStore } from "../../store/cart.store";

export default function Cart() {
  const setCart = CartStore((state) => state?.setCart);
  const cart = CartStore((state) => state?.cart);
  const clearCart = CartStore((state) => state?.clearCart);

  return (
    <div className="absolute z-50 -bottom-30 right-0 ">
      {/* <!--CART MODAL--> */}
      <div
        id="cart-modal"
        className="opacity-100 h-auto bg-white w-80 md:w-96 border-4 border-gray-100 p-3"
      >
        {/* <!--CLOSE BUTTON--> */}
        <div className="flex flex-row justify-end items-center">
          <button
            className="material-icons-outlined"
            onClick={() => setCart(false)}
          >
            close
          </button>
        </div>

        {/* <!--CART ITEM--> */}
        {/* <LoadingCartItem /> */}

        {cart?.length === 0 ? (
          <NoCartItem />
        ) : (
          <>
            {cart.map((product) => (
              <CartItem productDetail={product} key={product?.id} />
            ))}
          </>
        )}

        {/* <!--CONTROL BUTTONS--> */}
        {cart?.length > 0 && (
          <div className="bg-white w-full h-28 z-50 flex flex-row items-center justify-center border-t-4 border-t-gray-300 p-1">
            <button
              className="w-80 h-16 bg-white border-2 border-black text-2xl font-medium text-black uppercase"
              onClick={() => clearCart()}
            >
              clear
            </button>
          </div>
        )}
        {/* <!--END OF CART ITEM--> */}
      </div>
    </div>
  );
}
