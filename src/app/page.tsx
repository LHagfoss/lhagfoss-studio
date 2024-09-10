"use client"

import React, { useEffect } from "react";
import { usePathname } from 'next/navigation';

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