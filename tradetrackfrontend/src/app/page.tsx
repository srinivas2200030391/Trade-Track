"use client";
import Home from "@/components/(root)/Home";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    // Add the dark class to the HTML tag after the component is mounted
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
}
