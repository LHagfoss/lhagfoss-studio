"use client"

import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion"
import Link from "next/link";

export default function Navbar() {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const updateDate = () => {
        setDate(new Date().toLocaleDateString());
        updateDate()
    };

    return (
        <div className="navbar fixed w-[100vw] flex justify-center items-center p-10">
            <div className="w-full font-bestFont text-[#1a1a1a] justify-between items-start tracking-wide sm:text-[2.5vw] sm:hidden md:text-[2vw] md:flex lg:text-[1.5vw] lg:flex hidden">
                <div className="flex flex-col">
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className=""><Link href="/">lucas</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }} className=""><Link href="/">digital studio</Link></motion.div>
                </div>
                <div className="flex flex-col leading-10">
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }} className=""><Link href="/">work</Link></motion.div>
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }} className=""><Link href="/">about</Link></motion.div>
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.8, ease: easeInOut }} className=""><Link href="/">other</Link></motion.div>
                </div>
                <div className="flex flex-col leading-10">
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3, ease: easeInOut }} className=""><Link href="/">github</Link></motion.div>
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.2, ease: easeInOut }} className=""><Link href="/">contact</Link></motion.div>
                </div>
                <div className="flex gap-3">
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.6, ease: easeInOut }} className=""><Link href="/signup" className="bg-[#1a1a1a] text-[#ebebeb] p-2 px-4 rounded-[5px]">sign up</Link></motion.div>
                    <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.8, ease: easeInOut }} className=""><Link href="/signin" className="border border-[#1a1a1a] p-2 px-4 rounded-[5px]">sign in</Link></motion.div>
                </div>
            </div>
            <div className="navbar w-full font-bestFont text-[#1a1a1a] sm:text-[2.5vw] sm:flex md:text-[2vw] md:hidden lg:text-[1.5vw] lg:hidden flex">
                <div className="z-10 flex justify-center items-end">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className=""><button type="button" onClick={toggleNavbar} className="toggle-button w-[70px] h-[70px] bg-[#1a1a1a] rounded-full text-[#ebebeb] cursor-pointer">{isOpen ? '=' : 'x'}</button></motion.div>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full h-full top-0 left-0 bg-[#ebebeb] fixed p-[5vw] py-[30vw] font-bestFont text-[#1a1a1a] justify-around items-start overflow-hidden tracking-wide leading-20 text-[10vw] flex flex-col border">
                        <div className="flex flex-col">
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className=""><Link href="/">lucas</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }} className=""><Link href="/">digital studio</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }} className=""><Link href="/">work</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }} className=""><Link href="/">about</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.8, ease: easeInOut }} className=""><Link href="/">other</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 3, ease: easeInOut }} className=""><Link href="/">github</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.2, ease: easeInOut }} className=""><Link href="/">contact</Link></motion.div>
                            <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }} className=""><Link href="/">norway, krs</Link></motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="fixed bottom-0 left-0 m-10">v.0.5</div>
            <div className="fixed bottom-0 right-0 m-10 text-end">
                <div className="">norway, krs</div>
                <div className="">{date}</div>
            </div>
        </div>
    )
}