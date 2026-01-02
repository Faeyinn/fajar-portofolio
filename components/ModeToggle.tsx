"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="rounded-full p-2 relative w-[2.2rem] h-[2.2rem]">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full w-10 h-10 grid place-items-center hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] col-start-1 row-start-1 transition-all duration-300 text-foreground ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] col-start-1 row-start-1 transition-all duration-300 text-zinc-900 dark:text-primary ${
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
