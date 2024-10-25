import React, { useState, useEffect } from "react";
import { motion, easeInOut, useAnimation } from "framer-motion"; 
import Image from "next/image";

import norgeFlag from "@/assets/Flag_of_Norway.svg.png"

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [number, setNumber] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start({
                transition: { duration: 1, ease: easeInOut, times: [0, 0.5, 1] }
            });

            const interval = setInterval(() => {
                setNumber(prevNumber => {
                    if (prevNumber < 17) {
                        return prevNumber + 1;
                    } else {
                        clearInterval(interval);
                        return prevNumber;
                    }
                });
            }, 200);

            return () => clearInterval(interval);
        }
    }, [isVisible, controls]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
        });

        const text1Container = document.querySelector('.text1-container');
        if (text1Container) {
            observer.observe(text1Container);
        }

        return () => observer.disconnect();
    }, []);

    const text1 = "I\'m Lucas Hagfoss, a UI & UX designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.";
    const text2 = "I specialize in React.js \& Next.js and other JavaScript frameworks. I use TypeScript and other useful tools and libraries to develop these websites. I have a strong understanding of various software and programs to develop a good website for UI \& UX.";
    const text3 = "With a passion for creating user-friendly and visually appealing interfaces, I strive to deliver exceptional digital experiences that meet and exceed client expectations.";

    return (
        <div className="w-[100vw] relative bottom-0 flex flex-col gap-10 items-start p-5 md:p-10 md:text-[1.5vw] text-[5vw]">
            <div className="w-full h-[100vh] md:h-[27vw] text-thirdy text-[3vw] leading-5 md:leading-8 text1-container flex flex-col md:flex-row justify-between overflow-hidden p-10 gap-10 bg-primary rounded-[3vw]">
                <div className="w-full h-full flex flex-col justify-between">
                    <div className="min-h-0 flex flex-wrap leading-8 md:leading-none">
                        { isVisible && (
                            text1.split(" ").map((word, index) => (
                                <React.Fragment key={index}>
                                    <motion.div 
                                        key={`word-${index}`} 
                                        initial={{ y: 100, opacity: 0 }} 
                                        animate={{ y: 0, opacity: 1 }} 
                                        transition={{ duration: 0.75, delay: 0.1 + index * 0.025, ease: easeInOut }} 
                                        className={`px-2 ${index === 1 || index === 2 || index === 16 ? "text-secondary" : "text-thirdy"} text-[8vw] md:text-[3.5vw]`}
                                    >
                                        {word}
                                    </motion.div>
                                    {index === 2 && (
                                        <motion.div 
                                            initial={{ y: 100, opacity: 0 }} 
                                            animate={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.75, delay: 0.1 + index * 0.025, ease: easeInOut }} 
                                        >
                                            <Image src={norgeFlag} alt="Norway Flag" className="w-[10vw] md:w-[5vw] rounded"></Image>
                                        </motion.div>
                                    )}
                                </React.Fragment>
                            ))
                        )}
                    </div>
                    <div className="flex gap-3">
                        <button type="button" className="p-1 px-5 bg-thirdy rounded-full text-secondary text-[3vw] md:text-[1vw]">Learn more</button>
                        <button type="button" className="p-1 px-5 bg-thirdy rounded-full text-secondary text-[3vw] md:text-[1vw]">More like this</button>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-between">
                    <div className="aspect-square sm:w-[full] md:h-full bg-[#3c3c3c] rounded-[3vw] shadow flex">
                        <div className="w-full h-full">
                            <div className="aspect-square h-full  flex flex-col justify-center items-center relative">
                                <motion.div 
                                    id="number"
                                    className="text-secondary text-[20vw] md:text-[15vw] font-digitalFont" 
                                    animate={controls}
                                >
                                    {number}
                                    <div className="text-[5vw]">old</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 h-[80vh] md:h-[27vw] flex flex-col justify-between p-10 bg-primary rounded-[3vw] gap-10 leading-7 md:leading-6">
                    <div className="w-full min-h-0 flex flex-wrap">
                        { isVisible && (
                            text2.split(" ").map((word, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ y: 100, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }} 
                                    transition={{ duration: 0.75, delay: 1 + index * 0.025, ease: easeInOut }} 
                                    className="px-2 py-1 text-thirdy text-[8vw] md:text-[2vw] inline-block"
                                >
                                    {word}
                                </motion.div>
                            ))
                        )}
                    </div>
                    <div className="flex gap-3">
                        <button type="button" className="p-1 px-5 bg-thirdy rounded-full text-secondary text-[3vw] md:text-[1vw]">Learn more</button>
                        <button type="button" className="p-1 px-5 bg-thirdy rounded-full text-secondary text-[3vw] md:text-[1vw]">More like this</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-[100vh] md:h-[27vw] flex flex-col justify-between p-10 bg-primary rounded-[3vw] gap-10 leading-8 md:leading-8">
                    <div className="w-full min-h-0 flex flex-wrap">
                        { isVisible && (
                            text3.split(" ").map((word, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ y: 100, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }} 
                                    transition={{ duration: 0.75, delay: 2 + index * 0.025, ease: easeInOut }} 
                                    className="px-2 text-thirdy text-[8vw] md:text-[2vw]"
                                >
                                    {word}
                                </motion.div>
                            ))
                        )}
                    </div>
                    <div className="w-full min-h-0 flex flex-wrap">
                        { isVisible && (
                            text3.split(" ").map((word, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ y: 100, opacity: 0 }} 
                                    animate={{ y: 0, opacity: 1 }} 
                                    transition={{ duration: 0.75, delay: 2 + index * 0.025, ease: easeInOut }} 
                                    className="px-2 text-thirdy text-[8vw] md:text-[2vw]"
                                >
                                    {word}
                                </motion.div>
                            ))
                        )}
                    </div>
                    <div className="flex gap-3">
                        <button type="button" className="p-1 px-5 bg-thirdy rounded-full text-secondary text-[3vw] md:text-[1vw]">Learn more</button>
                        <button type="button" className="p-1 px-5 bg-thirdy rounded-full text-secondary text-[3vw] md:text-[1vw]">More like this</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
