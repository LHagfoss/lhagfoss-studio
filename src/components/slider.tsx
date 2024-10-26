"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    { src: projectImage2 },
    { src: projectImage1 },
    { src: projectImage1 },
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
  
    const prevSlide = (): void => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    const nextSlide = (): void => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useInterval(() => {
        if (!isHovered) {
          nextSlide();
        }
      }, 3000);
  
    const handleMouseOver = (): void => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = (): void => {
      setIsHovered(false);
    };
  
    return (
      <div className="relative w-full p-5 md:px-44">
        <div className="w-full relative inset-0">
            <div
            className="relative h-[460px] mx-10 md:mx-32 group"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            >
            <Image
                src={images[currentIndex].src}
                alt={`Slider Image ${currentIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
            />
            </div>
            <button
            className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-secondary mx-1 -mt-[10px] duration-300 -translate-y-1/2 bg-primary text-white p-1 md:p-10 group"
            onClick={prevSlide}
            >
            <ChevronLeft className="text-secondary group-hover:text-fourth" />
            </button>
            <button
            className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-secondary mx-1 -mt-[10px] duration-300 -translate-y-1/2 bg-primary text-white p-1 md:p-10 group"
            onClick={nextSlide}
            >
            <ChevronRight className="text-secondary group-hover:text-fourth" />
            </button>
            <div className="flex justify-center mt-4">
            {images.map((_, index) => (
                <div
                key={index}
                className={`h-1 w-10 mx-1 ${
                    index === currentIndex
                    ? "bg-secondary rounded-xl"
                    : "bg-primary rounded-xl"
                } transition-all duration-500 ease-in-out`}
                ></div>
            ))}
            </div>
        </div>
      </div>
    );
}