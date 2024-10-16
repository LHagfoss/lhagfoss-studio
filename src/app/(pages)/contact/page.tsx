"use client"

import React, { useEffect, useState } from "react"
import emailjs from 'emailjs-com';
import Lenis from "lenis"
import { motion, easeInOut } from "framer-motion"
import Image from "next/image"

import Navbar from "@/components/secondnavbar"
import SecondName from "@/components/secondnavn";
import Footer from "@/components/footer"

import instagramIcon from "@/assets/instagram.png"
import youtubeIcon from "@/assets/youtube.png"
import twitterIcon from "@/assets/twitter.png"

export default function Home() {
  const [messageVisible, setMessageVisible] = useState(false);
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
      setMessageVisible(true);
      setTimeout(() => setMessageVisible(false), 2000);
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
    const timeString = now.toLocaleTimeString('en-GB', options)
    return `${timeString} UTC + 1 kristiansand, norway`
  }

  const updateTime = () => {
      setTime(getFormattedTime())
  };

  const text1Part1 = "Let`s create something"
  const text1Part2 = "remarkable together."
  const text2Part1 = "Send me a message so we can start working together. Tell me your vision and goals and I will create extraordinary website for you!"
  const text2Part2 = "I`m looking forward to cooperation."
  const text3 = "- Lucas Hagfoss"

  return (
    <>  
      <Navbar />
      <SecondName />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1, ease: easeInOut }} className="mt-[100px] w-[100vw] h-[150vh] md:h-[100vh] flex justify-center items-center">
        <div className="w-full h-[full] flex flex-col md:flex-row">
          <div className="md:flex-1 flex flex-col leading-[0px] p-4 py-10 md:p-20 md:py-20">
            <div className="flex flex-col">
              <div className="flex overflow-hidden py-3">
                {text1Part1.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 + index * 0.1, ease: easeInOut }} className="p-2 text-secondary text-[8vw] md:text-[3vw]">{word}</motion.div>
                ))}
              </div>
              <div className="flex overflow-hidden py-5">
                {text1Part2.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2.5 + index * 0.1, ease: easeInOut }} className="p-2 text-secondary text-[8vw] md:text-[3vw]">{word}</motion.div>
                ))}
              </div>
              <div className="flex flex-wrap flex-row md:w-[35vw] leading-7">
                {text2Part1.split(" ").map((word, index) => (
                  <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3 + index * 0.01, ease: easeInOut }} className="px-1 text-thirdy text-[5vw] md:text-[1vw]">{word}</motion.div>
                ))}
              </div>
              <div className="flex flex-col mt-10">
                <div className="flex flex-wrap flex-row leading-7">
                  {text2Part2.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 3.5 + index * 0.01, ease: easeInOut }} className="px-1 text-thirdy text-[5vw] md:text-[1vw]">{word}</motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap flex-row leading-7">
                  {text3.split(" ").map((word, index) => (
                    <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 4 + index * 0.01, ease: easeInOut }} className="px-1 text-secondary text-[5vw] md:text-[1vw]">{word}</motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden p-4 md:p-20 md:py-20 text-secondary">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full mb-10 resize-none ">
              <div className="w-full ">
                <div className="md:text-[1.3vw]">Name</div>
                <input type="text" name="name" placeholder="Your Name..." value={formData.name} onChange={handleChange} className="flex bg-fourth w-full outline-none pb-10 border-b text-thirdy focus:text-secondary border-thirdy focus:border-secondary placeholder:text-thirdy  focus:placeholder:text-secondary" required />
              </div>
              <div className="w-full">
                <div className="md:text-[1.3vw]">Email</div>
                <input type="email" name="email" placeholder="Your Email..." value={formData.email} onChange={handleChange} className="bg-fourth w-full outline-none pb-10 border-b text-thirdy focus:text-secondary border-thirdy focus:border-secondary placeholder:text-thirdy focus:placeholder:text-secondary" required />
              </div>
              <div className="w-full">
                <div className="md:text-[1.3vw]">Message</div>
                <textarea name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} className="bg-fourth w-full min-h-[20vh] outline-none border-b text-thirdy focus:text-secondary border-thirdy focus:border-secondary placeholder:text-thirdy focus:placeholder:text-secondary" required />
              </div>
              <button type="submit" className="bg-primary text-white p-3 px-5 w-full md:w-1/4 rounded-full">Send Message</button>
              {messageVisible && (
                <div className="absolute text-secondary bg-thirdy p-3 px-4 rounded bottom-10 right-10">Message has been sent successfully!</div>
              )}
            </form>

            <div className="w-full flex flex-col md:flex-col gap-10">
              <div className="text-[3vw] sm:text-[3vw] md:text-[1vw]">
                  <div className="text-thirdy">Local time</div>
                  <div className="" onClick={updateTime}>{time}</div>
              </div>

              <div className="text-[3vw] sm:text-[3vw] md:text-[1vw]">
                  <div className="text-thirdy ">Socials</div>
                  <div className="flex flex-row md:flex-col gap-5">
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