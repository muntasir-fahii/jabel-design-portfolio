import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";

const Stripe = () => {
  return (
    <div className="container relative mx-auto">
      <div className=" hidden lg:block line absolute top-0 right-0 h-[870px] bottom-0">
        <div className="h-full w-[320px] flex justify-between">
          <span className="border border-gray h-full"></span>
          <span className="border border-gray h-full"></span>
          <span className="border border-gray h-full"></span>
          <span className="border border-gray h-full"></span>
          <span className="border border-gray h-full"></span>
          <span className="border border-gray h-full"></span>
        </div>
      </div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
};

export default Stripe;
