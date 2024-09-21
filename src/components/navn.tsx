"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

export default function NavnAnimation() {


    return (
        <div className="absolute w-[100vw] h-[70vh] sm:h-[70vh] md:h-[50vh] flex justify-center items-center">
            <div className="font-clashDisM text-[#1a1a1a] flex justify-center items-center text-[30vw] h-[30vw] overflow-hidden">
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }} className="">L</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, ease: easeInOut }} className="">u</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }} className="">c</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.9, ease: easeInOut }} className="">a</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.1, ease: easeInOut }} className="">s</motion.div>
            </div>
        </div>
    )
}