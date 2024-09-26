"use client"

import React, { useEffect, useState } from "react"
import emailjs from 'emailjs-com';
import Lenis from "lenis"
import { motion, easeInOut } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Navbar from "@components/navbar"
import Footer from "@components/footer"

import instagramIcon from "@assets/instagram.png"
import youtubeIcon from "@assets/youtube.png"
import twitterIcon from "@assets/twitter.png"

export default function Home() {
  const [time, setTime] = useState(getFormattedTime());
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.send('lhagfoss', 'template_yumxvni', formData, 'nRtAnoNiy6mXF4AE-')
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  }

  function getFormattedTime() {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Europe/Oslo', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    };
    const timeString = now.toLocaleTimeString('en-GB', options);
    return `${timeString} UTC + 1 kristiansand, norway`;
  }

  const updateTime = () => {
      setTime(getFormattedTime());
  };

  const text1Part1 = "Let`s create something";
  const text1Part2 = "remarkable together.";
  const text2 = "Send me a message so we can start working together. Tell me your vision and goals and I will create extraordinary website for you I`m looking forward to cooperation."

  return (
    <>
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1, ease: easeInOut }} className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="md:flex-1 flex flex-col leading-3 md:leading-10 border border-black p-4 py-10 md:p-20 md:py-52">
            <div className="flex flex-col">
              <div className="flex overflow-hidden pb-5">
                {text1Part1.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.1, ease: easeInOut }} className="p-2 font-clashDisM text-primary text-[7vw] md:text-[3vw]">{word}</motion.div>
                ))}
              </div>
              <div className="flex overflow-hidden pb-5">
                {text1Part2.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.5 + index * 0.1, ease: easeInOut }} className="p-2 font-clashDisM text-thirdy text-[7vw] md:text-[3vw]">{word}</motion.div>
                ))}
              </div>
              <div className="flex flex-wrap flex-row w-[35vw] leading-7">
                {text2.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3 + index * 0.01, ease: easeInOut }} className="px-1 text-thirdy font-bricoGrotSB text-[5vw] md:text-[1vw]">{word}</motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden border border-black p-4 md:p-20 md:py-52">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full mb-10 resize-none">
              <div className="w-full border-b border-thirdy">
                <div className="">Your Name</div>
                <input type="text" name="name" placeholder="Your Name..." value={formData.name} onChange={handleChange} className="flex justify-start items-start w-full border h-[30vh] md:h-[10vh]" required />
              </div>
              <div className="w-full border-b border-thirdy">
                <div className="">Your Email</div>
                <input type="email" name="email" placeholder="Your Email..." value={formData.email} onChange={handleChange} className="w-full border h-[30vh] md:h-[10vh]" required />
              </div>
              <div className="w-full border-b border-thirdy">
                <div className="">Your Password</div>
                <textarea name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} className="w-full border h-[30vh] md:h-[10vh]" required />
              </div>
              <button type="submit" className="bg-primary text-white p-2 py-5 w-1/5 rounded-full">Send Message</button>
            </form>

            <div className="w-full border-t border-thirdy flex pt-10 flex-col md:flex-col gap-32">
              <div className="text-[3vw] sm:text-[3vw] md:text-[1vw] lg:test-[1vw]">
                  <div className="text-thirdy">Version</div>
                  <div className=""><Link href="/">v0.61 - LHagfoss - 2024</Link></div>
              </div>
              <div className="text-[3vw] sm:text-[3vw] md:text-[1vw] lg:test-[1vw]">
                  <div className="text-thirdy">Local time</div>
                  <div className="" onClick={updateTime}>{time}</div>
              </div>

              <div className="text-[3vw] sm:text-[3vw] md:text-[1vw] lg:test-[1vw]">
                  <div className="text-thirdy ">Socials</div>
                  <div className="flex flex-col gap-5">
                      <a href="https://instagram.com" target="_blank"  className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"><Image src={instagramIcon} alt="" className="object-fit h-full"></Image></div>Instagram</a>
                      <a href="https://youtube.com" target="_blank" className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"><Image src={youtubeIcon} alt="" className="object-fit h-full"></Image></div>Youtube</a>
                      <a href="https://x.com" target="_blank"  className="flex items-center gap-2"><div className="w-[30px] h-[30px] bg-thirdy rounded-[5px]"><Image src={twitterIcon} alt="" className="object-fit h-full"></Image></div>Twitter</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 1, ease: easeInOut }}> <Footer /> </motion.div>
    </>
  )
}