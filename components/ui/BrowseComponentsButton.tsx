"use client";

import { Link } from "next-view-transitions";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export function BrowseComponentsButton() {
  return (
    <Link
      href="/docs/components/action-search-bar"
      className="flex items-center gap-8"
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        <Button
          className={cn(
            "relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
            "relative h-12 px-6 min-w-72 md:min-w-56",
            "bg-black dark:bg-white",
            "text-white dark:text-black",
            "border-2 border-orange-500/20 dark:border-orange-400/20",
            "shadow-gradient-green dark:shadow-gradient-green-dark",
            "backdrop-blur-xs"
          )}
        >
          <span className="font-medium">Browse Components</span>
          <ArrowDownRight className="w-5 h-5 rotate-270" />
        </Button>
      </motion.div>
    </Link>
  );
}

export default BrowseComponentsButton;