"use client";
import React from "react";
import { motion } from "motion/react";
import Showcase from "./Showcase";
import { BrowseComponentsButton } from "./BrowseComponentsButton";
import BrowseBlocksButton from "./BrowseBlocksButton";

const Title = () => {
  return (
    <div className="w-full lg:w-[43%] flex flex-col items-start text-left space-y-6 max-w-md">

      {/* Heading + Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-zinc-900 dark:text-zinc-100">
          Build Stunning UIs with{" "}
          <span className="bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent">
            SilkUI
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
          Premium collection of UI Components crafted using 
          <span className="font-semibold bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Tailwind
          </span>{" "}
          and <span className="font-bold gradient-text">Shadcn/UI</span> for modern React and Next applications.
        </p>

        <div className="mt-4 text-sm text-zinc-500 flex items-center gap-2">
          Updated for latest version
          <span className="text-zinc-700 dark:text-zinc-300 text-xs">✨ New</span>
        </div>
      </motion.div>

      {/* Showcase */}
      {/* <Showcase />  // Uncomment only if using */ }

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4 mt-2">
        <BrowseBlocksButton />
        <BrowseComponentsButton />
      </div>

    </div>
  );
};

export default Title;
