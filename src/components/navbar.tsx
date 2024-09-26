"use client"

import React, { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion"
import Image from "next/image";

import MotionLink from "@components/motionlink";
import copy from "@assets/copy.svg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const copyEmail = (event:any) => {
        navigator.clipboard.writeText("lucash.1707@gmail.com");
        setShowPopup(true);
        setPopupPosition({ x: event.clientX, y: event.clientY });
        setTimeout(() => setShowPopup(false), 2000);
    };

    const handleMouseMove = (event:any) => {
        if (showPopup) {
            setPopupPosition({ x: event.clientX, y: event.clientY });
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [showPopup]);

    return (
        <div className="navbar top-0 w-[100vw] flex justify-center items-center p-7">
            <div className="w-full text-[#1a1a1a] justify-between items-center tracking-wide sm:text-[2.5vw] sm:hidden md:text-[1vw] md:flex lg:flex hidden font-bricoGrotM">
                <div className="flex overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={1} href="/">Lucas</MotionLink></motion.div>
                </div>
                <div className="flex gap-3 items-center overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={1.2} href="/clients">Clients</MotionLink></motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={1.4} href="/projects">Projects / Work</MotionLink></motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={1.6} href="/about">About / Info</MotionLink></motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={1.8} href="/other">Other</MotionLink></motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2} href="/github">Github</MotionLink></motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2.2} href="/contact">Contact</MotionLink></motion.div>
                    <motion.div initial={{ y: -250 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 2.4, ease: easeInOut }}>
                        <div className="relative">
                            <div onClick={copyEmail} className="bg-primary text-secondary p-3 px-6 rounded-full flex items-center gap-3 border select-none cursor-pointer">
                                <Image src={copy} alt="" />
                                <div>lucash.1707@gmail.com</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {showPopup && (
                    <div
                        className="absolute bg-primary rounded-full text-white p-2 px-5 flex justify-center text-[0.7vw]"
                        style={{ left: popupPosition.x, top: popupPosition.y }}
                    >
                        Copied email!
                    </div>
                )}
            </div>
            <div className="navbar w-full text-[#1a1a1a] sm:text-[2.5vw] sm:flex md:text-[2vw] md:hidden lg:text-[1.5vw] lg:hidden flex">
                <div className="fixed top-0 left-0 z-20 flex flex-row justify-start items-center p-5 text-[10vw] w-1/2">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2} href="/">lucas</MotionLink></motion.div>
                </div>
                <div className="fixed top-0 right-0 z-10 w-full flex flex-row justify-end items-center p-5">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }}><button type="button" onClick={toggleNavbar} className="toggle-button w-[70px] h-[70px] bg-[#1a1a1a] rounded-full text-[#ebebeb] cursor-pointer">{isOpen ? '=' : 'x'}</button></motion.div>
                </div>
                <motion.div 
                    initial={{ x: -1000 }}
                    animate={{ x: isOpen ? -1000 : 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                    className="w-full h-full top-0 left-0 bg-secondary fixed p-[5vw] py-[30vw] font-bestFont text-[#1a1a1a] justify-around items-start overflow-hidden tracking-wide leading-20 text-[10vw] flex flex-col"
                >
                    <div className="flex flex-col">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2.2} href="/clients">clients</MotionLink></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2.4} href="/project">project / work</MotionLink></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2.6} href="/about">about / info</MotionLink></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={2.8} href="/other">other</MotionLink></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={3} href="/github">github</MotionLink></motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><MotionLink delay={3.2} href="/contact">contact</MotionLink></motion.div>
                        <motion.div initial={{ y: -400 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }}>
                            <div onClick={copyEmail} className="bg-primary text-secondary p-3 px-6 rounded-full flex items-center gap-3 border text-[4vw]">
                                <Image src={copy} alt=""></Image>
                                <div className="">lucash.1707@gmail.com</div>
                                {showPopup && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 bg-primary rounded-full text-white p-2 px-5 flex justify-center text-[5vw]">copied email</div>
                            )}
                            </div>
                        </motion.div>
                    </div>
            </motion.div>
            </div>
        </div>
    )
}