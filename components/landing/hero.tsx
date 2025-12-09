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
        min-h-[85vh]
        flex flex-col 
        items-start
        justify-start 
        gap-8 
        px-4 sm:px-6 
        pt-10 sm:pt-16
      "
    >
      {/* LEFT SIDE (unchanged, stays exactly like your screenshot) */}
      <Title />
      <Features />

      {/* RIGHT SIDE — fixed on the right on large screens */}
      <div
        className="
          w-full 
          lg:w-[55%] 
          lg:absolute 
          lg:top-0 
          lg:right-0 
          lg:h-full 
          flex flex-col 
          justify-center 
          gap-6 
          lg:pl-8
        "
      >
        <RightSide />
      </div>

    </div>
  );
};

export default HeroSection;
