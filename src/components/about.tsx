import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function About() {
    const text = "I`m Lucas Hagfoss, a user experience & interface designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.";

    return (
        <div className="absolute bottom-0 w-[100vw] flex justify-center items-center p-10">
            <div className="w-full text-[#1a1a1a] flex flex-wrap text-[5vw] sm:text-[5vw] md:text-[2vw] lg:text-[4vw] lg:leading-11 leading-3 overflow-hidden">
                {text.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 350 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.1, ease: easeInOut }} className="p-2">{word}</motion.div>
                ))}
            </div>
        </div>
    );
}