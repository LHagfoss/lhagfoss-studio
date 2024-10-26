"use client"

import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import MotionLink from "@/components/motionlink";
import copy from "@/assets/copy.svg";
import close from "@/assets/close.svg"
import menu from "@/assets/menu.svg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [changeText, setChangeText] = useState(true)

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    setTimeout(() => {
        setChangeText(true)
    }, 2000);

    const copyEmail = () => {
        navigator.clipboard.writeText("lucash.1707@gmail.com");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    return (
        <div className="navbar-container">
            {/* Navbar for medium screens */}
            <div className="over fixed top-0 hidden md:flex w-full text-[#1a1a1a] justify-between items-center p-10 px-44 overflow-hidden navbar">
                <div className="flex">
                    {/* <a href="/"><motion.div initial={{ y: -250 }} animate={{  y: 0 }} transition={{ duration: 1.5, delay: 0.1, ease: easeInOut }}><Image src={lightLogo} alt="" className="w-[200px] object-contain cursor-pointer "></Image></motion.div></a> */}
                </div>
                <div className={`flex justify-between gap-3 items-center ${ changeText ? "text-secondary" : "text-fourth" }`}>
                    <MotionLink delay={0.2} href="/test">Test</MotionLink>
                    <MotionLink delay={0.2} href="/clients">Clients</MotionLink>
                    <MotionLink delay={0.3} href="/projects">Projects / Work</MotionLink>
                    <MotionLink delay={0.4} href="/about">About / Info</MotionLink>
                    <MotionLink delay={0.5} href="/other">Other</MotionLink>
                    <MotionLink delay={0.6} href="/github">Github</MotionLink>
                    <MotionLink delay={0.7} href="/contact">Contact</MotionLink>
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 0.8, ease: easeInOut }}>
                        <div className="relative">
                            <div onClick={copyEmail} className="bg-primary text-secondary p-3 px-6 rounded-lg flex items-center gap-3 select-none cursor-pointer drop-shadow-lg">
                                <Image src={copy} alt="" />
                                <div>lucash.1707@gmail.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {showPopup && (
                    <div className="absolute top-[80px] mr-10 right-0 bg-thirdy rounded text-white p-2 px-5 flex justify-center text-[0.8vw] drop-shadow-lg">Copied email</div>
                )}
            </div>

            {/* Navbar for small screens */}
            <div className="fixed top-0 flex justify-end items-start md:hidden w-[100vw] z-20">
                {/* <div className={`fixed top-0 left-0 z-40 flex flex-row justify-start items-center p-5 text-[10vw] w-1/2 font-bestFont duration-1000 ease-in-out ${isOpen ? 'text-secondary' : 'text-primary'}`}>
                    <a href="/">
                        <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 2, ease: easeInOut }}>
                            <Image 
                                src={lightLogo} 
                                alt="" 
                                className="w-[200px] object-contain cursor-pointer h-[70px] mix-blend-difference" 
                            />
                        </motion.div>
                    </a>
                </div> */}
                <div className="top-0 right-0 z-30 w-full flex flex-row justify-end items-center p-5">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }}>
                        <button 
                            type="button" 
                            onClick={toggleNavbar} 
                            className="toggle-button w-[70px] h-[70px] rounded-full cursor-pointer duration-1000 ease-in-out"
                        >
                            <motion.div 
                                initial={{ scale: 0.95 }} 
                                animate={{ scale: 1 }} 
                                transition={{ duration: 0.5, ease: easeInOut }}
                            >
                                {isOpen ? <Image src={close} alt="Close" className="w-full h-full" /> : <Image src={menu} alt="Open" className="w-full h-full" />}
                            </motion.div>
                        </button>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: isOpen ? 0 : 1000, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className="z-20 w-[100vw] h-full top-0 left-0 bg-fourth fixed p-5 py-[30vw] text-[#1a1a1a] justify-around items-center overflow-hidden text-[8vw] flex flex-col"
                >
                    <div className="flex-1 py-10 flex flex-col justify-between items-center text-secondary">
                        <Link href="/clients" className="">Clients</Link>
                        <Link href="/projects" className="">Projects / Work</Link>
                        <Link href="/about" className="">About / Info</Link>
                        <Link href="/other" className="">Other</Link>
                        <Link href="/github" className="">Github</Link>
                        <Link href="/contact" className="">Contact</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};