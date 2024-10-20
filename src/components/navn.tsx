"use client"

import React, { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion"

export default function NavnAnimation() {
    const [isScrolled, setIsScrolled] = useState(false);

    function home() {
        if (isScrolled) {
            window.location.href = "./";
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`navbar fixed justify-center items-center duration-1000 select-none ${isScrolled ? 'z-20 onTop top-[0] translate-y-[0] w-[40vw] md:w-[11vw] h-[5vh] m-5 md:m-10 p-0' : ' z-0 w-[100vw] top-[50%] translate-y-[-50%] h-[50vh] p-5 md:p-10 m-0'} `}>
                <div className="flex w-full h-full justify-center items-center">
                    <div className={`font-bestFont text-secondary flex justify-center items-center ${isScrolled ? 'text-[10vw] md:text-[3vw] h-[10vw] md:h-[3vw] cursor-pointer' : 'text-[20vw] h-[30vw]'} overflow-hidden duration-1000 cursor-default drop-shadow-lg`}>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }} onClick={home}>L</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1, ease: easeInOut }} onClick={home}>h</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: easeInOut }} onClick={home}>a</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, ease: easeInOut }} onClick={home}>g</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: easeInOut }} onClick={home}>f</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5, ease: easeInOut }} onClick={home}>o</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }} onClick={home}>s</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }} onClick={home}>s</motion.div>
                    </div>
                    <div className={`absolute font-bestFont text-secondary drop-shadow-lg ${isScrolled ? 'text-[2vw] md:text-[1vw] mt-[8vw] ml-[11vw] md:mt-[2.5vw] md:ml-[4.5vw] cursor-pointer' : 'text-[5vw] mt-[16vw] ml-[24vw]'} overflow-hidden duration-1000 cursor-default`}>
                        <motion.div initial={{ y: 300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.8, ease: easeInOut }} onClick={home}>.studio</motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}