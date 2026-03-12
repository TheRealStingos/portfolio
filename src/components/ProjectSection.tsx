import Project from "./Project"
import memory from "../assets/memoryScreen.png"
import placeholder from "../assets/image-placeholder-icon-15-1769662654.png"


export default function ProjectsSection() {
    return(
        <section id="projectsSection" className="flex flex-col">
            <Project screenshot={placeholder} title="Media Server" description="Home Media Server with containerized structure and automated media management " repo="" />
            <Project screenshot={memory} title="Deadlock Memory Game" description="Card matching memory game built with React with a Deadlock theme" repo="Code: " demo="https://memory.justinmoore.dev/" />
            <Project screenshot={placeholder} title="JMOFlix" description="ML movie recommendation system using TF vectorization" repo="" />
            <Project screenshot={placeholder} title="WGUPS" description="Mileage calculator with custom built algorithmic solution" repo="" />
        </section>
    )
}