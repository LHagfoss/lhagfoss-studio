"use client"

import React, { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion"

export default function NavnAnimation() {
    const [isScrolled, setIsScrolled] = useState(false);

    function home() {
        window.open("./");
    };
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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
            <div className={`navbar fixed justify-center items-center duration-1000 cursor-pointer ${isScrolled ? 'w-[40vw] md:w-[11vw] h-[5vh] m-5 md:m-10 p-0' : 'w-[100vw] h-[100vh] p-5 md:p-10 m-0'} `} onClick={home}>
                <div className="flex w-full h-full justify-center items-center">
                    <div className={`font-bestFont text-secondary flex justify-center items-center ${isScrolled ? 'text-[10vw] md:text-[3vw] h-[10vw] md:h-[3vw]' : 'text-[25vw] h-[30vw]'} overflow-hidden duration-1000`}>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }} className="">L</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1, ease: easeInOut }} className="">h</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: easeInOut }} className="">a</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, ease: easeInOut }} className="">g</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: easeInOut }} className="">f</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5, ease: easeInOut }} className="">o</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }} className="">s</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }} className="">s</motion.div>
                    </div>
                    <div className={`absolute font-bestFont text-secondary ${isScrolled ? 'text-[2vw] md:text-[1vw] mt-[8vw] ml-[11vw] md:mt-[2.5vw] md:ml-[4.5vw]' : 'text-[5vw] mt-[20.5vw] ml-[27vw]'} overflow-hidden duration-1000`}>
                        <motion.div initial={{ y: 300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.8, ease: easeInOut }} className="">.studio</motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}