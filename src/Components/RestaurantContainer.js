import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [newRestaurants, setNewRestaurants] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.34580&lng=77.73340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchedRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(fetchedRestaurants);
    setNewRestaurants(fetchedRestaurants);
  };

  const filteredRestaurants = () => {
    const highRatedRes = restaurants.filter((res) => res.info.avgRating >= 4);
    setNewRestaurants(highRatedRes);
  };

  const restaurantSearch = () => {
    const search = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(ref.current.value.toLowerCase())
    );
    setNewRestaurants(search);
  };

  return !restaurants.length ? (
    <Shimmer />
  ) : (
    <>
      <input
        ref={ref}
        type="text"
        className="border border-gray-200 w-4/12 p-2 mt-5 rounded-md placeholder:text-xs placeholder:text-center"
        placeholder="Search here for restaurants ...!"
      />
      <button
        className="hover:bg-black text-white mx-8 p-2 rounded-md font-light bg-gray-500 w-28 font-ubuntu hover:text-orange-500"
        onClick={restaurantSearch}
      >
        Search
      </button>
      <button
        className="hover:bg-black text-white p-2 rounded-md font-light bg-gray-500 font-ubuntu hover:text-orange-500"
        onClick={filteredRestaurants}
      >
        Top Rated Restaurants
      </button>
      <div className="flex flex-wrap my-5">
        {newRestaurants.map((res, i) => (
          <RestaurantCard key={i} data={res} />
        ))}
      </div>
    </>
  );
};

export default RestaurantContainer;
