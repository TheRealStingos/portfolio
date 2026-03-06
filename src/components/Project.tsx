import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"

interface Project {
    screenshot: StaticImport
    title: string
    description: string
    repo: string
    demo?: string
}

export default function Project({ screenshot, title, description, repo, demo }: Project) {
  return (
    <div className="flex flex-col items-center m-4">
        <div className="flex flex-col items-center">
        <h1 className="text-2xl">{title}</h1>
        <Image src={screenshot} alt={title} />
        <div className="flex flex-col items-center">
            <p>{description}</p>
            <div className="flex gap-8 items-center">
                <a href={repo}><FaGithub size={32} className="hover:invert hover:cursor-pointer transition-transform hover:scale-110 duration-75" /></a>
                {demo && <a href={demo} className="bg-amber-950 rounded-md p-1 hover:invert hover:cursor-pointer transition-transform hover:scale-105 duration-75">Try it out!</a>}
            </div>
        </div>
        </div>
    </div>
  )
}