import React, { useState } from "react";
import logo from "../Images/App Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";

const Header = () => {
  const [logIn, isLogIn] = useState(true);

  const onlineStatus = useOnlineStatus();

  const handleLogInBtn = () => {
    isLogIn(!logIn);
  };
  return (
    <div className="flex items-center justify-between py-2 pb-4 px-16 bg-black bg-opacity-95 text-white shadow-2xl">
      <div>
        <img src={logo} alt="Logo" className="w-10 mx-10" />
        <h1 className="text-orange-500 font-bold text-lg ml-3">Hungry Hub</h1>
      </div>
      <div className="mx-5">
        <ul className="flex items-center justify-center cursor-pointer font-medium">
          <li className="mx-3 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">Cart</li>
          <li
            className="mx-3 hover:text-orange-500 w-24 bg-gray-400 text-white hover:bg-black px-6 py-1 rounded-md text-center"
            onClick={handleLogInBtn}
          >
            {logIn ? "Login" : "Logout"}
          </li>
          <li className="cursor-none">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
