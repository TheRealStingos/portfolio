import About from "./About"
import Projects from "./ProjectSection"
import Contact from "./Contact"
import Image from "next/image"
import portrait from "../assets/portrait.png"

export default function Hero() {
    return(
        <section className="flex flex-row-reverse min-h-screen items-center px-100">
            <div className="w-50 h-50 rounded-full overflow-hidden ring-4 ring-blue-400 shadow-xl shadow-blue-200">
                <Image
                src={portrait}
                alt="A photo of Justin" 
                width={300}
                height={300}
                className="w-full h-full object-cover"
                style={{ 
                    objectPosition: "60% 50%", 
                    transform: "scale(5.3)",
                    transformOrigin: "71% 12%"
                }}
                />
            </div>
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