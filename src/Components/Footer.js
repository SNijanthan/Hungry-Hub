import React from "react";
import { APP_STORE, PLAY_STORE } from "../Utils/constants";
import Logo from "../Images/App Logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 mt-10">
        <div className=" flex items-center justify-center h-32 w-5/6 m-auto">
          <p className="font-semibold text-xl font-poppins mx-36 block">
            For better experience, download the
            <p>
              <span className="text-orange-600 text-2xl">HUNGRY HUB</span> app
              now !
            </p>
          </p>
          <img
            src={PLAY_STORE}
            alt="Play_store"
            className="w-48 mx-5 cursor-pointer"
          />
          <img
            src={APP_STORE}
            alt="App_store"
            className="w-48 cursor-pointer"
          />
        </div>
      </div>
      <div className="bg-black text-white w-full h-52">
        <div className="flex justify-center w-4/6 m-auto">
          <div className="mt-10 m-auto cursor-pointer">
            <img src={Logo} alt="App-Logo" className="w-10 inline" />
            <span className="text-orange-600 font-ubuntu font-semibold ml-2">
              HUNGRY HUB <span className="text-white text-xs">©</span>
            </span>
          </div>
          <div className="mt-10 m-auto">
            <p className="text-lg font-medium">Company</p>
            <ul className="text-slate-400 leading-8">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Team</li>
            </ul>
          </div>
          <div className="mt-10 m-auto">
            <p className="text-lg font-medium">Contact us</p>
            <ul className="text-slate-400 leading-8">
              <li className="hover:underline cursor-pointer">Help & Support</li>
              <li className="hover:underline cursor-pointer">
                Partner with us
              </li>
              <li className="hover:underline cursor-pointer">Ride with us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
