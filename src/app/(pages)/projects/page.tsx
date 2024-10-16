"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

import Navbar from "@/components/secondnavbar"
import SecondName from "@/components/secondnavn";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SecondName />
      <div className="w-full h-full overflow-hidden flex justify-center items-center">

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
