import create from "zustand";
import { persist2 } from "./storeHelper";

export const ProductStore = create(
  persist2("product-list", (set, get) => ({
    categoryIds: [],

    start: 0,

    priceFilterValue: null,

    sortParam: "",

    sortOrder: "",

    setSortParam: (value) => {
      return set((state) => {
        state.sortParam = value;
      });
    },

    setSetOrder: (value) => {
      return set((state) => {
        state.sortOrder = value;
      });
    },

    setStartPostion: (value) => {
      return set((state) => {
        state.start = value;
      });
    },

    setPriceFilterValue: (value) => {
      window.location.href = "#topList";
      return set((state) => {
        state.priceFilterValue = value;
      });
    },

    addNewCategoryQuery: (newCategoryId) => {
      window.location.href = "#topList";
      let newArray = [...get()?.categoryIds, newCategoryId];
      return set((state) => {
        state.categoryIds = newArray;
      });
    },

    removeCategoryQuery: (newCategoryId) => {
      window.location.href = "#topList";
      let newArray = get()?.categoryIds.filter((id) => id !== newCategoryId);
      return set((state) => {
        state.categoryIds = newArray;
      });
    },
    clearQueries: () => {
      window.location.href = "#topList";
      return set((state) => {
        state.categoryIds = [];
        state.priceFilterValue = null;
      });
    },
  }))
);
