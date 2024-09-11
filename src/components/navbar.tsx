"use client"

import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion"
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar fixed w-[100vw] flex justify-center items-center p-10">
            <div className="w-full font-bestFont text-[#1a1a1a] justify-between items-start overflow-hidden tracking-wide leading-10 sm:text-[2.5vw] sm:hidden md:text-[2vw] md:flex lg:text-[1.5vw] lg:flex hidden">
                <div className="flex flex-col">
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className=""><Link href="/">lucas</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }} className=""><Link href="/">digital studio</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }} className=""><Link href="/">work</Link></motion.div>
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }} className=""><Link href="/">about</Link></motion.div>
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.8, ease: easeInOut }} className=""><Link href="/">contact</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3, ease: easeInOut }} className=""><Link href="/">instagram</Link></motion.div>
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.2, ease: easeInOut }} className=""><Link href="/">other</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: -120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }} className=""><Link href="/">norway, krs</Link></motion.div>
                </div>
            </div>
            <div className="w-full font-bestFont text-[#1a1a1a] sm:text-[2.5vw] sm:flex md:text-[2vw] md:hidden lg:text-[1.5vw] lg:hidden flex">
                <div className="flex justify-center items-end">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }} className=""><button type="button" onClick={toggleNavbar} className="toggle-button w-[70px] h-[70px] bg-[#1a1a1a] rounded-full text-[#ebebeb] cursor-pointer">x</button></motion.div>
                </div>
                <motion.div 
                    initial={{ x: -100 }}
                    animate={{ x: isOpen ? 0 : -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full fixed pt-20 font-bestFont text-[#1a1a1a] justify-between items-start overflow-hidden tracking-wide leading-10 text-[2.5vw] flex flex-col">
                        <div className="flex flex-col">
                            <Link href="/">lucas</Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href="/">digital studio</Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href="/">work</Link>
                            <Link href="/">about</Link>
                            <Link href="/">contact</Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href="/">instagram</Link>
                            <Link href="/">other</Link>
                        </div>
                        <div className="flex flex-col">
                            <Link href="/">norway, krs</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}