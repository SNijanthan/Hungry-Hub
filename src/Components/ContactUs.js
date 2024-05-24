import React from "react";
import { CONTACT_IMAGE } from "../Utils/constants";

const ContactUs = () => {
  return (
    <div className="w-5/6 m-auto mt-16 font-ubuntu">
      <div className="flex items-center justify-between">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col leading-[3.5rem]"
        >
          <h1 className="font-bold text-3xl text-blue-600">Drop us a line</h1>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="What's your full name?"
            className="h-10 border border-gray-400 rounded-lg p-2 placeholder:text-xs w-96"
          />
          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-10 border border-gray-400 rounded-lg p-2 placeholder:text-xs"
          />
          <label>Message</label>
          <textarea
            placeholder="Write your message for the team here"
            className="h-28 border border-gray-400 rounded-lg placeholder:text-xs placeholder:p-2"
          ></textarea>
          <button className="hover:text-orange-500 bg-gray-400 text-white hover:bg-black rounded-lg text-center mt-5">
            Submit
          </button>
        </form>
        <img src={CONTACT_IMAGE} alt="contact-us" />
      </div>
    </div>
  );
};

export default ContactUs;
