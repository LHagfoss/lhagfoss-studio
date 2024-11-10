import React from "react";
import Image from "next/image";

import more from "@/assets/more.svg"

import { StaticImageData } from "next/image";

interface ProjectProps {
  imageSrc: StaticImageData; 
  title: string;
  content: string;
}

export default function Project({ imageSrc, title, content }: ProjectProps) {

    return (
        <>
            <div className="relative flex flex-col justify-center items-center h-full">
                <Image src={imageSrc} alt="" className="w-full object-cover rounded-[3vw] bg-thirdy cursor-pointer" />
                <div className="w-full flex justify-between items-center relative py-10"> 
                    <div className="flex w-full">
                        <div className="w-full flex flex-col">
                            <div className="text-secondary text-[6vw] md:text-[2vw]">{title}</div>
                            <div className="text-thirdy text-[3vw] md:text-[1vw] w-4/5">{content}</div>
                        </div>
                        <button type="button" className="flex justify-center items-center p-5 cursor-pointer duration-500 hover:bg-primary hover:scale-125 rounded-full mr-5"><Image src={more} alt="" className="min-w-[50px] object-cover"></Image></button>
                    </div>
                </div>
            </div>
        </>
    );
}