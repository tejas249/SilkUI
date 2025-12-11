import React from "react";
import Title from "../ui/Title";
import Features from "./Features";
import RightSide from "./RightSide";

const HeroSection = () => {
  return (
    <div
      className="
        relative
        mx-auto w-full max-w-7xl 
        min-h-auto
        flex flex-col lg:flex-row
        items-start
        justify-between
        gap-8 lg:gap-12
        px-4 sm:px-6 
        py-10 sm:py-16 lg:py-20
      "
    >
      {/* LEFT SIDE */}
      <div className="w-full lg:w-[45%] flex flex-col gap-6">
        <Title />
        <Features />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[45%]">
        <RightSide />
      </div>

    </div>
  );
};

export default HeroSection;
