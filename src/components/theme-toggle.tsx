// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <article>
      <Button
        isIconOnly
        variant="faded"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex justify-center items-center">
        <Moon className={theme === "dark" ? "hidden" : "block"} />
        <Sun className={theme === "dark" ? "block" : "hidden"} />
      </Button>
    </article>
  );
}
