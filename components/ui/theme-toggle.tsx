"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label="Toggle Theme"
      className="
      relative flex items-center justify-center w-10 h-10 rounded-xl
      bg-zinc-100 dark:bg-zinc-800
      shadow-inner hover:bg-zinc-200 dark:hover:bg-zinc-700
      transition-all duration-300 
    "
    >
      <Sun
        className={clsx(
          "absolute w-5 h-5 text-bg-gradient-to-tr from-orange-600 to-indigo-600 transition-all duration-500",
          isLight
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-50"
        )}
      />

      <Moon
        className={clsx(
          "absolute w-5 h-5 text-indigo-300 transition-all duration-500",
          !isLight
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50"
        )}
      />
    </button>
  );
}
