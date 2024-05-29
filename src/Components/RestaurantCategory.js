import React from "react";
import ItemList from "./ItemList";
import { DROP_DOWN_IMAGE, DROP_UP_IMAGE } from "../Utils/constants";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const { title, itemCards } = data?.card?.card;

  const lengthOfCategory = data?.card?.card?.itemCards.length;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="m-8 p-3 shadow-md">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-extrabold font-ubuntu">
          {title} <span>({lengthOfCategory})</span>
        </p>
        <img
          src={showIndex ? DROP_UP_IMAGE : DROP_DOWN_IMAGE}
          alt="Dropdown"
          className="h-5"
        />
      </div>
      {showIndex &&
        itemCards.map((res) => (
          <ItemList key={res.card.info.id} data={res.card.info} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
