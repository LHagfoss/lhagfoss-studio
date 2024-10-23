"use client"

import React from "react";
import Image from "next/image";

import more from "@/assets/more.svg"

import { StaticImageData } from "next/image";

interface ProjectProps {
  imageSrc: StaticImageData; 
  title: string;
  content: string;
  month: string;
  year: string;
}

export default function Project({ imageSrc, title, content, month, year }: ProjectProps) {

    return (
        <>
            <div className="relative flex flex-col justify-between h-full">
                <Image src={imageSrc} alt="" className="w-full aspect-square object-cover rounded-[3vw] bg-thirdy cursor-pointer" />
                <div className="flex justify-between items-center relative z-10 rounded-lg py-5"> 
                    <div className="flex flex-col gap-3 w-full h-[200px]">
                        <div className="text-secondary text-[6vw] md:text-[2vw]">{title}</div>
                        <div className="flex gap-1">
                            <div className="text-fifth text-[4vw] md:text-[1vw]">{month}</div>
                            <div className="text-fifth text-[4vw] md:text-[1vw]">{year}</div>
                        </div>
                        <div className="w-full flex justify-between">
                            <div className="text-thirdy text-[3vw] md:text-[1vw] w-4/5">{content}</div>
                            <button type="button" className="flex justify-center items-center p-2 cursor-pointer hover:bg-primary rounded-full"><Image src={more} alt="" className="min-w-[50px] object-cover"></Image></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}