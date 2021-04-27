import React from "react";
import { CartStore } from "../../store/cart.store";
import Badge from "../badge/Badge";
import Cart from "../cart/Cart";
import logo from "./logo.png";

export default function Navbar() {
  const isCartOpen = CartStore((state) => state?.isCartOpen);
  const setCart = CartStore((state) => state?.setCart);

  return (
    <nav>
      <div className="container border-b-4 border-b-gray-300 relative">
        <div className="flex flex-row justify-between py-3 ">
          <a href="index.html" className="h-8">
            <img className="h-full" src={logo} alt="" />
          </a>
          <button className="relative">
            <span
              className="material-icons-outlined"
              onClick={() => setCart(true)}
            >
              shopping_cart
            </span>
            <Badge />
          </button>
        </div>
        {isCartOpen ? <Cart /> : null}
      </div>
    </nav>
  );
}
