"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";

import ImageSection from "@/components/imageSection";
import NavnAnimation from "@/components/navn";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Footer from "@/components/footer";
import Project from "@/components/project";

import projectImage1 from "@/assets/googleblablalba.jpg"
import logoImage1 from "@/assets/nextjs.png"
import projectImage2 from "@/assets/image.png"

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
      <Navbar />
      <div className="w-full h-[100vh] overflow-hidden ">
        <NavnAnimation />
      </div>
      <About />
      <ImageSection />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} transition={{ delay: 4 }}>
        <div className="flex p-5 md:p-10 text-[7vw] md:text-[5vw]">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3 md:gap-5">
              <div className="text-thirdy">Latest</div>
              <div className="text-primary">projects</div>
            </div>
            <button type="button" className="text-thirdy text-[4vw] md:text-[1vw] border-2 border-primary rounded-full px-5 md:px-10 p-2 md:p-6 hover:bg-[#0000004d] transition-background duration-200">See all</button>
          </div>
        </div>
      </motion.div>
      <div className="w-full p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 md:gap-10">
        <Project imageSrc={projectImage2} title="Website / Project #1" content="some random text" iconText="Niga" logo={logoImage1} />
        <Project imageSrc={projectImage1} title="Website / Project #2" content="more random words" iconText="" logo={logoImage1} />
        <Project imageSrc={projectImage2} title="Website / Project #3" content="even more text" iconText="" logo={logoImage1} />
        <Project imageSrc={projectImage1} title="Website / Project #4" content="last random words" iconText="" logo={logoImage1} />
      </div>
      <div className="w-full h-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}