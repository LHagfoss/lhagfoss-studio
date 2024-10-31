"use client"

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll } from "framer-motion";

import NavnAnimation from "@/components/navn";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FadeIn from "@/components/fadein";
import Slider from "@/components/slider";
import Grid from "@/components/grid";
import Layer from "@/components/layer";

export default function Home() {
  const [, setIsScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
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
      <motion.div   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ scaleX: scrollYProgress }} className="bg-thirdy opacity-50 fixed bottom-0 left-0 right-0 h-1 origin-[0%] z-10" />  
      <Navbar />
      <NavnAnimation />
      <div className={`w-full h-[100vh] overflow-hidden bg-secondary duration-1000 ${ zoomIn ? "" : "" }`}>
        <div className={`w-full bg-fourth duration-1000 ${ zoomIn ? "h-[100vh]" : "h-0" }`}></div>
      </div>
      <Grid />
      <Layer />
      <FadeIn delay={0}>
        <div className="flex p-5 md:p-10 md:px-44 text-[7vw] md:text-[5vw]">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3 md:gap-5">
              <div className="text-thirdy">Latest</div>
              <div className="text-primary">projects</div>
            </div>
            <button type="button" className={`text-thirdy text-[4vw] md:text-[1vw] border-2 border-primary 
              rounded-full px-5 md:px-10 p-2 md:p-6 hover:bg-[#0000004d] transition-background duration-200`}
            >
              See all
            </button>
          </div>
        </div>
      </FadeIn>
      <Slider />
      <Footer />
    </div>
  );
};