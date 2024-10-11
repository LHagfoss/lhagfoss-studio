"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

export default function NavnAnimation() {


    return (
        <div className="absolute w-[100vw] h-[100vh] md:h-[100vh] flex justify-center items-center">
            <div className="font-bestFont text-secondary flex justify-center items-center text-[25vw] h-[30vw] overflow-hidden">
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }} className="">L</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: easeInOut }} className="">h</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: easeInOut }} className="">a</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }} className="">g</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.8, ease: easeInOut }} className="">f</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className="">o</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }} className="">s</motion.div>
                <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }} className="">s</motion.div>
            </div>
            <div className="absolute font-bestFont text-secondary mt-[20.5vw] ml-[27vw] text-[5vw] overflow-hidden">
                <motion.div initial={{ y: 300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }} className="">.studio</motion.div>
            </div>
        </div>
    )
}