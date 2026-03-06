import { IconType } from "react-icons"

interface Skills{
    logo: IconType
    title: string
    description: string | null
    variant?: "card" | "badge"
}

export default function Skills({ logo: Icon, title, description, variant }: Skills) {
    if (variant === "badge") {
        return (
            <div className="flex items-center justify-center gap-1 bg-amber-200 rounded-2xl p-3 m-2 h-12">
                <Icon size={32} />
                <h3>{title}</h3>
            </div>
        )
    }
    return (
        <div>
            <Icon size={32} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}