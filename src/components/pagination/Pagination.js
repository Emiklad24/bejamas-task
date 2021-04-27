import React from "react";
import { useQuery } from "react-query";
import { fetchArtworks } from "../../services/fetchArtworks.service";
import { ProductStore } from "../../store/productList.store";
import { fetchArtworksKey } from "../../util/queryKeys";
import LoadingPagination from "./LoadingPagination";

export default function Pagination() {
  const categoryIds = ProductStore((state) => state?.categoryIds);
  const start = ProductStore((state) => state?.start);
  const setStartPostion = ProductStore((state) => state?.setStartPostion);
  const priceFilterValue = ProductStore((state) => state?.priceFilterValue);

  const { data, isLoading, isError } = useQuery(
    [fetchArtworksKey, categoryIds, start, priceFilterValue],
    fetchArtworks
  );

  const jumpStartPosition = (startPosition) => {
    setStartPostion(startPosition);
  };

  const HandleSetPrevious = () => {
    setStartPostion(start - 1);
  };
  const HandleSetNext = () => {
    setStartPostion(start + 1);
  };

  const totalRecords = data?.count;
  const totalPages = new Array(Math.ceil(totalRecords / 6) || 0)?.fill(0);
  return (
    <>
      {isLoading && !isError ? (
        <LoadingPagination />
      ) : (
        <div className="flex flex-row w-full justify-center">
          <nav className="p-0 mx-auto">
            <ul className="p-0 flex flex-row items-center h-16 justify-center">
              {start !== 0 && (
                <li style={{ cursor: "pointer" }} onClick={HandleSetPrevious}>
                  <a
                    className="text-black text-lg md:text-2xl no-underline hover:text-black hover:no-underline text-base"
                    aria-label="Previous"
                    href="#topList"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </li>
              )}
              {totalPages && totalPages?.length !== 0
                ? totalPages?.map((_, index) => (
                    <li
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => jumpStartPosition(index)}
                    >
                      <a
                        className={`${
                          start === index
                            ? "text-black font-bold"
                            : "text-gray-400"
                        } text-lg md:text-2xl no-underline hover:text-black hover:no-underline px-1`}
                        href="#topList"
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))
                : null}

              {totalPages?.length > 1 && totalPages?.length - 1 !== start && (
                <li style={{ cursor: "pointer" }} onClick={HandleSetNext}>
                  <a
                    className="text-black text-lg md:text-2xl no-underline hover:text-black hover:no-underline"
                    aria-label="Previous"
                    href="#topList"
                  >
                    <i className="fas fa-chevron-right"></i>{" "}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
