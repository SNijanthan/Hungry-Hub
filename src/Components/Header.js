import React, { useState } from "react";
import logo from "../Images/App Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";
import { useSelector } from "react-redux";
import { CART_ICON } from "../Utils/constants";
// import userContext from "../Utils/UserContext";
// import PremiumUser from "../Utils/PremiumUser";

const Header = () => {
  const [logIn, isLogIn] = useState(true);

  const onlineStatus = useOnlineStatus();

  // const { loggedInUser, defaultUser } = useContext(userContext);

  // const { premiumUser } = useContext(PremiumUser);

  const cartItems = useSelector((store) => store.cart.items);

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
          {/* <li>{premiumUser ? "🌟" : "⭐"}</li> */}
          <li className="mx-3 hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="mx-3 hover:text-orange-500">
            <Link to="/cart">
              <p className=" text-orange-500 rounded-3xl bg-white text-center w-5 -mt-3 ml-[15px] font-semibold absolute ">
                {cartItems.length}
              </p>
              <img src={CART_ICON} alt="cart" className="w-10" />
            </Link>
          </li>
          <li
            className="mx-3 hover:text-orange-500 w-24 bg-gray-400 text-white hover:bg-black px-6 py-1 rounded-md text-center"
            onClick={handleLogInBtn}
          >
            <button>{logIn ? `Logout` : "Login"}</button>
          </li>
          {/* <li className="w-24 mx-3">{logIn ? loggedInUser : defaultUser}</li> */}
          <li className="cursor-none">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
