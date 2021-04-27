import create from "zustand";
import { persist2 } from "./storeHelper";

export const CartStore = create(
  persist2("cart-store", (set, get) => ({
    isCartOpen: false,
    cart: [],

    addProductToCart: (product) => {
      let newCart = [...get()?.cart, product];
      return set((state) => {
        state.cart = newCart;
        state.isCartOpen = true;
      });
    },

    removeProductFromCart: (productId) => {
      return set((state) => {
        state.cart?.filter((product) => product?.id !== productId);
      });
    },

    clearCart: (productId) => {
      return set((state) => {
        state.isCartOpen = false;
        state.cart = [];
      });
    },
    setCart: (status) => {
      return set((state) => {
        state.isCartOpen = status;
      });
    },
  }))
);
