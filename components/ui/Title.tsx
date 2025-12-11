"use client";
import React from "react";
import { motion } from "motion/react";
import { BrowseComponentsButton } from "./BrowseComponentsButton";
import BrowseBlocksButton from "./BrowseBlocksButton";

const Title = () => {
  return (
    // Updated: lg:w-[60%] (was 1/2) to take up the empty space
    // Updated: max-w-3xl (was 2xl) to let text stretch further right
    <div className="w-full lg:w-[60%] flex flex-col items-start text-left justify-center max-w-3xl px-4 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 w-fit mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
            Updated for v2.0
          </span>
        </div>

        {/* Updated: max-w-4xl to prevent header from wrapping too early */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-50 max-w-4xl">
          Build Stunning UIs with{" "}
          <span className="bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent">
            SilkUI
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 max-w-2xl">
          Premium collection of UI Components crafted using{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Tailwind
          </span>{" "}
          and{" "}
          <span className="font-semibold bg-linear-to-tr from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">
            Shadcn/UI
          </span>{" "}
          for building modern React and Next.js applications faster.
        </p>
      </motion.div>

      {/* Re-added buttons which were imported but missing in your snippet */}
      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mt-8">
        <BrowseBlocksButton />
        <BrowseComponentsButton />
      </div>
    </div>
  );
};

export default Title;