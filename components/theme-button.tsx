"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun, SunDim } from "lucide-react";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunDim size={20} /> : <Moon size={20} />}
    </Button>
  );
}
