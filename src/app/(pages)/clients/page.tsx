"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AboutMeList } from "@/components/aboutmelist"

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1,ease: easeInOut }}
        className="w-full mt-[100px] md:mt-0 p-5 md:p-10 flex flex-col md:flex-row gap-0 md:gap-10"
      >
        <div className="md:w-1/2">
          <AboutMeList />
        </div>
        <div className="md:w-1/2">
          <AboutMeList />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1, ease: easeInOut }}> <Footer /> </motion.div>
    </>
  );
}
