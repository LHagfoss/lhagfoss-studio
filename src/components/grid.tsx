import React from "react";
import { motion, easeInOut } from "framer-motion"; 
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

import FadeIn from "./fadein";

import norgeFlag from "@/assets/Flag_of_Norway.svg.png";
import NextJSLogo from "@/assets/if82cpbS_400x400.jpg";
import ReactJSLogo from "@/assets/react-logo-black-and-white-1.png";

export default function Grid() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    return (
        <FadeIn delay={0}>
            <div ref={ref}>
                {inView && (
                    <div className="p-5 md:p-44 w-[100vw] h-[100vw]">
                        <div className="w-full h-full grid grid-rows-4 grid-cols-4 gap-1 md:gap-5">
                            <div className="bg-primary row-span-1 col-span-2 rounded-[2vw] p-5 overflow-hidden">
                                <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 1.6, duration: 1, ease: easeInOut }}  className="text-[#bebebe] text-[1.2vw] flex flex-col justify-between h-full">
                                    <div className="flex w-full justify-between relative inset-0">
                                        <div className="flex flex-col leading-tight">
                                            <div className="text-[2.5vw] text-secondary">Lucas Hagfoss</div>
                                            <div className="text-[1vw] text-thirdy">17 years old</div>
                                        </div>
                                        <Image src={norgeFlag} alt="norge" className="absolute right-0 top-0 object-cover w-[8vw] h-[6vw] rounded-2xl"></Image>
                                    </div>
                                    <div className="w-3/4">I&apos;m a UI & UX designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.</div>
                                    <div className="text-[1vw] text-thirdy">10/26/2024</div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-2 col-span-1 rounded-[2vw]"></div>
                            <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden hover:scale-105 spring-duration-300 spring-bounce-80 duration-300 hover:z-10">
                                <motion.div initial={{ y: -400 }} animate={{ y: 0 }} transition={{ delay: 1.8, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#655bff] p-2 md:p-5 flex flex-col justify-between rounded-[2vw]">
                                    <div className="flex flex-col">
                                        <div className="text-secondary text-[3vw]">Test Title 23</div>
                                        <div className="text-[#bebebe] text-[1.5vw] leading-[10px] md:leading-[2vw]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, ratione.</div>
                                    </div>
                                    <div className="text-[#bebebe] text-[1.5vw]">10/25/2024</div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-2 col-span-1 rounded-[2vw]"></div>
                            <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 2, duration: 1, ease: easeInOut }} className="w-full h-full flex flex-col justify-between rounded-[2vw]">
                                    <Image src={NextJSLogo} alt="reactjs image" className="w-full h-full object-cover"></Image>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ x: 400 }} animate={{ x: 0 }} transition={{ delay: 2.2, duration: 1, ease: easeInOut }} className="w-full h-full bg-[#171515] flex justify-center items-center rounded-[2vw] relative inset-0">
                                    <Image src={ReactJSLogo} alt="nextjs image" className="w-full h-full object-cover"></Image>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-3 rounded-[2vw]"></div>
                            <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
                            <div className="bg-primary row-span-1 col-span-2 rounded-[2vw]"></div>
                        </div>
                    </div>
                )}
            </div>
        </FadeIn>
    );
};