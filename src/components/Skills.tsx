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
            <div className="flex items-center justify-center gap-2 bg-blue-500 rounded-2xl m-2 p-2 h-12 w-32 transition-transform hover:scale-110 duration-75 hover:invert">
                <div className=" flex items-center justify-center">
                    <Icon size={iconSize} />
                </div>
                <h3 className="text-sm">{title}</h3>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center justify-top rounded-2xl space-x-4 mx-8 p-2 w-80 h-40">
            <Icon size={32}  color="#3b82f6"/>
            <h3 className="text-slate-900 mt-2">{title}</h3>
            <p className="text-slate-600 text-sm mt-4 text-center">{description}</p>
        </div>
    )
}