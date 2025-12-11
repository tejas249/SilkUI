"use client";

import React from "react";
import Link from "next/link";
import { VectorSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <VectorSquare className="w-5 h-5 text-lime-500" />
              <span className="font-bold text-lg bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent font-mono">
                SilkUI
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Modern UI components for beautiful applications.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">Product</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/docs" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/docs" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © 2024 SilkUI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">Built with</span>
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
              <span>React</span>
              <span className="text-zinc-300">•</span>
              <span>Next.js</span>
              <span className="text-zinc-300">•</span>
              <span>Tailwind</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;