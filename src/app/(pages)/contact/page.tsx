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

  const text1Part1 = "Let`s create something";
  const text1Part2 = "remarkable together.";
  const text2 = "Send me a message so we can start working together. Tell me your vision and goals and I will create extraordinary website for you I`m looking forward to cooperation."

  return (
    <>
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1,ease: easeInOut }} className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-full h-full flex flex-col md:flex-row">
            <div className="md:flex-1 flex flex-col leading-3 md:leading-10 border border-black p-4 py-10 md:p-20 md:py-52">
              <div className="flex">
                {text1Part1.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.1, ease: easeInOut }} className="p-2 font-clashDisM text-primary text-[7vw] md:text-[3.5vw]">{word}</motion.div>
                ))}
              </div>
              <div className="flex">
                {text1Part2.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.5 + index * 0.1, ease: easeInOut }} className="p-2 font-clashDisM text-thirdy text-[7vw] md:text-[3.5vw]">{word}</motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex overflow-hidden border border-black p-4 md:p-20 md:py-52">
                <div className="flex-1 flex flex-wrap flex-row h-[1vh] leading-7">
                  {text2.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.01, ease: easeInOut }} className="px-1 text-thirdy font-bricoGrotSB text-[5vw] md:text-[1.5vw]">{word}</motion.div>
                  ))}
                </div>
            </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1,ease: easeInOut }}> <Footer /> </motion.div>
    </>
  )
}