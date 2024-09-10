"use client"

import React from "react";

import NavnAnimation from "@components/navn";
import Navbar from "@components/navbar";
import About from "@components/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavnAnimation />
      <About />
    </>
  );
}
