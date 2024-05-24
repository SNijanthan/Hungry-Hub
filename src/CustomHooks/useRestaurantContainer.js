import { useEffect, useState } from "react";
import { RESTAURANTS_API_URL } from "../Utils/constants";

const useRestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");

  const [restaurants, setRestaurants] = useState([]);

  const [newRestaurants, setNewRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API_URL);
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
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setNewRestaurants(search);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return {
    restaurants,
    newRestaurants,
    filteredRestaurants,
    restaurantSearch,
    handleChange,
    searchText,
  };
};

export default useRestaurantContainer;
