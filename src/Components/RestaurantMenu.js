import { useState } from "react";
import { useParams } from "react-router-dom";
import star from "../Images/star.png";
import useRestaurantMenu from "../CustomHooks/useRestaurantMenu";
import { DELIVERY_IMAGE } from "../Utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();

  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  const RestMenus =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = RestMenus.filter(
    (res) =>
      res.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const {
    name,
    locality,
    totalRatingsString,
    avgRating,
    costForTwoMessage,
    cuisines,
  } = restaurantInfo.cards?.[2]?.card?.card?.info;

  const { slaString } = restaurantInfo?.cards?.[2]?.card?.card?.info?.sla;

  return (
    <div className="w-7/12 m-auto mt-10">
      <h1 className="font-bold text-2xl ml-5">{name}</h1>
      <div className="rounded-2xl border border-gray-300 px-8 py-4 mt-5 font-semibold mx-5 leading-8 text-sm">
        <div className="flex items-center">
          <img src={star} alt="star" className="h-3 mr-2" />
          <p>
            {avgRating} <span className="mx-1">({totalRatingsString})</span>
            <span className="mx-1">{costForTwoMessage}</span>
          </p>
        </div>
        <ul className="flex">
          {cuisines.map((cuisine, i) => (
            <li key={i} className="text-orange-600">
              {i > 0 && ", "}
              {cuisine}
            </li>
          ))}
        </ul>
        <p>
          Outlet
          <span className="text-gray-500 font-medium ml-3">{locality}</span>
        </p>
        <div className="flex items-center">
          <img src={DELIVERY_IMAGE} alt="delivery" className="h-6" />
          <p className=" ml-8">{slaString}</p>
        </div>
      </div>
      {categories.map((res, i) => (
        <RestaurantCategory
          key={res?.card?.card?.title}
          data={res}
          showIndex={i === showIndex}
          setShowIndex={() => setShowIndex(i === showIndex ? null : i)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
