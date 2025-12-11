"use client";

import React from "react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const RightSide = () => {
  return (
    <div className="w-full flex flex-col gap-6">

      {/* ==================== Hero Card Grid ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Card 1: Components */}
        <Link href="/docs" className="group">
          <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 bg-linear-to-br from-white to-zinc-50 dark:from-zinc-950 dark:to-black/50 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-lime-500/10">
            <div className="absolute inset-0 bg-linear-to-br from-lime-500/5 to-cyan-400/5 dark:from-lime-500/10 dark:to-cyan-400/10"></div>
            
            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-lime-500 to-cyan-400 opacity-80 mb-3"></div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Components</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Beautifully crafted UI components</p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-cyan-400 text-sm font-medium gap-2 group-hover:gap-3 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>

        {/* Card 2: Documentation */}
        <Link href="/docs" className="group">
          <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 bg-linear-to-br from-white to-zinc-50 dark:from-zinc-950 dark:to-black/50 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-400/10">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 to-lime-500/5 dark:from-cyan-400/10 dark:to-lime-500/10"></div>
            
            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-400 to-lime-500 opacity-80 mb-3"></div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Documentation</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Complete guides and examples</p>
              </div>
              <div className="flex items-center text-cyan-600 dark:text-lime-400 text-sm font-medium gap-2 group-hover:gap-3 transition-all">
                Learn <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* ==================== Feature Showcase Cards ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full"
      >
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 bg-linear-to-br from-white to-zinc-50 dark:from-zinc-950 dark:to-black/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-linear-to-br from-lime-500/10 via-transparent to-cyan-400/10 dark:from-lime-500/5 dark:via-transparent dark:to-cyan-400/5"></div>
          
          <div className="relative p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-lime-500 to-cyan-400 opacity-90 flex items-center justify-center">
                <span className="text-white font-bold text-lg">✨</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Modern Stack</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">React 19 + TypeScript + Tailwind</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">Next.js</span>
                <span className="text-lg font-bold bg-linear-to-r from-lime-500 to-cyan-400 bg-clip-text text-transparent">16+</span>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">React</span>
                <span className="text-lg font-bold bg-linear-to-r from-cyan-400 to-lime-500 bg-clip-text text-transparent">19</span>
              </div>
              <div className="flex flex-col gap-1 p-3 rounded-lg bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800/50">
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">TypeScript</span>
                <span className="text-lg font-bold bg-linear-to-r from-lime-500 to-cyan-400 bg-clip-text text-transparent">5+</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ==================== CTA Buttons ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full flex flex-col sm:flex-row gap-3"
      >
        <Link href="/docs" className="flex-1">
          <Button className="w-full bg-linear-to-r from-lime-500 to-cyan-400 hover:from-lime-600 hover:to-cyan-500 text-black font-semibold rounded-xl h-12 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/30">
            Get Started
          </Button>
        </Link>
        <Link href="/docs" className="flex-1">
          <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 rounded-xl h-12 font-semibold transition-all duration-300">
            View Components
          </Button>
        </Link>
      </motion.div>

    </div>
  );
};

export default RightSide;
