import Skills from "./Skills";
import { FaDocker, FaReact, FaTerminal } from "react-icons/fa";

export default function About() {
    return(
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-slate-900 font-extrabold text-center">Some Info About Me</h1>
                <p className="text-slate-800 text-center md:w-200 m-6">
                    I came to software development by way of video editing. It's a long story but the short version is that
                    both invlove sitting in front of a computer. From a young age I've had quite the fascination with technology.
                    This lead to natural curiouscity about how software is developed. Add some years and schooling into to the mix and presto! Here I am.
                    I love designing systems and applications that help real users, with real issues.
                    When I'm not coding you can find me at the movies (probably an IMAX theater) or playing Street Fighter.
                </p>
            </div>
            <div>
                <Skills logo={FaTerminal} title="Software Development" description="Strong fullstack foundations with experience in JavaScript, TypeScript, and Python" />
                <Skills logo={FaReact} title="Front-End Development" description="" />
                <Skills logo={FaDocker} title="Deployment" description="I love docker" />
            </div>
        </div>
    )
}