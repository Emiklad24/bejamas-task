import React from "react";

export default function Button(props) {
  return (
    <>
      <button className="bg-black text-white uppercase h-12 w-64 text-xl md:text-xl">
        {props.label}
      </button>
    </>
  );
}
