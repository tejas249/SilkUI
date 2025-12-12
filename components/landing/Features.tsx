"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Nextjs from "../Icons/nextjs";
import ShadcnIcon from "../Icons/shadcn";
import ReactIcon from "../Icons/react";
import MotionIcon from "../Icons/motion"; // ⬅️ Added your Motion SVG icon


type FeatureItemProps = {
  name: string;
  svg: React.ReactNode;
  hovered: boolean;
  onEnter: (name: string) => void;
  onLeave: () => void;
};


function FeatureItem({
  name,
  svg,
  hovered,
  onEnter,
  onLeave,
}: FeatureItemProps) {
  return (
    <motion.div
      onMouseEnter={() => onEnter(name)}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 text-left hover:cursor-pointer hover:scale-105 transition-transform"
    >
      <motion.div
        animate={{
          scale: hovered ? 1.15 : 1,
          filter: hovered
            ? "drop-shadow(0px 4px 20px rgba(6,182,212,0.40))"
            : "drop-shadow(0px 0px 0px transparent)",
        }}
        transition={{ duration: 0.25 }}
      >
        {svg}
      </motion.div>

      <motion.span
        animate={{
          scale: hovered ? 1.08 : 1,
          fontWeight: hovered ? 600 : 400,
        }}
        className="text-xs sm:text-sm text-black dark:text-white whitespace-nowrap"
      >
        {name}
      </motion.span>
    </motion.div>
  );
}


export default function Features() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col items-start justify-start py-6">
      <div
        className="
          grid grid-cols-3 
          sm:grid-cols-4 
          md:flex md:flex-wrap 
          md:justify-start
          gap-6 sm:gap-8 md:gap-10 
          w-full max-w-xl
        "
      >
        <FeatureItem
          name="TailwindCSS"
          svg={
            <svg viewBox="0 0 54 33" className="w-9 h-9">
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="url(#tw-gradient)"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 
                  9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 
                  13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 
                  13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 
                  3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 
                  27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 
                  2.004 5.147 3.653C17.244 29.29 20.308 32.4 
                  27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 
                  4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 
                  19.31 20.192 16.2 13.5 16.2z"
                />
              </g>
              <defs>
                <linearGradient id="tw-gradient" x1="0" y1="0" x2="54" y2="33">
                  <stop offset="0%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          }
          hovered={hoveredItem === "TailwindCSS"}
          onEnter={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
        />

        <FeatureItem
          name="Motion"
          svg={<MotionIcon className="w-9 h-9" />}
          hovered={hoveredItem === "Motion"}
          onEnter={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
        />

        <FeatureItem
          name="shadcn/ui"
          svg={<ShadcnIcon className="w-9 h-9 text-black dark:text-white" />}
          hovered={hoveredItem === "shadcn/ui"}
          onEnter={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
        />

        <FeatureItem
          name="Next.js"
          svg={<Nextjs className="w-9 h-9" />}
          hovered={hoveredItem === "Next.js"}
          onEnter={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
        />

        <FeatureItem
          name="React"
          svg={<ReactIcon className="w-9 h-9" />}
          hovered={hoveredItem === "React"}
          onEnter={setHoveredItem}
          onLeave={() => setHoveredItem(null)}
        />
      </div>
    </div>
  );
}
