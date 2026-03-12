import Project from "./Project"
import memory from "../assets/memoryScreen.png"
import wgups from "../assets/wgupsScreen.png"
import movie from "../assets/movieScreen.png"
import media from "../assets/mediaScreen.png"

export default function ProjectsSection() {
    return(
        <section id="projectsSection" className="flex flex-col m-24">
            <Project screenshot={media} title="Media Server" description="Home Media Server with containerized structure and automated media management. It's even hosting this portfolio!" repo="https://github.com/TheRealStingos/media-server" />
            <Project screenshot={memory} title="Deadlock Memory Game" description="Card matching memory game built with React with a Deadlock theme" repo="Code: " demo="https://memory.justinmoore.dev/" />
            <Project screenshot={movie} title="JMOFlix" description="ML movie recommendation system using TF vectorization" repo="https://github.com/TheRealStingos/WGU-Capstone" />
            <Project screenshot={wgups} title="WGUPS" description="Mileage calculator with custom built algorithmic solution" repo="https://github.com/TheRealStingos/WGUPS" />
        </section>
    )
}