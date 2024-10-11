import { easeInOut, motion } from "framer-motion";
import React from "react";

export default function Pluss() {
    return (
        <motion.div
            className="top-0 left-0 absolute w-[100vw] h-[100vh] flex flex-col justify-between items-center text-secondary text-[10vw] md:text-[3vw] md:p-44 p-5"
        >
            <div className="w-full flex justify-between">
                <motion.div initial={{ x: -200, y: -200, rotateZ: 0, opacity: 0 }} animate={{ x: 0, y: 0, rotateZ: 360, opacity: 1 }} transition={{ delay: 2, duration: 2, ease: easeInOut }} className="left-20 top-20 absolute">+</motion.div>
                <motion.div initial={{ x: 200, y: -200, rotateZ: 0, opacity: 0 }} animate={{ x: 0, y: 0, rotateZ: -360, opacity: 1 }} transition={{ delay: 2, duration: 2, ease: easeInOut }} className="right-20 top-20 absolute">+</motion.div>
            </div>
            <div className="w-full flex justify-between">
                <motion.div initial={{ x: -200, y: 200, rotateZ: 0, opacity: 0 }} animate={{ x: 0, y: 0, rotateZ: 360, opacity: 1 }} transition={{ delay: 2, duration: 2, ease: easeInOut }} className="left-20 bottom-20 absolute">+</motion.div>
                <motion.div initial={{ x: 200, y: 200, rotateZ: 0, opacity: 0 }} animate={{ x: 0, y: 0, rotateZ: -360, opacity: 1 }} transition={{ delay: 2, duration: 2, ease: easeInOut }} className="right-20 bottom-20 absolute">+</motion.div>
            </div>
        </motion.div>
    )
}