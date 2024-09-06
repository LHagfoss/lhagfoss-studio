"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion"
import Lenis from "lenis";

export default function PageLoader() {


    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center fixed">
            <div className="counter">0</div>
        </div>
    )
}