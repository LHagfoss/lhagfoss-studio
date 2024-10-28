"use client"

import React, { useEffect, useState } from "react";
import Lenis from "lenis";

import ImageSection from "@/components/imageSection";
import NavnAnimation from "@/components/navn";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "@/components/fadein";
import Slider from "@/components/slider";
import Grid from "@/components/grid";

export default function Home() {
  const [, setIsScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setZoomIn(true);
    }, 700);

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        };
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${ zoomIn ? "" : "overflow-hidden w-[100vw] h-[100vh]" }`}>
      <Navbar />
      <NavnAnimation />
      <div className={`w-full h-[100vh] overflow-hidden bg-secondary duration-1000 ${ zoomIn ? "p-0" : "p-[50vw]" }`}>
        <div className={`w-full h-full bg-fourth duration-1500 ${ zoomIn ? "rounded-none" : "rounded-full" }`}></div>
      </div>
      <Grid />
      <FadeIn delay={0}>
        <div className="flex p-5 md:p-10 md:px-44 text-[7vw] md:text-[5vw]">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3 md:gap-5">
              <div className="text-thirdy">Latest</div>
              <div className="text-primary">projects</div>
            </div>
            <button type="button" className="text-thirdy text-[4vw] md:text-[1vw] border-2 border-primary rounded-full px-5 md:px-10 p-2 md:p-6 hover:bg-[#0000004d] transition-background duration-200">See all</button>
          </div>
        </div>
      </FadeIn>
      <Slider />
      <Footer />
    </div>
  );
}
