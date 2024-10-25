"use client"

import React, { useEffect } from "react";
import { motion, easeInOut } from "framer-motion"
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1,ease: easeInOut }}
        className="w-[100vw] h-[100vh] flex justify-center items-center"
      >
        <Footer />
      </motion.div>
    </>
  );
}
