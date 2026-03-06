import { IconType } from "react-icons"

interface Skills{
    logo: IconType
    title: string
    description: string
}

export default function Skills({ logo: Icon, title, description }: Skills) {
    return (
        <div>
            <Icon size={32} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}