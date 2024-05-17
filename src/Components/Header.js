import React from "react";
import logo from "../Images/App Logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 pb-4 px-2 shadow-lg">
      <div>
        <img src={logo} alt="Logo" className="w-1/12 mx-9" />
        <h1 className="text-orange-500 font-bold text-xl">Hungry Hub</h1>
      </div>
      <div className="mx-16">
        <ul className="flex items-center justify-center cursor-pointer font-light">
          <li className="mx-3">Home</li>
          <li className="mx-3">Contact Us</li>
          <li className="mx-3">About Us</li>
          <li className="mx-3">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
