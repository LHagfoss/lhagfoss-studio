"use client"

import React, { useEffect } from "react"
import Lenis from "lenis"
import { motion, easeInOut  } from "framer-motion"

import Navbar from "@components/navbar"
import Footer from "@/components/footer"

export default function Home() {

  useEffect( () => {
    window.scrollTo(0, 0)

    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const text1 = "Let`s create something remarkable together."
  const text2 = "Send me a message so we can start working together. Tell me your vision and goals and I will create extraordinary website for you I`m looking forward to  cooperation."

  return (
    <>
      <Navbar />
      <div className="w-full h-full overflow-hidden flex justify-center items-center">

      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1,ease: easeInOut }} className="w-[100vw] h-[100vh] flex justify-center items-center p-10">
        <div className="w-full h-full border border-black">
            <div className="flex overflow-hidden">
            {text1.split(" ").map((word, index) => (
              <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.1, ease: easeInOut }} className="p-2 text-[2vw] font-bestFont text-primary">{word}</motion.div>
            ))}
            </div>
            <div className="flex overflow-hidden">
            {text2.split(" ").map((word, index) => (
              <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.1, ease: easeInOut }} className="p-2 text-[2vw] font-bestFont text-primary">{word}</motion.div>
            ))}
            </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1,ease: easeInOut }}> <Footer /> </motion.div>
    </>
  );
}
