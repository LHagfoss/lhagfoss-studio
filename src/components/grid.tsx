import React from "react";
import { motion, easeInOut } from "framer-motion";
import FadeIn from "./fadein";

export default function Grid() {


    return (
        <FadeIn delay={0}>
            <div className="p-5 md:p-10 w-[100vw] h-[100vw] grid grid-rows-4 grid-cols-4 gap-1 md:gap-5 mt-[100px]">
                <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
                <div className="bg-primary row-span-2 col-span-1 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                    <motion.div initial={{ y: -400 }} animate={{ y: 0 }} transition={{ delay: 1.8, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#4a5bff] p-2 md:p-10 flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="text-secondary text-[3vw]">Test</div>
                            <div className="text-[#bebebe] text-[1.5vw] leading-[10px] md:leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ratione.</div>
                        </div>
                        <div className="text-fourth text-[1.5vw]">10/25/2024</div>
                    </motion.div>
                </div>
                <div className="bg-primary row-span-2 col-span-1 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                    <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 2, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#655bff] p-2 md:p-10 flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="text-secondary text-[3vw]">Test</div>
                            <div className="text-[#bebebe] text-[1.5vw] leading-[10px] md:leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ratione.</div>
                        </div>
                        <div className="text-fourth text-[1.5vw]">10/25/2024</div>
                    </motion.div>
                </div>
                <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                    <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 2.2, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#e65bff] p-2 md:p-10 flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="text-secondary text-[3vw]">Test</div>
                            <div className="text-[#bebebe] text-[1.5vw] leading-[10px] md:leading-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ratione.</div>
                        </div>
                        <div className="text-fourth text-[1.5vw]">10/25/2024</div>
                    </motion.div>
                </div>
                <div className="bg-primary row-span-1 col-span-3 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
                <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
            </div>
        </FadeIn>
    );
};