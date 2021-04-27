import React from "react";
import TopNav from "./TopNav";
import SideMenu from "../menu/SideMenu";
import GalleryImage from "./GalleryImage";
import { useQuery } from "react-query";
import { fetchArtworksKey } from "../../util/queryKeys";
import { fetchArtworks } from "../../services/fetchArtworks.service";
import { ProductStore } from "../../store/productList.store";
import LoadingImage from "./LoadingImage";
import NoProduct from "./NoProduct";

export default function Gallery() {
  const categoryIds = ProductStore((state) => state?.categoryIds);
  const start = ProductStore((state) => state?.start);
  const priceFilterValue = ProductStore((state) => state?.priceFilterValue);

  const { data, isLoading, isError } = useQuery(
    [fetchArtworksKey, categoryIds, start, priceFilterValue],
    fetchArtworks
  );

  return (
    <>
      <section className="container relative">
        {/* Top Navigation */}
        <TopNav />
        <div className="flex flex-row">
          <SideMenu />
          {/* <!--GALLERY IMAGES--> */}
          <div className="w-full flex flex-col items-center md:w-3/4">
            {/* <!--ROW ONE--> */}
            <div className="w-full gap-x-5 grid justify-center grid-rows-6 md:grid-rows-3 xl:grid-rows-2 grid-flow-col mx-auto">
              {isLoading && !isError ? (
                <>
                  <LoadingImage />
                  <LoadingImage />
                  <LoadingImage />
                  <LoadingImage />
                  <LoadingImage />
                  <LoadingImage />
                </>
              ) : data?.products?.length === 0 ? (
                <NoProduct />
              ) : (
                data?.products?.map((product) => (
                  <GalleryImage product={product} key={product.id} />
                ))
              )}
            </div>
            {/* <!--ROW TWO--> */}
          </div>
        </div>
      </section>
    </>
  );
}
