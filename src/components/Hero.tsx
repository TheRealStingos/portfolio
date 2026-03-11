import About from "./About"
import Projects from "./ProjectSection"
import Contact from "./Contact"
import Image from "next/image"
import portrait from "../assets/portrait.png"

export default function Hero() {
    return(
        <section className="h-screen flex items-center px-90">
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
        </section>
    )
}