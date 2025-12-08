"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const Showcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
      className="flex flex-col w-full"
    >
      <div className="text-sm text-zinc-500 dark:text-zinc-300 flex items-center gap-2">
        <span>Updated for latest version</span>

        <span className="inline-flex items-center rounded-md bg-white dark:bg-zinc-900/30 px-2 py-1 text-xs font-medium">
          <Sparkles className="w-4 h-4 mr-1 text-zinc-800 dark:text-zinc-100" />
          <span className="text-zinc-800 dark:text-white font-semibold">New</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Showcase;
