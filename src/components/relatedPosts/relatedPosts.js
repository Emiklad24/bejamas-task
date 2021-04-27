import React from "react";
import { apiBaseURL } from "../../util/appURl";
import RelatedImage from "./RelatedImage";

export default function RelatedPosts({ recommendations }) {
  return (
    <>
      <h4 className="text-left xl:text-right text-black font-bold text-xl">
        People also buy
      </h4>
      {/* <!--Related Images--> */}
      <div className="flex flex-row py-2 md:mt-5">
        {recommendations?.map((image, index) => (
          <RelatedImage
            key={image.id}
            src={`${apiBaseURL}${image?.formats?.thumbnail?.url}`}
          />
        ))}
      </div>
    </>
  );
}
