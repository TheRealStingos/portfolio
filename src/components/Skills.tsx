import { IconType } from "react-icons"

interface Skills{
    logo: IconType
    title: string
    description: string | null
    variant?: "card" | "badge"
    iconSize?: number
}

export default function Skills({ logo: Icon, title, description, variant = "card", iconSize = 32}: Skills) {
    if (variant === "badge") {
        return (
            <div className="flex items-center justify-center gap-2 bg-black rounded-2xl m-2 p-2 h-12 w-32 transition-transform hover:scale-110 cursor-pointer duration-75 hover:invert">
                <div className=" flex items-center justify-center">
                    <Icon size={iconSize} />
                </div>
                <h3 className="text-sm">{title}</h3>
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