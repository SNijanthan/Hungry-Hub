import React from "react";
import { ABOUT_PAGE, FOOD_IMAGE } from "../Utils/constants";

const About = () => {
  return (
    <div>
      <p className="absolute bg-black text-white justify-center flex items-center w-full h-40 mt-[17%] font-thin text-7xl  bg-opacity-85 tracking-widest">
        BETTER FOOD FOR MORE PEOPLE
      </p>
      <img src={FOOD_IMAGE} alt="food_image" />
      <div className="flex items-center justify-between m-auto mt-10 w-10/12">
        <div className="w-6/12">
          <h1 className="font-medium text-5xl">
            <span className=" border-b-4 border-orange-600">Who</span> are we ?
          </h1>
          <p className="mt-6 leading-8 text-gray-500 text-pretty">
            Launched in 2024, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>
        <img src={ABOUT_PAGE} alt="pic" className="h-96 rounded-xl" />
      </div>
    </div>
  );
};

export default About;
