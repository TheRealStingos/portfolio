import Skills from "./Skills";
import Image from "next/image";
import portrait from "../assets/portrait.png"
import { FaDocker, FaReact, FaTerminal } from "react-icons/fa";

export default function About() {
    return(
        <div id="about">
            <section className="flex mb-20">
                <div className="hidden md:block w-80 h-80 rounded-full overflow-hidden ring-4 ring-blue-400 shadow-xl shadow-blue-200 mx-auto">
                    <Image
                    src={portrait}
                    alt="A photo of Justin" 
                    width={494}
                    height={636}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col mr-auto mt-14">
                    <h1 className="text-slate-900 font-medium text-3xl">Some Info About Me</h1>
                    <p className="text-slate-600 md:w-200">
                        I came to software development by way of video editing. It's a long story but the short version is that
                        both involve sitting in front of a computer.
                        <br />
                        <br />
                        From a young age I've had a strong fascination with technology.
                        This lead to natural curiosity about how software is developed. Add some years, schooling, and projects into to the mix and presto! Here I am.
                        <br />
                        <br />
                        When I'm not coding you can find me at the movies (probably an IMAX theater) or playing Street Fighter.
                    </p>
                </div>
            </section>
            <div className="flex justify-center items-center mb-20">
                <Skills logo={FaTerminal} title="Software Development" description="Strong Full Stack foundations with experience in JavaScript, TypeScript, and Python" />
                <div className="bg-blue-500 md:h-40 w-1"></div>
                <Skills logo={FaReact} title="Front-End Development" description="Crafting fast and responsive experiences suitable for any screen or device" />
                <div className="bg-blue-500 md:h-40 w-1"></div>
                <Skills logo={FaDocker} title="Deployment" description="The only thing I love more than making apps is sharing them! AWS, Docker, Cloudflare...
                I use whatever tools are needed to reach the user" />
            </div>
        </div>
    )
}