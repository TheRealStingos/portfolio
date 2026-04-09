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
    <div className="flex m-auto gap-42 items-center">
        <div className="flex flex-col w-88 h-fit p-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-100 transition-all duration-200">
            <div className="flex flex-col">
            <h1 className="text-2xl text-slate-900 text-center mt-8">{title}</h1>
            <p className="text-slate-600 mt-4 text-center">{description}</p>
            <div className="flex gap-8 items-center justify-center mt-8">
                <a href={repo}><FaGithub size={32} color="#3b82f6" className="hover:invert hover:cursor-pointer transition-transform hover:scale-110 duration-75 " /></a>
                {demo && <a href={demo} className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-transform hover:scale-110 duration-75 hover:invert cursor-pointer">Try it out!</a>}
            </div>
            </div>
        </div>
        <div className="flex flex-col items-center bg-white border border-slate-200 shadow-sm rounded-xl p-3 m-6">
            <Image src={screenshot} alt={title} height={288} width={512} className="rounded-xl"/>
        </div>
    </div>
  )
}