"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import FadeIn from "./fadein";

import projectImage1 from "@/assets/googleblablalba.jpg"
import projectImage2 from "@/assets/image97-transformed.jpeg"

interface ImageData {
    src: StaticImageData;
}

const images: ImageData[] = [
    { src: projectImage1 },
    { src: projectImage2 },
    { src: projectImage1 },
    { src: projectImage2 },
    { src: projectImage1 },
    { src: projectImage2 },
];

function useInterval(callback: () => void, delay: number | null) {
    useEffect(() => {
      if (delay !== null) {
        const id = setInterval(callback, delay);
        return () => clearInterval(id);
      }
    }, [callback, delay]);
  }

export default function ImageSlider(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
  
    const nextSlide = (index: number): void => {
      setCurrentIndex(index);
    };
  
    useInterval(() => {
        if (!isHovered) {
          nextSlide((currentIndex + 1) % images.length);
        }
      }, 3000);
  
    const handleMouseOver = (): void => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = (): void => {
      setIsHovered(false);
    };
  
    return (
        <FadeIn delay={0}>
            <div className="relative w-[100vw] py-12 md:px-44 mb-24 inset-0" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <div className="w-full h-full flex flex-col justify-between items-center">
                    <Image
                        src={images[currentIndex].src}
                        alt={`Slider Image ${currentIndex + 1}`}
                        className="rounded-3xl aspect-video w-full transition-all duration-500 ease-in-out cursor-pointer"
                    />
                    <div className="absolute -bottom-2 w-full px-5 md:px-44 flex justify-center items-end mt-4">
                    {images.map((_, index) => (
                        <div
                        key={index}
                        className={`h-5 hover:h-10 duration-500 w-full mx-1 cursor-pointer ${
                            index === currentIndex
                            ? "bg-secondary md:h-5 rounded-3xl"
                            : "bg-primary rounded-xl h-5"
                        } transition-all duration-500 ease-in-out`}
                        onClick={() => nextSlide(index)}
                        ></div>
                    ))}
                    </div>
                </div>
            </div>
      </FadeIn>
    );
}