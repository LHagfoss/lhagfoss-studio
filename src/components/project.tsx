"use client"

import React from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";

interface ProjectProps {
  imageSrc: StaticImageData; 
  title: string;
  content: string;
  logo: StaticImageData; 
  month: string;
  day: string;
  year: string;
}

export default function Project({ imageSrc, title, content, logo, month, day, year }: ProjectProps) {

    return (
        <>
            <div className="relative flex flex-col justify-between cursor-pointer border">
                <Image src={imageSrc} alt="" className="w-full aspect-square object-cover rounded-[3vw] bg-thirdy" />
                <div className="flex justify-between items-center relative z-10 rounded-l py-10"> 
                    <div className="flex flex-col ">
                        <div className="text-secondary text-[4vw] md:text-[2vw]">{title}</div>
                        <div className="text-thirdy text-[3vw] md:text-[1vw]">{content}</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-end flex-col">
                            <div className="text-secondary text-[4vw] md:text-[1vw]">{month}</div>
                            <div className="flex gap-1 text-thirdy text-[3vw] md:text-[1vw]">
                                <div className="">{day}</div>
                                <div className="">{year}</div>
                            </div>
                        </div>
                        <Image src={logo} alt="" className="w-[15vw] h-[15vw] md:w-[5vw] md:h-[5vw] rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
}