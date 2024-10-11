"use client"

import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion"

import { StaticImageData } from "next/image";

interface ProjectProps {
  imageSrc: StaticImageData; 
  title: string;
  content: string;
  logo: StaticImageData; 
}

export default function Project({ imageSrc, title, content, logo }: ProjectProps) {

    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, ease: easeInOut}}
                className="relative overflow-hidden rounded-[2vw] flex flex-col justify-between cursor-pointer"
            >
                <Image src={imageSrc} alt="" className="w-full aspect-square object-cover rounded-[3vw] bg-thirdy" />
                <div className="flex justify-between items-center relative z-10  rounded-lg p-3"> 
                    <div className="flex flex-col md:m-5">
                        <div className="text-secondary text-[4vw] md:text-[2vw]">{title}</div>
                        <div className="text-thirdy text-[3vw] md:text-[1vw]">{content}</div>
                    </div>
                    <div className="flex flex-col md:m-5">
                        <Image src={logo} alt="" className="w-[15vw] h-[15vw] md:w-[5vw] md:h-[5vw] rounded-lg" />
                    </div>
                </div>
            </motion.div>
        </>
    );
}