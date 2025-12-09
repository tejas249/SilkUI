"use client";

import React from "react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

const RightSide = () => {
  return (
    <div className="w-full lg:w-[55%] flex flex-col gap-8 lg:pl-8">

      {/* ------------------ Card + Action Search Bar ------------------ */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Card */}
        <div className="w-full flex flex-col items-center">
          <span className="text-sm gradient-text font-medium block text-center mb-2">
            Card
          </span>
          <div className="w-full h-40 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            {/* Placeholder */}
          </div>
        </div>

        {/* Action Search Bar */}
        <div className="w-full flex flex-col items-center">
          <span className="text-sm gradient-text font-medium block text-center mb-2">
            Action Search Bar
          </span>
          <div className="w-full max-w-[500px] h-10 rounded-xl border border-zinc-200 dark:border-zinc-800"></div>
        </div>
      </motion.div>

      {/* ------------------ AI Chat Interface ------------------ */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="w-full"
      >
        <span className="text-sm gradient-text font-medium block text-center mb-2">
          AI Chat Interface
        </span>

        <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
          {/* Placeholder */}
        </div>
      </motion.div>

      {/* ------------------ Buttons + Inputs ------------------ */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Buttons Group */}
        <div className="flex flex-col items-center">
          <span className="text-sm gradient-text font-medium block text-center mb-2">
            Buttons
          </span>

          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <Link href="/docs/components/button">
              <div className="w-full h-12 rounded-xl border border-zinc-200 dark:border-zinc-800"></div>
            </Link>

            <Link href="/docs/components/buttons">
              <div className="w-full h-12 rounded-xl border border-zinc-200 dark:border-zinc-800"></div>
            </Link>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col items-center">
          <span className="text-sm gradient-text font-medium block text-center mb-2">
            Inputs
          </span>

          <Link href="/docs/components/inputs">
            <div className="w-full h-12 rounded-xl border border-zinc-200 dark:border-zinc-800"></div>
          </Link>
        </div>
      </motion.div>

    </div>
  );
};

export default RightSide;
