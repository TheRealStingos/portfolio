import Skills from "./Skills";
import { FaDocker, FaReact, FaTerminal } from "react-icons/fa";

export default function About() {
    return(
        <div>
            <div>
                <h1>Some Info About Me</h1>
                <p>Yo! I'm a video editor turned software developer. I love making something that offers real solutions for real people. 
                    <br/>
                    It was clear from a young age that I would work with tech. It fascinated me then and excites me now.</p>
            </div>
            <div>
                <Skills logo={FaTerminal} title="Software Development" description="Strong fullstack foundations with experience in JavaScript, TypeScript, and Python" />
                <Skills logo={FaReact} title="Front-End Development" description="" />
                <Skills logo={FaDocker} title="Deployment" description="I love docker" />
            </div>
        </div>
    )
}