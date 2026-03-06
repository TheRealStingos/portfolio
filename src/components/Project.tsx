import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

interface Project {
    screenshot: StaticImport
    title: string
    description: string
    repo: string
    demo: string | null
}

export default function Project({screenshot, title, description, repo, demo}: Project) {
    return (
        <div>
            <div>
                <Image src={screenshot} alt={title} />
                {title}
            </div>
            <div>
                {description}
                {repo}
                {demo}
            </div>
        </div>
    )
}