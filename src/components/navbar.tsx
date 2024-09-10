"use client"

import React from "react";
import { motion, easeInOut } from "framer-motion"
import Link from "next/link";

export default function Navbar() {


    return (
        <div className="navcbar fixed w-[100vw] flex justify-center items-center p-10">
            <div className="w-full font-bestFont text-[#1a1a1a] flex justify-between items-start text-[1.5vw] overflow-hidden tracking-wide leading-10">
                <div className="flex flex-col">
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2, ease: easeInOut }} className=""><Link href="/">lucas</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.2, ease: easeInOut }} className=""><Link href="/">digital studio</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.4, ease: easeInOut }} className=""><Link href="/">work</Link></motion.div>
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.6, ease: easeInOut }} className=""><Link href="/">about</Link></motion.div>
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.8, ease: easeInOut }} className=""><Link href="/">contact</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3, ease: easeInOut }} className=""><Link href="/">instagram</Link></motion.div>
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.2, ease: easeInOut }} className=""><Link href="/">other</Link></motion.div>
                </div>
                <div className="flex flex-col">
                    <motion.div initial={{ y: 120 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.4, ease: easeInOut }} className=""><Link href="/">norway, krs</Link></motion.div>
                </div>
            </div>
        </div>
    )
}