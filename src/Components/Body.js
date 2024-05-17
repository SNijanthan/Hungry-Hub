import React from "react";
import RestaurantContainer from "./RestaurantContainer";
import CarouselComponent from "./CarouselComponent";

const Body = () => {
  return (
    <div className="w-5/6 m-auto my-5">
      <h1 className="font-bold text-xl font-poppins">What's on your mind?</h1>
      <CarouselComponent />
      <input
        type="text"
        className="border border-black w-4/12 p-2 mt-5 rounded-md placeholder:text-xs placeholder:text-center"
        placeholder="Search here for restaurants ...!"
      />
      <button className="hover:bg-black text-white mx-2 p-2 rounded-md font-light bg-gray-500 w-28">
        Search
      </button>
      <RestaurantContainer />
    </div>
  );
};

export default Body;
