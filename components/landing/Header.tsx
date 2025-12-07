import React from "react";
import Link from "next/link";
import { Flame } from "lucide-react";

import { Link as ViewTransitionsLink } from "next-view-transitions";
import { Badge } from "../ui/badge";
const Header = () => {
  return (
    <>
      {/* Header Section */}
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-white dark:bg-black/5 w-full">
          {/* Add your header content here */}
          <div className="flex items-center justify-center w-full flex-col">
            <div className="flex items-center justify-between bg-linear bg-linear-to-b from-white/90 via-gray-50/90 to-white/90 dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90 shadow-[0px_2px_20px_rgba(0,0,0,0.1)] dark:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] backdrop-blur-md border-x border-b border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)] w-full max-w-7xl px-4 py-2.5 md:px-8 h-16 sm:min-w-[800px] sm:max-w-[1200px] rounded-b-[28px] transition-all duration-300 ease-in-out ">
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                  <Link href="/" className="flex items-center gap-2">
                    <Flame className="text-yellow-500 w-6 h-6 dark:text-white" />
                    <span className="hidden sm:block font-bold text-xl dark:text-white text-gray-900">
                      SilkUI
                    </span>
                  </Link>

                  <span className="text-zinc-300 dark:text-zinc-700"></span>

                  {/* Desktop navigation Section */}
                  <div className="hidden sm:flex items-center gap-4">
                    <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      Components
                    </ViewTransitionsLink>
                    <ViewTransitionsLink
                      href="/pricing"
                      className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      Pricing
                    </ViewTransitionsLink>

                    <Link
                      href={"#"}
                      target="_blank"
                      className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      Templates
                      <Badge variant="brand" className="ml-1">
                        New
                      </Badge>
                    </Link>
                  </div>
                </div>

                {/* Right side Section */}
                <div className="hidden sm:flex items-center gap-3">
                     <span className="text-zinc-300 dark:text-zinc-700">
                        
                     </span>
                     
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
