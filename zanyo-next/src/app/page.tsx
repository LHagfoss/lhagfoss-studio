"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Lenis from "lenis";

import NavnAnimation from "@/components/navn";

export default function Home() {
  return (
    <div className="">
      <NavnAnimation />

    </div>
  );
}
