"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"

export default function SecondName() {

    function home() {
        window.location.href = "./";
    };

    return (
        <>
            <div className="navbar over z-10 top-0 fixed justify-center items-center duration-1000 w-[40vw] md:w-[11vw] h-[5vh] m-5 md:m-10 p-0 cursor-pointer" onClick={home}>
                <div className="flex w-full h-full justify-center items-center">
                    <div className="font-bestFont text-secondary flex justify-center items-center text-[10vw] md:text-[3vw] h-[10vw] md:h-[3vw] overflow-hidden">
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0, ease: easeInOut }}>L</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .1, ease: easeInOut }}>h</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .2, ease: easeInOut }}>a</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .3, ease: easeInOut }}>g</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .4, ease: easeInOut }}>f</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .5, ease: easeInOut }}>o</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .6, ease: easeInOut }}>s</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .7, ease: easeInOut }}>s</motion.div>
                    </div>
                    <div className="absolute font-bestFont text-secondary cursor-pointer text-[2vw] md:text-[1vw] mt-[8vw] ml-[11vw] md:mt-[2.5vw] md:ml-[4.5vw] overflow-hidden">
                        <motion.div initial={{ y: 300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: .8, ease: easeInOut }}>.studio</motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}