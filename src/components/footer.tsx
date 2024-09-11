"use client"

import React, { useState } from "react";

import Navbar from "./navbar";

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
            <Navbar />
            <div className="w-full h-full overflow-hidden flex justify-center items-center p-10">
                <div className="bg-primary w-[100vw] h-[65vh] rounded-[2vw] p-14 font-bestFont text-secondary flex flex-col justify-between">
                    <div className="text-[4vw] leading-12 text-thirdy"><span className="text-secondary">Let`s talk </span> about<br/> your project</div>
                    <div className="w-full border-t border-thirdy flex justify-between pt-10">
                        <div className="">
                            <div className="text-thirdy ">version</div>
                            <div className="">lhagfoss - 2024</div>
                        </div>
                        <div className="">
                            <div className="text-thirdy">local time</div>
                            <div className="" onClick={updateTime}>{time}</div>
                        </div>

                        <div className="">
                            <div className="text-thirdy">socials</div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}
