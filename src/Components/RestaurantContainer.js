import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.34580&lng=77.73340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!restaurants.length) return <Shimmer></Shimmer>;

  const handleFilteredRestaurants = () => {
    const filteredRes = restaurants.filter((res) => res.info.avgRating >= 4.5);
    setRestaurants(filteredRes);
  };

  return (
    <>
      <input
        type="text"
        className="border border-gray-200 w-4/12 p-2 mt-5 rounded-md placeholder:text-xs placeholder:text-center"
        placeholder="Search here for restaurants ...!"
      />
      <button className="hover:bg-black text-white mx-2 p-2 rounded-md font-light bg-gray-500 w-28 font-ubuntu hover:text-orange-500">
        Search
      </button>
      <button
        className="hover:bg-black text-white mx-2 p-2 rounded-md font-light bg-gray-500 font-ubuntu hover:text-orange-500"
        onClick={handleFilteredRestaurants}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap my-5">
        {restaurants.map((res, i) => (
          <RestaurantCard key={i} data={res} />
        ))}
      </div>
    </>
  );
};

export default RestaurantContainer;
