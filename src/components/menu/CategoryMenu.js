import React from "react";
import { useQuery } from "react-query";
import { fetchArtworkCategories } from "../../services/fetchArtworkCategories.service";
import { ProductStore } from "../../store/productList.store";
import { fetchFeaturedArtworkCategoriesKey } from "../../util/queryKeys";
import "./checkbox.css";
import LoadingCategoryMenu from "./LoadingCategoryMenu";

export default function CategoryMenu(props) {
  const { data, isLoading } = useQuery(
    fetchFeaturedArtworkCategoriesKey,
    fetchArtworkCategories
  );
  const addNewCategoryQuery = ProductStore(
    (state) => state?.addNewCategoryQuery
  );
  const setStartPostion = ProductStore((state) => state?.setStartPostion);
  const removeCategoryQuery = ProductStore(
    (state) => state?.removeCategoryQuery
  );
  const categoryIds = ProductStore((state) => state?.categoryIds);

  const HandleSetCategoryQuery = (categoryId) => {
    setStartPostion(0);
    if (categoryIds.includes(categoryId)) {
      removeCategoryQuery(categoryId);
    } else {
      addNewCategoryQuery(categoryId);
    }
  };
  return (
    <>
      {isLoading ? (
        <LoadingCategoryMenu />
      ) : (
        <div className="mr-10 border-b-2 border-b-gray-300">
          <ul className="flex flex-col pl-0 pb-1">
            <div className="text-black font-bold text-xl capitalize mb-3">
              {props.title}
            </div>

            {data?.map((category) => (
              <label
                className="checkbox relative flex flex-row items-center mb-4"
                key={category.id}
              >
                <input
                  className="h-5 w-5 appearance-none border-2 cursor-pointer border-black outline-none font-bold bg-white"
                  type="checkbox"
                  onChange={() => HandleSetCategoryQuery(category?.id)}
                  checked={categoryIds.includes(category?.id)}
                />
                <span className="text-xl font-semibold md:text-lg xl:text-2xl ml-3 text-black  capitalize">
                  {category?.name}
                </span>
              </label>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
