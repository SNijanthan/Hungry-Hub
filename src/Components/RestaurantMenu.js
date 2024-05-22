import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import star from "../Images/star.png";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.34580&lng=77.73340&restaurantId=408122&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  console.log(
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards
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
        {cuisines.map((cuisine, i) => (
          <p key={i} className="text-orange-600 underline underline-offset-2">
            {cuisine}
          </p>
        ))}
        <p>
          Outlet
          <span className="text-gray-500 font-medium ml-3">{locality}</span>
        </p>
        <p>{slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
