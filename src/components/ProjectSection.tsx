import Project from "./Project"
import placeholder from "../assets/image-placeholder-icon-15-1769662654.png"


export default function ProjectsSection() {
    return(
        <section id="projectsSection" className="grid grid-cols-2">
            <Project screenshot={placeholder} title="Media Server" description="Home Media Server with containerized structure, " repo="" />
            <Project screenshot={placeholder} title="Memory Game" description="Card matching memory game built with React" repo="Code: " demo="https://memory.justinmoore.dev/" />
            <Project screenshot={placeholder} title="JMOFlix" description="" repo="" />
            <Project screenshot={placeholder} title="WGUPS" description="" repo="" />
        </section>
    )
}