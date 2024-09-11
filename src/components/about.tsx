"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

export default function About() {


    return (
        <div className="absolute bottom-0 w-[100vw] flex justify-center items-center p-10">
            <div className="text-[#1a1a1a] flex justify-center items-center sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw]">
                <motion.div initial={{ y: 150 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.6, ease: easeInOut }} className="">I`m Lucas Hagfoss, a user experience & interface designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.</motion.div>
            </div>
        </div>
    )
}