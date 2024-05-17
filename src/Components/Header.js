import React from "react";
import logo from "../Images/App Logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 pb-4 px-36 shadow-lg">
      <div>
        <img src={logo} alt="Logo" className="w-10 mx-10" />
        <h1 className="text-orange-500 font-bold text-lg ml-3">Hungry Hub</h1>
      </div>
      <div className="mx-10">
        <ul className="flex items-center justify-center cursor-pointer font-medium">
          <li className="mx-8 hover:text-orange-500">Home</li>
          <li className="mx-8 hover:text-orange-500">Contact Us</li>
          <li className="mx-8 hover:text-orange-500">About Us</li>
          <li className="mx-8 hover:text-orange-500">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
