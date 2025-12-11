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
        gap-6 lg:gap-16 // Slightly increased gap for visual separation
        px-4 sm:px-6 
        py-10 sm:py-16 lg:py-20
      "
    >
      {/* LEFT SIDE: Increased width to 60% (was 45%) */}
      <div className="w-full lg:w-[60%] flex flex-col gap-6">
        <Title />
        <Features />
      </div>

      {/* RIGHT SIDE: Adjusted width to 40% (was 45%) */}
      <div className="w-full lg:w-[40%]">
        <RightSide />
      </div>

    </div>
  );
};

export default HeroSection;