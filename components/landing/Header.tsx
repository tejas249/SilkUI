"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VectorSquare, Menu, X } from "lucide-react";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import { Badge } from "../ui/badge";
import { ThemeToggle } from "../ui/theme-toggle";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full">
      <div className="bg-white/5 dark:bg-black/5 w-full shadow-lg  backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-700/60">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between w-full px-4 md:px-8 h-16">
         
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
            <VectorSquare className="text-linear-to-tr from-blue-50 to-slate-700 w-6 h-6 dark:text-white" />
            
              <span className="hidden sm:block font-bold text-xl bg-linear-to-tr from-lime-500 to-cyan-400 bg-clip-text text-transparent font-mono">
                SilkUI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center gap-7 ml-6">
              <ViewTransitionsLink
                href="/docs/components/background-paths"
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Components
              </ViewTransitionsLink>

              <ViewTransitionsLink
                href="/pricing"
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Pricing
              </ViewTransitionsLink>

              <Link
                href="#"
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Templates
                <Badge variant="brand" className="ml-1">New</Badge>
              </Link>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <ThemeToggle />
            </div>

         
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden p-2 rounded-md hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 transition"
            >
              {open ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="sm:hidden w-full px-4 pb-4 animate-in fade-in slide-in-from-top-3">
            <nav className="flex flex-col gap-4 pt-2 text-gray-800 dark:text-gray-200">
              <Link href="/docs/components/background-paths" onClick={() => setOpen(false)}>
                Components
              </Link>

              <Link href="/pricing" onClick={() => setOpen(false)}>
                Pricing
              </Link>

              <Link href="#" onClick={() => setOpen(false)}>
                Templates <Badge variant="brand" className="ml-1">New</Badge>
              </Link>

              <div className="pt-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
