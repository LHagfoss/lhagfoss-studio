"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] overflow-hidden flex justify-center items-center">

      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1, ease: easeInOut }}> <Footer /> </motion.div>
    </>
  );
}
