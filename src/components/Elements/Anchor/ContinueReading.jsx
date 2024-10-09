export default function ContinueReading(props) {
    const {href} = props
    return (
        <a href={href} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white hover:px-4 py-2 rounded transition duration-300 ease-in-out">
            Continue Reading    
        </a>
    )
}