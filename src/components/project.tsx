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
                transition={{ delay: 3, ease: easeInOut}}
                className="aspect-square relative overflow-hidden bg-primary rounded-[5vw] md:rounded-[2vw] flex flex-col justify-end cursor-pointer"
            >
                <Image src={imageSrc} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[1vw] bg-thirdy" />
                    <div className="flex justify-between relative z-10 bg-primary rounded-[5vw] md:rounded-[2vw] p-5">
                    <div className="flex flex-col">
                        <div className="text-secondary text-[4vw] md:text-[2vw]">{title}</div>
                        <div className="text-thirdy text-[3vw] md:text-[1vw]">{content}</div>
                    </div>
                    <div className="flex flex-col">
                        <Image src={logo} alt="" className="w-[15vw] h-[15vw] md:w-[5vw] md:h-[5vw] bg-primary rounded-[2vw] md:rounded-[1vw]" />
                    </div>
                </div>
            </motion.div>
        </>
    );
}