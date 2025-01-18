import React from "react";
import { MovingCards } from "./MovingCards";
import SparklesText from "../ui/sparkles-text";

export default function About() {
  return (
    <div id="about">
      <SparklesText
        text="About"
        className="text-center translate-y-8 font-bold text-1xl md:text-3xl lg:text-6xl"
      />
      <MovingCards />
    </div>
  );
}
