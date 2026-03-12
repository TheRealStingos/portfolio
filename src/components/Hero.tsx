"use client"

import { easeOut, motion } from "motion/react"
import { FaChevronDown } from "react-icons/fa"

export default function Hero() {
    return(
        <motion.section 
        initial={{ opacity:0, y:20}}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, ease: easeOut }}
        className="relative h-screen flex items-center px-90">
            <div className="mr-70">
                <p className="text-blue-500 mb-2">Hi, my name is</p>
                <h1 className="text-slate-900 text-6xl font-bold">Justin Moore</h1>
                <h2 className="text-slate-600 text-3xl font-medium mt-2">Full Stack Developer</h2>
                <p className="text-slate-600 max-w-xl mt-4">
                    I build things on the computer
                </p>
                <div className="flex gap-4 mt-8">
                    <a href="#projectsSection">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg transition-transform hover:scale-110 duration-75 hover:invert cursor-pointer">View my work</button>
                    </a>
                    <a href="#contact">
                        <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg transition-transform hover:scale-110 duration-75 hover:invert cursor-pointer">Contact me</button>
                    </a>
                </div>
            </div>
            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-blue-400 cursor-pointer">
                <FaChevronDown size={32} />
            </motion.a>
        </motion.section>
    )
}