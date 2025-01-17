"use client";
import React from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "fixed top-20 inset-x-0 max-w-2xl mx-auto mt-5 z-50 bg-white dark:bg-gray-900 transition-colors duration-200",
        className
      )}>
      <Menu>
        <div className="flex items-center gap-4">
          <MenuItem item="Home" />
          <MenuItem item="About" />
          <MenuItem item="Contact" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-8 w-8 p-0">
            <Sun
              className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              color={theme === "dark" ? "white" : "black"}
            />
            <Moon
              className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              color={theme === "dark" ? "white" : "black"}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </Menu>
    </div>
  );
}
