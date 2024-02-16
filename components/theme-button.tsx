"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  );
}
