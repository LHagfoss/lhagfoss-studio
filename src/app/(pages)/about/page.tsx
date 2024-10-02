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
      <div className="w-full mt-[100px] md:mt-0 px-5 md:px-10">
        <AboutMeList />
      </div>
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
