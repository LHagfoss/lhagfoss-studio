"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";
import { motion, easeInOut } from "framer-motion"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <div className="mt-[120px] md:mt-0 w-[100vw] md:h-[100vh] md:p-0 px-5 flex flex-col gap-5 md:gap-0 md:grid md:grid-rows-8 md:grid-cols-16">
        <img src="https://via.placeholder.com/1380x800.png?text=Image+1" alt="Image 1" className="row-span-4 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+2" alt="Image 2" className="row-span-3 col-span-4 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+3" alt="Image 3" className="row-span-5 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+4" alt="Image 4" className="row-span-2 col-span-6 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+5" alt="Image 5" className="row-span-3 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+6" alt="Image 6" className="row-span-3 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+7" alt="Image 7" className="row-span-2 col-span-4 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+8" alt="Image 8" className="row-span-4 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+9" alt="Image 9" className="row-span-3 col-span-5 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+10" alt="Image 10" className="row-span-3 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+11" alt="Image 11" className="row-span-3 col-span-2 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
        <img src="https://via.placeholder.com/1380x800.png?text=Image+12" alt="Image 12" className="row-span-3 col-span-3 object-cover w-full h-full cursor-pointer rounded-3xl md:rounded-none" />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1, ease: easeInOut }} className="mt-8"> <Footer /> </motion.div>
    </>
  );
}
