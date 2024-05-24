import React from "react";
import RestaurantContainer from "./RestaurantContainer";
import CarouselComponent from "./CarouselComponent";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";
import Error from "./Error";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <>
        <p className="mt-10 text-center">Not connected to internet</p>
        <p className="text-center">Check the internet Connection</p>
        <Error />
      </>
    );
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
