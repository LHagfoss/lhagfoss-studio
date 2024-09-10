"use client"

import React from "react";

import NavnAnimation from "@components/navn";
import Navbar from "@components/navbar";
import About from "@components/about";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Navbar />
      <NavnAnimation />
      <About />
    </div>
  );
}
