"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Lenis from "lenis";

import NavnAnimation from "@components/navn";
import Navbar from "@components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavnAnimation />

    </>
  );
}
