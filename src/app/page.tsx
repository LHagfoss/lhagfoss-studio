"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";

import NavnAnimation from "@components/navn";
import Navbar from "@components/navbar";
import About from "@components/about";
import Footer from "@components/footer";


export default function Home() {

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <div className="w-full h-[130vh] overflow-hidden">
        <Navbar />
        <NavnAnimation />
        <About />
      </div>
      <div className="w-full h-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
      