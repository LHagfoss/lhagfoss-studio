"use client"

import React, { useEffect } from "react";
import FadeIn from "@/components/fadein";
import Lenis from "lenis";

import Navbar from "@/components/navbar"
import SecondName from "@/components/secondnavn";
import Footer from "@/components/footer";
import Grid from "@/components/grid";

export default function Home() {

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <SecondName />
      <Grid />
      <Footer />
    </>
  );
}
