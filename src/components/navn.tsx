"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

export default function NavnAnimation() {

    return (
        <>
            <div className={`absolute justify-center items-center duration-1000 select-none z-20 w-[100vw] top-[50%] translate-y-[-50%] h-[50vh] p-5 md:px-10 m-0 origin-center`}>
                <div className="flex w-full h-full justify-center items-center">
                    <div className={`font-bestFont text-secondary flex justify-center items-center text-[25vw] h-[30vw] overflow-hidden duration-1000 cursor-default drop-shadow-lg`}>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }}>L</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1, ease: easeInOut }}>h</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: easeInOut }}>a</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, ease: easeInOut }}>g</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: easeInOut }}>f</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5, ease: easeInOut }}>o</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }}>s</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }}>s</motion.div>
                    </div>
                    <div className={`absolute font-bestFont text-secondary drop-shadow-lg text-[7vw] mt-[19.5vw] ml-[31vw] overflow-hidden duration-1000 cursor-default`}>
                        <motion.div initial={{ y: 300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.8, ease: easeInOut }}>.studio</motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}