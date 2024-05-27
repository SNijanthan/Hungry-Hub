import React from "react";
import star from "../Images/star.png";
import { IMAGE_URL, VEG_ONLY_IMAGE } from "../Utils/constants";

const RestaurantCard = ({ data }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    data.info;

  const { slaString } = data.info.sla;

  const showEllipsis = cuisines.length > 2;

  return (
    <div className="my-5 hover:scale-105 cursor-pointer transform transition duration-100 ease-in-out font-ubuntu text-center w-96 text-sm">
      <div className="w-11/12 mx-auto ml-16">
        <img
          src={IMAGE_URL + cloudinaryImageId}
          alt="Restaurant"
          className="rounded-3xl p-5 h-56 w-full object-cover"
        />
        <h1 className="font-bold -mt-2 pb-1">{name}</h1>
        <div className="flex items-center justify-center pb-1">
          <img src={star} alt="star" className="h-3" />
          <p className="ml-1">{slaString}</p>
        </div>
        {cuisines.slice(0, 3).map((cuisine, index) => (
          <span key={index} className="pb-1 text-gray-500">
            {index > 0 && ", "}
            {cuisine}
          </span>
        ))}
        {showEllipsis && <span key="ellipsis">...</span>}
        <p className="pb-1 text-gray-500">{avgRating}</p>
        <p className="pb-1 text-gray-500">{costForTwo}</p>
      </div>
    </div>
  );
};

// Higher order component

export const vegOnlyLabel = (RestaurantCard) => {
  return (data) => {
    return (
      <div>
        <img
          className="absolute ml-20 mt-[213px] w-5"
          alt="only-veg"
          src={VEG_ONLY_IMAGE}
        />
        <RestaurantCard {...data} />
      </div>
    );
  };
};

export default RestaurantCard;
