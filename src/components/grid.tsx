import React from "react";
import { motion, easeInOut } from "framer-motion";
import FadeIn from "./fadein";

export default function Grid() {


    return (
        <FadeIn delay={0}>
            <div className="p-10 w-[100vw] h-[100vw] grid grid-rows-4 grid-cols-4 gap-10 mt-[100px]">
                <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
                <div className="bg-primary row-span-2 col-span-1 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                    <motion.div initial={{ y: -400 }} animate={{ y: 0 }} transition={{ delay: 1.8, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#4aff86]"></motion.div>
                </div>
                <div className="bg-primary row-span-2 col-span-1 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                    <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 2, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#655bff] p-10">
                        <div className="text-secondary text-[3vw]">Penis</div>
                        <div className="text-secondary text-[1.5vw]">Penis</div>
                    </motion.div>
                </div>
                <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                    <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 2.2, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#e65bff]"></motion.div>
                </div>
                <div className="bg-primary row-span-1 col-span-3 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
            </div>
        </FadeIn>
    );
};