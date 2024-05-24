import React from "react";
import { GROCERIES } from "../Utils/constants";

const Grocery = () => {
  return (
    <div>
      <img className="w-2/6 m-auto mt-28" alt="grocery" src={GROCERIES} />
    </div>
  );
};

export default Grocery;
