type MessageProps = {
    label: string
}

export default function GreetingCard ({label}: MessageProps) {
    return (
    <div className="items-center justify-center bg-blue-600 text-white rounded-sm p-6 font-bold w-64 text-center">
        <h3>{label}</h3>
    </div>

    )
}