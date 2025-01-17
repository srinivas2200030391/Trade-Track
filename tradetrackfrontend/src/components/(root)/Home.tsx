import React, { Suspense } from "react";
import NavBar from "./NavBar";
import { Hero } from "./Hero";
import About from "./About";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Hero />
        <About/>
      </Suspense>
    </div>
  );
}
