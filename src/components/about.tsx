import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function About() {
    const text = "I`m Lucas Hagfoss, a user interface & user experience designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.";

    return (
        <div className="absolute bottom-0 w-[100vw] flex justify-start items-center p-10 border">
            <div className="w-full md:w-1/2 text-thirdy flex flex-wrap text-[5vw] md:text-[2vw] md:leading-4 leading-3 overflow-hidden">
                {text.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 + index * 0.1, ease: easeInOut }} className="p-2">{word}</motion.div>
                ))}
            </div>
            <div className="w-full md:w-1/2 text-thirdy flex flex-wrap text-[5vw] md:text-[2vw] md:leading-4 leading-3 overflow-hidden">
                {text.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 + index * 0.1, ease: easeInOut }} className="p-2">{word}</motion.div>
                ))}
            </div>
        </div>
    );
}