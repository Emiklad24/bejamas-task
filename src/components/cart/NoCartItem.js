import React from "react";

export default function NoCartItem() {
  return (
    <div className="flex flex-row h-24  items-center mb-2">
      {/* <!--ITEM DETAILS--> */}
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="text-2xl font-medium text-gray-300 capitalize mb-2 mr-2">
          Nothing in cart
        </div>
      </div>
    </div>
  );
}
