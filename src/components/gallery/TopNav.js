import React from "react";
import "react-responsive-modal/styles.css";
import "../menu/mobileMenu.css";
import { Modal } from "react-responsive-modal";
import filterIcon from "./filterIcon-.png";
import "rodal/lib/rodal.css";
import MobileMenu from "../menu/MobileMenu";
import { ProductStore } from "../../store/productList.store";

export default function TopNav() {
  const clearQueries = ProductStore((state) => state?.clearQueries);

  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const clearAndClose = () => {
    clearQueries();
    setOpen(false);
  };

  return (
    <nav className="w-full flex flex-row justify-between py-5" id="topList">
      <div className="text-xl md:text-2xl xl:text-3xl text-black font-bold">
        Photography/
        <span className="text-gray-300 text-xl md:text-2xl xl:text-3xl font-normal">
          {" "}
          Premium Photos
        </span>
      </div>
      <div className="flex">
        {/* ASCENDING ORDER BUTTON */}
        <button className="hidden md:block">
          <i className="fas fa-arrow-up"></i>
        </button>
        {/* DESCENDING ORDER BUTTON */}
        <button className="hidden md:block mr-2">
          <i className="fas fa-arrow-down mr-2"></i>
          <span>Sort By</span>
        </button>

        {/* PRICE SELEECT OPTIONS */}
        <select
          name="price"
          className="hidden md:block flex  items-center text-lg  md:mr-3 text-black active:no-outline active:border-0"
        >
          <option className="text-right" value={""}>
            choose
          </option>
          <option value={"price"}>Price</option>
          <option value={"alphabet"}>Alphabet</option>
        </select>
        <button className=" md:hidden flex flex-row justify-end items-center w-8 ml-16">
          <img
            className="w-full"
            src={filterIcon}
            alt="filter icon"
            onClick={onOpenModal}
          />
        </button>
      </div>
      <div className="md:hidden">
        <Modal open={open} onClose={clearAndClose}>
          <MobileMenu onClose={onCloseModal} />
        </Modal>
      </div>
    </nav>
  );
}
