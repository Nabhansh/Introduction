import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816]">
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
