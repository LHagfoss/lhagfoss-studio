"use client"

import React, { useEffect, useState } from "react";
import { gsap } from "gsap"
import Lenis from "lenis";

import ImageSection from "@/components/imageSection";
import NavnAnimation from "@/components/navn";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Footer from "@/components/footer";
import Project from "@/components/project";
import FadeIn from "@/components/fadein";

import projectImage1 from "@/assets/googleblablalba.jpg"
import projectImage2 from "@/assets/image.png"

export default function Home() {
  const [, setIsScrolled] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [workInProgress, setWorkInProgress] = useState(true)

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time * 1000);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setZoomIn(true);
    }, 700);

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        };
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWorkInProgressClick = () => {
    setWorkInProgress(false)
  };

  return (
    <>
      <Navbar />
      <NavnAnimation />
      <div className={`w-full h-[100vh] overflow-hidden bg-secondary duration-1000 ${ zoomIn ? "p-0" : "p-[50vw]" }`}>
        <div className={`w-full h-full bg-fourth duration-1500 ${ zoomIn ? "rounded-none" : "rounded-full" }`}></div>
      </div>
      <FadeIn delay={0}>
        <About />
      </FadeIn>
      <FadeIn delay={0}>
        <ImageSection />
      </FadeIn>
      <FadeIn delay={0}>
        <div className="flex p-5 md:p-10 text-[7vw] md:text-[5vw]">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-3 md:gap-5">
              <div className="text-thirdy">Latest</div>
              <div className="text-primary">projects</div>
            </div>
            <button type="button" className="text-thirdy text-[4vw] md:text-[1vw] border-2 border-primary rounded-full px-5 md:px-10 p-2 md:p-6 hover:bg-[#0000004d] transition-background duration-200">See all</button>
          </div>
        </div>
      </FadeIn>
      <div className="w-full p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-5 md:gap-10">
        <FadeIn delay={0.1}><Project imageSrc={projectImage2} title="Website / Project #1" content="This is my Github account, filled with all my codes from when I started til today!" month="April" year="2024"/></FadeIn>
        <FadeIn delay={0.2}><Project imageSrc={projectImage1} title="Website / Project #2" content="more random words" month="April" year="2024"/></FadeIn>
        <FadeIn delay={0.3}><Project imageSrc={projectImage2} title="Website / Project #3" content="even more text" month="April" year="2024"/></FadeIn>
      </div>
      <FadeIn className="w-full h-full overflow-hidden">
        <Footer />
      </FadeIn>
    </>
  );
}
