"use client"

import { motion, easeInOut } from "framer-motion"

export default function NavnNavbar() {

    function home() {
        window.location.href = "./";
    };

    return (
        <>
            <div className={`navbar fixed justify-center items-center select-none onTop z-20 `}>
                <div className="flex w-full h-full justify-center items-center">
                    <div className={`font-bestFont text-secondary flex justify-center items-center text-[10vw] md:text-[2vw] h-[10vw] md:h-[3vw] cursor-pointer`}>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }} onClick={home}>L</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1, ease: easeInOut }} onClick={home}>h</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: easeInOut }} onClick={home}>a</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, ease: easeInOut }} onClick={home}>g</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: easeInOut }} onClick={home}>f</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5, ease: easeInOut }} onClick={home}>o</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }} onClick={home}>s</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }} onClick={home}>s</motion.div>
                    </div>
                    <div className={`absolute font-bestFont text-secondary drop-shadow-lgtext-[2vw] md:text-[0.6vw] mt-[8vw] ml-[11vw] md:mt-[1.5vw] md:ml-[2.7vw] cursor-pointer`}>
                        <motion.div initial={{ y: 300 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.8, ease: easeInOut }} onClick={home}>.studio</motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}