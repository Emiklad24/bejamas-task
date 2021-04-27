import React from "react";
export default function RelatedImage({ src }) {
  return (
    <div className="w-full w-1/3">
      <div className="w-24 h-32  xl:w-28 xl:h-36 mr-3 xl:ml-3">
        <img
          className="float-left w-full h-full xl:float-right"
          src={src}
          alt=""
        />
      </div>
    </div>
  );
}
