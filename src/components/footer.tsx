"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import albumcover from "@assets/image (1).png"
import nextjs from "@assets/nextjs.png"
import youtubeIcon from "@assets/youtube.png"
import twitterIcon from "@assets/twitter.png"
import instagramIcon from "@assets/instagram.png"

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

    function openLinkNextJS() { window.open("https://nextjs.org/") }
    function openLinkCigarettesAfterSex() { window.open("https://open.spotify.com/track/0yc6Gst2xkRu0eMLeRMGCX?nd=1&dlsi=c54863917c2442e1") }

    const [time, setTime] = useState(getFormattedTime());

    const updateTime = () => {
        setTime(getFormattedTime());
    };

    return (
        <>
            <div className="w-full h-[100vh] md:h-[70vh] overflow-hidden flex justify-center items-end p-5 md:p-10">
                <div className="bg-primary w-full h-full md:h-[65vh] rounded-[5vw] md:rounded-[2vw] p-7 md:p-14 text-secondary flex flex-col justify-between shadow font-bricoGrotR">
                    <div className="text-[10vw] sm:text-[10vw] md:text-[4vw] lg:test-[3vw] leading-12 text-thirdy border-b border-thirdy pb-10 font-clashDisM"><span className="text-secondary">Let`s talk </span> about<br/> your project</div>
                        <div className="w-full flex flex-row justify-center md:justify-start">
                        <div className="flex gap-5 md:gap-10">
                            <div className="flex flex-col gap-3 cursor-pointer" onClick={openLinkNextJS}>
                                <div className="flex items-center gap-1 flex-col md:gap-3 md:flex-row text-[2vw] md:text-[0.7vw]">
                                    <div className="">Coding</div>
                                    <div className="bg-thirdy p-1 px-4 rounded-full text-[#999]">Currently</div>
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
                            <div className="flex flex-col gap-3 cursor-pointer" onClick={openLinkCigarettesAfterSex}>
                                <div className="flex items-center gap-1 flex-col md:gap-3 md:flex-row text-[2vw] md:text-[0.7vw]">
                                    <div className="">Listening to</div>
                                    <div className="bg-thirdy p-1 px-4 rounded-full text-[#999]">5 hours ago</div>
                                </div>
                                <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                                    <div className="w-[20vw] md:w-[10vw] aspect-square rounded-[1vw] overflow-hidden">
                                        <Image src={albumcover} alt="" className="object-cover w-full h-full"></Image>
                                    </div>
                                    <div className="">
                                        <div className="text-secondary text-[3vw] md:text-[0.8vw]">Apocalypse</div>
                                        <div className="text-thirdy text-[2vw] md:text-[0.7vw]">Cigarettes After Sex</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-thirdy flex justify-between pt-10 sm:flex-col md:flex-row lg:flex-row flex-col">
                        <div className="text-[3vw] sm:text-[3vw] md:text-[0.7vw]">
                            <div className="text-thirdy">Version</div>
                            <div className="">v0.61 - LHagfoss - 2024</div>
                        </div>
                        <div className="text-[3vw] sm:text-[3vw] md:text-[0.7vw]">
                            <div className="text-thirdy">Local time</div>
                            <div className="" onClick={updateTime}>{time}</div>
                        </div>

                        <div className="text-[3vw] sm:text-[3vw] md:text-[0.7vw]">
                            <div className="text-thirdy ">Socials</div>
                            <div className="flex gap-5">
                                <a href="https://instagram.com" target="_blank"  className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"><Image src={instagramIcon} alt="" className="object-fit h-full"></Image></div>Instagram</a>
                                <a href="https://youtube.com" target="_blank" className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"><Image src={youtubeIcon} alt="" className="object-fit h-full"></Image></div>Youtube</a>
                                <a href="https://x.com" target="_blank"  className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"><Image src={twitterIcon} alt="" className="object-fit h-full"></Image></div>Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}
 