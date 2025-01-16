"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark", theme !== "dark");
  };

  return (
    <div
      className={cn(
        "fixed top-20 inset-x-0 max-w-2xl mx-auto mt-5 z-50",
        className
      )}>
      <Menu>
        <div className="flex items-center gap-4">
          <MenuItem item="Services" />
          <MenuItem item="Products" />
          <MenuItem item="Pricing" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8 p-0">
            <Sun
              className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              color={theme === "dark" ? "white" : "black"}
            />
            <Moon
              className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              color="white"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </Menu>
    </div>
  );
}
