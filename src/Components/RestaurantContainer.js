import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

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
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (!restaurants.length) return;
  return (
    <div className="flex flex-wrap my-5">
      {restaurants.map((res, i) => (
        <RestaurantCard key={i} data={res} />
      ))}
    </div>
  );
};

export default RestaurantContainer;
