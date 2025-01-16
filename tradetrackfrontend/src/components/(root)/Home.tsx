import React, { Suspense } from "react";
import NavBar from "./NavBar";
import { Hero } from "./Hero";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Hero />
      </Suspense>
    </div>
  );
}
