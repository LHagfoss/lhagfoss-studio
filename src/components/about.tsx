import React, { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion";
import FadeIn from "./fadein";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

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
        <FadeIn>
            <div className="relative bottom-0 flex flex-col gap-5 items-start p-5 md:p-10 md:text-[1.5vw] text-[5vw]">
                <div className="w-full h-[15vw] text-thirdy gap-1 text-[3vw] leading-8 md:leading-8 text1-container flex flex-wrap overflow-hidden p-10 bg-primary rounded-[3vw]">
                    { isVisible && (
                        text1.split(" ").map((word, index) => (
                            <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75, delay: 0.1 + index * 0.025, ease: easeInOut }} className={`px-2 ${index === 1 || index === 2 || index === 16 ? "text-secondary" : "text-thirdy"} text-[8vw] md:text-[3vw]`}>{word}</motion.div>
                        ))
                    )}
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5 leading-5 md:leading-8">
                    <div className="w-full md:w-1/2 flex flex-col p-10 bg-primary rounded-[3vw] gap-10">
                        <div className="w-full h-full flex flex-wrap">
                            { isVisible && (
                                text2.split(" ").map((word, index) => (
                                    <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75, delay: 1 + index * 0.025, ease: easeInOut }} className="px-2 py-1 text-thirdy text-[8vw] md:text-[2vw]">{word}</motion.div>
                                ))
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button type="button" className="p-1 px-5 border-thirdy hover:border-secondary border rounded-full text-thirdy hover:text-secondary text-[1vw]">Learn more</button>
                            <button type="button" className="p-1 px-5 border-thirdy hover:border-secondary border rounded-full text-thirdy hover:text-secondary text-[1vw]">More like this</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col p-10 bg-primary rounded-[3vw] gap-10">
                        <div className="w-full h-full flex flex-wrap">
                            { isVisible && (
                                text3.split(" ").map((word, index) => (
                                    <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75, delay: 2 + index * 0.025, ease: easeInOut }} className="px-2 text-thirdy text-[8vw] md:text-[2vw]">{word}</motion.div>
                                ))
                            )}
                        </div>
                        <div className="flex gap-3">
                            <button type="button" className="p-1 px-5 border-thirdy hover:border-secondary border rounded-full text-thirdy hover:text-secondary text-[1vw]">Learn more</button>
                            <button type="button" className="p-1 px-5 border-thirdy hover:border-secondary border rounded-full text-thirdy hover:text-secondary text-[1vw]">More like this</button>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}
