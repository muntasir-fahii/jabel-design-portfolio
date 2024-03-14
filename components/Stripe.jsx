import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Stripe = () => {
  return (
    <div className="container relative mx-auto px-5">
      <div className=" hidden lg:block line absolute top-0 right-0 h-[860px] bottom-0">
        <div className="h-full w-[328px]  flex justify-between">
          <span className="border border-gray border-opacity-70 h-full"></span>
          <span className="border border-gray border-opacity-70 h-full"></span>
          <span className="border border-gray border-opacity-70 h-full"></span>
          <span className="border border-gray border-opacity-70 h-full"></span>
          <span className="border border-gray border-opacity-70 h-full"></span>
          <span className="border border-gray border-opacity-70 h-full"></span>
        </div>
      </div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Stripe;
