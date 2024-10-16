import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function About() {
    
    const text = "I\'m Lucas Hagfoss, a user interface & user experience designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.";
    const text2 = "I specialize in React.js \& Next.js and other JavaScript frameworks. I use TypeScript and other useful tools and libraries to develop these websites. I have a strong understanding of various software and programs to develop a good website for UI \& UX.";
    const text3 = "Balls Balls";

    return (
        <div className="relative bottom-0 w-full md:w-[100vw] flex flex-col gap-3 items-start p-10 md:text-[1.5vw] leading-3 md:leading-6 text-[5vw]">
            <div className="w-full text-thirdy flex flex-wrap overflow-hidden text-[3vw] leading-12">
                {text.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 + index * 0.05, ease: easeInOut }} className={`p-1 ${index === 1 || index === 2 ? 'text-secondary' : ''}`}>{word}</motion.div>
                ))}
            </div>
            <div className="bg-primary w-full h-[5px] rounded-full drop-shadow-2xl"></div>
            <div className="flex w-full text-[2vw] leading-8">
                <div className="w-1/2 text-thirdy flex flex-wrap overflow-hidden">
                    {text2.split(" ").map((word, index) => (
                        <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.05, ease: easeInOut }} className="p-1">{word}</motion.div>
                    ))}
                </div>
                <div className="w-1/2 text-thirdy flex flex-wrap overflow-hidden">
                    {text3.split(" ").map((word, index) => (
                        <motion.div key={index} initial={{ y: 450 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.05, ease: easeInOut }} className="p-1">{word}</motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}