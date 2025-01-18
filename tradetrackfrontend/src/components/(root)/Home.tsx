import React, { Suspense } from "react";
import NavBar from "./NavBar";
import { Hero } from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div id="home">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Hero />
        <About />
        <Contact />
        <Footer/>
      </Suspense>
    </div>
  );
}
