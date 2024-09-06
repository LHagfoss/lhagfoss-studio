"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion"
import Lenis from "lenis";

export default function NavnAnimation() {


    return (
        <div className="w-[100vw] h-[70vh] flex justify-center items-center">
            <motion.div 
                initial={{  }}
                animate={{  }}
                transition={{  }}
                className="font-bestFont text-[#1a1a1a] flex justify-center items-center text-[38vw] h-[25vw] overflow-hidden"
            >
                <motion.div initial={{ y: 700 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1, ease: easeInOut }} className="">l</motion.div>
                <motion.div initial={{ y: 700 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2, ease: easeInOut }} className="">u</motion.div>
                <motion.div initial={{ y: 700 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.4, ease: easeInOut }} className="">c</motion.div>
                <motion.div initial={{ y: 700 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.6, ease: easeInOut }} className="">a</motion.div>
                <motion.div initial={{ y: 700 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.8, ease: easeInOut }} className="">s</motion.div>
            </motion.div>
        </div>
    )
}