import { easeInOut, motion } from "framer-motion";
import React from "react";

export default function Pluss() {
    return (
        <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: easeInOut }}
            className="w-[100vw] h-[100vh] flex justify-between items-center"
        >
            <div className="">
                <div className="">+</div>
                <div className="">+</div>
            </div>
            <div className="">
                <div className="">+</div>
                <div className="">+</div>
            </div>
        </motion.div>
    )
}