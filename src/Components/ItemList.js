import React from "react";
import {
  DEFAULT_DISH_IMAGE,
  IMAGE_URL,
  NON_VEG_ONLY_IMAGE,
  VEG_ONLY_IMAGE,
} from "../Utils/constants";

const ItemList = ({ data }) => {
  const { name, imageId, price, defaultPrice, description, isVeg } = data;

  const { rating } = data?.ratings?.aggregatedRating;
  return (
    <div className="flex justify-between items-center border-b border-b-gray-300 pb-10 mt-10 font-poppins">
      <div className="w-4/6 mx-3">
        <img
          src={isVeg === 1 ? VEG_ONLY_IMAGE : NON_VEG_ONLY_IMAGE}
          alt="veg and non veg"
          className="w-3 h-3 mb-1"
        />
        <p className="font-semibold mb-1">{name}</p>
        <p className="font-semibold mb-2">
          <span className="font-thin mr-1">₹</span>
          {price / 100 || defaultPrice / 100}
        </p>
        {rating === 0 ? null : (
          <p className="mb-2 text-sm font-bold text-green-800">{rating}</p>
        )}
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute bg-white text-green-700 rounded-xl mt-36 border border-gray-300 hover:bg-gray-200">
          <button className="w-28 p-1 font-extrabold ">ADD</button>
        </div>
        <img
          src={imageId ? IMAGE_URL + imageId : DEFAULT_DISH_IMAGE}
          alt="dish"
          className="rounded-3xl object-cover h-36 w-40"
        />
      </div>
    </div>
  );
};

export default ItemList;
