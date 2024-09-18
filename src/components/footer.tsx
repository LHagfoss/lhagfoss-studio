"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import albumcover from "@assets/polyphiaalbumcover.jpg"
import nextjs from "@assets/nextjs.png"

export default function Footer() {
    function getFormattedTime() {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { 
            timeZone: 'Europe/Oslo', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        };
        const timeString = now.toLocaleTimeString('en-GB', options);
        return `${timeString} UTC + 1 kristiansand, norway`;
    }

    const [time, setTime] = useState(getFormattedTime());

    const updateTime = () => {
        setTime(getFormattedTime());
    };

    return (
        <>
            <div className="w-full h-[100vh] overflow-hidden flex justify-center items-end p-5 md:p-10">
                <div className="bg-primary w-full h-full md:h-[65vh] rounded-[5vw] md:rounded-[2vw] p-7 md:p-14 text-secondary flex flex-col justify-between">
                    <div className="text-[10vw] sm:text-[10vw] md:text-[4vw] lg:test-[3vw] leading-12 text-thirdy border-b border-thirdy pb-10 font-bestFont"><span className="text-secondary">Let`s talk </span> about<br/> your project</div>
                        <div className="w-full flex flex-row justify-center md:justify-start">
                        <div className="flex gap-5 md:gap-10">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1 flex-col md:gap-3 md:flex-row text-[2vw] md:text-[0.8vw]">
                                    <div className="">coding</div>
                                    <div className="bg-thirdy p-1 px-4 rounded-full text-[#999]">currently</div>
                                </div>
                                <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                                    <div className="w-[20vw] md:w-[10vw] aspect-square rounded-[1vw] overflow-hidden">
                                        <Image src={nextjs} alt="" className="object-cover w-full h-full"></Image>
                                    </div>
                                    <div className="">
                                        <div className="text-secondary text-[3vw] md:text-[0.8vw]">LHagfoss.com</div>
                                        <div className="text-thirdy text-[2vw] md:text-[0.7vw]">Next.js App - Cursor IDE</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1 flex-col md:gap-3 md:flex-row text-[2vw] md:text-[0.8vw]">
                                    <div className="">listening to</div>
                                    <div className="bg-thirdy p-1 px-4 rounded-full text-[#999]">5 hours ago</div>
                                </div>
                                <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                                    <div className="w-[20vw] md:w-[10vw] aspect-square rounded-[1vw] overflow-hidden">
                                        <Image src={albumcover} alt="" className="object-cover w-full h-full"></Image>
                                    </div>
                                    <div className="">
                                        <div className="text-secondary text-[3vw] md:text-[0.8vw]">Playing Goat</div>
                                        <div className="text-thirdy text-[2vw] md:text-[0.7vw]">Polyphia</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-1 flex-col md:gap-3 md:flex-row text-[2vw] md:text-[0.8vw]">
                                    <div className="">watching</div>
                                    <div className="bg-thirdy p-1 px-4 rounded-full text-[#999]">NaN</div>
                                </div>
                                <div className="flex justify-center items-center gap-5 flex-col md:flex-row ">
                                    <div className="w-[20vw] md:w-[10vw] aspect-square rounded-[1vw] overflow-hidden bg-thirdy">
                                        {/* <Image src={albumcover} alt="" className="object-cover"></Image> */}
                                    </div>
                                    <div className="">
                                        <div className="text-secondary text-[3vw] md:text-[0.8vw]">NaN</div>
                                        <div className="text-thirdy text-[2vw] md:text-[0.7vw]">NaN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-thirdy flex justify-between pt-10 sm:flex-col md:flex-row lg:flex-row flex-col">
                        <div className="text-[3vw] sm:text-[3vw] md:text-[1vw] lg:test-[1vw]">
                            <div className="text-thirdy">version</div>
                            <div className=""><Link href="/">lhagfoss - 2024</Link></div>
                        </div>
                        <div className="text-[3vw] sm:text-[3vw] md:text-[1vw] lg:test-[1vw]">
                            <div className="text-thirdy">local time</div>
                            <div className="" onClick={updateTime}>{time}</div>
                        </div>

                        <div className="text-[3vw] sm:text-[3vw] md:text-[1vw] lg:test-[1vw]">
                            <div className="text-thirdy ">socials</div>
                            <div className="flex gap-5">
                                <Link href="" className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"></div>instagram</Link>
                                <Link href="" className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"></div>youtube</Link>
                                <Link href="" className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"></div>twitter</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}
 