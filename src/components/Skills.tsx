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
            <div className="flex items-center gap-1">
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