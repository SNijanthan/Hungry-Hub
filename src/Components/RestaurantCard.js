import React from "react";
import star from "../Images/star.png";

const RestaurantCard = () => {
  return (
    <div className="w-3/12 rounded-lg my-2 hover:scale-105 cursor-pointer transform transition duration-300 ease-in-out">
      <img
        src="https://www.eatthis.com/wp-content/uploads/sites/4/2024/03/dominos-menu.jpg?quality=82&strip=1"
        alt="Restaurant"
        className=" rounded-3xl w-11/12 m-auto py-2"
      />
      <div className="mx-6">
        <h1 className="font-bold text-opacity-25 px-2">Dominos</h1>
        <div className="flex items-center">
          <img src={star} alt="star" className="pl-2 h-3" />
          <p className="px-1">30 - 40 Mins</p>
        </div>
        <p className="px-2">PIZZAS</p>
        <p className="px-2">Erode</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
