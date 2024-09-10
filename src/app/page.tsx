"use client"

import React, { useEffect } from "react";
import { usePathname } from 'next/navigation';
import * as gtag from '../lib/gtag';

import NavnAnimation from "@components/navn";
import Navbar from "@components/navbar";
import About from "@components/about";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <NavnAnimation />
      <About />
    </>
  );
}