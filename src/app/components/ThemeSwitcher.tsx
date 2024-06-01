"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "light") {
    return <FaMoon onClick={() => setTheme("dark")} />;
  }

  if (theme === "dark") {
    return <FaSun onClick={() => setTheme("light")} />;
  }
}
