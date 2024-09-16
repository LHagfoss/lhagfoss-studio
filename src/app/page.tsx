"use client"

import React, { useEffect } from "react";
import Lenis from "lenis";

import NavnAnimation from "@components/navn";
import Navbar from "@components/navbar";
import About from "@components/about";
import Footer from "@components/footer";
import Project from "@components/project";

import projectImage1 from "@assets/googleblablalba.jpg"
import logoImage1 from "@assets/nextjs.png"
import projectImage2 from "@assets/image.png"

export default function Home() {

  useEffect( () => {
    window.scrollTo(0, 0);

    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <div className="w-full h-[130vh] overflow-hidden">
        <Navbar />
        <NavnAnimation />
        <About />
      </div>
      <div className="flex font-bestFont p-5 md:p-10 text-[7vw] md:text-[5vw]">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-3 md:gap-5">
            <div className="text-primary">latest</div>
            <div className="text-thirdy">projects</div>
          </div>
          <button type="button" className="text-[4vw] md:text-[2vw] border-2 border-primary rounded-full px-7 p-4">see all</button>
        </div>
      </div>
      <div className="w-full md:h-[100vw] p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5 md:gap-10">
        <Project imageSrc={projectImage2} title="random title one" content="some random text" logo={logoImage1} />
        <Project imageSrc={projectImage1} title="another title here" content="more random words" logo={logoImage1} />
        <Project imageSrc={projectImage2} title="yet another title" content="even more text" logo={logoImage1} />
        <Project imageSrc={projectImage1} title="final random title" content="last random words" logo={logoImage1} />
      </div>
      <div className="w-full h-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
      