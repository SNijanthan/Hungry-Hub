import React from "react";
import RestaurantCard, { vegOnlyLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantContainer from "../CustomHooks/useRestaurantContainer";

const RestaurantContainer = () => {
  const {
    restaurants,
    newRestaurants,
    filteredRestaurants,
    restaurantSearch,
    handleChange,
    searchText,
  } = useRestaurantContainer();

  const VegOnlyRestaurants = vegOnlyLabel(RestaurantCard);

  return !restaurants.length ? (
    <Shimmer />
  ) : (
    <>
      <input
        value={searchText}
        type="text"
        className="border border-gray-200 w-4/12 p-2 mt-5 rounded-md placeholder:text-xs placeholder:text-center"
        placeholder="Search here for restaurants ...!"
        onChange={handleChange}
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
      <div className="flex flex-wrap">
        {newRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.veg ? (
              <VegOnlyRestaurants data={res} />
            ) : (
              <RestaurantCard data={res} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantContainer;
