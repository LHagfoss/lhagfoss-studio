"use client"

import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion"

import Navbar from "./navbar";

export default function Footer() {
    const [date, setDate] = useState(new Date().toLocaleDateString());

    const updateDate = () => {
        setDate(new Date().toLocaleDateString());
    };

  return (
    <>
      <Navbar />
      <div className="w-full h-full overflow-hidden flex justify-center items-center">
        <div className="bg-primary w-[80vw] h-[65vh] rounded-[2vw] p-10 font-bestFont">
          <div className="text-secondary text-[2vw]">Let`s create something remarkable together.</div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 5, ease: easeInOut }} className="font-bestFont"><div className="fixed bottom-0 left-0 m-10">V.0.5</div></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 5, ease: easeInOut }} className="font-bestFont">
                <div className="fixed bottom-0 right-0 m-10 text-end">
                    <div className="">norway, krs</div>
                    <div className="" onClick={updateDate}>{date}</div>
                </div>
            </motion.div>
      </div>

    </>
  );
}
