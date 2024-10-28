import React from "react";
import { motion, easeInOut } from "framer-motion"; 
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

import FadeIn from "./fadein";

import profileIcon from "@/assets/profileIcon.svg"
import norgeFlag from "@/assets/Flag_of_Norway.svg.png";
import NextJSLogo from "@/assets/if82cpbS_400x400.jpg";
import ReactJSLogo from "@/assets/react-logo-black-and-white-1.png";
import info from "@/assets/info.svg"
import background1 from "@/assets/thingy.jpg"

export default function Grid() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    function openGithub() { window.open("https://github.com/lhagfoss", "_blank"); };

    return (
        <FadeIn delay={0}>
            <div ref={ref}>
                {inView && (
                    <div className="p-5 md:p-44 w-[100vw] h-[100vw]">
                        <div className="w-full h-full grid grid-rows-4 grid-cols-4 gap-1 md:gap-5">
                            <div className="bg-primary row-span-1 col-span-2 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ y: 550 }} animate={{ y: 0 }} transition={{ delay: 1.1, duration: 1.5, ease: easeInOut }}  className="text-[#bebebe] bg-[#655bff] text-[1.2vw] flex flex-col justify-between w-full p-5 h-full">
                                    <div className="flex w-full justify-between relative inset-0">
                                        <div className="flex flex-col leading-tight">
                                            <div className="text-[2.5vw] text-secondary">Lucas Hagfoss</div>
                                            <div className="text-[1vw] text-[#bebebe]">17 years old</div>
                                        </div>
                                        <Image src={norgeFlag} alt="norge" className="absolute right-0 top-0 object-cover w-[4vw] h-[3vw] rounded-[0.4vw]"></Image>
                                    </div>
                                    <div className="w-3/4">I&apos;m a Full-Stack developer from Norway, mainly focusing on UI & UX design. 🚀</div>
                                    <div className="flex gap-3 items-center">
                                        <div onClick={openGithub} className="flex gap-1 justify-center items-center rounded-full border border-[#bebebe] p-1 px-2 cursor-pointer spring-duration-300 spring-bounce-80 hover:scale-105">
                                            <Image src={info} alt="info" className=""></Image>
                                            <div className="text-[#bebebe] text-[1vw]">GitHub</div>
                                        </div>
                                        <div className="flex gap-1 justify-center items-center rounded-full border border-[#bebebe] p-1 px-2 cursor-pointer spring-duration-300 spring-bounce-80 hover:scale-105">
                                            <Image src={info} alt="info" className=""></Image>
                                            <div className="text-[#bebebe] text-[1vw]">Read More</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-2 col-span-1 rounded-[2vw] overflow-hidden">
                                <div className="w-full h-full rounded-[2vw] p-5 flex flex-col justify-between">
                                    <motion.div initial={{ y: -550 }} animate={{ y: 0 }} transition={{ delay: 1.2, duration: 1.5, ease: easeInOut }} className="flex flex-col mb-5">
                                        <div className="text-secondary text-[2vw]">Happy Customers</div>
                                        <div className="text-thirdy">(Not real customers, just for testing purpose)</div>
                                    </motion.div>
                                    <div className="w-full flex flex-col gap-3">
                                        <motion.div initial={{ x: -550 }} animate={{ x: 0 }} transition={{ delay: 1.3, duration: 1.5, ease: easeInOut }} className="w-full max-h-[200px] bg-fourth rounded-[1vw] p-3">
                                            <div className="text-secondary flex items-center justify-between">
                                                <div className="flex gap-1">
                                                    <Image src={profileIcon} alt="profile" className=""></Image>
                                                    <div className="text-[1vw]">Lucas Hagfoss</div>
                                                </div>
                                                <div className="text-thirdy bg-primary p-1 px-2 rounded-lg text-[0.7vw]">10 minutes ago</div>
                                            </div>
                                            <div className="text-thirdy">
                                                <div className="text-[0.9vw]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae animi, corporis saepe ex eaque blanditiis.</div>                                                
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ x: 550 }} animate={{ x: 0 }} transition={{ delay: 1.4, duration: 1.5, ease: easeInOut }} className="w-full max-h-[200px] bg-fourth rounded-[1vw] p-3">
                                            <div className="text-secondary flex items-center justify-between">
                                            <div className="flex gap-1">
                                                <Image src={profileIcon} alt="profile" className=""></Image>
                                                <div className="text-[1vw]">Odin Podin</div>
                                            </div>
                                                <div className="text-thirdy bg-primary p-1 px-2 rounded-lg text-[0.7vw]">20 minutes ago</div>
                                            </div>
                                            <div className="text-thirdy">
                                                <div className="text-[0.9vw]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae animi, corporis saepe ex eaque blanditiis.</div>                                                
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ x: -550 }} animate={{ x: 0 }} transition={{ delay: 1.5, duration: 1.5, ease: easeInOut }} className="w-full max-h-[200px] bg-fourth rounded-[1vw] p-3">
                                            <div className="text-secondary flex items-center justify-between">
                                            <div className="flex gap-1">
                                                <Image src={profileIcon} alt="profile" className=""></Image>
                                                <div className="text-[1vw]">Stian Lagos</div>
                                            </div>
                                                <div className="text-thirdy bg-primary p-1 px-2 rounded-lg text-[0.7vw]">30 minutes ago</div>
                                            </div>
                                            <div className="text-thirdy">
                                                <div className="text-[0.9vw]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae animi, corporis saepe ex eaque blanditiis.</div>                                                
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ x: 550 }} animate={{ x: 0 }} transition={{ delay: 1.6, duration: 1.5, ease: easeInOut }} className="w-full max-h-[200px] bg-fourth rounded-[1vw] p-3">
                                            <div className="text-secondary flex justify-between items-center">
                                            <div className="flex gap-1">
                                                <Image src={profileIcon} alt="profile" className=""></Image>
                                                <div className="text-[1vw]">Lucas Hagfoss</div>
                                            </div>
                                                <div className="text-thirdy bg-primary p-1 px-2 rounded-lg text-[0.7vw]">40 minutes ago</div>
                                            </div>
                                            <div className="text-thirdy">
                                                <div className="text-[0.9vw]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae animi, corporis saepe ex eaque blanditiis.</div>                                                
                                            </div>
                                        </motion.div>
                                        <motion.div initial={{ x: -550 }} animate={{ x: 0 }} transition={{ delay: 1.7, duration: 1.5, ease: easeInOut }} className="w-full max-h-[200px] bg-fourth rounded-[1vw] p-3">
                                            <div className="text-secondary flex justify-between items-center">
                                            <div className="flex gap-1">
                                                <Image src={profileIcon} alt="profile" className=""></Image>
                                                <div className="text-[1vw]">Lucas Hagfoss</div>
                                            </div>
                                                <div className="text-thirdy bg-primary p-1 px-2 rounded-lg text-[0.7vw]">40 minutes ago</div>
                                            </div>
                                            <div className="text-thirdy">
                                                <div className="text-[0.9vw]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae animi, corporis saepe ex eaque blanditiis.</div>                                                
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ x: 550 }} animate={{ x: 0 }} transition={{ delay: 1.7, duration: 1.5, ease: easeInOut }} className="w-full h-full bg-[#171515] flex justify-center items-center rounded-[2vw] relative inset-0">
                                    <Image src={ReactJSLogo} alt="reactjs image" className="w-full h-full object-cover"></Image>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-2 col-span-1 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ x: -550 }} animate={{ x: 0 }} transition={{ delay: 1.8, duration: 1.5, ease: easeInOut }} className="w-full h-full grid grid-rows-6 grid-cols-3 p-5 gap-3">
                                    <div className="bg-fourth rounded-[1vw] col-span-2"></div>
                                    <div className="bg-fourth rounded-[1vw] row-span-2"></div>
                                    <div className="bg-fourth rounded-[1vw] row-span-2 col-span-2"></div>
                                    <div className="bg-fourth rounded-[1vw] col-span-1 row-span-1"></div>
                                    <div className="bg-fourth rounded-[1vw] row-span-3 col-span-3"></div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ y: 550 }} animate={{ y: 0 }} transition={{ delay: 1.9, duration: 1.5, ease: easeInOut }} className="w-full h-full flex flex-col justify-between rounded-[2vw]">
                                    <Image src={NextJSLogo} alt="nextjs image" className="w-full h-full object-cover"></Image>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-1 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ y: -550 }} animate={{ y: 0 }} transition={{ delay: 2, duration: 1.5, ease: easeInOut }} className="w-full h-full bg-[#655bff] p-2 md:p-5 flex flex-col justify-between rounded-[2vw] ">
                                    <div className="flex flex-col">
                                        <div className="text-secondary text-[2.5vw]">Skills</div>
                                        <div className="text-[#bebebe] text-[1vw] leading-[10px] md:leading-[1.5vw]">I&apos;m skilled with tools and frameworks like Next.js for website development, Figma for design, and various other technologies to ensure our customers are thrilled with the results.</div>
                                    </div>
                                    <div className="flex gap-1 justify-center items-center rounded-full border border-[#bebebe] p-1 px-2 cursor-pointer spring-duration-300 spring-bounce-80 hover:scale-105">
                                        <Image src={info} alt="info" className=""></Image>
                                        <div className="text-[#bebebe] text-[1vw]">More info</div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-3 rounded-[2vw] overflow-hidden">
                                <motion.div initial={{ y: -550 }} animate={{ y: 0 }} transition={{ delay: 2.1, duration: 1.5, ease: easeInOut }} className="h-full p-5 rounded-[2vw] flex flex-col gap-2 w-2/3">
                                    <div className="text-secondary text-[2vw]">Frameworks / Tools I use</div>
                                    <div className="flex flex-wrap gap-3">
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">NextJS</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">ReactJS</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">TypeScript</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">JavaScript</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">TailwindCSS</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">HTML</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">CSS</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">Photoshop</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">Figma</div>
                                        <div className="text-thirdy border border-thirdy rounded-full p-2 px-3 text-[1vw] spring-duration-300 spring-bounce-80 hover:scale-105 cursor-pointer">Blender</div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-2 rounded-[2vw] overflow-hidden p-5">
                                <motion.div initial={{ y: -550 }} animate={{ y: 0 }} transition={{ delay: 2.2, duration: 1.5, ease: easeInOut }} className="w-full h-full">
                                    <div className="w-full h-full bg-fourth rounded-[1vw]"></div>
                                </motion.div>
                            </div>
                            <div className="bg-primary row-span-1 col-span-2 rounded-[2vw] overflow-hidden p-5">
                                <motion.div initial={{ y: -550 }} animate={{ y: 0 }} transition={{ delay: 2.3, duration: 1.5, ease: easeInOut }} className="w-full h-full flex gap-5">
                                    <div className="w-full h-full bg-fourth rounded-[1vw] text-primary flex justify-center items-center">No Content Displayed.</div>
                                    <div className="w-full h-full bg-fourth rounded-[1vw] text-primary flex justify-center items-center">No Content Displayed.</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </FadeIn>
    );
};