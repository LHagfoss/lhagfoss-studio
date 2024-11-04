import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingButton() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className=""
        >
            <div className="z-[100] underProtection fixed bottom-5 right-5 w-[35px] h-[35px] bg-[#1c1c1e] border border-[#3d3d3f] rounded-[20px] transition-all duration-500 ease-in-out hover:w-[400px] hover:h-[300px] overflow-hidden hoverChangeOpacity">
                <div className=" bottom-5 right-5 w-[400px] h-[300px] bg-[#1c1c1e] border border-[#3d3d3f] rounded-[20px] p-5 flex flex-col justify-between changeOpacity">
                    <div className="flex flex-col gap-5">
                        <div className="text-secondary text-[1.5vw] leading-7">This website is still under production.</div>
                        <div className="w-full flex">
                            <div className="text-thirdy text-[1vw] w-1/2 leading-5">Some things might be buggy or not fully completed.</div>
                            <div className="text-thirdy text-[1vw] w-1/2 leading-5">Some things might be buggy or not fully completed.</div>
                        </div>
                    </div>
                    <Link  
                        href="contact"
                        className="text-thirdy"
                    >
                        <span className="underline text-[#655bff]">Contact me</span> if you notice any missing features, display issues, or bugs
                    </Link>
                    <Link
                        href="contact"
                        className="flex justify-center items-center border border-[#3d3d3f] py-1 rounded-[20px] text-secondary duration-300 hover:border-[#5c5c5f]"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};