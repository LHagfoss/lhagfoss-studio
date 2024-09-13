"use client"

import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion"
import Link from "next/link";
import Image from "next/image";

import MotionLink from "@components/motionlink";
import copy from "@assets/copy.svg"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("lucash.1707@gmail.com");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1500);
    };

    return (
        <div className="navbar top-0 absolute w-[100vw] flex justify-center items-center p-7">
            <div className="w-full font-bestFont text-[#1a1a1a] justify-between items-start tracking-wide sm:text-[2.5vw] sm:hidden md:text-[2vw] md:flex lg:text-[1.5vw] lg:flex hidden">
                <div className="flex flex-col">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink href="/">lucas</MotionLink></motion.div>
                </div> 
                <div className="flex flex-col">
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }}><Link href="/" className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">digital studio</Link></motion.div>
                </div>
                <div className="flex flex-col gap-3">
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }}><Link href="/" className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">project / work</Link></motion.div>
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }}><Link href="/" className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">about / info</Link></motion.div>
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.8, ease: easeInOut }}><Link href="/" className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">other</Link></motion.div>
                </div>
                <div className="flex flex-col gap-3">
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3, ease: easeInOut }}><Link href="/" className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">github</Link></motion.div>
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.2, ease: easeInOut }}><Link href="/contact" className="p-2 px-4 hover:bg-[#1a1a1a] hover:text-[#ebebeb] transition-all duration-200 rounded-full">contact</Link></motion.div>
                </div>
                <div className="flex gap-3">
                <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }}>
                        <div className="relative">
                            <div onClick={copyEmail} className="bg-primary text-secondary p-3 px-6 rounded-full flex items-center gap-3 border select-none cursor-pointer">
                                <Image src={copy} alt="" />
                                <div>lucash.1707@gmail.com</div>
                            </div>
                            {showPopup && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 bg-primary rounded-full text-white p-2 px-5 flex justify-center text-[1vw]">copied email</div>
                            )}
                        </div>
                    </motion.div>
                    </div>
            </div>
            <div className="navbar w-full font-bestFont text-[#1a1a1a] sm:text-[2.5vw] sm:flex md:text-[2vw] md:hidden lg:text-[1.5vw] lg:hidden flex">
                <div className="fixed z-10 flex justify-center items-end">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className=""><button type="button" onClick={toggleNavbar} className="toggle-button w-[70px] h-[70px] bg-[#1a1a1a] rounded-full text-[#ebebeb] cursor-pointer">{isOpen ? '=' : 'x'}</button></motion.div>
                </div>
                <motion.div 
                    initial={{ x: -1000 }}
                    animate={{ x: isOpen ? -1000 : 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className="w-full h-full top-0 left-0 bg-secondary fixed p-[5vw] py-[30vw] font-bestFont text-[#1a1a1a] justify-around items-start overflow-hidden tracking-wide leading-20 text-[10vw] flex flex-col"
                >
                    <div className="flex flex-col">
                    <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }}><Link href="/">lucas</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }}><Link href="/">digital studio</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }}><Link href="/">project / work</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }}><Link href="/">about</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.8, ease: easeInOut }}><Link href="/">other</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 3, ease: easeInOut }}><Link href="/">github</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.2, ease: easeInOut }}><Link href="/">contact</Link></motion.div>
                        <motion.div initial={{ y: -400 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }}><div className="bg-primary text-secondary p-3 px-6 rounded-full flex items-center gap-3 border text-[4vw]"><Image src={copy} alt=""></Image><div className="">lucash.1707@gmail.com</div></div></motion.div>
                    </div>
            </motion.div>
            </div>
        </div>
    )
}