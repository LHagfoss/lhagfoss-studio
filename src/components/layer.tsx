import React from "react"

import FadeIn from "./fadein"

export default function Layer() {

    return (
        <FadeIn delay={0}>
            <div className="relative left-[50%] translate-x-[-50%] w-[150vw] h-[80vh] bg-secondary flex justify-center items-center">
                <div className="w-[100vw] h-full py-10 px-44">
                    <div className="border border-black w-full h-full"></div>
                </div>
            </div>
        </FadeIn>
    )
}