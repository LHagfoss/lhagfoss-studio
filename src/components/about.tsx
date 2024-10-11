import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function About() {
    
    const text = "I`m Lucas Hagfoss, a user interface & user experience designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.";
    const text2 = "I`m Lucas Hagfoss, a user interface & user experience designer from Norway, specializing in React, Next.js, TypeScript, and other JavaScript frameworks. I have a strong understanding of various software and programs to develop a good website for UI and UX.";

    return (
        <div className="relative md:absolute bottom-0 w-[100vw] flex md:flex-row flex-col md:gap-0 gap-10 items-start p-10 md:text-[1.5vw] md:leading-5 leading-3 text-[5vw]">
            <div className="w-full md:w-1/2 text-thirdy flex flex-wrap overflow-hidden">
                {text.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 + index * 0.1, ease: easeInOut }} className="p-2">{word}</motion.div>
                ))}
            </div>
            <div className="w-full md:w-1/2 text-thirdy flex flex-wrap overflow-hidden">
                {text2.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 + index * 0.1, ease: easeInOut }} className="p-2">{word}</motion.div>
                ))}
            </div>
        </div>
    );
}