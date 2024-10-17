import React from "react";
import FadeIn from "./fadein";

export default function About() {
    
    const text2 = "I specialize in React.js \& Next.js and other JavaScript frameworks. I use TypeScript and other useful tools and libraries to develop these websites. I have a strong understanding of various software and programs to develop a good website for UI \& UX.";
    const text3 = "Balls Balls";

    return (
        <FadeIn>
            <div className="relative bottom-0 w-full md:w-[100vw] flex flex-col gap-3 items-start p-10 md:text-[1.5vw] leading-3 md:leading-6 text-[5vw]">
                <div className="w-full text-thirdy flex flex-row gap-1 overflow-hidden text-[3vw] leading-12">
                    <div className="flex flex-wrap gap-1">I&apos;m </div><div className="text-secondary">Lucas Hagfoss</div><div className="flex flex-wrap gap-1">, a user interface & user experience designer from Norway, focusing on building functional websites that will increase conversion and help reach customers.</div>
                </div>
                <div className="bg-primary w-full h-[5px] rounded-full drop-shadow-2xl"></div>
                <div className="flex w-full text-[2vw] leading-8">
                    <div className="w-1/2 text-thirdy flex flex-wrap overflow-hidden">
                        <div className="p-1">{text2}</div>
                    </div>
                    <div className="w-1/2 text-thirdy flex flex-wrap overflow-hidden">
                        <div className="p-1">{text3}</div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}