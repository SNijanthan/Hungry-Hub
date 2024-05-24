import React from "react";
import { Link } from "react-router-dom";
import { ERROR_IMAGE } from "../Utils/constants";

const Error = () => {
  return (
    <div>
      <button className="px-5 bg-indigo-600 text-white rounded-lg py-2 m-2">
        <Link to="/">Back To Home</Link>
      </button>
      <img
        src={ERROR_IMAGE}
        alt="Error_Message"
        className="w-full h-screen object-contain"
      />
    </div>
  );
};

export default Error;
