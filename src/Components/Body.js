import React from "react";
import RestaurantContainer from "./RestaurantContainer";
import CarouselComponent from "./CarouselComponent";

const Body = () => {
  return (
    <div className="w-5/6 m-auto my-5">
      <h1 className="font-bold text-xl font-poppins mt-9">
        What's on your mind?
      </h1>
      <CarouselComponent />
      <RestaurantContainer />
    </div>
  );
};

export default Body;
