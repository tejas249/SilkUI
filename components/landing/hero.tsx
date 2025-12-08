import React from "react";
import Title from "../ui/Title";
import Features from "./Features";

const HeroSection = () => {
  return (
    <div
      className="
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
      <Title />

      {/* Features under Title */}
    
      <Features />



      {/* Component Section right  */}
      
    </div>
  );
};

export default HeroSection;
