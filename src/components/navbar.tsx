"use client"

import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion"
import Image from "next/image";
import Link from "next/link";

import MotionLink from "@/components/motionlink";
import logo from "../app/favicon.ico"
import copy from "@/assets/copy.svg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("lucash.1707@gmail.com");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    return (
        <div className="navbar-container">
            {/* Navbar for medium screens */}
            <div className="fixed top-0 hidden md:flex w-full text-[#1a1a1a] justify-between items-center p-10 font-bricoGrotM overflow-hidden navbar">
                <div className="flex">
                    <a href="/"><motion.div initial={{ y: -250 }} animate={{  y: 0 }} transition={{ duration: 1.5, delay: 0.1, ease: easeInOut }}><Image src={logo} alt="" className="w-[50px] h-[50px] cursor-pointer rounded-[10px]"></Image></motion.div></a>
                </div>
                <div className="flex justify-between gap-3 items-center">
                    <MotionLink delay={0.2} href="/clients">Clients</MotionLink>
                    <MotionLink delay={0.3} href="/projects">Projects / Work</MotionLink>
                    <MotionLink delay={0.4} href="/about">About / Info</MotionLink>
                    <MotionLink delay={0.5} href="/other">Other</MotionLink>
                    <MotionLink delay={0.6} href="/github">Github</MotionLink>
                    <MotionLink delay={0.7} href="/contact">Contact</MotionLink>
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 0.8, ease: easeInOut }}>
                        <div className="relative">
                            <div onClick={copyEmail} className="bg-primary text-secondary p-3 px-6 rounded-full flex items-center gap-3 select-none cursor-pointer">
                                <Image src={copy} alt="" />
                                <div>lucash.1707@gmail.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {showPopup && (
                    <div className="absolute top-[80px] mr-10 right-0 bg-thirdy rounded-full text-white p-2 px-5 flex justify-center text-[0.8vw]">Copied email</div>
                )}
            </div>

            {/* Navbar for small screens */}
            <div className="flex md:hidden w-full text-[#1a1a1a] bg-white z-20 font-bricoGrotM">
                <div className="fixed top-0 left-0 z-40 flex flex-row justify-start items-center p-5 text-[10vw] w-1/2 font-bestFont">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2} href="/">lucas</MotionLink></motion.div>
                </div>
                <div className="fixed top-0 right-0 z-30 w-full flex flex-row justify-end items-center p-5">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }}><button type="button" onClick={toggleNavbar} className="toggle-button w-[70px] h-[70px] bg-[#1a1a1a] rounded-full text-[#ebebeb] cursor-pointer">{isOpen ? '=' : 'x'}</button></motion.div>
                </div>
                <motion.div 
                    initial={{ x: -1000 }}
                    animate={{ x: isOpen ? 0 : 1000 }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className="z-20 w-full h-full top-0 left-0 bg-secondary fixed p-[5vw] py-[30vw]  text-[#1a1a1a] justify-around items-start overflow-hidden tracking-wide leading-20 text-[10vw] flex flex-col"
                >
                    <div className="flex flex-col">
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: easeInOut }}><Link href="/clients" className="p-2 hoverMe relative transition-all duration-200 rounded-full">Clients</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: easeInOut }}><Link href="/projects" className="p-2 hoverMe relative transition-all duration-200 rounded-full">Projects / Work</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: easeInOut }}><Link href="/about" className="p-2 hoverMe relative transition-all duration-200 rounded-full">About / Info</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: easeInOut }}><Link href="/other" className="p-2 hoverMe relative transition-all duration-200 rounded-full">Other</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6, ease: easeInOut }}><Link href="/github" className="p-2 hoverMe relative transition-all duration-200 rounded-full">Github</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7, ease: easeInOut }}><Link href="/contact" className="p-2 hoverMe relative transition-all duration-200 rounded-full">Contact</Link></motion.div>
                        <motion.div initial={{ x: -400 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8, ease: easeInOut }}>
                            <div onClick={copyEmail} className="bg-primary text-secondary p-3 px-6 rounded-full flex items-center gap-3 border text-[4vw]">
                                <Image src={copy} alt=""></Image>
                                <div className="">lucash.1707@gmail.com</div>
                                {showPopup && (
                                <div className="absolute bottom-48 transform mt-20 bg-primary rounded-full text-white p-2 px-5 flex justify-center text-[3vw]">copied email</div>
                            )}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}