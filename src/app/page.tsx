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
      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 md:gap-20">
          <Project imageSrc={projectImage1} title="Work Numer One" content="Google Tech Support" logo={logoImage1} />
          <Project imageSrc={projectImage1} title="Work Numer One" content="Google Tech Support" logo={logoImage1} />
          <Project imageSrc={projectImage1} title="Work Numer One" content="Google Tech Support" logo={logoImage1} />
          <Project imageSrc={projectImage1} title="Work Numer One" content="Google Tech Support" logo={logoImage1} />
          <Project imageSrc={projectImage1} title="Work Numer One" content="Google Tech Support" logo={logoImage1} />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
      